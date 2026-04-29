#!/bin/bash
# ================================================================
# B2B Design System — Auto Fix All Components
# Chạy: bash fix-all.sh
# ================================================================

set -e
CYAN='\033[0;36m'; GREEN='\033[0;32m'; RED='\033[0;31m'; YELLOW='\033[1;33m'; NC='\033[0m'
log()  { echo -e "${CYAN}▶ $1${NC}"; }
ok()   { echo -e "${GREEN}✅ $1${NC}"; }
warn() { echo -e "${YELLOW}⚠ $1${NC}"; }

PROJECT="/Users/nganhacung/Downloads/b2b-design-system"
cd "$PROJECT" || { echo -e "${RED}❌ Không tìm thấy thư mục project${NC}"; exit 1; }
ok "Đang ở: $PROJECT"

# ================================================================
log "1/9 — Tạo thư mục Icons..."
mkdir -p src/components/Icons
ok "Icons dir ready"

# ================================================================
log "2/9 — Tạo icon system (30+ Iconstica icons)..."
cat > src/components/Icons/icons.jsx << 'ICONEOF'
import React from 'react';

const Icon = ({ size = 16, color = 'currentColor', children, title, className, style, ...props }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke={color} strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round"
    className={className} style={style}
    aria-hidden={!title} role={title ? 'img' : undefined} {...props}
  >
    {title && <title>{title}</title>}
    {children}
  </svg>
);

/* Semantic */
export const CheckCircle   = p => <Icon {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></Icon>;
export const XCircle       = p => <Icon {...p}><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></Icon>;
export const InfoCircle    = p => <Icon {...p}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></Icon>;
export const AlertTriangle = p => <Icon {...p}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></Icon>;

/* Navigation */
export const ChevronDown  = p => <Icon {...p}><polyline points="6 9 12 15 18 9"/></Icon>;
export const ChevronUp    = p => <Icon {...p}><polyline points="18 15 12 9 6 15"/></Icon>;
export const ChevronLeft  = p => <Icon {...p}><polyline points="15 18 9 12 15 6"/></Icon>;
export const ChevronRight = p => <Icon {...p}><polyline points="9 18 15 12 9 6"/></Icon>;
export const ArrowRight   = p => <Icon {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></Icon>;
export const ArrowLeft    = p => <Icon {...p}><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></Icon>;
export const ArrowUp      = p => <Icon {...p}><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></Icon>;
export const ArrowDown    = p => <Icon {...p}><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></Icon>;

/* Actions */
export const Plus     = p => <Icon {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></Icon>;
export const Minus    = p => <Icon {...p}><line x1="5" y1="12" x2="19" y2="12"/></Icon>;
export const X        = p => <Icon {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></Icon>;
export const Check    = p => <Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>;
export const Search   = p => <Icon {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></Icon>;
export const Eye      = p => <Icon {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></Icon>;
export const EyeOff   = p => <Icon {...p}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></Icon>;
export const Edit     = p => <Icon {...p}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></Icon>;
export const Trash    = p => <Icon {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></Icon>;
export const Download = p => <Icon {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></Icon>;
export const Upload   = p => <Icon {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></Icon>;
export const Copy     = p => <Icon {...p}><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></Icon>;
export const Link     = p => <Icon {...p}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></Icon>;
export const Refresh  = p => <Icon {...p}><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></Icon>;
export const Filter   = p => <Icon {...p}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></Icon>;
export const Calendar = p => <Icon {...p}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></Icon>;
export const Clock    = p => <Icon {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></Icon>;
export const User     = p => <Icon {...p}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></Icon>;
export const Home     = p => <Icon {...p}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></Icon>;
export const Heart    = p => <Icon {...p}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></Icon>;
export const Star     = p => <Icon {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></Icon>;
export const Bell     = p => <Icon {...p}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></Icon>;
export const Settings = p => <Icon {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></Icon>;
export const LogOut   = p => <Icon {...p}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></Icon>;
export const Lock     = p => <Icon {...p}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></Icon>;
export const Mail     = p => <Icon {...p}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></Icon>;
export const Phone    = p => <Icon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91A16 16 0 0 0 13 14.82l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></Icon>;
export const Globe    = p => <Icon {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></Icon>;
export const Share    = p => <Icon {...p}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></Icon>;
export const Maximize = p => <Icon {...p}><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></Icon>;
export const Grid     = p => <Icon {...p}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></Icon>;

export const Icons = {
  CheckCircle, XCircle, InfoCircle, AlertTriangle,
  ChevronDown, ChevronUp, ChevronLeft, ChevronRight,
  ArrowRight, ArrowLeft, ArrowUp, ArrowDown,
  Plus, Minus, X, Check, Search, Eye, EyeOff, Edit, Trash,
  Download, Upload, Copy, Link, Refresh, Filter,
  Calendar, Clock, User, Home, Heart, Star,
  Bell, Settings, LogOut, Lock, Mail, Phone, Globe, Share, Maximize, Grid,
};
export default Icons;
ICONEOF
ok "icons.jsx created"

# ================================================================
log "3/9 — Icons stories..."
cat > src/components/Icons/Icons.stories.jsx << 'EOF'
import React from 'react';
import { Icons } from './icons';

export default {
  title: 'Foundations/Icons',
  parameters: {
    options: { showPanel: false },
    docs: { description: { component: '**Icons** — Iconstica v1.1.0-premium · Inline SVG · `stroke=currentColor` · viewBox 0 0 24 24\n\n```jsx\nimport { Search } from \'../Icons/icons\';\n<Search size={16} color="#226FF6" />\n```' } },
  },
};

const GROUPS = {
  'Semantic':   ['CheckCircle','XCircle','InfoCircle','AlertTriangle'],
  'Navigation': ['ChevronDown','ChevronUp','ChevronLeft','ChevronRight','ArrowRight','ArrowLeft','ArrowUp','ArrowDown'],
  'Actions':    ['Plus','Minus','X','Check','Search','Eye','EyeOff','Edit','Trash','Download','Upload','Copy','Link','Refresh','Filter'],
  'General':    ['Calendar','Clock','User','Home','Heart','Star','Bell','Settings','LogOut','Lock','Mail','Phone','Globe','Share','Grid'],
};
const SEMANTIC_COLOR = { CheckCircle:'#22C55E', XCircle:'#EF4444', InfoCircle:'#226FF6', AlertTriangle:'#EAB308' };

export const AllIcons = {
  name: 'All Icons',
  render: () => (
    <div style={{ fontFamily:'Lexend,sans-serif', padding:24 }}>
      <h2 style={{ fontSize:20, fontWeight:600, marginBottom:4 }}>Icon Library</h2>
      <p style={{ fontSize:13, color:'#64748B', marginBottom:32 }}>Source: Iconstica v1.1.0-premium · Style: Line · Inline SVG · stroke=currentColor</p>
      {Object.entries(GROUPS).map(([group, names]) => (
        <div key={group} style={{ marginBottom:32 }}>
          <p style={{ fontSize:11, fontWeight:600, color:'#94A3B8', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:12 }}>{group}</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {names.map(name => {
              const Comp = Icons[name];
              return Comp ? (
                <div key={name} style={{ display:'flex',flexDirection:'column',alignItems:'center',gap:8,padding:'12px 16px',border:'1px solid #F1F5F9',borderRadius:8,minWidth:80,background:'#FAFAFA',cursor:'default' }}>
                  <Comp size={20} color={SEMANTIC_COLOR[name] || '#334155'} />
                  <span style={{ fontSize:10, color:'#64748B', textAlign:'center', lineHeight:1.4 }}>{name}</span>
                </div>
              ) : null;
            })}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Sizes = {
  name: 'Sizes',
  render: () => (
    <div style={{ display:'flex', gap:24, alignItems:'flex-end', padding:24 }}>
      {[12,14,16,18,20,24,32].map(sz => (
        <div key={sz} style={{ display:'flex',flexDirection:'column',alignItems:'center',gap:8 }}>
          <Icons.Search size={sz} color="#226FF6" />
          <span style={{ fontSize:10, color:'#94A3B8' }}>{sz}px</span>
        </div>
      ))}
    </div>
  ),
};

export const SemanticColors = {
  name: 'Semantic Colors',
  render: () => (
    <div style={{ display:'flex', gap:12, padding:24, flexWrap:'wrap' }}>
      {[{n:'Info',I:Icons.InfoCircle,c:'#226FF6',bg:'#EBF3FF'},{n:'Success',I:Icons.CheckCircle,c:'#22C55E',bg:'#F0FDF4'},{n:'Warning',I:Icons.AlertTriangle,c:'#EAB308',bg:'#FEFCE8'},{n:'Error',I:Icons.XCircle,c:'#EF4444',bg:'#FFF1F2'}].map(({n,I,c,bg})=>(
        <div key={n} style={{ display:'flex',alignItems:'center',gap:8,padding:'10px 20px',borderRadius:8,background:bg }}>
          <I size={18} color={c} />
          <span style={{ fontSize:13, color:c, fontFamily:'Lexend,sans-serif', fontWeight:500 }}>{n}</span>
        </div>
      ))}
    </div>
  ),
};
EOF
ok "Icons.stories.jsx created"

# ================================================================
log "4/9 — Fix Button (icon colors per style)..."
cat > src/components/Button/Button.jsx << 'EOF'
import React from 'react';
import './Button.css';

export const Button = ({
  label = 'Button',
  size = 'md',
  btnStyle = 'primary',
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  iconOnly = null,
  onClick,
  ...props
}) => {
  const cls = [
    'ds-btn', `ds-btn--${size}`, `ds-btn--${btnStyle}`,
    disabled && 'ds-btn--disabled',
    loading  && 'ds-btn--loading',
    iconOnly && 'ds-btn--icon-only',
  ].filter(Boolean).join(' ');

  return (
    <button className={cls} disabled={disabled || loading} onClick={onClick} {...props}>
      {loading && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" className="ds-btn__spinner">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg>
      )}
      {!loading && iconLeft  && <span className="ds-btn__icon">{iconLeft}</span>}
      {!iconOnly && <span className="ds-btn__label">{label}</span>}
      {iconOnly  && <span className="ds-btn__icon">{iconOnly}</span>}
      {!loading && iconRight && <span className="ds-btn__icon">{iconRight}</span>}
    </button>
  );
};
export default Button;
EOF

cat > src/components/Button/Button.css << 'EOF'
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap');

.ds-btn {
  display: inline-flex; align-items: center; justify-content: center;
  font-family: 'Lexend', sans-serif; font-weight: 500;
  border: 1.5px solid transparent; border-radius: 6px;
  cursor: pointer; white-space: nowrap; outline: none;
  transition: background 120ms ease, border-color 120ms ease, box-shadow 120ms ease;
}
.ds-btn:focus-visible { box-shadow: 0 0 0 3px rgba(34,111,246,0.25); }

/* Sizes */
.ds-btn--sm { height:32px; padding:0 12px; gap:6px;  font-size:14px; }
.ds-btn--md { height:40px; padding:0 16px; gap:8px;  font-size:16px; }
.ds-btn--lg { height:48px; padding:0 20px; gap:10px; font-size:18px; font-weight:600; }

/* Icon only — square */
.ds-btn--icon-only.ds-btn--sm { width:32px; padding:0; }
.ds-btn--icon-only.ds-btn--md { width:40px; padding:0; }
.ds-btn--icon-only.ds-btn--lg { width:48px; padding:0; }

/* ── Styles ── */
.ds-btn--primary   { background:#226FF6; color:#fff; }
.ds-btn--primary:hover:not(:disabled)  { background:#1757D4; }
.ds-btn--primary:active:not(:disabled) { background:#1142AD; }

.ds-btn--secondary   { background:#EBF3FF; color:#1142AD; }
.ds-btn--secondary:hover:not(:disabled)  { background:#D0E5FF; }

.ds-btn--outline   { background:#fff; color:#1142AD; border-color:#7AB1FF; }
.ds-btn--outline:hover:not(:disabled)  { background:#EBF3FF; }
.ds-btn--outline:active:not(:disabled) { background:#D0E5FF; border-color:#226FF6; }

.ds-btn--ghost   { background:transparent; color:#1142AD; }
.ds-btn--ghost:hover:not(:disabled)  { background:#EBF3FF; }
.ds-btn--ghost:active:not(:disabled) { background:#D0E5FF; }

.ds-btn--danger   { background:#EF4444; color:#fff; }
.ds-btn--danger:hover:not(:disabled)  { background:#DC2626; }
.ds-btn--danger:active:not(:disabled) { background:#B91C1C; }

/* Disabled */
.ds-btn--disabled, .ds-btn:disabled {
  background:#F1F5F9; color:#94A3B8;
  border-color:transparent; cursor:not-allowed; pointer-events:none;
}

/* Loading */
.ds-btn--loading { cursor:wait; opacity:0.85; }
.ds-btn__spinner { animation:ds-spin 0.8s linear infinite; flex-shrink:0; }
@keyframes ds-spin { to { transform:rotate(360deg); } }

/* Icon slot — color always inherits from button text color */
.ds-btn__icon {
  display:inline-flex; align-items:center; flex-shrink:0; color:inherit;
}
.ds-btn__icon svg { stroke:currentColor; }
EOF

cat > src/components/Button/Button.stories.jsx << 'EOF'
import React from 'react';
import { Button } from './Button';
import { Plus, Trash, Check, Search, Download, Settings, ArrowRight, ChevronRight, Edit, Upload } from '../Icons/icons';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `**Button** — Tailwind-aligned. Icons từ Iconstica v1.1.0-premium (inline SVG, stroke=currentColor).

| Dimension | Values |
|--|--|
| **Size** | SM h-8·32px · MD h-10·40px · LG h-12·48px |
| **Style** | Primary · Secondary · Outline · Ghost · Danger |
| **State** | Default · Disabled · Loading |
| **Icon** | None · Left · Right · Only |

> ⚡ **Loading** = boolean prop (không phải State variant) — shadcn/Radix convention.`,
      },
    },
  },
  argTypes: {
    size:     { control: 'select', options: ['sm','md','lg'] },
    btnStyle: { control: 'select', options: ['primary','secondary','outline','ghost','danger'], name: 'style' },
    disabled: { control: 'boolean' },
    loading:  { control: 'boolean' },
    label:    { control: 'text' },
  },
};

export const Default = { args: { label: 'Button', size: 'md', btnStyle: 'primary' } };

export const AllStyles = {
  name: 'All Styles',
  render: () => (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'center', padding:16 }}>
      <Button label="Primary"   btnStyle="primary"   size="md" iconLeft={<Plus size={16} />} />
      <Button label="Secondary" btnStyle="secondary" size="md" iconLeft={<Check size={16} />} />
      <Button label="Outline"   btnStyle="outline"   size="md" iconLeft={<Download size={16} />} />
      <Button label="Ghost"     btnStyle="ghost"     size="md" iconLeft={<Settings size={16} />} />
      <Button label="Danger"    btnStyle="danger"    size="md" iconLeft={<Trash size={16} />} />
    </div>
  ),
};

export const AllSizes = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display:'flex', gap:12, alignItems:'center', padding:16 }}>
      <Button label="Small (32px)"  size="sm" btnStyle="primary" iconLeft={<Plus size={14} />} />
      <Button label="Medium (40px)" size="md" btnStyle="primary" iconLeft={<Plus size={16} />} />
      <Button label="Large (48px)"  size="lg" btnStyle="primary" iconLeft={<Plus size={18} />} />
    </div>
  ),
};

const Row = ({ l, children }) => (
  <div style={{ display:'flex', gap:12, alignItems:'center' }}>
    <span style={{ width:90, fontSize:11, color:'#64748B', flexShrink:0 }}>{l}</span>
    {children}
  </div>
);

export const IconPositions = {
  name: 'Icon Positions',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:16, padding:16 }}>
      <Row l="No icon">
        <Button label="Button" size="md" btnStyle="primary" />
        <Button label="Button" size="md" btnStyle="outline" />
        <Button label="Button" size="md" btnStyle="ghost" />
      </Row>
      <Row l="Icon left">
        <Button label="Add"      size="md" btnStyle="primary"   iconLeft={<Plus size={16} />} />
        <Button label="Search"   size="md" btnStyle="outline"   iconLeft={<Search size={16} />} />
        <Button label="Upload"   size="md" btnStyle="secondary" iconLeft={<Upload size={16} />} />
      </Row>
      <Row l="Icon right">
        <Button label="Continue" size="md" btnStyle="primary" iconRight={<ArrowRight size={16} />} />
        <Button label="More"     size="md" btnStyle="outline" iconRight={<ChevronRight size={16} />} />
      </Row>
      <Row l="Icon only">
        {['sm','md','lg'].map(s => {
          const z = {sm:14,md:16,lg:18}[s];
          return <Button key={s} iconOnly={<Plus size={z} />} size={s} btnStyle="primary" aria-label="add" />;
        })}
        <Button iconOnly={<Search size={16} />}   size="md" btnStyle="outline"   aria-label="search" />
        <Button iconOnly={<Settings size={16} />} size="md" btnStyle="ghost"     aria-label="settings" />
        <Button iconOnly={<Trash size={16} />}    size="md" btnStyle="danger"    aria-label="delete" />
      </Row>
    </div>
  ),
};

export const States = {
  name: 'States',
  render: () => (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'center', padding:16 }}>
      <Button label="Default"    size="md" btnStyle="primary" />
      <Button label="Disabled"   size="md" btnStyle="primary" disabled />
      <Button label="Loading..." size="md" btnStyle="primary" loading />
      <Button label="Disabled"   size="md" btnStyle="outline" disabled />
      <Button label="Loading..." size="md" btnStyle="outline" loading />
    </div>
  ),
};

export const Danger = {
  name: 'Danger',
  render: () => (
    <div style={{ display:'flex', gap:12, alignItems:'center', padding:16 }}>
      <Button label="Delete item" size="md" btnStyle="danger" iconLeft={<Trash size={16} />} />
      <Button label="Delete"      size="sm" btnStyle="danger" iconLeft={<Trash size={14} />} />
      <Button label="Disabled"    size="md" btnStyle="danger" disabled />
      <Button iconOnly={<Trash size={16} />} size="md" btnStyle="danger" aria-label="delete-md" />
      <Button iconOnly={<Trash size={14} />} size="sm" btnStyle="danger" aria-label="delete-sm" />
    </div>
  ),
};

export const FullGrid = {
  name: 'Full Grid — All Sizes × Styles',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:14, padding:16 }}>
      {['sm','md','lg'].map(size => {
        const z = {sm:14,md:16,lg:18}[size];
        return (
          <div key={size} style={{ display:'flex', gap:10, alignItems:'center' }}>
            <span style={{ width:32, fontSize:11, color:'#64748B', fontWeight:600, textTransform:'uppercase' }}>{size}</span>
            <Button label="Primary"   size={size} btnStyle="primary"   iconLeft={<Plus size={z} />} />
            <Button label="Secondary" size={size} btnStyle="secondary" iconLeft={<Check size={z} />} />
            <Button label="Outline"   size={size} btnStyle="outline"   iconLeft={<Download size={z} />} />
            <Button label="Ghost"     size={size} btnStyle="ghost"     iconLeft={<Settings size={z} />} />
            <Button label="Danger"    size={size} btnStyle="danger"    iconLeft={<Trash size={z} />} />
            <Button iconOnly={<Plus size={z} />} size={size} btnStyle="primary" aria-label="icon-only" />
          </div>
        );
      })}
    </div>
  ),
};
EOF
ok "Button fixed"

# ================================================================
log "5/9 — Fix Input (width, icons, no render error)..."
cat > src/components/Input/Input.jsx << 'EOF'
import React from 'react';
import './Input.css';

export const Input = ({
  placeholder = 'Placeholder text',
  size = 'md',
  state = 'default',
  value,
  onChange,
  iconLeft = null,
  iconRight = null,
  label = null,
  helperText = null,
  type = 'text',
}) => (
  <div className={['ds-input-wrap', `ds-input-wrap--${size}`].join(' ')}>
    {label && <label className="ds-input__label">{label}</label>}
    <div className={['ds-input-field', `ds-input-field--${size}`, `ds-input-field--${state}`].join(' ')}>
      {iconLeft  && <span className="ds-input__icon">{iconLeft}</span>}
      <input
        className="ds-input__el"
        type={type}
        placeholder={placeholder}
        value={value !== undefined ? value : undefined}
        onChange={onChange || (() => {})}
        disabled={state === 'disabled'}
      />
      {iconRight && <span className="ds-input__icon">{iconRight}</span>}
    </div>
    {helperText && (
      <p className={['ds-input__helper', state === 'error' && 'ds-input__helper--error'].filter(Boolean).join(' ')}>
        {helperText}
      </p>
    )}
  </div>
);
export default Input;
EOF

cat > src/components/Input/Input.css << 'EOF'
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap');

.ds-input-wrap {
  display: flex; flex-direction: column; gap: 6px;
  width: 100%; max-width: 400px;
}

.ds-input__label {
  font-family: 'Lexend', sans-serif; font-weight: 500; color: #0F172A;
}
.ds-input-wrap--sm .ds-input__label { font-size: 12px; }
.ds-input-wrap--md .ds-input__label { font-size: 13px; }
.ds-input-wrap--lg .ds-input__label { font-size: 15px; }

.ds-input-field {
  display: flex; align-items: center; width: 100%;
  background: #fff; border: 1.5px solid #E2E8F0; border-radius: 6px;
  transition: border-color 120ms, box-shadow 120ms; box-sizing: border-box;
}
.ds-input-field--sm { height:32px; padding:0 12px; gap:6px; }
.ds-input-field--md { height:40px; padding:0 16px; gap:8px; }
.ds-input-field--lg { height:48px; padding:0 20px; gap:10px; }

.ds-input-field:focus-within,
.ds-input-field--focus  { border-color:#226FF6; box-shadow:0 0 0 3px rgba(34,111,246,0.15); }
.ds-input-field--filled { border-color:#CBD5E1; }
.ds-input-field--error  { border-color:#EF4444; }
.ds-input-field--error:focus-within { box-shadow:0 0 0 3px rgba(239,68,68,0.15); }
.ds-input-field--disabled { background:#F8FAFC; border-color:#E2E8F0; pointer-events:none; }

.ds-input__el {
  flex:1; min-width:0; border:none; outline:none;
  background:transparent; font-family:'Lexend',sans-serif; color:#0F172A;
}
.ds-input-field--sm .ds-input__el { font-size:13px; }
.ds-input-field--md .ds-input__el { font-size:14px; }
.ds-input-field--lg .ds-input__el { font-size:16px; }
.ds-input__el::placeholder { color:#94A3B8; }
.ds-input__el:disabled     { color:#94A3B8; }

.ds-input__icon { display:inline-flex; align-items:center; flex-shrink:0; color:#64748B; }
.ds-input__icon svg { stroke:currentColor; }

.ds-input__helper { margin:0; font-family:'Lexend',sans-serif; font-size:12px; line-height:16px; color:#64748B; }
.ds-input__helper--error { color:#B91C1C; }
EOF

cat > src/components/Input/Input.stories.jsx << 'EOF'
import React from 'react';
import { Input } from './Input';
import { Search, Eye, EyeOff, User, Mail, Lock, Phone } from '../Icons/icons';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `**Input** — Form text field. Tailwind-aligned sizes. Icons từ Iconstica v1.1.0.

| Size | Height | Padding | Font |
|------|--------|---------|------|
| SM | 32px (h-8) | px-3 | 13px |
| MD | 40px (h-10) | px-4 | 14px |
| LG | 48px (h-12) | px-5 | 16px |`,
      },
    },
  },
  argTypes: {
    size:        { control: 'select', options: ['sm','md','lg'] },
    state:       { control: 'select', options: ['default','focus','filled','disabled','error'] },
    placeholder: { control: 'text' },
    label:       { control: 'text' },
    helperText:  { control: 'text' },
  },
};

export const Default = { args: { placeholder: 'Enter text...', size: 'md', state: 'default' } };

export const WithLabel = {
  name: 'With Label',
  args: { label: 'Field label', placeholder: 'Enter text...', size: 'md', helperText: 'Helper or hint text.' },
};

export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:16, padding:16 }}>
      <Input label="Default"  placeholder="Placeholder..."  size="md" state="default" />
      <Input label="Focus"    placeholder="Active focus..."  size="md" state="focus" />
      <Input label="Filled"   placeholder=""  size="md" state="filled" value="Some entered value" onChange={() => {}} />
      <Input label="Disabled" placeholder="Cannot edit"     size="md" state="disabled" />
      <Input label="Error"    placeholder="Enter value..."   size="md" state="error" helperText="This field is required." />
    </div>
  ),
};

export const AllSizes = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:12, padding:16 }}>
      <Input placeholder="Small — 32px (h-8)"   size="sm" />
      <Input placeholder="Medium — 40px (h-10)" size="md" />
      <Input placeholder="Large — 48px (h-12)"  size="lg" />
    </div>
  ),
};

export const WithIcons = {
  name: 'With Icons',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:12, padding:16 }}>
      <Input placeholder="Search..."     size="md" iconLeft={<Search size={16} />} label="Search" />
      <Input placeholder="Username"      size="md" iconLeft={<User size={16} />}   label="Username" />
      <Input placeholder="Email"         size="md" iconLeft={<Mail size={16} />}   label="Email" />
      <Input placeholder="Phone"         size="md" iconLeft={<Phone size={16} />}  label="Phone" />
      <Input placeholder="Password"      size="md" iconLeft={<Lock size={16} />}   iconRight={<Eye size={16} />} type="password" label="Password" />
      <Input placeholder="Show password" size="md" iconLeft={<Lock size={16} />}   iconRight={<EyeOff size={16} />} label="Password (visible)" />
    </div>
  ),
};
EOF
ok "Input fixed"

# ================================================================
log "6/9 — Fix Tooltip (Dark only, no Light)..."
cat > src/components/Tooltip/Tooltip.jsx << 'EOF'
import React, { useState } from 'react';
import './Tooltip.css';

export const Tooltip = ({ content = 'Tooltip message', position = 'top', children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <span className="ds-tooltip-wrapper" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {children || <button className="ds-tooltip-trigger">Hover me</button>}
      {visible && (
        <span className={['ds-tooltip', `ds-tooltip--${position}`].join(' ')} role="tooltip">
          {content}
        </span>
      )}
    </span>
  );
};
export default Tooltip;
EOF

cat > src/components/Tooltip/Tooltip.css << 'EOF'
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap');

.ds-tooltip-wrapper { position:relative; display:inline-flex; }

.ds-tooltip-trigger {
  border:1px solid #E2E8F0; background:#fff; padding:6px 16px;
  border-radius:6px; cursor:default; font-family:'Lexend',sans-serif; font-size:14px; color:#0F172A;
}

.ds-tooltip {
  position:absolute; z-index:9999; pointer-events:none;
  padding:7px 10px; border-radius:8px;
  background:#0F172A; color:#fff;
  font-family:'Lexend',sans-serif; font-size:12px; font-weight:400;
  line-height:16px; white-space:nowrap;
  box-shadow:0 4px 8px rgba(16,24,40,0.12);
}

/* Arrows */
.ds-tooltip::after {
  content:''; position:absolute;
  border:5px solid transparent;
}

/* Top — tooltip above, arrow points down */
.ds-tooltip--top    { bottom:calc(100% + 8px); left:50%; transform:translateX(-50%); }
.ds-tooltip--top::after    { top:100%; left:50%; transform:translateX(-50%); border-top-color:#0F172A; }

/* Bottom — tooltip below, arrow points up */
.ds-tooltip--bottom { top:calc(100% + 8px); left:50%; transform:translateX(-50%); }
.ds-tooltip--bottom::after { bottom:100%; left:50%; transform:translateX(-50%); border-bottom-color:#0F172A; }

/* Left — tooltip left, arrow points right */
.ds-tooltip--left   { right:calc(100% + 8px); top:50%; transform:translateY(-50%); }
.ds-tooltip--left::after   { left:100%; top:50%; transform:translateY(-50%); border-left-color:#0F172A; }

/* Right — tooltip right, arrow points left */
.ds-tooltip--right  { left:calc(100% + 8px); top:50%; transform:translateY(-50%); }
.ds-tooltip--right::after  { right:100%; top:50%; transform:translateY(-50%); border-right-color:#0F172A; }
EOF

cat > src/components/Tooltip/Tooltip.stories.jsx << 'EOF'
import React from 'react';
import { Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `**Tooltip** — Dark variant only. 4 positions. Body/XS (12px · 16px lh) · padding 7px 10px · radius 8px · Shadow/MD.

> Hover the trigger element to see the tooltip.`,
      },
    },
  },
  argTypes: {
    position: { control: 'select', options: ['top','bottom','left','right'] },
    content:  { control: 'text' },
  },
};

export const Default = { args: { content: 'Tooltip message', position: 'top' } };

export const AllPositions = {
  name: 'All Positions',
  render: () => (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, padding:80 }}>
      {[
        { pos:'top',    label:'Top — appears above' },
        { pos:'bottom', label:'Bottom — appears below' },
        { pos:'left',   label:'Left — appears left' },
        { pos:'right',  label:'Right — appears right' },
      ].map(({ pos, label }) => (
        <div key={pos} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
          <Tooltip content={`Appears ${pos}`} position={pos}>
            <span style={{ padding:'8px 20px', border:'1px solid #E2E8F0', borderRadius:6, fontSize:13, fontFamily:'Lexend,sans-serif', cursor:'default', background:'#fff' }}>
              Hover me ({pos})
            </span>
          </Tooltip>
          <span style={{ fontSize:11, color:'#94A3B8' }}>{label}</span>
        </div>
      ))}
    </div>
  ),
};

export const LongContent = {
  name: 'Long Content',
  args: { content: 'This tooltip contains a longer message with additional context.', position: 'top' },
};
EOF
ok "Tooltip fixed (Dark only)"

# ================================================================
log "7/9 — Fix Alert stories (đúng icon per variant)..."
cat > src/components/Alert/Alert.jsx << 'EOF'
import React from 'react';
import './Alert.css';

const ICONS = {
  info:    ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  ),
  success: ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  warning: ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
      <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  ),
  error: ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
    </svg>
  ),
};

const CLOSE_ICON = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export const Alert = ({
  variant = 'info',
  style = 'subtle',
  size = 'md',
  title,
  description = 'Alert description with additional context.',
  showClose = true,
  onClose,
}) => {
  const IconComp = ICONS[variant];
  const iconSize = size === 'sm' ? 14 : 18;
  const closeSize = size === 'sm' ? 14 : 16;

  return (
    <div className={['ds-alert', `ds-alert--${variant}`, `ds-alert--${style}`, `ds-alert--${size}`].join(' ')} role="alert">
      <span className="ds-alert__icon">
        {IconComp && <IconComp size={iconSize} />}
      </span>
      <div className="ds-alert__content">
        {title && <p className="ds-alert__title">{title}</p>}
        <p className="ds-alert__description">{description}</p>
      </div>
      {showClose && (
        <button className="ds-alert__close" onClick={onClose} aria-label="Close">
          <CLOSE_ICON size={closeSize} />
        </button>
      )}
    </div>
  );
};
export default Alert;
EOF
ok "Alert fixed (inline SVG icons, correct per variant)"

# ================================================================
log "8/9 — Fix Checkbox, Radio, Toggle, Badge, Avatar stories (React import)..."

# Checkbox
sed -i '' '1s/^/import React from '"'"'react'"'"';\n/' src/components/Checkbox/Checkbox.jsx 2>/dev/null || true
sed -i '' '1s/^/import React from '"'"'react'"'"';\n/' src/components/Checkbox/Checkbox.stories.jsx 2>/dev/null || true
sed -i '' '1s/^/import React from '"'"'react'"'"';\n/' src/components/Radio/Radio.jsx 2>/dev/null || true
sed -i '' '1s/^/import React from '"'"'react'"'"';\n/' src/components/Radio/Radio.stories.jsx 2>/dev/null || true
sed -i '' '1s/^/import React from '"'"'react'"'"';\n/' src/components/Toggle/Toggle.jsx 2>/dev/null || true
sed -i '' '1s/^/import React from '"'"'react'"'"';\n/' src/components/Toggle/Toggle.stories.jsx 2>/dev/null || true
sed -i '' '1s/^/import React from '"'"'react'"'"';\n/' src/components/Avatar/Avatar.jsx 2>/dev/null || true
sed -i '' '1s/^/import React from '"'"'react'"'"';\n/' src/components/Avatar/Avatar.stories.jsx 2>/dev/null || true

# Check if React already imported (avoid duplicate)
for f in src/components/Checkbox/Checkbox.jsx src/components/Radio/Radio.jsx src/components/Toggle/Toggle.jsx src/components/Avatar/Avatar.jsx; do
  if [ -f "$f" ]; then
    COUNT=$(grep -c "import React" "$f" || true)
    if [ "$COUNT" -gt 1 ]; then
      # Remove duplicate by keeping only first occurrence area
      awk '!seen[$0]++ || !/import React/' "$f" > "$f.tmp" && mv "$f.tmp" "$f"
    fi
  fi
done
ok "Component React imports checked"

# ================================================================
log "9/9 — Fix preview.js..."
cat > .storybook/preview.js << 'EOF'
import React from 'react';
import '../src/tokens/tokens.css';

const preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    layout: 'padded',
    backgrounds: {
      default: 'white',
      values: [
        { name:'white',   value:'#FFFFFF' },
        { name:'surface', value:'#F8FAFC' },
        { name:'dark',    value:'#0F172A' },
      ],
    },
    options: {
      storySort: {
        order: [
          'Foundations', ['Colors','Typography','Icons'],
          'Components',  ['Button','Input','Checkbox','Radio','Toggle','Badge','Alert','Tooltip','Avatar'],
        ],
      },
    },
  },
};
export default preview;
EOF
ok "preview.js fixed"

# ================================================================
echo ""
echo -e "${GREEN}═══════════════════════════════════════${NC}"
echo -e "${GREEN}✅ TẤT CẢ FIX XONG! Đang push lên GitHub...${NC}"
echo -e "${GREEN}═══════════════════════════════════════${NC}"
echo ""

git add .
git status --short
git commit -m "fix: icon system, Button colors, Input width+icons, Alert inline SVG, Tooltip dark-only, all components" || echo "Nothing new to commit"
git push

echo ""
echo -e "${GREEN}🎉 XONG! Chờ ~3 phút rồi mở:${NC}"
echo -e "${CYAN}https://cungnganha.github.io/b2b-design-system/${NC}"
