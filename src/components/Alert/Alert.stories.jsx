import React from 'react';
import { Alert } from './Alert';
export default {
  title:'Components/Alert', component:Alert, tags:['autodocs'],
  parameters:{ layout:'padded', docs:{ description:{ component:'**Alert** — Info(ℹ) · Success(✓) · Warning(⚠) · Error(✕) · Subtle & Outline · SM & MD.' }}},
  argTypes:{ variant:{control:'select',options:['info','success','warning','error']}, style:{control:'select',options:['subtle','outline']}, size:{control:'select',options:['sm','md']}, showClose:{control:'boolean'}, title:{control:'text'}, description:{control:'text'} },
};
export const Default = { args:{ variant:'info', style:'subtle', size:'md', title:'Information', description:'This is an informational alert message.' } };
export const AllVariants = { name:'All Variants', render:()=>(
  <div style={{display:'flex',flexDirection:'column',gap:12,maxWidth:560,padding:16}}>
    {['info','success','warning','error'].map(v=><Alert key={v} variant={v} style="subtle" size="md" title={v.charAt(0).toUpperCase()+v.slice(1)} description={`This is a ${v} alert message.`}/>)}
  </div>
)};
export const Outline = { render:()=>(
  <div style={{display:'flex',flexDirection:'column',gap:12,maxWidth:560,padding:16}}>
    {['info','success','warning','error'].map(v=><Alert key={v} variant={v} style="outline" size="md" title={v.charAt(0).toUpperCase()+v.slice(1)} description={`Outline style — ${v}.`}/>)}
  </div>
)};
export const Sizes = { render:()=>(
  <div style={{display:'flex',flexDirection:'column',gap:12,maxWidth:560,padding:16}}>
    <Alert variant="info" style="subtle" size="sm" title="Small alert" description="Compact size for tight layouts."/>
    <Alert variant="info" style="subtle" size="md" title="Medium alert" description="Default size for most use cases."/>
  </div>
)};
