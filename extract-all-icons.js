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

async function extract() {
  try {
    console.log('Fetching Figma file...');
    const file = await makeRequest(`/v1/files/${FILE_KEY}`);
    
    // Navigate to Variants page
    const variantsPage = file.document.children.find(p => p.name === 'Variants');
    if (!variantsPage) {
      console.error('Variants page not found');
      return;
    }

    // Find All Icons frame
    const allIconsFrame = variantsPage.children.find(f => f.name === 'All Icons');
    if (!allIconsFrame) {
      console.error('All Icons frame not found');
      return;
    }

    console.log(`Found All Icons with ${allIconsFrame.children.length} categories`);

    // Extract all icon instances across categories
    const allIcons = [];
    const categories = {};

    function extractFromNode(node, categoryName = 'General') {
      if (node.type === 'INSTANCE' && node.mainComponent) {
        const componentName = node.name.replace(/\s+/g, '-').toLowerCase();
        if (!categories[categoryName]) categories[categoryName] = [];
        categories[categoryName].push({
          name: node.name,
          id: node.id,
          componentName: node.mainComponent
        });
        allIcons.push({
          name: node.name,
          id: node.id,
          category: categoryName
        });
      }
      if (node.children) {
        node.children.forEach(child => extractFromNode(child, categoryName));
      }
    }

    // Process each category
    allIconsFrame.children.forEach(category => {
      if (category.type === 'FRAME' || category.type === 'GROUP') {
        const catName = category.name;
        extractFromNode(category, catName);
      }
    });

    console.log(`\nTotal icons found: ${allIcons.length}`);
    console.log('\nCategories breakdown:');
    Object.entries(categories).forEach(([cat, icons]) => {
      console.log(`  ${cat}: ${icons.length} icons`);
    });

    // Save to file
    fs.writeFileSync('icons-data.json', JSON.stringify({
      totalIcons: allIcons.length,
      categories: categories,
      allIcons: allIcons
    }, null, 2));

    console.log('\nSaved to icons-data.json');

    // Sample some icons
    console.log('\nSample icons from General:');
    (categories['General'] || []).slice(0, 5).forEach(icon => {
      console.log(`  - ${icon.name}`);
    });

  } catch (err) {
    console.error('Error:', err.message);
  }
}

extract();
