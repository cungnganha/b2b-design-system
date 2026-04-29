const fs = require('fs');

const iconData = JSON.parse(fs.readFileSync('icon-library-data.json', 'utf8'));

// Group icons by category
const iconsByCategory = {};
Object.entries(iconData.icons).forEach(([name, info]) => {
  const cat = info.category;
  if (!iconsByCategory[cat]) iconsByCategory[cat] = [];
  iconsByCategory[cat].push(name);
});

// Count all icons
const allIcons = Object.values(iconsByCategory).flat();
const totalCategories = Object.keys(iconData.categories).length;
const totalIcons = allIcons.length;

// Generate stories file
const storiesContent = `import React from 'react';
import { Icons } from './icons';

export default {
  title: 'Foundations/Icons',
  parameters: { options: { showPanel: false } },
};

// All icons organized by category
const CATEGORIES = ${JSON.stringify(iconsByCategory, null, 2)};

const getAllIcons = () => Object.values(CATEGORIES).flat();
const ALL = getAllIcons();

// Render utility
const IconGrid = ({ icons, title = null }) => (
  <div style={{ padding: '16px' }}>
    {title && (
      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#1E293B' }}>
        {title} ({icons.length})
      </h3>
    )}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      {icons.map(name => {
        const Comp = Icons[name];
        return Comp ? (
          <div 
            key={name} 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              padding: '12px 16px',
              border: '1px solid #E2E8F0',
              borderRadius: 8,
              minWidth: 96,
              background: '#F8FAFC',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            title={name}
          >
            <Comp size={24} color="#334155" />
            <span style={{ fontSize: 10, color: '#64748B', textAlign: 'center', wordBreak: 'break-word' }}>
              {name}
            </span>
          </div>
        ) : null;
      })}
    </div>
  </div>
);

// Main view - All icons
export const AllIcons = {
  name: 'All Icons (${totalCategories} categories, ${totalIcons} total)',
  render: () => (
    <div style={{ fontFamily: 'Lexend,sans-serif', padding: 24 }}>
      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Icon Library — Iconstica v1.1.0</h2>
      <p style={{ fontSize: 13, color: '#64748B', marginBottom: 32 }}>
        ${totalIcons} Icons across ${totalCategories} categories · stroke=currentColor · viewBox 0 0 24 24
      </p>
      <IconGrid icons={ALL} />
    </div>
  ),
};

// Category-based stories
${Object.entries(iconsByCategory)
  .map(([category, icons]) => {
    const varName = category
      .replace(/[^a-zA-Z0-9]/g, '')
      .replace(/^(.)/, s => s.toUpperCase());
    
    return `export const ${varName} = {
  name: '${category}',
  render: () => <IconGrid icons={${JSON.stringify(icons)}} title="${category}" />,
};`;
  })
  .join('\n\n')}

// Semantic usage example
export const SemanticUsage = {
  name: 'Semantic Usage',
  render: () => (
    <div style={{ fontFamily: 'Lexend,sans-serif', padding: 24 }}>
      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 24 }}>Common Use Cases</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
        {[
          { name: 'General', icon: 'Activity', color: '#6366F1', bg: '#EEF2FF', desc: 'General Actions' },
          { name: 'Arrows', icon: 'ArrowRight', color: '#226FF6', bg: '#EBF3FF', desc: 'Navigation' },
          { name: 'Communication', icon: 'Send', color: '#22C55E', bg: '#F0FDF4', desc: 'Messaging' },
        ].filter(item => Icons[item.icon]).map(({ name, icon, color, bg, desc }) => (
          <div key={name} style={{ padding: 16, borderRadius: 8, background: bg, textAlign: 'center' }}>
            {Icons[icon] && <Icons[icon] size={32} color={color} style={{ marginBottom: 8 }} />}
            <p style={{ fontSize: 13, fontWeight: 600, color, margin: '8px 0 4px' }}>{name}</p>
            <p style={{ fontSize: 11, color: '#64748B', margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Search & filter example
export const SearchExample = {
  name: 'Browse by Category',
  render: () => (
    <div style={{ fontFamily: 'Lexend,sans-serif', padding: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
        {Object.entries(CATEGORIES).map(([category, icons]) => (
          <div key={category} style={{ padding: 16, border: '1px solid #E2E8F0', borderRadius: 8 }}>
            <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 12, color: '#1E293B' }}>
              {category} <span style={{ color: '#94A3B8' }}>({icons.length})</span>
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {icons.slice(0, 6).map(name => {
                const Comp = Icons[name];
                return Comp ? (
                  <div key={name} style={{ padding: 8, background: '#F8FAFC', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32 }}>
                    <Comp size={18} color="#334155" />
                  </div>
                ) : null;
              })}
              {icons.length > 6 && (
                <div style={{ padding: 8, background: '#F8FAFC', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, fontSize: 11, color: '#64748B', fontWeight: 600 }}>
                  +{icons.length - 6}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
`;

fs.writeFileSync('src/components/Icons/Icons.stories.jsx', storiesContent);

console.log(`✅ Generated Icons.stories.jsx with:`);
console.log(`   - ${totalCategories} category stories`);
console.log(`   - ${totalIcons} total icons`);
console.log(`   - Multiple story types (All, Categories, Semantic, Search)`);
