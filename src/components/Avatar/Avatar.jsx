import React from 'react';
import './Avatar.css';

const COLOR_MAP = {
  brand: { bg:'#EBF3FF', text:'#1142AD' },
  gray:  { bg:'#F1F5F9', text:'#475569' },
  green: { bg:'#F0FDF4', text:'#15803D' },
  red:   { bg:'#FFF1F2', text:'#B91C1C' },
  purple:{ bg:'#F3E8FF', text:'#6B21A8' },
  orange:{ bg:'#FFF7ED', text:'#C2410C' },
};
const STATUS_COLOR = { online:'#22C55E', offline:'#94A3B8', busy:'#EF4444', away:'#EAB308' };
const SIZE_MAP = { xs:20, sm:24, md:32, lg:40, xl:48, '2xl':64 };

export const Avatar = ({ initials='AB', size='md', shape='circle', color='brand', status=null }) => {
  const scheme = COLOR_MAP[color] || COLOR_MAP.brand;
  const px = SIZE_MAP[size] || 32;
  const fs = Math.round(px * 0.38);
  const radius = shape === 'circle' ? '50%' : Math.round(px * 0.22) + 'px';
  return (
    <span className="ds-avatar-wrap" style={{ position:'relative', display:'inline-flex' }}>
      <span className="ds-avatar" style={{ width:px, height:px, background:scheme.bg, color:scheme.text, borderRadius:radius, fontSize:fs, fontFamily:'Lexend,sans-serif', fontWeight:500, display:'inline-flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
        {initials}
      </span>
      {status && (
        <span style={{ position:'absolute', bottom:0, right:0, width:px*0.28, height:px*0.28, borderRadius:'50%', background:STATUS_COLOR[status]||'#94A3B8', border:'2px solid #fff' }} />
      )}
    </span>
  );
};
export default Avatar;
