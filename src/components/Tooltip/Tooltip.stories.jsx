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
        component: `**Tooltip** — Matches Figma design (node 249:3220).

Props từ Figma:
- **position**: Top · Bottom · Left · Right (= Polygon Position)
- **truncate**: false = single line · true = wrap text (max-width 250px)

> Hover trigger để xem tooltip.`,
      },
    },
  },
  argTypes: {
    position: { control: 'select', options: ['top','bottom','left','right'] },
    truncate: { control: 'boolean' },
    content:  { control: 'text' },
  },
};

export const Default = {
  args: { content: 'Tooltip message', position: 'top', truncate: false },
};

export const AllPositions = {
  name: 'All Positions (Warp=False)',
  render: () => (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, padding:80 }}>
      {['top','bottom','left','right'].map(pos => (
        <div key={pos} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
          <Tooltip content="Tooltip message" position={pos} truncate={false}>
            <span style={{ padding:'8px 20px', border:'1px solid #E2E8F0', borderRadius:6, fontSize:13, fontFamily:'Lexend,sans-serif', cursor:'default', background:'#fff' }}>
              Hover ({pos})
            </span>
          </Tooltip>
          <span style={{ fontSize:11, color:'#94A3B8' }}>{pos}</span>
        </div>
      ))}
    </div>
  ),
};

export const Truncate = {
  name: 'Truncate=True (long text wraps)',
  render: () => (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:100, padding:100 }}>
      {['top','bottom','left','right'].map(pos => (
        <div key={pos} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
          <Tooltip
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis adipiscing a that imperdiet tempor fringilla ornare fermentum egestas."
            position={pos}
            truncate={true}
            maxWidth={250}
          >
            <span style={{ padding:'8px 20px', border:'1px solid #E2E8F0', borderRadius:6, fontSize:13, fontFamily:'Lexend,sans-serif', cursor:'default', background:'#fff' }}>
              Long text ({pos})
            </span>
          </Tooltip>
          <span style={{ fontSize:11, color:'#94A3B8' }}>Truncate · {pos}</span>
        </div>
      ))}
    </div>
  ),
};

export const ShortText = {
  name: 'Short text (Warp=False)',
  args: { content: 'Short tooltip', position: 'top', truncate: false },
};

export const LongTextWrapped = {
  name: 'Long text wrapped (Warp=True)',
  args: {
    content: 'This is a longer tooltip message that wraps because Warp=True and Truncate=True in the Figma component.',
    position: 'top',
    truncate: true,
    maxWidth: 250,
  },
};
