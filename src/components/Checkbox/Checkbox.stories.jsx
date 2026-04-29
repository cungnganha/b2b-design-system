import React from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size:          { control: 'select', options: ['sm','md','lg'] },
    checked:       { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled:      { control: 'boolean' },
    showLabel:     { control: 'boolean' },
    label:         { control: 'text' },
  },
};

export const Default = { args: { label: 'Checkbox label', size: 'md', checked: false } };

export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:12, padding:16 }}>
      <Checkbox label="Unchecked"        size="md" checked={false} />
      <Checkbox label="Checked"          size="md" checked={true} />
      <Checkbox label="Indeterminate"    size="md" checked={true} indeterminate />
      <Checkbox label="Disabled"         size="md" disabled />
      <Checkbox label="Disabled checked" size="md" disabled checked />
    </div>
  ),
};

export const AllSizes = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:12, padding:16 }}>
      <Checkbox label="Small  (16px)" size="sm" checked />
      <Checkbox label="Medium (20px)" size="md" checked />
      <Checkbox label="Large  (24px)" size="lg" checked />
    </div>
  ),
};

export const BoxOnly = {
  name: 'Box only (no label)',
  render: () => (
    <div style={{ display:'flex', gap:12, alignItems:'center', padding:16 }}>
      <Checkbox size="sm" checked={false} showLabel={false} />
      <Checkbox size="sm" checked={true}  showLabel={false} />
      <Checkbox size="md" checked={false} showLabel={false} />
      <Checkbox size="md" checked={true}  showLabel={false} />
      <Checkbox size="lg" checked={false} showLabel={false} />
      <Checkbox size="lg" checked={true}  showLabel={false} />
    </div>
  ),
};
