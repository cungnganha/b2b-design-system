import React from 'react';

export default {
  title: 'Foundations/Colors',
  parameters: {
    docs: { description: { component: 'Design token color system — Primitives + Semantic (aliased). B2B light mode.' } },
    options: { showPanel: false },
  },
};

const PRIMITIVES = {
  'Blue (Brand)': [
    ['blue/50','#EBF3FF'],['blue/100','#D0E5FF'],['blue/200','#A8CCFF'],
    ['blue/300','#7AB1FF'],['blue/400','#5596FF'],['blue/500','#226FF6'],
    ['blue/600','#1757D4'],['blue/700','#1142AD'],['blue/800','#0D3185'],['blue/900','#081F5C'],
  ],
  'Gray': [
    ['gray/50','#F8FAFC'],['gray/100','#F1F5F9'],['gray/200','#E2E8F0'],
    ['gray/300','#CBD5E1'],['gray/400','#94A3B8'],['gray/500','#64748B'],
    ['gray/600','#475569'],['gray/700','#334155'],['gray/800','#1E293B'],
    ['gray/900','#0F172A'],['gray/950','#020617'],
  ],
  'Feedback': [
    ['success','#22C55E'],['warning','#EAB308'],['error','#EF4444'],['info','#226FF6'],
  ],
};

const SEMANTIC = [
  { group: 'Brand', tokens: [
    ['primary','#226FF6'],['hover','#1757D4'],['active','#1142AD'],
    ['subtle','#EBF3FF'],['border','#7AB1FF'],['text','#1142AD'],
  ]},
  { group: 'Text', tokens: [
    ['primary','#0F172A'],['secondary','#475569'],['tertiary','#94A3B8'],
    ['disabled','#94A3B8'],['inverse','#FFFFFF'],['on-brand','#FFFFFF'],
  ]},
  { group: 'Background', tokens: [
    ['page','#F8FAFC'],['surface','#FFFFFF'],['subtle','#F1F5F9'],['muted','#E2E8F0'],['overlay','#0F172A'],
  ]},
];

function isDark(hex) {
  const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
  return (r*.299+g*.587+b*.114)<140;
}

function Swatch({ name, hex, w = 80 }) {
  const dark = isDark(hex);
  return (
    <div style={{ width: w, flexShrink: 0 }}>
      <div style={{
        width: w, height: 52, borderRadius: 8, background: hex,
        border: dark ? 'none' : '1px solid #E2E8F0',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '4px 6px',
      }}>
        <span style={{ fontSize: 9, color: dark ? 'rgba(255,255,255,0.85)' : '#475569', fontFamily: 'monospace', lineHeight: 1.4 }}>{name.split('/').pop()}</span>
        <span style={{ fontSize: 9, color: dark ? 'rgba(255,255,255,0.6)' : '#94A3B8',  fontFamily: 'monospace', lineHeight: 1.2 }}>{hex}</span>
      </div>
    </div>
  );
}

export const Primitives = {
  render: () => (
    <div style={{ fontFamily: 'Lexend, sans-serif', padding: 24 }}>
      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 4 }}>Primitive Colors</h2>
      <p style={{ color: '#64748B', marginBottom: 28, fontSize: 13 }}>Raw color values — not used directly in components</p>
      {Object.entries(PRIMITIVES).map(([group, shades]) => (
        <div key={group} style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 12, fontWeight: 500, color: '#94A3B8', marginBottom: 10 }}>{group}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {shades.map(([name, hex]) => <Swatch key={name} name={name} hex={hex} />)}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Semantic = {
  render: () => (
    <div style={{ fontFamily: 'Lexend, sans-serif', padding: 24 }}>
      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 4 }}>Semantic Colors</h2>
      <p style={{ color: '#64748B', marginBottom: 28, fontSize: 13 }}>Aliased to primitives — these are the tokens used in all components</p>
      {SEMANTIC.map(({ group, tokens }) => (
        <div key={group} style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#226FF6', marginBottom: 10 }}>{group}</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {tokens.map(([name, hex]) => <Swatch key={name} name={name} hex={hex} w={100} />)}
          </div>
        </div>
      ))}
    </div>
  ),
};
