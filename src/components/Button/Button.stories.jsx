import React from 'react';
import { Button } from './Button';
import { Plus, Trash, Check, Search, Download, Settings, ArrowRight, ChevronRight, Upload } from '../Icons/icons';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `**Button** — Tailwind-aligned · Icons: Iconstica v1.1.0-premium

| Dimension | Values |
|-----------|--------|
| **Size** | SM(32px) · MD(40px) · LG(48px) |
| **Variant** | primary · secondary · outline · ghost · danger |
| **State** | Default · Disabled · Loading |
| **Icon** | None · Left · Right · Only |

> ⚡ \`loading\` = boolean prop — shadcn/Radix convention.`,
      },
    },
  },
  argTypes: {
    size:     { control: 'select', options: ['sm','md','lg'] },
    variant:  { control: 'select', options: ['primary','secondary','outline','ghost','danger'] },
    disabled: { control: 'boolean' },
    loading:  { control: 'boolean' },
    label:    { control: 'text' },
  },
};

const Row = ({ l, children }) => (
  <div style={{ display:'flex', gap:12, alignItems:'center' }}>
    <span style={{ width:90, fontSize:11, color:'#64748B', flexShrink:0 }}>{l}</span>
    {children}
  </div>
);

export const Default = { args: { label:'Button', size:'md', variant:'primary' } };

export const AllStyles = {
  name: 'All Styles',
  render: () => (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap', padding:16 }}>
      <Button variant="primary"   size="md" iconLeft={<Plus size={16}/>}>Primary</Button>
      <Button variant="secondary" size="md" iconLeft={<Check size={16}/>}>Secondary</Button>
      <Button variant="outline"   size="md" iconLeft={<Download size={16}/>}>Outline</Button>
      <Button variant="ghost"     size="md" iconLeft={<Settings size={16}/>}>Ghost</Button>
      <Button variant="danger"    size="md" iconLeft={<Trash size={16}/>}>Danger</Button>
    </div>
  ),
};

export const AllSizes = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display:'flex', gap:12, alignItems:'center', padding:16 }}>
      <Button variant="primary" size="sm" iconLeft={<Plus size={14}/>}>Small (32px)</Button>
      <Button variant="primary" size="md" iconLeft={<Plus size={16}/>}>Medium (40px)</Button>
      <Button variant="primary" size="lg" iconLeft={<Plus size={18}/>}>Large (48px)</Button>
    </div>
  ),
};

export const IconPositions = {
  name: 'Icon Positions',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:16, padding:16 }}>
      <Row l="No icon">
        <Button variant="primary">Button</Button>
        <Button variant="outline">Button</Button>
      </Row>
      <Row l="Icon left">
        <Button variant="primary"   size="md" iconLeft={<Plus size={16}/>}>Add item</Button>
        <Button variant="outline"   size="md" iconLeft={<Search size={16}/>}>Search</Button>
        <Button variant="secondary" size="md" iconLeft={<Upload size={16}/>}>Upload</Button>
      </Row>
      <Row l="Icon right">
        <Button variant="primary" size="md" iconRight={<ArrowRight size={16}/>}>Continue</Button>
        <Button variant="outline" size="md" iconRight={<ChevronRight size={16}/>}>More</Button>
      </Row>
      <Row l="Icon only">
        {['sm','md','lg'].map(s => {
          const z = {sm:14,md:16,lg:18}[s];
          return <Button key={s} variant="primary" size={s} iconOnly={<Plus size={z}/>} aria-label="add"/>;
        })}
        <Button variant="outline" size="md" iconOnly={<Search size={16}/>} aria-label="search"/>
        <Button variant="ghost"   size="md" iconOnly={<Settings size={16}/>} aria-label="settings"/>
        <Button variant="danger"  size="md" iconOnly={<Trash size={16}/>} aria-label="delete"/>
      </Row>
    </div>
  ),
};

export const States = {
  name: 'States',
  render: () => (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap', padding:16 }}>
      <Button variant="primary">Default</Button>
      <Button variant="primary" disabled>Disabled</Button>
      <Button variant="primary" loading>Loading...</Button>
      <Button variant="outline" disabled>Disabled</Button>
      <Button variant="outline" loading>Loading...</Button>
    </div>
  ),
};

export const Danger = {
  name: 'Danger',
  render: () => (
    <div style={{ display:'flex', gap:12, padding:16 }}>
      <Button variant="danger" size="md" iconLeft={<Trash size={16}/>}>Delete item</Button>
      <Button variant="danger" size="sm" iconLeft={<Trash size={14}/>}>Delete</Button>
      <Button variant="danger" size="md" disabled>Disabled</Button>
      <Button variant="danger" size="md" iconOnly={<Trash size={16}/>} aria-label="delete"/>
    </div>
  ),
};

export const FullGrid = {
  name: 'Full Grid — All Sizes × Styles',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:14, padding:16 }}>
      {['sm','md','lg'].map(size => {
        const z = {sm:14,md:16,lg:18}[size];
        return (
          <div key={size} style={{ display:'flex', gap:10, alignItems:'center' }}>
            <span style={{ width:32, fontSize:11, color:'#64748B', fontWeight:600, textTransform:'uppercase' }}>{size}</span>
            <Button variant="primary"   size={size} iconLeft={<Plus size={z}/>}>Primary</Button>
            <Button variant="secondary" size={size} iconLeft={<Check size={z}/>}>Secondary</Button>
            <Button variant="outline"   size={size} iconLeft={<Download size={z}/>}>Outline</Button>
            <Button variant="ghost"     size={size} iconLeft={<Settings size={z}/>}>Ghost</Button>
            <Button variant="danger"    size={size} iconLeft={<Trash size={z}/>}>Danger</Button>
            <Button variant="primary"   size={size} iconOnly={<Plus size={z}/>} aria-label="icon-only"/>
          </div>
        );
      })}
    </div>
  ),
};
