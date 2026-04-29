const fs = require('fs');

const iconData = JSON.parse(fs.readFileSync('icon-library-data.json', 'utf8'));

// Generate icons.jsx
const iconImports = `import React from 'react';

const Icon = ({ size = 16, color = 'currentColor', children, title, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden={!title} role={title ? 'img' : undefined} {...props}>
    {title && <title>{title}</title>}
    {children}
  </svg>
);

`;

// Generate individual icon components
let iconExports = '';
const iconsList = [];

Object.entries(iconData.icons).forEach(([componentName, iconInfo]) => {
  const svgPaths = iconInfo.paths;
  
  // Clean up SVG paths - just use the path content directly
  const cleanPaths = svgPaths
    .split('"/><path d="')
    .map((p, i) => {
      if (i === 0) return p;
      return `<path d="${p}"`;
    })
    .join('');

  // Create JSX version of the paths
  const jsxPaths = `<g dangerouslySetInnerHTML={{__html: \`${cleanPaths}\`}} />`;
  
  iconExports += `export const ${componentName} = (p) => (<Icon {...p}>${jsxPaths}</Icon>);\n`;
  iconsList.push(componentName);
});

// Generate icons object
const iconsObject = `
export const Icons = {
  ${iconsList.join(', ')}
};

export default Icons;
`;

const fullContent = iconImports + iconExports + iconsObject;
fs.writeFileSync('src/components/Icons/icons-new.jsx', fullContent);

console.log(`✅ Generated icons-new.jsx with ${iconsList.length} icons`);
console.log('Sample icons:', iconsList.slice(0, 10).join(', '));
