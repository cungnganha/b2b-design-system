#!/bin/bash
# ================================================================
# B2B Design System — Full Audit + Fix + Clean + Push
# Usage: bash auto-fix.sh
# ================================================================
set -e

GREEN='\033[0;32m'; CYAN='\033[0;36m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'
ok()  { echo -e "${GREEN}✅ $1${NC}"; }
log() { echo -e "${CYAN}▶  $1${NC}"; }
warn(){ echo -e "${YELLOW}⚠  $1${NC}"; }
err() { echo -e "${RED}❌ $1${NC}"; exit 1; }
sep() { echo -e "\n${CYAN}══════════════════════════════════${NC}\n"; }

# ── Tìm project ──────────────────────────────────────────────
for P in \
  "/Users/nganhacung/Works/HACUNG_AI/b2b-design-system" \
  "/Users/nganhacung/Downloads/b2b-design-system" \
  "$HOME/b2b-design-system"; do
  [ -f "$P/package.json" ] && W="$P" && break
done
[ -z "${W:-}" ] && err "Không tìm thấy project. Chạy từ thư mục có package.json"
ok "Project: $W"
cd "$W"

# ════════════════════════════════════════
sep; echo -e "${CYAN}PHASE 1 — CLEAN FILE THỪA${NC}"; sep
# ════════════════════════════════════════

log "Xóa file JS thừa / có token..."
for F in \
  build-icon-library.js explore-figma.js extract-all-icons.js \
  generate-svg-exports.js get-nodes-details.js fetch-icons.js \
  fix-all.sh fix-and-push.sh fix-components.sh go.sh \
  deploy-clean.sh auto-fix.sh.bak ds-fix.sh; do
  if [ -f "$F" ]; then rm -f "$F"; warn "Xóa: $F"; fi
done

# Xóa thư mục temp
for D in "../b2b-ds-clean" "../b2b-ds-deploy" "../b2b-design-system-new"; do
  if [ -d "$D" ]; then rm -rf "$D"; warn "Xóa thư mục: $D"; fi
done

ok "Clean xong"

# ════════════════════════════════════════
sep; echo -e "${CYAN}PHASE 2 — FIX BUTTON${NC}"; sep
# ════════════════════════════════════════
# Root cause React #31:
# Storybook cố render iconLeft/iconRight (React elements) như string trong argTypes
# Fix: dùng `variant` prop (tránh conflict HTML `style`), ẩn icon props khỏi argTypes

log "Fix Button component..."

cat > src/components/Button/Button.jsx << 'EOF'
import React from 'react';
import './Button.css';

export function Button({
  children,
  label,
  size = 'md',
  variant = 'primary',
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  iconOnly = null,
  onClick,
  className = '',
  ...rest
}) {
  const text = children ?? label ?? 'Button';

  const cls = [
    'ds-btn',
    `ds-btn--${size}`,
    `ds-btn--${variant}`,
    disabled  ? 'ds-btn--disabled'  : '',
    loading   ? 'ds-btn--loading'   : '',
    iconOnly  ? 'ds-btn--icon-only' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={cls}
      disabled={disabled || loading}
      onClick={onClick}
      {...rest}
    >
      {loading && (
        <svg className="ds-btn__spinner" width="1em" height="1em"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg>
      )}
      {!loading && iconLeft  && <span className="ds-btn__icon" aria-hidden="true">{iconLeft}</span>}
      {!iconOnly && <span className="ds-btn__label">{text}</span>}
      {iconOnly  && <span className="ds-btn__icon" aria-hidden="true">{iconOnly}</span>}
      {!loading && iconRight && <span className="ds-btn__icon" aria-hidden="true">{iconRight}</span>}
    </button>
  );
}
export default Button;
EOF

cat > src/components/Button/Button.css << 'EOF'
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap');
.ds-btn {
  display:inline-flex; align-items:center; justify-content:center;
  font-family:'Lexend',sans-serif; font-weight:500;
  border:1.5px solid transparent; border-radius:6px;
  cursor:pointer; white-space:nowrap; outline:none;
  transition:background 120ms,border-color 120ms,box-shadow 120ms;
}
.ds-btn:focus-visible { box-shadow:0 0 0 3px rgba(34,111,246,.25); }
.ds-btn--sm { height:32px; padding:0 12px; gap:6px;  font-size:14px; }
.ds-btn--md { height:40px; padding:0 16px; gap:8px;  font-size:16px; }
.ds-btn--lg { height:48px; padding:0 20px; gap:10px; font-size:18px; font-weight:600; }
.ds-btn--icon-only.ds-btn--sm { width:32px; padding:0; }
.ds-btn--icon-only.ds-btn--md { width:40px; padding:0; }
.ds-btn--icon-only.ds-btn--lg { width:48px; padding:0; }
.ds-btn--primary   { background:#226FF6; color:#fff; }
.ds-btn--primary:hover:not(:disabled)  { background:#1757D4; }
.ds-btn--primary:active:not(:disabled) { background:#1142AD; }
.ds-btn--secondary { background:#EBF3FF; color:#1142AD; }
.ds-btn--secondary:hover:not(:disabled){ background:#D0E5FF; }
.ds-btn--outline   { background:#fff; color:#1142AD; border-color:#7AB1FF; }
.ds-btn--outline:hover:not(:disabled)  { background:#EBF3FF; }
.ds-btn--ghost     { background:transparent; color:#1142AD; }
.ds-btn--ghost:hover:not(:disabled)    { background:#EBF3FF; }
.ds-btn--danger    { background:#EF4444; color:#fff; }
.ds-btn--danger:hover:not(:disabled)   { background:#DC2626; }
.ds-btn:disabled, .ds-btn--disabled {
  background:#F1F5F9; color:#94A3B8; border-color:transparent;
  cursor:not-allowed; pointer-events:none;
}
.ds-btn--loading { cursor:wait; opacity:.85; }
.ds-btn__spinner { animation:ds-spin .75s linear infinite; flex-shrink:0; width:1em; height:1em; }
@keyframes ds-spin { to { transform:rotate(360deg); } }
.ds-btn__icon { display:inline-flex; align-items:center; flex-shrink:0; color:inherit; }
.ds-btn__icon svg { stroke:currentColor; }
EOF

cat > src/components/Button/Button.stories.jsx << 'EOF'
import React from 'react';
import { Button } from './Button';
import {
  Plus, Trash, Check, Search,
  Download, Settings, ArrowRight, ChevronRight, Upload,
} from '../Icons/icons';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `**Button** — Tailwind-aligned · Icons: Iconstica v1.1.0

| | |
|--|--|
| **Size** | sm(32px) · md(40px) · lg(48px) |
| **Variant** | primary · secondary · outline · ghost · danger |
| **Loading** | boolean prop |`,
      },
    },
  },
  argTypes: {
    label:    { control: 'text' },
    size:     { control: 'select', options: ['sm','md','lg'] },
    variant:  { control: 'select', options: ['primary','secondary','outline','ghost','danger'] },
    disabled: { control: 'boolean' },
    loading:  { control: 'boolean' },
    // Ẩn hoàn toàn props nhận React element — đây là nguyên nhân React error #31
    iconLeft:  { table: { disable: true } },
    iconRight: { table: { disable: true } },
    iconOnly:  { table: { disable: true } },
    children:  { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export const Default = {
  args: { label: 'Button', size: 'md', variant: 'primary' },
};

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap', padding:16 }}>
      <Button variant="primary"   iconLeft={<Plus size={16}/>}>Primary</Button>
      <Button variant="secondary" iconLeft={<Check size={16}/>}>Secondary</Button>
      <Button variant="outline"   iconLeft={<Download size={16}/>}>Outline</Button>
      <Button variant="ghost"     iconLeft={<Settings size={16}/>}>Ghost</Button>
      <Button variant="danger"    iconLeft={<Trash size={16}/>}>Danger</Button>
    </div>
  ),
};

export const AllSizes = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display:'flex', gap:12, alignItems:'center', padding:16 }}>
      <Button variant="primary" size="sm" iconLeft={<Plus size={14}/>}>Small 32px</Button>
      <Button variant="primary" size="md" iconLeft={<Plus size={16}/>}>Medium 40px</Button>
      <Button variant="primary" size="lg" iconLeft={<Plus size={18}/>}>Large 48px</Button>
    </div>
  ),
};

const Row = ({ l, children }) => (
  <div style={{ display:'flex', gap:10, alignItems:'center', marginBottom:12 }}>
    <span style={{ width:88, fontSize:11, color:'#94A3B8', flexShrink:0 }}>{l}</span>
    {children}
  </div>
);

export const IconPositions = {
  name: 'Icon Positions',
  render: () => (
    <div style={{ padding:16 }}>
      <Row l="No icon">
        <Button variant="primary">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="ghost">Button</Button>
      </Row>
      <Row l="Icon left">
        <Button variant="primary"   iconLeft={<Plus size={16}/>}>Add</Button>
        <Button variant="outline"   iconLeft={<Search size={16}/>}>Search</Button>
        <Button variant="secondary" iconLeft={<Upload size={16}/>}>Upload</Button>
      </Row>
      <Row l="Icon right">
        <Button variant="primary" iconRight={<ArrowRight size={16}/>}>Continue</Button>
        <Button variant="outline" iconRight={<ChevronRight size={16}/>}>More</Button>
      </Row>
      <Row l="Icon only">
        {['sm','md','lg'].map(s => {
          const z = {sm:14,md:16,lg:18}[s];
          return <Button key={s} variant="primary" size={s} iconOnly={<Plus size={z}/>} aria-label="add"/>;
        })}
        <Button variant="outline" iconOnly={<Search size={16}/>} aria-label="search"/>
        <Button variant="ghost"   iconOnly={<Settings size={16}/>} aria-label="settings"/>
        <Button variant="danger"  iconOnly={<Trash size={16}/>} aria-label="delete"/>
      </Row>
    </div>
  ),
};

export const States = {
  name: 'States',
  render: () => (
    <div style={{ display:'flex', gap:12, flexWrap:'wrap', padding:16 }}>
      <Button variant="primary">Default</Button>
      <Button variant="primary" disabled>Disabled</Button>
      <Button variant="primary" loading>Loading</Button>
      <Button variant="outline">Default</Button>
      <Button variant="outline" disabled>Disabled</Button>
      <Button variant="outline" loading>Loading</Button>
    </div>
  ),
};

export const Danger = {
  name: 'Danger',
  render: () => (
    <div style={{ display:'flex', gap:12, padding:16 }}>
      <Button variant="danger" iconLeft={<Trash size={16}/>}>Delete item</Button>
      <Button variant="danger" size="sm" iconLeft={<Trash size={14}/>}>Delete</Button>
      <Button variant="danger" disabled>Disabled</Button>
      <Button variant="danger" iconOnly={<Trash size={16}/>} aria-label="delete"/>
    </div>
  ),
};

export const FullGrid = {
  name: 'Full Grid',
  render: () => (
    <div style={{ padding:16 }}>
      {['sm','md','lg'].map(size => {
        const z = {sm:14,md:16,lg:18}[size];
        return (
          <div key={size} style={{ display:'flex', gap:8, alignItems:'center', marginBottom:10 }}>
            <span style={{ width:28, fontSize:11, color:'#94A3B8', fontWeight:600, textTransform:'uppercase' }}>{size}</span>
            <Button variant="primary"   size={size} iconLeft={<Plus size={z}/>}>Primary</Button>
            <Button variant="secondary" size={size} iconLeft={<Check size={z}/>}>Secondary</Button>
            <Button variant="outline"   size={size} iconLeft={<Download size={z}/>}>Outline</Button>
            <Button variant="ghost"     size={size} iconLeft={<Settings size={z}/>}>Ghost</Button>
            <Button variant="danger"    size={size} iconLeft={<Trash size={z}/>}>Danger</Button>
            <Button variant="primary"   size={size} iconOnly={<Plus size={z}/>} aria-label="icon"/>
          </div>
        );
      })}
    </div>
  ),
};
EOF
ok "Button"

# ════════════════════════════════════════
sep; echo -e "${CYAN}PHASE 3 — FIX INPUT${NC}"; sep
# ════════════════════════════════════════
# Root cause: iconLeft/iconRight exposed as argTypes → Storybook renders {} as string → error #31
# Fix: ẩn icon props, dùng useId(), tách controlled/uncontrolled rõ ràng

log "Fix Input component..."

cat > src/components/Input/Input.jsx << 'EOF'
import React, { useId } from 'react';
import './Input.css';

export function Input({
  placeholder = 'Placeholder text',
  size        = 'md',
  state       = 'default',
  value,
  defaultValue,
  onChange,
  iconLeft   = null,
  iconRight  = null,
  label      = null,
  helperText = null,
  type       = 'text',
}) {
  const uid = useId();
  const controlled = value !== undefined;

  return (
    <div className={`ds-input-wrap ds-input-wrap--${size}`}>
      {label !== null && (
        <label className="ds-input__label" htmlFor={uid}>
          {label}
        </label>
      )}

      <div className={[
        'ds-input-field',
        `ds-input-field--${size}`,
        `ds-input-field--${state}`,
      ].join(' ')}>
        {iconLeft !== null && (
          <span className="ds-input__icon" aria-hidden="true">{iconLeft}</span>
        )}
        <input
          id={uid}
          className="ds-input__el"
          type={type}
          placeholder={placeholder}
          disabled={state === 'disabled'}
          {...(controlled
            ? { value, onChange: onChange ?? (() => {}) }
            : { defaultValue, onChange }
          )}
        />
        {iconRight !== null && (
          <span className="ds-input__icon" aria-hidden="true">{iconRight}</span>
        )}
      </div>

      {helperText !== null && (
        <p className={[
          'ds-input__helper',
          state === 'error' && 'ds-input__helper--error',
        ].filter(Boolean).join(' ')}>
          {helperText}
        </p>
      )}
    </div>
  );
}
export default Input;
EOF

cat > src/components/Input/Input.css << 'EOF'
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap');
.ds-input-wrap { display:flex; flex-direction:column; gap:6px; width:100%; max-width:400px; }
.ds-input__label { font-family:'Lexend',sans-serif; font-weight:500; color:#0F172A; display:block; }
.ds-input-wrap--sm .ds-input__label { font-size:12px; }
.ds-input-wrap--md .ds-input__label { font-size:13px; }
.ds-input-wrap--lg .ds-input__label { font-size:15px; }
.ds-input-field {
  display:flex; align-items:center; width:100%;
  background:#fff; border:1.5px solid #E2E8F0; border-radius:6px;
  transition:border-color 150ms,box-shadow 150ms; box-sizing:border-box;
}
.ds-input-field--sm { height:32px; padding:0 12px; gap:6px; }
.ds-input-field--md { height:40px; padding:0 16px; gap:8px; }
.ds-input-field--lg { height:48px; padding:0 20px; gap:10px; }
.ds-input-field:focus-within,
.ds-input-field--focus { border-color:#226FF6; box-shadow:0 0 0 3px rgba(34,111,246,.15); }
.ds-input-field--filled  { border-color:#CBD5E1; }
.ds-input-field--error   { border-color:#EF4444; }
.ds-input-field--error:focus-within { box-shadow:0 0 0 3px rgba(239,68,68,.15); }
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
        component: `**Input** — Tailwind-aligned form field.

| Size | Height | Font |
|--|--|--|
| sm | 32px | 13px |
| md | 40px | 14px |
| lg | 48px | 16px |`,
      },
    },
  },
  argTypes: {
    placeholder: { control: 'text' },
    label:       { control: 'text' },
    helperText:  { control: 'text' },
    size:  { control: 'select', options: ['sm','md','lg'] },
    state: { control: 'select', options: ['default','focus','filled','disabled','error'] },
    type:  { control: 'select', options: ['text','password','email','number'] },
    // Ẩn icon props — React element, không dùng làm string control
    iconLeft:     { table: { disable: true } },
    iconRight:    { table: { disable: true } },
    value:        { table: { disable: true } },
    defaultValue: { table: { disable: true } },
    onChange:     { table: { disable: true } },
  },
};

export const Default = {
  args: { placeholder: 'Enter text...', size: 'md', state: 'default' },
};

export const WithLabel = {
  name: 'With Label',
  args: { label: 'Field label', placeholder: 'Enter text...', size: 'md', helperText: 'Helper text.' },
};

export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:16, padding:16 }}>
      <Input label="Default"  placeholder="Default state"  size="md" state="default" />
      <Input label="Focus"    placeholder="Focus state"    size="md" state="focus" />
      <Input label="Filled"   size="md" state="filled" defaultValue="Some value" />
      <Input label="Disabled" placeholder="Disabled"       size="md" state="disabled" />
      <Input label="Error"    placeholder="Error state"    size="md" state="error"
        helperText="This field is required." />
    </div>
  ),
};

export const AllSizes = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:12, padding:16 }}>
      <Input placeholder="Small — 32px"  size="sm" />
      <Input placeholder="Medium — 40px" size="md" />
      <Input placeholder="Large — 48px"  size="lg" />
    </div>
  ),
};

export const WithIcons = {
  name: 'With Icons',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:12, padding:16 }}>
      <Input label="Search"   placeholder="Search..."     size="md" iconLeft={<Search size={16}/>} />
      <Input label="Username" placeholder="Username"      size="md" iconLeft={<User size={16}/>} />
      <Input label="Email"    placeholder="email@co.com"  size="md" iconLeft={<Mail size={16}/>} />
      <Input label="Phone"    placeholder="+84 xxx"       size="md" iconLeft={<Phone size={16}/>} />
      <Input label="Password" placeholder="Password"      size="md" type="password"
        iconLeft={<Lock size={16}/>} iconRight={<Eye size={16}/>} />
      <Input label="Password (visible)" placeholder="Password" size="md"
        iconLeft={<Lock size={16}/>} iconRight={<EyeOff size={16}/>} />
    </div>
  ),
};
EOF
ok "Input"

# ════════════════════════════════════════
sep; echo -e "${CYAN}PHASE 4 — FIX TOOLTIP (match Figma)${NC}"; sep
# ════════════════════════════════════════
# Figma props: Polygon Position, Warp, Truncate, State
# Code props:  position, wrap, truncate

log "Fix Tooltip..."

cat > src/components/Tooltip/Tooltip.jsx << 'EOF'
import React, { useState } from 'react';
import './Tooltip.css';

/**
 * Tooltip — Figma node 249:3220
 * Props:
 *   position  = 'top' | 'bottom' | 'left' | 'right'  (Figma: Polygon Position)
 *   wrap      = boolean  (Figma: Warp — text wraps to multiple lines)
 *   truncate  = boolean  (Figma: Truncate — long text scrollable)
 */
export function Tooltip({
  content   = 'Tooltip message',
  position  = 'top',
  wrap      = false,
  truncate  = false,
  maxWidth  = 250,
  maxHeight = 120,
  children,
}) {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const bubbleCls = [
    'ds-tooltip',
    `ds-tooltip--${position}`,
    (wrap || truncate) ? 'ds-tooltip--multiline' : '',
    truncate ? 'ds-tooltip--truncate' : '',
  ].filter(Boolean).join(' ');

  const bubbleStyle = {
    ...((wrap || truncate) && { maxWidth }),
    ...(truncate && { maxHeight, overflowY: 'auto' }),
  };

  return (
    <span
      className="ds-tooltip-host"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children ?? (
        <button type="button" className="ds-tooltip-trigger">Hover me</button>
      )}
      {visible && (
        <span className={bubbleCls} style={bubbleStyle} role="tooltip">
          {content}
        </span>
      )}
    </span>
  );
}
export default Tooltip;
EOF

cat > src/components/Tooltip/Tooltip.css << 'EOF'
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap');

.ds-tooltip-host {
  position: relative;
  display: inline-flex;
}

.ds-tooltip-trigger {
  border: 1px solid #E2E8F0; background: #fff;
  padding: 6px 16px; border-radius: 6px;
  cursor: default; font-family: 'Lexend', sans-serif;
  font-size: 14px; color: #0F172A;
}

/* Bubble */
.ds-tooltip {
  position: absolute;
  z-index: 9999;
  pointer-events: none;
  padding: 7px 10px;
  border-radius: 8px;
  background: #0F172A;
  color: #fff;
  font-family: 'Lexend', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  white-space: nowrap;
  box-shadow: 0 4px 8px rgba(16,24,40,.12), 0 2px 4px rgba(16,24,40,.08);
}
.ds-tooltip--multiline { white-space: normal; }
.ds-tooltip--truncate  { pointer-events: auto; }

/* Arrow */
.ds-tooltip::after {
  content: '';
  position: absolute;
  border: 6px solid transparent;
}

/* Top */
.ds-tooltip--top {
  bottom: calc(100% + 10px);
  left: 50%; transform: translateX(-50%);
}
.ds-tooltip--top::after {
  top: 100%; left: 50%; transform: translateX(-50%);
  border-top-color: #0F172A;
}

/* Bottom */
.ds-tooltip--bottom {
  top: calc(100% + 10px);
  left: 50%; transform: translateX(-50%);
}
.ds-tooltip--bottom::after {
  bottom: 100%; left: 50%; transform: translateX(-50%);
  border-bottom-color: #0F172A;
}

/* Left */
.ds-tooltip--left {
  right: calc(100% + 10px);
  top: 50%; transform: translateY(-50%);
}
.ds-tooltip--left::after {
  left: 100%; top: 50%; transform: translateY(-50%);
  border-left-color: #0F172A;
}

/* Right */
.ds-tooltip--right {
  left: calc(100% + 10px);
  top: 50%; transform: translateY(-50%);
}
.ds-tooltip--right::after {
  right: 100%; top: 50%; transform: translateY(-50%);
  border-right-color: #0F172A;
}
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
        component: `**Tooltip** — Figma node 249:3220 · Dark only · 4 positions

| Figma prop | Code prop | Values |
|---|---|---|
| Polygon Position | \`position\` | top · bottom · left · right |
| Warp | \`wrap\` | false = single line · true = wraps |
| Truncate | \`truncate\` | true = scrollable content |

> Hover trigger to show tooltip.`,
      },
    },
  },
  argTypes: {
    content:   { control: 'text' },
    position:  { control: 'select', options: ['top','bottom','left','right'] },
    wrap:      { control: 'boolean' },
    truncate:  { control: 'boolean' },
    maxWidth:  { control: 'number' },
    maxHeight: { control: 'number' },
    children:  { table: { disable: true } },
  },
};

const Trigger = ({ label }) => (
  <span style={{
    padding: '8px 20px', border: '1px solid #E2E8F0', borderRadius: 6,
    fontSize: 13, fontFamily: 'Lexend,sans-serif',
    cursor: 'default', background: '#fff', userSelect: 'none',
  }}>
    {label}
  </span>
);

export const Default = {
  args: { content: 'Tooltip message', position: 'top', wrap: false, truncate: false },
};

export const AllPositions = {
  name: 'All Positions — Warp=False',
  render: () => (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, padding:80 }}>
      {['top','bottom','left','right'].map(pos => (
        <div key={pos} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
          <Tooltip content="Tooltip message" position={pos}>
            <Trigger label={`Hover — ${pos}`} />
          </Tooltip>
          <span style={{ fontSize:11, color:'#94A3B8' }}>{pos}</span>
        </div>
      ))}
    </div>
  ),
};

export const WrapTrue = {
  name: 'Warp=True — text wraps',
  render: () => (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:100, padding:100 }}>
      {['top','bottom','left','right'].map(pos => (
        <div key={pos} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
          <Tooltip
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis adipiscing a that imperdiet tempor fringilla ornare fermentum egestas ut leo."
            position={pos} wrap={true} maxWidth={250}
          >
            <Trigger label={`Hover — ${pos}`} />
          </Tooltip>
          <span style={{ fontSize:11, color:'#94A3B8' }}>Warp · {pos}</span>
        </div>
      ))}
    </div>
  ),
};

export const TruncateTrue = {
  name: 'Truncate=True — scrollable',
  render: () => (
    <div style={{ display:'flex', justifyContent:'center', padding:80 }}>
      <Tooltip
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."
        position="top" truncate={true} maxWidth={250} maxHeight={120}
      >
        <Trigger label="Hover — Truncate" />
      </Tooltip>
    </div>
  ),
};
EOF
ok "Tooltip"

# ════════════════════════════════════════
sep; echo -e "${CYAN}PHASE 5 — COMMIT & PUSH${NC}"; sep
# ════════════════════════════════════════

git config user.email "ds@local.dev" 2>/dev/null || true
git config user.name  "Design System" 2>/dev/null || true

git add \
  src/components/Button/ \
  src/components/Input/ \
  src/components/Tooltip/

# Stage deleted junk files if any
git add -A 2>/dev/null || true

echo ""
git status --short
echo ""

git commit -m "fix: React#31 — Button(variant+argTypes), Input(useId), Tooltip(Figma), clean junk"
git push origin main

echo ""
echo -e "${GREEN}══════════════════════════════════════════${NC}"
echo -e "${GREEN}🎉 Xong! GitHub Actions đang build...${NC}"
echo -e "${CYAN}   https://cungnganha.github.io/b2b-design-system/${NC}"
echo -e "${CYAN}   Actions: https://github.com/cungnganha/b2b-design-system/actions${NC}"
echo -e "${GREEN}══════════════════════════════════════════${NC}"
