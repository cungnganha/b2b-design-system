const https = require('https');

const TOKEN = 'figd_bGMnqv5NC5o2PW3GFvvl8n69Jk9qWOy2HEQnLSF4';
const FILE_KEY = 'C5EhqfEKGkNroUm1lRwDTT';
const NODE_ID = '244-2515';

function makeRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: path,
      method: 'GET',
      headers: {
        'X-FIGMA-TOKEN': TOKEN,
      }
    };

    https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject).end();
  });
}

async function fetchIcons() {
  try {
    console.log('Fetching Figma file...');
    const file = await makeRequest(`/v1/files/${FILE_KEY}`);
    
    // Find the node with the icons
    function findNode(node, targetId) {
      if (node.id === targetId) return node;
      if (node.children) {
        for (const child of node.children) {
          const found = findNode(child, targetId);
          if (found) return found;
        }
      }
      return null;
    }

    const iconsFrame = findNode(file.document, NODE_ID);
    if (!iconsFrame) {
      console.log('Icons frame not found. Available pages:');
      file.document.children.forEach((page, i) => {
        console.log(`Page ${i}: ${page.name}`);
      });
      return;
    }

    console.log(`Found icons frame: ${iconsFrame.name}`);
    console.log(`Total child nodes: ${iconsFrame.children?.length || 0}`);
    
    // Extract icon components
    const icons = [];
    if (iconsFrame.children) {
      iconsFrame.children.forEach((child) => {
        if (child.children && child.name) {
          icons.push({
            name: child.name,
            id: child.id,
            type: child.type,
            childCount: child.children.length
          });
        }
      });
    }

    console.log('\nExtracted icons:');
    console.log(JSON.stringify(icons, null, 2));

    // Also fetch with vector details
    const vectorPath = `/v1/files/${FILE_KEY}/nodes?ids=${NODE_ID}`;
    console.log('\nFetching vector details...');
    const vectors = await makeRequest(vectorPath);
    console.log('Vector data sample:', JSON.stringify(vectors, null, 2).substring(0, 1000));

  } catch (err) {
    console.error('Error:', err.message);
  }
}

fetchIcons();
