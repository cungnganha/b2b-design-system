const https = require('https');
const fs = require('fs');

const TOKEN = 'figd_bGMnqv5NC5o2PW3GFvvl8n69Jk9qWOy2HEQnLSF4';
const FILE_KEY = 'C5EhqfEKGkNroUm1lRwDTT';

function makeRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: path,
      method: 'GET',
      headers: { 'X-FIGMA-TOKEN': TOKEN }
    };
    https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on('error', reject).end();
  });
}

async function generateSVGs() {
  try {
    const file = await makeRequest(`/v1/files/${FILE_KEY}`);
    const variantsPage = file.document.children.find(p => p.name === 'Variants');
    const allIconsFrame = variantsPage.children.find(f => f.name === 'All Icons');
    
    // Collect all component set IDs from first 5 categories (to test)
    const componentIds = [];
    const categoryNames = {};
    
    allIconsFrame.children.slice(0, 5).forEach(category => {
      const catName = category.name;
      category.children?.forEach(component => {
        if (component.type === 'COMPONENT_SET') {
          componentIds.push(component.id);
          categoryNames[component.id] = { category: catName, name: component.name };
        }
      });
    });

    console.log(`Found ${componentIds.length} component sets in first 5 categories`);
    
    // Export as SVG
    if (componentIds.length > 0) {
      const format = 'svg';
      const svgIds = componentIds.slice(0, 20).join(',');
      console.log(`Exporting ${componentIds.slice(0, 20).length} icons as SVG...`);
      
      const exports = await makeRequest(`/v1/images/${FILE_KEY}?ids=${svgIds}&format=${format}`);
      console.log('Export response:', JSON.stringify(exports, null, 2).substring(0, 1000));

      // Save results
      const results = {};
      Object.entries(exports.images).forEach(([nodeId, url]) => {
        const info = categoryNames[nodeId];
        results[nodeId] = {
          url: url,
          ...info
        };
      });

      fs.writeFileSync('svg-exports-sample.json', JSON.stringify(results, null, 2));
      console.log('\nSample SVG exports saved');

      // Try to fetch actual SVG content
      console.log('\nFetching first SVG content...');
      const firstUrl = Object.values(exports.images)[0];
      if (firstUrl) {
        try {
          const svgContent = await makeRequest(new URL(firstUrl).pathname + new URL(firstUrl).search);
          console.log('SVG content:', typeof svgContent);
        } catch (e) {
          console.log('Note: SVG URLs need separate HTTP fetch (they have limited TTL)');
        }
      }
    }

  } catch (err) {
    console.error('Error:', err.message);
  }
}

generateSVGs();
