const fs = require('fs');

const iconData = JSON.parse(fs.readFileSync('icon-library-data.json', 'utf8'));

function parsePathsToJSX(pathString) {
  const pathRegex = /<path d="([^"]*)"\/?>/g;
  const paths = [];
  let match;
  
  while ((match = pathRegex.exec(pathString)) !== null) {
    paths.push(match[1]);
  }
  
  if (paths.length === 0 && pathString) {
    // If no paths found, return as is
    return `{React.createElement('g', null, React.createElement('path', {d: '${pathString.replace(/'/g, "\\'")}' }))}`;
  }
  
  return paths.length === 0 
    ? '/* empty */'
    : paths.map(p => `<path d="${p}" />`).join('\n    ');
}

const iconImports = `import React from 'react';

const Icon = ({ size = 16, color = 'currentColor', title, children, ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none"
    stroke={color} 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-hidden={!title} 
    role={title ? 'img' : undefined} 
    {...props}
  >
    {title && <title>{title}</title>}
    {children}
  </svg>
);

`;

let iconExports = '';
const iconsList = [];

Object.entries(iconData.icons).forEach(([componentName, iconInfo]) => {
  const jsxPaths = parsePathsToJSX(iconInfo.paths);
  iconExports += `export const ${componentName} = (p) => (<Icon {...p}>\n    ${jsxPaths}\n  </Icon>);\n`;
  iconsList.push(componentName);
});

const iconsObject = `
export const Icons = {
  ${iconsList.join(', ')}
};

export default Icons;
`;

const fullContent = iconImports + iconExports + iconsObject;
fs.writeFileSync('src/components/Icons/icons-new.jsx', fullContent);

console.log(`✅ Generated icons-new.jsx with ${iconsList.length} icons`);
console.log('Categories:', Object.keys(iconData.categories).length);
console.log(`Sample output (first 500 chars):`);
console.log(fullContent.substring(0, 500));
