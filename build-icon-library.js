const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const TOKEN = 'figd_bGMnqv5NC5o2PW3GFvvl8n69Jk9qWOy2HEQnLSF4';
const FILE_KEY = 'C5EhqfEKGkNroUm1lRwDTT';

function makeRequest(urlString) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlString);
    const module = url.protocol === 'https:' ? https : http;
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: 'GET',
      headers: url.hostname === 'api.figma.com' ? { 'X-FIGMA-TOKEN': TOKEN } : {}
    };
    module.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(data.startsWith('{') ? JSON.parse(data) : data);
        } catch (e) {
          resolve(data);
        }
      });
    }).on('error', reject).end();
  });
}

function toPascalCase(str) {
  return str
    .split(/[-_\s]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

function extractSVGPaths(svgString) {
  try {
    // Extract path elements
    const pathRegex = /<path[^>]*d="([^"]*)"/g;
    const circleRegex = /<circle[^>]*/g;
    const rectRegex = /<rect[^>]*/g;
    const polylineRegex = /<polyline[^>]*/g;
    
    let match;
    const paths = [];
    while ((match = pathRegex.exec(svgString)) !== null) {
      paths.push(`<path d="${match[1]}"/>`);
    }
    
    if (paths.length === 0) {
      // If no path, try to simplify and return as-is
      const simplifiedSvg = svgString
        .replace(/<svg[^>]*>/g, '')
        .replace(/<\/svg>/g, '')
        .replace(/xmlns[^"]*"[^"]*"/g, '')
        .trim();
      return [simplifiedSvg];
    }
    
    return paths;
  } catch (e) {
    console.error('Error extracting SVG:', e.message);
    return [];
  }
}

async function buildIconLibrary() {
  try {
    console.log('🔄 Step 1: Fetching Figma file structure...');
    const file = await makeRequest(`https://api.figma.com/v1/files/${FILE_KEY}`);
    
    const variantsPage = file.document.children.find(p => p.name === 'Variants');
    const allIconsFrame = variantsPage.children.find(f => f.name === 'All Icons');
    
    console.log(`✅ Found ${allIconsFrame.children.length} categories with ${allIconsFrame.children.reduce((a,c)=>a+(c.children?.length||0),0)} icons`);

    console.log('\n🔄 Step 2: Collecting component IDs from all categories...');
    const allComponents = {};
    const categories = {};
    
    allIconsFrame.children.forEach(category => {
      const catName = category.name;
      categories[catName] = [];
      
      category.children?.forEach(component => {
        if (component.type === 'COMPONENT_SET') {
          allComponents[component.id] = {
            category: catName,
            name: component.name,
            id: component.id
          };
          categories[catName].push(component.id);
        }
      });
    });

    const componentIds = Object.keys(allComponents);
    console.log(`✅ Found ${componentIds.length} total component sets`);

    console.log('\n🔄 Step 3: Exporting SVG URLs from Figma (processing in batches)...');
    const allExports = {};
    const batchSize = 50;
    
    for (let i = 0; i < componentIds.length; i += batchSize) {
      const batch = componentIds.slice(i, i + batchSize);
      console.log(`  Batch ${Math.floor(i/batchSize)+1}/${Math.ceil(componentIds.length/batchSize)}: ${batch.length} icons`);
      
      try {
        const exports = await makeRequest(
          `https://api.figma.com/v1/images/${FILE_KEY}?ids=${batch.join(',')}&format=svg`
        );
        
        Object.assign(allExports, exports.images || {});
      } catch (e) {
        console.warn(`  ⚠️ Batch failed: ${e.message}`);
      }
    }

    console.log(`✅ Got ${Object.keys(allExports).length} SVG export URLs`);

    console.log('\n🔄 Step 4: Downloading and converting SVGs to React components...');
    const icons = {};
    const failedIcons = [];
    let processed = 0;

    for (const [nodeId, svgUrl] of Object.entries(allExports)) { // Process ALL icons
      const componentInfo = allComponents[nodeId];
      if (!componentInfo) continue;

      try {
        processed++;
        if (processed % 50 === 0) console.log(`  Processed ${processed}/${Object.keys(allExports).length}`);
        
        const svgContent = await makeRequest(svgUrl);
        const paths = extractSVGPaths(svgContent);
        
        if (paths.length > 0) {
          const componentName = toPascalCase(componentInfo.name);
          icons[componentName] = {
            paths: paths.join(''),
            category: componentInfo.category,
            originalName: componentInfo.name
          };
        } else {
          failedIcons.push(componentInfo.name);
        }
      } catch (e) {
        failedIcons.push(componentInfo.name);
      }
    }

    console.log(`✅ Converted ${Object.keys(icons).length} icons successfully`);
    if (failedIcons.length > 0) {
      console.log(`⚠️ ${failedIcons.length} icons failed conversion`);
    }

    // Save icon data
    const iconData = {
      total: componentIds.length,
      converted: Object.keys(icons).length,
      categories: Object.keys(categories).reduce((acc, cat) => ({
        ...acc,
        [cat]: categories[cat].length
      }), {}),
      icons: icons
    };

    fs.writeFileSync('icon-library-data.json', JSON.stringify(iconData, null, 2));
    console.log(`\n✅ Saved icon data to icon-library-data.json`);
    console.log(`\n📊 Summary:`);
    console.log(`   Total components in Figma: ${componentIds.length}`);
    console.log(`   Successfully converted: ${Object.keys(icons).length}`);
    console.log(`   Categories: ${Object.keys(categories).length}`);

  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

buildIconLibrary();
