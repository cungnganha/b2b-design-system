import React from 'react';
import { Input } from './Input';
import { Search, Eye, EyeOff, User, Mail, Lock, Phone } from '../Icons/icons';

export default {
  title:'Components/Input', component:Input, tags:['autodocs'],
  parameters:{ layout:'padded', docs:{ description:{ component:'**Input** — Tailwind-aligned form field.\n\n| Size | Height | Padding | Font |\n|---|---|---|---|\n| SM | 32px | px-3 | 13px |\n| MD | 40px | px-4 | 14px |\n| LG | 48px | px-5 | 16px |' }}},
  argTypes:{ size:{control:'select',options:['sm','md','lg']}, state:{control:'select',options:['default','focus','filled','disabled','error']}, placeholder:{control:'text'}, label:{control:'text'}, helperText:{control:'text'} },
};

export const Default = { args:{ placeholder:'Enter text...', size:'md', state:'default' } };
export const WithLabel = { name:'With Label', args:{ label:'Field label', placeholder:'Enter text...', size:'md', helperText:'Helper or hint text.' } };

export const AllStates = { name:'All States', render:()=>(
  <div style={{display:'flex',flexDirection:'column',gap:16,padding:16}}>
    <Input label="Default"  placeholder="Placeholder..."   size="md" state="default"/>
    <Input label="Focus"    placeholder="Active focus..."  size="md" state="focus"/>
    <Input label="Filled"   size="md" state="filled"  value="Some entered value" onChange={()=>{}}/>
    <Input label="Disabled" placeholder="Cannot edit"      size="md" state="disabled"/>
    <Input label="Error"    placeholder="Enter value..."   size="md" state="error" helperText="This field is required."/>
  </div>
)};

export const AllSizes = { name:'All Sizes', render:()=>(
  <div style={{display:'flex',flexDirection:'column',gap:12,padding:16}}>
    <Input placeholder="Small — 32px (h-8)"   size="sm"/>
    <Input placeholder="Medium — 40px (h-10)" size="md"/>
    <Input placeholder="Large — 48px (h-12)"  size="lg"/>
  </div>
)};

export const WithIcons = { name:'With Icons', render:()=>(
  <div style={{display:'flex',flexDirection:'column',gap:12,padding:16}}>
    <Input placeholder="Search..."     size="md" iconLeft={<Search size={16}/>} label="Search"/>
    <Input placeholder="Username"      size="md" iconLeft={<User size={16}/>}   label="Username"/>
    <Input placeholder="Email"         size="md" iconLeft={<Mail size={16}/>}   label="Email"/>
    <Input placeholder="Phone"         size="md" iconLeft={<Phone size={16}/>}  label="Phone"/>
    <Input placeholder="Password"      size="md" iconLeft={<Lock size={16}/>} iconRight={<Eye size={16}/>} type="password" label="Password"/>
    <Input placeholder="Show password" size="md" iconLeft={<Lock size={16}/>} iconRight={<EyeOff size={16}/>} label="Password (visible)"/>
  </div>
)};
