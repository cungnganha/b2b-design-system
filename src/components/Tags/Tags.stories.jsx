import React, { useState } from 'react';
import { Tag } from './Tags';

export default {
  title: 'Components/Tags',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    variant:       { control: 'select', options: ['default','primary','success','warning','error','info'] },
    tagStyle:      { control: 'select', options: ['subtle','outline','solid'], name: 'style' },
    size:          { control: 'select', options: ['sm','md','lg'] },
    clickable:     { control: 'boolean' },
    removable:     { control: 'boolean' },
    avatar:        { control: 'boolean' },
    avatarInitials:{ control: 'text' },
    avatarColor:   { control: 'select', options: ['brand','gray','green','red','purple','orange'] },
    disabled:      { control: 'boolean' },
    label:         { control: 'text' },
  },
};

/* ── Default playground ── */
export const Default = {
  args: {
    label: 'Design System',
    variant: 'primary',
    tagStyle: 'subtle',
    size: 'md',
    clickable: false,
    removable: false,
    avatar: false,
  },
};

/* ── All Variants × Styles ── */
export const AllVariants = {
  name: 'All Variants × Styles',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:16, padding:16 }}>
      {['default','primary','success','warning','error','info'].map(v => (
        <div key={v} style={{ display:'flex', gap:8, alignItems:'center' }}>
          <span style={{ width:56, fontSize:11, color:'#64748B', fontFamily:'Lexend,sans-serif' }}>{v}</span>
          {['subtle','outline','solid'].map(s => (
            ['sm','md','lg'].map(sz => (
              <Tag key={s+sz} label={v} variant={v} tagStyle={s} size={sz} />
            ))
          ))}
        </div>
      ))}
    </div>
  ),
};

/* ── Clickable ── */
export const Clickable = {
  name: 'Clickable Tags',
  render: () => {
    const [active, setActive] = React.useState(null);
    const tags = ['React','TypeScript','Tailwind','Figma','Storybook'];
    return (
      <div style={{ display:'flex', flexDirection:'column', gap:20, padding:16 }}>
        <div>
          <p style={{ fontFamily:'Lexend,sans-serif', fontSize:12, color:'#94a3b8', marginBottom:8 }}>Click to select — subtle style</p>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {tags.map(t => (
              <Tag
                key={t}
                label={t}
                variant={active === t ? 'primary' : 'default'}
                tagStyle={active === t ? 'solid' : 'subtle'}
                size="md"
                clickable
                onClick={() => setActive(active === t ? null : t)}
              />
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontFamily:'Lexend,sans-serif', fontSize:12, color:'#94a3b8', marginBottom:8 }}>Clickable — all variants × outline</p>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {['default','primary','success','warning','error','info'].map(v => (
              <Tag key={v} label={v} variant={v} tagStyle="outline" size="md" clickable onClick={() => {}} />
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontFamily:'Lexend,sans-serif', fontSize:12, color:'#94a3b8', marginBottom:8 }}>Disabled clickable</p>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            <Tag label="Disabled" variant="primary" tagStyle="subtle" size="md" clickable disabled />
            <Tag label="Disabled" variant="default" tagStyle="outline" size="md" clickable disabled />
          </div>
        </div>
      </div>
    );
  },
};

/* ── Removable ── */
export const Removable = {
  name: 'Removable Tags',
  render: () => {
    const initList = ['Design','Engineering','Product','Marketing','Sales','Support'];
    const [items, setItems] = React.useState(initList);
    const remove = (t) => setItems(prev => prev.filter(x => x !== t));
    return (
      <div style={{ display:'flex', flexDirection:'column', gap:20, padding:16 }}>
        <div>
          <p style={{ fontFamily:'Lexend,sans-serif', fontSize:12, color:'#94a3b8', marginBottom:8 }}>Click × to remove — subtle</p>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap', minHeight:32 }}>
            {items.map(t => (
              <Tag key={t} label={t} variant="primary" tagStyle="subtle" size="md" removable onRemove={() => remove(t)} />
            ))}
            {items.length === 0 && (
              <span
                style={{ fontFamily:'Lexend,sans-serif', fontSize:12, color:'#94a3b8', cursor:'pointer' }}
                onClick={() => setItems(initList)}
              >
                All removed — click to reset
              </span>
            )}
          </div>
        </div>
        <div>
          <p style={{ fontFamily:'Lexend,sans-serif', fontSize:12, color:'#94a3b8', marginBottom:8 }}>Removable — all variants × subtle (sm)</p>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {['default','primary','success','warning','error','info'].map(v => (
              <Tag key={v} label={v} variant={v} tagStyle="subtle" size="sm" removable onRemove={() => {}} />
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontFamily:'Lexend,sans-serif', fontSize:12, color:'#94a3b8', marginBottom:8 }}>Removable — solid style (lg)</p>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {['default','primary','success','warning','error','info'].map(v => (
              <Tag key={v} label={v} variant={v} tagStyle="solid" size="lg" removable onRemove={() => {}} />
            ))}
          </div>
        </div>
      </div>
    );
  },
};

/* ── With Avatar ── */
export const WithAvatar = {
  name: 'With Avatar',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:20, padding:16 }}>
      <div>
        <p style={{ fontFamily:'Lexend,sans-serif', fontSize:12, color:'#94a3b8', marginBottom:8 }}>Avatar only — subtle, all sizes</p>
        <div style={{ display:'flex', gap:8, alignItems:'center' }}>
          <Tag label="Alice B." variant="primary" tagStyle="subtle" size="sm" avatar avatarInitials="AB" avatarColor="brand" />
          <Tag label="Alice B." variant="primary" tagStyle="subtle" size="md" avatar avatarInitials="AB" avatarColor="brand" />
          <Tag label="Alice B." variant="primary" tagStyle="subtle" size="lg" avatar avatarInitials="AB" avatarColor="brand" />
        </div>
      </div>
      <div>
        <p style={{ fontFamily:'Lexend,sans-serif', fontSize:12, color:'#94a3b8', marginBottom:8 }}>Avatar + removable</p>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          {[
            { label:'Alice B.', initials:'AB', color:'brand' },
            { label:'Carol D.', initials:'CD', color:'green' },
            { label:'Eve F.',   initials:'EF', color:'purple' },
            { label:'Grace H.', initials:'GH', color:'orange' },
          ].map(({ label, initials, color }) => (
            <Tag
              key={label}
              label={label}
              variant="default"
              tagStyle="outline"
              size="md"
              avatar
              avatarInitials={initials}
              avatarColor={color}
              removable
              onRemove={() => {}}
            />
          ))}
        </div>
      </div>
      <div>
        <p style={{ fontFamily:'Lexend,sans-serif', fontSize:12, color:'#94a3b8', marginBottom:8 }}>Avatar + clickable + removable</p>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          {[
            { label:'Bob C.',   initials:'BC', color:'red',    variant:'error' },
            { label:'Dan E.',   initials:'DE', color:'brand',  variant:'primary' },
            { label:'Frank G.', initials:'FG', color:'green',  variant:'success' },
          ].map(({ label, initials, color, variant }) => (
            <Tag
              key={label}
              label={label}
              variant={variant}
              tagStyle="subtle"
              size="md"
              avatar
              avatarInitials={initials}
              avatarColor={color}
              clickable
              removable
              onClick={() => {}}
              onRemove={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  ),
};

/* ── Sizes ── */
export const Sizes = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:20, padding:16 }}>
      {['sm','md','lg'].map(sz => (
        <div key={sz} style={{ display:'flex', gap:8, alignItems:'center' }}>
          <span style={{ width:24, fontSize:11, color:'#94a3b8', fontFamily:'Lexend,sans-serif' }}>{sz}</span>
          <Tag label="Label" variant="default" tagStyle="subtle" size={sz} />
          <Tag label="Primary" variant="primary" tagStyle="subtle" size={sz} />
          <Tag label="Clickable" variant="primary" tagStyle="outline" size={sz} clickable onClick={() => {}} />
          <Tag label="Removable" variant="primary" tagStyle="subtle" size={sz} removable onRemove={() => {}} />
          <Tag label="With Avatar" variant="default" tagStyle="outline" size={sz} avatar avatarInitials="AB" />
          <Tag label="All-in" variant="primary" tagStyle="subtle" size={sz} avatar avatarInitials="AB" removable clickable onClick={() => {}} onRemove={() => {}} />
        </div>
      ))}
    </div>
  ),
};

/* ── Full kitchen sink ── */
export const KitchenSink = {
  name: 'Kitchen Sink',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:24, padding:16 }}>
      <section>
        <h3 style={{ fontFamily:'Lexend,sans-serif', fontSize:12, fontWeight:600, color:'#334155', marginBottom:12 }}>Static (no interaction)</h3>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          {['default','primary','success','warning','error','info'].map(v =>
            ['subtle','outline','solid'].map(s => (
              <Tag key={v+s} label={v} variant={v} tagStyle={s} size="md" />
            ))
          )}
        </div>
      </section>
      <section>
        <h3 style={{ fontFamily:'Lexend,sans-serif', fontSize:12, fontWeight:600, color:'#334155', marginBottom:12 }}>Clickable</h3>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          {['default','primary','success','warning','error','info'].map(v => (
            <Tag key={v} label={v} variant={v} tagStyle="subtle" size="md" clickable onClick={() => {}} />
          ))}
        </div>
      </section>
      <section>
        <h3 style={{ fontFamily:'Lexend,sans-serif', fontSize:12, fontWeight:600, color:'#334155', marginBottom:12 }}>Removable</h3>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          {['default','primary','success','warning','error','info'].map(v => (
            <Tag key={v} label={v} variant={v} tagStyle="subtle" size="md" removable onRemove={() => {}} />
          ))}
        </div>
      </section>
      <section>
        <h3 style={{ fontFamily:'Lexend,sans-serif', fontSize:12, fontWeight:600, color:'#334155', marginBottom:12 }}>With Avatar</h3>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          <Tag label="Alice B."  variant="primary" tagStyle="subtle"  size="md" avatar avatarInitials="AB" avatarColor="brand" />
          <Tag label="Bob C."    variant="error"   tagStyle="subtle"  size="md" avatar avatarInitials="BC" avatarColor="red" />
          <Tag label="Carol D."  variant="success" tagStyle="outline" size="md" avatar avatarInitials="CD" avatarColor="green" />
          <Tag label="David E."  variant="default" tagStyle="outline" size="md" avatar avatarInitials="DE" avatarColor="gray" removable onRemove={() => {}} />
          <Tag label="Eve F."    variant="primary" tagStyle="subtle"  size="md" avatar avatarInitials="EF" avatarColor="purple" clickable removable onClick={() => {}} onRemove={() => {}} />
        </div>
      </section>
      <section>
        <h3 style={{ fontFamily:'Lexend,sans-serif', fontSize:12, fontWeight:600, color:'#334155', marginBottom:12 }}>Disabled</h3>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          <Tag label="Static"    variant="default" tagStyle="subtle"  size="md" disabled />
          <Tag label="Clickable" variant="primary" tagStyle="subtle"  size="md" clickable disabled />
          <Tag label="Removable" variant="primary" tagStyle="outline" size="md" removable disabled />
          <Tag label="Avatar"    variant="default" tagStyle="outline" size="md" avatar avatarInitials="AB" disabled />
        </div>
      </section>
    </div>
  ),
};
