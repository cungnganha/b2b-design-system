import React from 'react';
import { Radio } from './Radio';
export default { title:'Components/Radio', component:Radio, tags:['autodocs'],
  argTypes:{ size:{control:'select',options:['sm','md','lg']}, selected:{control:'boolean'}, disabled:{control:'boolean'}, label:{control:'text'} }
};
export const Default = { args:{ label:'Radio option', size:'md', selected:false } };
export const AllStates = { name:'All States', render:()=>(
  <div style={{display:'flex',flexDirection:'column',gap:12,padding:16}}>
    <Radio label="Unselected" size="md" selected={false} />
    <Radio label="Selected"   size="md" selected={true}  />
    <Radio label="Disabled"   size="md" disabled />
    <Radio label="Disabled selected" size="md" disabled selected />
  </div>
) };
export const AllSizes = { name:'All Sizes', render:()=>(
  <div style={{display:'flex',flexDirection:'column',gap:12,padding:16}}>
    <Radio label="Small (16px)"  size="sm" selected />
    <Radio label="Medium (20px)" size="md" selected />
    <Radio label="Large (24px)"  size="lg" selected />
  </div>
) };
