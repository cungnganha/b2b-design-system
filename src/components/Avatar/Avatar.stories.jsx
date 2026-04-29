import React from 'react';
import { Avatar } from './Avatar';
export default { title:'Components/Avatar', component:Avatar, tags:['autodocs'],
  argTypes:{
    size:    {control:'select', options:['xs','sm','md','lg','xl','2xl']},
    shape:   {control:'select', options:['circle','rounded']},
    color:   {control:'select', options:['brand','gray','green','red','purple','orange']},
    status:  {control:'select', options:[null,'online','offline','busy','away']},
    initials:{control:'text'},
  }
};
export const Default = { args:{ initials:'AB', size:'md', shape:'circle', color:'brand' } };
export const AllSizes = { name:'All Sizes', render:()=>(
  <div style={{display:'flex',gap:12,alignItems:'center',padding:16}}>
    {['xs','sm','md','lg','xl','2xl'].map(s=><Avatar key={s} initials="AB" size={s} color="brand" />)}
  </div>
) };
export const AllColors = { name:'All Colors', render:()=>(
  <div style={{display:'flex',gap:10,alignItems:'center',padding:16}}>
    {['brand','gray','green','red','purple','orange'].map(c=><Avatar key={c} initials="AB" size="md" color={c} />)}
  </div>
) };
export const WithStatus = { name:'With Status Badge', render:()=>(
  <div style={{display:'flex',gap:16,alignItems:'center',padding:16}}>
    {['online','offline','busy','away'].map(s=>(
      <div key={s} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6}}>
        <Avatar initials="AB" size="md" status={s} />
        <span style={{fontSize:11,color:'#64748B'}}>{s}</span>
      </div>
    ))}
  </div>
) };
export const Group = { name:'Avatar Group', render:()=>(
  <div style={{display:'flex',padding:16}}>
    {['brand','gray','green','red'].map((c,i)=>(
      <span key={c} style={{marginLeft:i===0?0:-10,zIndex:4-i}}>
        <Avatar initials={['AB','CD','EF','GH'][i]} size="md" color={c} />
      </span>
    ))}
    <span style={{marginLeft:-10,width:32,height:32,borderRadius:'50%',background:'#E2E8F0',display:'inline-flex',alignItems:'center',justifyContent:'center',fontSize:11,color:'#475569',fontFamily:'Lexend',fontWeight:500}}>+3</span>
  </div>
) };
