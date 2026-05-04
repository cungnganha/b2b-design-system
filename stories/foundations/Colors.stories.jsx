import React from 'react';

export default {
  title: 'Foundations/Colors',
  parameters: {
    docs: { description: { component: 'Design token color system — Primitives + Semantic. All swatches resolve from CSS custom properties in tokens.css.' } },
    options: { showPanel: false },
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   DATA — CSS variable names only, no hardcoded hex.
   Hex values are resolved at runtime via getComputedStyle.
───────────────────────────────────────────────────────────────────────── */

const PRIMITIVE_GROUPS = [
  {
    group: 'Blue (Brand)',
    vars: ['--blue-50','--blue-100','--blue-200','--blue-300','--blue-400',
           '--blue-500','--blue-600','--blue-700','--blue-800','--blue-900'],
  },
  {
    group: 'Gray',
    vars: ['--gray-50','--gray-100','--gray-200','--gray-300','--gray-400',
           '--gray-500','--gray-600','--gray-700','--gray-800','--gray-900','--gray-950'],
  },
  {
    group: 'Green',
    vars: ['--green-50','--green-500','--green-700'],
  },
  {
    group: 'Red',
    vars: ['--red-50','--red-500','--red-700'],
  },
  {
    group: 'Yellow',
    vars: ['--yellow-50','--yellow-500','--yellow-700'],
  },
  {
    group: 'Orange',
    vars: ['--orange-50','--orange-500','--orange-700'],
  },
  {
    group: 'Base',
    vars: ['--white','--black'],
  },
];

// alias = which primitive this semantic token references (text only, no hex)
const SEMANTIC_GROUPS = [
  {
    group: 'Background',
    color: '#64748B',
    tokens: [
      { var: '--color-bg-page',    alias: 'gray/50' },
      { var: '--color-bg-surface', alias: 'white' },
      { var: '--color-bg-subtle',  alias: 'gray/100' },
      { var: '--color-bg-muted',   alias: 'gray/200' },
      { var: '--color-bg-overlay', alias: 'gray/900' },
    ],
  },
  {
    group: 'Brand',
    color: '#226FF6',
    tokens: [
      { var: '--color-brand-primary', alias: 'blue/500' },
      { var: '--color-brand-hover',   alias: 'blue/600' },
      { var: '--color-brand-active',  alias: 'blue/700' },
      { var: '--color-brand-subtle',  alias: 'blue/50' },
      { var: '--color-brand-border',  alias: 'blue/300' },
      { var: '--color-brand-text',    alias: 'blue/700' },
    ],
  },
  {
    group: 'Text',
    color: '#334155',
    tokens: [
      { var: '--color-text-primary',   alias: 'gray/900' },
      { var: '--color-text-secondary', alias: 'gray/600' },
      { var: '--color-text-tertiary',  alias: 'gray/400' },
      { var: '--color-text-disabled',  alias: 'gray/400' },
      { var: '--color-text-inverse',   alias: 'white' },
      { var: '--color-text-on-brand',  alias: 'white' },
    ],
  },
  {
    group: 'Border',
    color: '#94A3B8',
    tokens: [
      { var: '--color-border-default', alias: 'gray/200' },
      { var: '--color-border-strong',  alias: 'gray/300' },
      { var: '--color-border-focus',   alias: 'blue/500' },
      { var: '--color-border-error',   alias: 'red/500' },
    ],
  },
  {
    group: 'State',
    color: '#5596FF',
    tokens: [
      { var: '--color-state-hover',       alias: 'blue/50' },
      { var: '--color-state-selected',    alias: 'blue/100' },
      { var: '--color-state-disabled-bg', alias: 'gray/100' },
    ],
  },
  {
    group: 'Feedback — Success',
    color: '#15803D',
    tokens: [
      { var: '--color-feedback-success-bg',     alias: 'green/50' },
      { var: '--color-feedback-success-text',   alias: 'green/700' },
      { var: '--color-feedback-success-border', alias: 'green/500' },
      { var: '--color-feedback-success-icon',   alias: 'green/500' },
    ],
  },
  {
    group: 'Feedback — Warning',
    color: '#A16207',
    tokens: [
      { var: '--color-feedback-warning-bg',     alias: 'yellow/50' },
      { var: '--color-feedback-warning-text',   alias: 'yellow/700' },
      { var: '--color-feedback-warning-border', alias: 'yellow/500' },
      { var: '--color-feedback-warning-icon',   alias: 'yellow/500' },
    ],
  },
  {
    group: 'Feedback — Error',
    color: '#B91C1C',
    tokens: [
      { var: '--color-feedback-error-bg',     alias: 'red/50' },
      { var: '--color-feedback-error-text',   alias: 'red/700' },
      { var: '--color-feedback-error-border', alias: 'red/500' },
      { var: '--color-feedback-error-icon',   alias: 'red/500' },
    ],
  },
  {
    group: 'Feedback — Info',
    color: '#1142AD',
    tokens: [
      { var: '--color-feedback-info-bg',     alias: 'blue/50' },
      { var: '--color-feedback-info-text',   alias: 'blue/700' },
      { var: '--color-feedback-info-border', alias: 'blue/300' },
      { var: '--color-feedback-info-icon',   alias: 'blue/500' },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────────────────── */

function rgbToHex(rgb) {
  const m = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!m) return '';
  return '#' + [m[1], m[2], m[3]]
    .map(n => parseInt(n).toString(16).padStart(2, '0').toUpperCase())
    .join('');
}

function isDark(hex) {
  if (!hex || hex.length < 7) return false;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 0.299 + g * 0.587 + b * 0.114) < 140;
}

/* ─────────────────────────────────────────────────────────────────────────
   SWATCH — reads color from CSS var, resolves hex at runtime
───────────────────────────────────────────────────────────────────────── */

function Swatch({ cssVar, label, alias, wide = false }) {
  const ref = React.useRef(null);
  const [hex, setHex] = React.useState('');

  React.useEffect(() => {
    if (ref.current) {
      const bg = getComputedStyle(ref.current).backgroundColor;
      setHex(rgbToHex(bg));
    }
  }, []);

  const dark = isDark(hex);
  const w = wide ? 112 : 88;

  // Short label: "blue/50" from "--blue-50", or keep alias
  const shortLabel = label || cssVar.replace('--', '').replace(/-/g, '/');

  return (
    <div style={{ width: w, flexShrink: 0 }}>
      <div
        ref={ref}
        style={{
          width: w,
          height: 56,
          borderRadius: 8,
          background: `var(${cssVar})`,
          border: '1px solid rgba(0,0,0,0.07)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '4px 6px',
          boxSizing: 'border-box',
        }}
      >
        <span style={{
          fontSize: 9,
          color: dark ? 'rgba(255,255,255,0.7)' : '#94A3B8',
          fontFamily: 'monospace',
          lineHeight: 1.3,
        }}>
          {hex}
        </span>
      </div>
      <div style={{ marginTop: 6, fontSize: 10, fontFamily: 'monospace', lineHeight: 1.5 }}>
        <div style={{ color: '#334155', fontWeight: 500, wordBreak: 'break-all' }}>
          {shortLabel}
        </div>
        {alias && (
          <div style={{ color: '#94A3B8', fontSize: 9 }}>{alias}</div>
        )}
      </div>
    </div>
  );
}

/* semantic swatch — shows full var name + alias */
function SemanticSwatch({ token }) {
  const ref = React.useRef(null);
  const [hex, setHex] = React.useState('');

  React.useEffect(() => {
    if (ref.current) {
      const bg = getComputedStyle(ref.current).backgroundColor;
      setHex(rgbToHex(bg));
    }
  }, []);

  const dark = isDark(hex);
  // short key: "bg/page" from "--color-bg-page"
  const short = token.var.replace('--color-', '').replace(/-/g, '/');

  return (
    <div style={{ width: 120, flexShrink: 0 }}>
      <div
        ref={ref}
        style={{
          width: 120,
          height: 56,
          borderRadius: 8,
          background: `var(${token.var})`,
          border: '1px solid rgba(0,0,0,0.07)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '4px 6px',
          boxSizing: 'border-box',
        }}
      >
        <span style={{
          fontSize: 9,
          color: dark ? 'rgba(255,255,255,0.7)' : '#94A3B8',
          fontFamily: 'monospace',
          lineHeight: 1.3,
        }}>
          {hex}
        </span>
      </div>
      <div style={{ marginTop: 6, lineHeight: 1.5 }}>
        <div style={{ fontSize: 10, color: '#334155', fontWeight: 500, fontFamily: 'monospace', wordBreak: 'break-all' }}>
          {token.var}
        </div>
        <div style={{ fontSize: 9, color: '#94A3B8', fontFamily: 'monospace' }}>
          ↳ {token.alias}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   STORIES
───────────────────────────────────────────────────────────────────────── */

export const Primitives = {
  name: 'Primitive Colors',
  render: () => (
    <div style={{ fontFamily: 'Lexend, sans-serif', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 600, color: '#0F172A', marginBottom: 4, marginTop: 0 }}>
        Primitive Colors
      </h2>
      <p style={{ color: '#64748B', marginBottom: 32, fontSize: 13, marginTop: 4 }}>
        Raw color values from <code style={{ fontSize: 11, background: '#F1F5F9', padding: '1px 5px', borderRadius: 4 }}>tokens.css</code> — referenced by semantic tokens, not used directly in components.
      </p>
      {PRIMITIVE_GROUPS.map(({ group, vars }) => (
        <div key={group} style={{ marginBottom: 32 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12, marginTop: 0 }}>
            {group}
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {vars.map(v => (
              <Swatch key={v} cssVar={v} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Semantic = {
  name: 'Semantic Colors',
  render: () => (
    <div style={{ fontFamily: 'Lexend, sans-serif', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 600, color: '#0F172A', marginBottom: 4, marginTop: 0 }}>
        Semantic Colors
      </h2>
      <p style={{ color: '#64748B', marginBottom: 32, fontSize: 13, marginTop: 4 }}>
        Aliased tokens used by all components. Each token references a primitive — change the primitive and every component updates automatically.
      </p>
      {SEMANTIC_GROUPS.map(({ group, color, tokens }) => (
        <div key={group} style={{ marginBottom: 32 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12, marginTop: 0 }}>
            {group}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {tokens.map(t => (
              <SemanticSwatch key={t.var} token={t} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
