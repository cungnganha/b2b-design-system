import React from 'react';
import { Icons } from './icons';

export default {
  title: 'Foundations/Icons',
  parameters: { options:{ showPanel:false }, docs:{ description:{ component:'**Icons** — Iconstica v1.1.0-premium · Inline SVG · stroke=currentColor\n\n```jsx\nimport { Search } from \'../Icons/icons\';\n<Search size={16} color="#226FF6" />\n```' }}},
};

const GROUPS = {
  'Semantic':   ['CheckCircle','XCircle','InfoCircle','AlertTriangle'],
  'Navigation': ['ChevronDown','ChevronUp','ChevronLeft','ChevronRight','ArrowRight','ArrowLeft','ArrowUp','ArrowDown'],
  'Actions':    ['Plus','Minus','X','Check','Search','Eye','EyeOff','Edit','Trash','Download','Upload','Copy','Link','Refresh','Filter'],
  'General':    ['Calendar','Clock','User','Home','Heart','Star','Bell','Settings','LogOut','Lock','Mail','Phone','Globe','Share','Grid'],
};
const SEM_COLOR = { CheckCircle:'#22C55E', XCircle:'#EF4444', InfoCircle:'#226FF6', AlertTriangle:'#EAB308' };

export const AllIcons = { name:'All Icons', render:()=>(
  <div style={{fontFamily:'Lexend,sans-serif',padding:24}}>
    <h2 style={{fontSize:20,fontWeight:600,marginBottom:4}}>Icon Library</h2>
    <p style={{fontSize:13,color:'#64748B',marginBottom:32}}>Iconstica v1.1.0-premium · Line style · 40 icons · stroke=currentColor</p>
    {Object.entries(GROUPS).map(([group,names])=>(
      <div key={group} style={{marginBottom:28}}>
        <p style={{fontSize:11,fontWeight:600,color:'#94A3B8',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:12}}>{group}</p>
        <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
          {names.map(name=>{const C=Icons[name];return C?(<div key={name} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:8,padding:'12px 16px',border:'1px solid #F1F5F9',borderRadius:8,minWidth:80,background:'#FAFAFA'}}><C size={20} color={SEM_COLOR[name]||'#334155'}/><span style={{fontSize:10,color:'#64748B',textAlign:'center'}}>{name}</span></div>):null;})}
        </div>
      </div>
    ))}
  </div>
)};

export const Sizes = { name:'Sizes', render:()=>(
  <div style={{display:'flex',gap:24,alignItems:'flex-end',padding:24}}>
    {[12,14,16,18,20,24,32].map(sz=>(<div key={sz} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:8}}><Icons.Search size={sz} color="#226FF6"/><span style={{fontSize:10,color:'#94A3B8'}}>{sz}px</span></div>))}
  </div>
)};

export const SemanticColors = { name:'Semantic Colors', render:()=>(
  <div style={{display:'flex',gap:12,padding:24,flexWrap:'wrap'}}>
    {[{n:'Info',I:Icons.InfoCircle,c:'#226FF6',bg:'#EBF3FF'},{n:'Success',I:Icons.CheckCircle,c:'#22C55E',bg:'#F0FDF4'},{n:'Warning',I:Icons.AlertTriangle,c:'#EAB308',bg:'#FEFCE8'},{n:'Error',I:Icons.XCircle,c:'#EF4444',bg:'#FFF1F2'}].map(({n,I,c,bg})=>(
      <div key={n} style={{display:'flex',alignItems:'center',gap:8,padding:'10px 20px',borderRadius:8,background:bg}}>
        <I size={18} color={c}/><span style={{fontSize:13,color:c,fontFamily:'Lexend,sans-serif',fontWeight:500}}>{n}</span>
      </div>
    ))}
  </div>
)};
