import React from 'react';
import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant:    { control: 'select', options: ['default','primary','success','warning','error','info'] },
    badgeStyle: { control: 'select', options: ['subtle','outline','solid'], name: 'style' },
    size:       { control: 'select', options: ['sm','md','lg'] },
    showDot:    { control: 'boolean' },
    label:      { control: 'text' },
  },
};

export const Default = {
  args: { label:'Badge', variant:'primary', badgeStyle:'subtle', size:'md', showDot:true },
};

export const WithDot = {
  name: 'With Dot (default)',
  render: () => (
    <div style={{ display:'flex', gap:8, flexWrap:'wrap', padding:16 }}>
      {['default','primary','success','warning','error','info'].map(v => (
        <Badge key={v} label={v} variant={v} badgeStyle="subtle" size="md" showDot={true} />
      ))}
    </div>
  ),
};

export const NoDot = {
  name: 'Without Dot',
  render: () => (
    <div style={{ display:'flex', gap:8, flexWrap:'wrap', padding:16 }}>
      {['default','primary','success','warning','error','info'].map(v => (
        <Badge key={v} label={v} variant={v} badgeStyle="subtle" size="md" showDot={false} />
      ))}
    </div>
  ),
};

export const AllVariants = {
  name: 'All Variants × Styles',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:12, padding:16 }}>
      {['default','primary','success','warning','error','info'].map(v => (
        <div key={v} style={{ display:'flex', gap:8, alignItems:'center' }}>
          <span style={{ width:60, fontSize:11, color:'#64748B' }}>{v}</span>
          {['subtle','outline','solid'].map(s => (
            ['sm','md','lg'].map(sz => (
              <Badge key={s+sz} label={v} variant={v} badgeStyle={s} size={sz} showDot={true} />
            ))
          ))}
        </div>
      ))}
    </div>
  ),
};

export const Sizes = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display:'flex', gap:8, alignItems:'center', padding:16 }}>
      <Badge label="Small"  variant="primary" badgeStyle="subtle" size="sm" />
      <Badge label="Medium" variant="primary" badgeStyle="subtle" size="md" />
      <Badge label="Large"  variant="primary" badgeStyle="subtle" size="lg" />
    </div>
  ),
};
