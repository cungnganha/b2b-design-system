import React from 'react';
import { Input } from './Input';
import { Search, Eye, EyeOff, User, Mail, Lock, Phone } from '../Icons/icons';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `**Input** — Tailwind-aligned form field.

| Size | Height | Font |
|--|--|--|
| sm | 32px | 13px |
| md | 40px | 14px |
| lg | 48px | 16px |`,
      },
    },
  },
  argTypes: {
    placeholder: { control: 'text' },
    label:       { control: 'text' },
    helperText:  { control: 'text' },
    size:  { control: 'select', options: ['sm','md','lg'] },
    state: { control: 'select', options: ['default','focus','filled','disabled','error'] },
    type:  { control: 'select', options: ['text','password','email','number'] },
    // Ẩn icon props — React element, không dùng làm string control
    iconLeft:     { table: { disable: true } },
    iconRight:    { table: { disable: true } },
    value:        { table: { disable: true } },
    defaultValue: { table: { disable: true } },
    onChange:     { table: { disable: true } },
  },
};

export const Default = {
  args: { placeholder: 'Enter text...', size: 'md', state: 'default' },
};

export const WithLabel = {
  name: 'With Label',
  args: { label: 'Field label', placeholder: 'Enter text...', size: 'md', helperText: 'Helper text.' },
};

export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:16, padding:16 }}>
      <Input label="Default"  placeholder="Default state"  size="md" state="default" />
      <Input label="Focus"    placeholder="Focus state"    size="md" state="focus" />
      <Input label="Filled"   size="md" state="filled" defaultValue="Some value" />
      <Input label="Disabled" placeholder="Disabled"       size="md" state="disabled" />
      <Input label="Error"    placeholder="Error state"    size="md" state="error"
        helperText="This field is required." />
    </div>
  ),
};

export const AllSizes = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:12, padding:16 }}>
      <Input placeholder="Small — 32px"  size="sm" />
      <Input placeholder="Medium — 40px" size="md" />
      <Input placeholder="Large — 48px"  size="lg" />
    </div>
  ),
};

export const WithIcons = {
  name: 'With Icons',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:12, padding:16 }}>
      <Input label="Search"   placeholder="Search..."     size="md" iconLeft={<Search size={16}/>} />
      <Input label="Username" placeholder="Username"      size="md" iconLeft={<User size={16}/>} />
      <Input label="Email"    placeholder="email@co.com"  size="md" iconLeft={<Mail size={16}/>} />
      <Input label="Phone"    placeholder="+84 xxx"       size="md" iconLeft={<Phone size={16}/>} />
      <Input label="Password" placeholder="Password"      size="md" type="password"
        iconLeft={<Lock size={16}/>} iconRight={<Eye size={16}/>} />
      <Input label="Password (visible)" placeholder="Password" size="md"
        iconLeft={<Lock size={16}/>} iconRight={<EyeOff size={16}/>} />
    </div>
  ),
};
