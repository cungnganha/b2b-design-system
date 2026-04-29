import React from 'react';
import { Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `**Tooltip** — Figma node 249:3220 · Dark only · 4 positions

| Figma prop | Code prop | Values |
|---|---|---|
| Polygon Position | \`position\` | top · bottom · left · right |
| Warp | \`wrap\` | false = single line · true = wraps |
| Truncate | \`truncate\` | true = scrollable content |

> Hover trigger to show tooltip.`,
      },
    },
  },
  argTypes: {
    content:   { control: 'text' },
    position:  { control: 'select', options: ['top','bottom','left','right'] },
    wrap:      { control: 'boolean' },
    truncate:  { control: 'boolean' },
    maxWidth:  { control: 'number' },
    maxHeight: { control: 'number' },
    children:  { table: { disable: true } },
  },
};

const Trigger = ({ label }) => (
  <span style={{
    padding: '8px 20px', border: '1px solid #E2E8F0', borderRadius: 6,
    fontSize: 13, fontFamily: 'Lexend,sans-serif',
    cursor: 'default', background: '#fff', userSelect: 'none',
  }}>
    {label}
  </span>
);

export const Default = {
  args: { content: 'Tooltip message', position: 'top', wrap: false, truncate: false },
};

export const AllPositions = {
  name: 'All Positions — Warp=False',
  render: () => (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, padding:80 }}>
      {['top','bottom','left','right'].map(pos => (
        <div key={pos} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
          <Tooltip content="Tooltip message" position={pos}>
            <Trigger label={`Hover — ${pos}`} />
          </Tooltip>
          <span style={{ fontSize:11, color:'#94A3B8' }}>{pos}</span>
        </div>
      ))}
    </div>
  ),
};

export const WrapTrue = {
  name: 'Warp=True — text wraps',
  render: () => (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:100, padding:100 }}>
      {['top','bottom','left','right'].map(pos => (
        <div key={pos} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
          <Tooltip
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis adipiscing a that imperdiet tempor fringilla ornare fermentum egestas ut leo."
            position={pos} wrap={true} maxWidth={250}
          >
            <Trigger label={`Hover — ${pos}`} />
          </Tooltip>
          <span style={{ fontSize:11, color:'#94A3B8' }}>Warp · {pos}</span>
        </div>
      ))}
    </div>
  ),
};

export const TruncateTrue = {
  name: 'Truncate=True — scrollable',
  render: () => (
    <div style={{ display:'flex', justifyContent:'center', padding:80 }}>
      <Tooltip
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
        position="top" truncate={true} maxWidth={250} maxHeight={120}
      >
        <Trigger label="Hover — Truncate" />
      </Tooltip>
    </div>
  ),
};
