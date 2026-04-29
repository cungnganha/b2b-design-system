import React from 'react';
import { Button } from './Button';
import { Plus, Trash, Check, Search, Download, Settings, ArrowRight, ChevronRight, Upload } from '../Icons/icons';

export default {
  title: 'Components/Button', component: Button, tags: ['autodocs'],
  parameters: { docs: { description: { component: '**Button** — Tailwind-aligned · Icons: Iconstica v1.1.0\n\n| | |\n|--|--|\n| **Size** | SM(32px) · MD(40px) · LG(48px) |\n| **Style** | Primary · Secondary · Outline · Ghost · Danger |\n| **Icon** | None · Left · Right · Only |\n\n> ⚡ Loading = boolean prop, không phải State variant.' }}},
  argTypes: { size:{control:'select',options:['sm','md','lg']}, btnStyle:{control:'select',options:['primary','secondary','outline','ghost','danger'],name:'style'}, disabled:{control:'boolean'}, loading:{control:'boolean'}, label:{control:'text'} },
};

export const Default = { args: { label:'Button', size:'md', btnStyle:'primary' } };

const Row = ({ l, children }) => (<div style={{display:'flex',gap:12,alignItems:'center'}}><span style={{width:90,fontSize:11,color:'#64748B',flexShrink:0}}>{l}</span>{children}</div>);

export const AllStyles = { name:'All Styles', render:()=>(<div style={{display:'flex',gap:12,flexWrap:'wrap',alignItems:'center',padding:16}}><Button label="Primary" btnStyle="primary" size="md" iconLeft={<Plus size={16}/>}/><Button label="Secondary" btnStyle="secondary" size="md" iconLeft={<Check size={16}/>}/><Button label="Outline" btnStyle="outline" size="md" iconLeft={<Download size={16}/>}/><Button label="Ghost" btnStyle="ghost" size="md" iconLeft={<Settings size={16}/>}/><Button label="Danger" btnStyle="danger" size="md" iconLeft={<Trash size={16}/>}/></div>) };

export const AllSizes = { name:'All Sizes', render:()=>(<div style={{display:'flex',gap:12,alignItems:'center',padding:16}}><Button label="Small(32px)" size="sm" btnStyle="primary" iconLeft={<Plus size={14}/>}/><Button label="Medium(40px)" size="md" btnStyle="primary" iconLeft={<Plus size={16}/>}/><Button label="Large(48px)" size="lg" btnStyle="primary" iconLeft={<Plus size={18}/>}/></div>) };

export const IconPositions = { name:'Icon Positions', render:()=>(
  <div style={{display:'flex',flexDirection:'column',gap:16,padding:16}}>
    <Row l="No icon"><Button label="Button" size="md" btnStyle="primary"/><Button label="Button" size="md" btnStyle="outline"/><Button label="Button" size="md" btnStyle="ghost"/></Row>
    <Row l="Icon left"><Button label="Add" size="md" btnStyle="primary" iconLeft={<Plus size={16}/>}/><Button label="Search" size="md" btnStyle="outline" iconLeft={<Search size={16}/>}/><Button label="Upload" size="md" btnStyle="secondary" iconLeft={<Upload size={16}/>}/></Row>
    <Row l="Icon right"><Button label="Continue" size="md" btnStyle="primary" iconRight={<ArrowRight size={16}/>}/><Button label="More" size="md" btnStyle="outline" iconRight={<ChevronRight size={16}/>}/></Row>
    <Row l="Icon only">
      {['sm','md','lg'].map(s=>{const z={sm:14,md:16,lg:18}[s];return <Button key={s} iconOnly={<Plus size={z}/>} size={s} btnStyle="primary" aria-label="add"/>;} )}
      <Button iconOnly={<Search size={16}/>} size="md" btnStyle="outline" aria-label="search"/>
      <Button iconOnly={<Settings size={16}/>} size="md" btnStyle="ghost" aria-label="settings"/>
      <Button iconOnly={<Trash size={16}/>} size="md" btnStyle="danger" aria-label="delete"/>
    </Row>
  </div>
)};

export const States = { name:'States', render:()=>(<div style={{display:'flex',gap:12,flexWrap:'wrap',alignItems:'center',padding:16}}><Button label="Default" size="md" btnStyle="primary"/><Button label="Disabled" size="md" btnStyle="primary" disabled/><Button label="Loading..." size="md" btnStyle="primary" loading/><Button label="Disabled" size="md" btnStyle="outline" disabled/></div>) };

export const Danger = { name:'Danger', render:()=>(<div style={{display:'flex',gap:12,alignItems:'center',padding:16}}><Button label="Delete item" size="md" btnStyle="danger" iconLeft={<Trash size={16}/>}/><Button label="Delete" size="sm" btnStyle="danger" iconLeft={<Trash size={14}/>}/><Button label="Disabled" size="md" btnStyle="danger" disabled/><Button iconOnly={<Trash size={16}/>} size="md" btnStyle="danger" aria-label="delete"/><Button iconOnly={<Trash size={14}/>} size="sm" btnStyle="danger" aria-label="delete-sm"/></div>) };

export const FullGrid = { name:'Full Grid', render:()=>(
  <div style={{display:'flex',flexDirection:'column',gap:14,padding:16}}>
    {['sm','md','lg'].map(size=>{const z={sm:14,md:16,lg:18}[size];return(<div key={size} style={{display:'flex',gap:10,alignItems:'center'}}><span style={{width:32,fontSize:11,color:'#64748B',fontWeight:600,textTransform:'uppercase'}}>{size}</span><Button label="Primary" size={size} btnStyle="primary" iconLeft={<Plus size={z}/>}/><Button label="Secondary" size={size} btnStyle="secondary" iconLeft={<Check size={z}/>}/><Button label="Outline" size={size} btnStyle="outline" iconLeft={<Download size={z}/>}/><Button label="Ghost" size={size} btnStyle="ghost" iconLeft={<Settings size={z}/>}/><Button label="Danger" size={size} btnStyle="danger" iconLeft={<Trash size={z}/>}/><Button iconOnly={<Plus size={z}/>} size={size} btnStyle="primary" aria-label="icon-only"/></div>);})}
  </div>
)};
