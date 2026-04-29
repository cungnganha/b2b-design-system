const https = require('https');

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

function exploreNode(node, depth = 0, limit = 3) {
  if (depth > limit) return;
  const indent = '  '.repeat(depth);
  console.log(`${indent}${node.name} (${node.type}, id: ${node.id})`);
  if (node.children) {
    node.children.slice(0, 5).forEach(child => exploreNode(child, depth + 1, limit));
    if (node.children.length > 5) {
      console.log(`${indent}  ... and ${node.children.length - 5} more`);
    }
  }
}

async function explore() {
  try {
    console.log('Fetching Figma file...');
    const file = await makeRequest(`/v1/files/${FILE_KEY}`);
    
    console.log('\nFile Structure:');
    file.document.children.forEach((page, i) => {
      console.log(`\n=== Page ${i}: ${page.name} ===`);
      exploreNode(page, 0, 2);
    });

    // Try to fetch all nodes data
    console.log('\n\nFetching detailed node data...');
    const allNodeIds = [];
    function collectIds(node) {
      allNodeIds.push(node.id);
      if (node.children) node.children.forEach(collectIds);
    }
    file.document.children.forEach(collectIds);
    
    const nodeDetailsPath = `/v1/files/${FILE_KEY}/nodes?ids=${allNodeIds.slice(0, 10).join(',')}`;
    const details = await makeRequest(nodeDetailsPath);
    console.log('Sample node details:', JSON.stringify(details.nodes, null, 2).substring(0, 500));

  } catch (err) {
    console.error('Error:', err.message);
  }
}

explore();
