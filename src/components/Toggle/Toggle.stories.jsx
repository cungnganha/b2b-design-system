import React from 'react';
import { Toggle } from './Toggle';
export default { title:'Components/Toggle', component:Toggle, tags:['autodocs'],
  argTypes:{ size:{control:'select',options:['sm','md','lg']}, on:{control:'boolean'}, disabled:{control:'boolean'}, label:{control:'text'} }
};
export const Default = { args:{ label:'Toggle label', size:'md', on:false } };
export const AllStates = { name:'All States', render:()=>(
  <div style={{display:'flex',flexDirection:'column',gap:14,padding:16}}>
    <Toggle label="Off"             size="md" on={false} />
    <Toggle label="On"              size="md" on={true}  />
    <Toggle label="Disabled off"    size="md" disabled />
    <Toggle label="Disabled on"     size="md" disabled on />
  </div>
) };
export const AllSizes = { name:'All Sizes', render:()=>(
  <div style={{display:'flex',flexDirection:'column',gap:14,padding:16}}>
    <Toggle label="SM — 32×18px" size="sm" on />
    <Toggle label="MD — 40×22px" size="md" on />
    <Toggle label="LG — 48×26px" size="lg" on />
  </div>
) };
