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

async function getDetails() {
  try {
    const file = await makeRequest(`/v1/files/${FILE_KEY}`);
    
    // Navigate to get All Icons frame ID
    const variantsPage = file.document.children.find(p => p.name === 'Variants');
    const allIconsFrame = variantsPage.children.find(f => f.name === 'All Icons');
    
    console.log('All Icons Frame ID:', allIconsFrame.id);
    console.log('Categories found:');
    allIconsFrame.children.forEach((cat, i) => {
      console.log(`  ${i}. ${cat.name} (${cat.type}, id: ${cat.id}, children: ${cat.children?.length || 0})`);
    });

    // Get detailed info for first category
    const firstCat = allIconsFrame.children[0];
    if (firstCat && firstCat.children) {
      console.log(`\nFirst category (${firstCat.name}) has ${firstCat.children.length} items:`);
      firstCat.children.slice(0, 5).forEach(item => {
        console.log(`  - ${item.name} (${item.type}, id: ${item.id})`);
      });
    }

    // Fetch detailed node info
    const categoryIds = allIconsFrame.children.slice(0, 3).map(c => c.id).join(',');
    console.log(`\nFetching detailed info for first 3 categories...`);
    const detailed = await makeRequest(`/v1/files/${FILE_KEY}/nodes?ids=${categoryIds}`);
    
    // Save full details
    fs.writeFileSync('figma-nodes-detailed.json', JSON.stringify(detailed, null, 2));
    console.log('Saved detailed node data to figma-nodes-detailed.json');

    // Extract icon names
    const icons = [];
    Object.entries(detailed.nodes).forEach(([nodeId, nodeData]) => {
      if (nodeData.document?.children) {
        nodeData.document.children.forEach(child => {
          if (child.type === 'COMPONENT' || child.type === 'INSTANCE') {
            icons.push({ name: child.name, id: child.id });
          }
          if (child.children) {
            child.children.forEach(grandChild => {
              if (grandChild.type === 'COMPONENT' || grandChild.type === 'INSTANCE') {
                icons.push({ name: grandChild.name, id: grandChild.id });
              }
            });
          }
        });
      }
    });

    console.log(`\nFound ${icons.length} icons in first 3 categories`);
    icons.slice(0, 10).forEach(icon => console.log(`  - ${icon.name}`));

  } catch (err) {
    console.error('Error:', err.message);
  }
}

getDetails();
