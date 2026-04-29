import React from 'react';

export default {
  title: 'Foundations/Typography',
  parameters: { options: { showPanel: false } },
};

const SCALE = [
  { group: 'Display', styles: [
    { name:'Display/2XL', size:72, lh:80, weight:'Bold',     sample:'The quick brown fox' },
    { name:'Display/XL',  size:60, lh:68, weight:'Bold',     sample:'The quick brown fox' },
    { name:'Display/LG',  size:48, lh:52, weight:'Bold',     sample:'The quick brown fox' },
    { name:'Display/MD',  size:36, lh:40, weight:'SemiBold', sample:'The quick brown fox jumps' },
    { name:'Display/SM',  size:30, lh:36, weight:'SemiBold', sample:'The quick brown fox jumps over' },
  ]},
  { group: 'Heading', styles: [
    { name:'Heading/H1', size:24, lh:32, weight:'SemiBold', sample:'Section heading — H1' },
    { name:'Heading/H2', size:20, lh:28, weight:'SemiBold', sample:'Section heading — H2' },
    { name:'Heading/H3', size:18, lh:28, weight:'SemiBold', sample:'Card heading — H3' },
    { name:'Heading/H4', size:16, lh:24, weight:'SemiBold', sample:'Widget heading — H4' },
    { name:'Heading/H5', size:14, lh:20, weight:'Medium',   sample:'Label heading — H5' },
    { name:'Heading/H6', size:12, lh:16, weight:'Medium',   sample:'Caption heading — H6' },
  ]},
  { group: 'Body', styles: [
    { name:'Body/XL', size:20, lh:28, weight:'Regular', sample:'Body text extra large for introductions' },
    { name:'Body/LG', size:18, lh:28, weight:'Regular', sample:'Body text large for comfortable reading' },
    { name:'Body/MD', size:16, lh:24, weight:'Regular', sample:'Body text medium — default paragraph size' },
    { name:'Body/SM', size:14, lh:20, weight:'Regular', sample:'Body text small — table rows, captions' },
    { name:'Body/XS', size:12, lh:16, weight:'Regular', sample:'Body extra small — helper text, tooltips' },
  ]},
  { group: 'Label', styles: [
    { name:'Label/LG', size:16, lh:24, weight:'Medium', sample:'Form label large' },
    { name:'Label/MD', size:14, lh:20, weight:'Medium', sample:'Form label medium — default' },
    { name:'Label/SM', size:12, lh:16, weight:'Medium', sample:'Form label small' },
    { name:'Label/XS', size:11, lh:16, weight:'Medium', sample:'Form label extra small' },
  ]},
];

const weightMap = { Regular:400, Medium:500, SemiBold:600, Bold:700 };

export const TypeScale = {
  name: 'Type Scale',
  render: () => (
    <div style={{ fontFamily: 'Lexend, sans-serif', padding: 24 }}>
      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 4 }}>Typography Scale</h2>
      <p style={{ color: '#64748B', marginBottom: 28, fontSize: 13 }}>Font: Lexend · Tailwind-aligned sizes · 5 weights</p>
      {SCALE.map(({ group, styles }) => (
        <div key={group} style={{ marginBottom: 32 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>{group}</p>
          {styles.map(s => (
            <div key={s.name} style={{ display: 'flex', alignItems: 'baseline', gap: 24, paddingBottom: 12, borderBottom: '1px solid #F1F5F9', marginBottom: 12 }}>
              <span style={{ width: 120, fontSize: 11, fontWeight: 500, color: '#226FF6', flexShrink: 0 }}>{s.name}</span>
              <span style={{ flex: 1, fontSize: Math.min(s.size, 36), lineHeight: s.lh+'px', fontWeight: weightMap[s.weight] }}>{s.sample}</span>
              <span style={{ fontSize: 11, color: '#94A3B8', flexShrink: 0, whiteSpace:'nowrap' }}>{s.size}px / {s.lh}px · {s.weight}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
