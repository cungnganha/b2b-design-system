import React from 'react';
import { Tooltip } from './Tooltip';
export default {
  title:'Components/Tooltip', component:Tooltip, tags:['autodocs'],
  parameters:{ layout:'centered', docs:{ description:{ component:'**Tooltip** — Dark only · 4 positions · 12px/16px · radius 8px · Shadow/MD.\n\n> Hover trigger to see tooltip.' }}},
  argTypes:{ position:{control:'select',options:['top','bottom','left','right']}, content:{control:'text'} },
};
export const Default = { args:{ content:'Tooltip message', position:'top' } };
export const AllPositions = { name:'All Positions', render:()=>(
  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,padding:80}}>
    {['top','bottom','left','right'].map(pos=>(
      <div key={pos} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:12}}>
        <Tooltip content={`Appears ${pos}`} position={pos}><span style={{padding:'8px 20px',border:'1px solid #E2E8F0',borderRadius:6,fontSize:13,fontFamily:'Lexend,sans-serif',cursor:'default',background:'#fff'}}>Hover ({pos})</span></Tooltip>
        <span style={{fontSize:11,color:'#94A3B8'}}>{pos}</span>
      </div>
    ))}
  </div>
)};
export const LongContent = { name:'Long Content', args:{ content:'This tooltip has a longer message with additional context for the user.', position:'top' } };
