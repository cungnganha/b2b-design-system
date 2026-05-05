# B2B Design System — Portfolio Showcase
> Single-page case study for product designer portfolio · Target: Lovable / Figma Make / Framer

---

## META

- **Page title:** B2B Design System — Built for Scale
- **Font:** Inter (fallback: system-ui) · Lexend if available
- **Primary color:** `#226FF6`
- **Dark background:** `#0F172A`
- **Surface:** `#FFFFFF`
- **Subtle background:** `#F8FAFC`
- **Secondary text:** `#64748B`
- **Max content width:** 1200px centered
- **Section padding:** 80px top/bottom (desktop) · 48px (mobile)
- **Card shadow:** `0 4px 8px rgba(16,24,40,0.10)`

---

## SECTION 1 — HERO

> **Layout:** Full-width · Dark background `#0F172A` · 2-column split (60/40)
> Left column: headline + stats + CTAs · Right column: component mosaic grid

### Left Column

**Eyebrow (small caps, `#226FF6`, 12px):**
B2B Design System · 2024

**Headline (H1, white, 48–60px, weight 700):**
A design system
built for scale.

**Subheadline (body, `#94A3B8`, 18px):**
11 components. 40+ semantic tokens.
One source of truth — for designers and developers.

**Stats row (4 items, separated by `·`):**

| Stat | Label |
|------|-------|
| 44+ | Primitive tokens |
| 40+ | Semantic tokens |
| 11 | Components |
| 162 | Tag variants |

**CTA Buttons (row, gap 12px):**
- `[ View in Storybook → ]` — filled blue `#226FF6`, white text
- `[ Open in Figma ]` — ghost, white border, white text

### Right Column

**Component mosaic (2×3 grid of screenshots or mockup cards):**
```
[ Button variants ]    [ Input states  ]
[ Alert — 4 types  ]   [ Tags grid     ]
[ Badge samples    ]   [ Avatar group  ]
```
*Each cell: white card · 8px radius · subtle shadow · component name label below*

---

## SECTION 2 — PROBLEM & ROLE

> **Layout:** White background · 2-column (50/50) · Vertical rhythm 48px between items

### Left Column — "The Problem"

**Section label (small caps, `#94A3B8`, 11px):**
Why this system exists

**Heading (H2, `#0F172A`, 32px, weight 600):**
Three problems that slow every product team down.

**Problem Card 1**
- Icon: `⚠` AlertTriangle · color `#EAB308`
- Title: **Inconsistency**
- Body: Every screen made its own spacing decisions. Buttons had 6 different heights. Color values were copy-pasted and drifted over time.

**Problem Card 2**
- Icon: `⟷` Code · color `#226FF6`
- Title: **Design–Dev Gap**
- Body: Figma components diverged from shipped UI within weeks of launch. Redlines didn't capture hover states or error conditions.

**Problem Card 3**
- Icon: `⏱` Clock · color `#64748B`
- Title: **Slow velocity**
- Body: New features required redesigning solved problems. No shared vocabulary meant every handoff started from scratch.

---

### Right Column — "My Role"

**Section label (small caps, `#94A3B8`, 11px):**
What I did

**Heading (H2, `#0F172A`, 32px, weight 600):**
Solo designer. End-to-end ownership.

**Vertical timeline (4 items, left border line `#E2E8F0`, dot `#226FF6`):**

```
●  Week 1–2 · Discovery & Audit
   Inventoried existing UI patterns across 3 products.
   Identified 47 inconsistencies in spacing and color alone.

●  Week 3–4 · Token Architecture
   Designed 2-layer token system: 44 primitives → 40+ semantic aliases.
   Named to match Figma variable collections and CSS custom properties.

●  Week 5–8 · Component Design
   Designed 11 components in Figma with all variants, states, and annotations.
   Coordinated with engineering on implementation approach.

●  Week 9–12 · Documentation & Handoff
   Built Storybook documentation for all components.
   Wrote usage guidelines, do/don't rules, and token maps for each.
```

---

## SECTION 3 — FOUNDATIONS

> **Layout:** Light gray background `#F8FAFC` · Single column · 4-tile row at bottom

### Header

**Section label (small caps, `#94A3B8`, 11px):**
Design foundations

**Heading (H2, `#0F172A`, 36px, weight 600):**
Built on tokens, not hex codes.

**Subheading (`#64748B`, 16px):**
Every value in the system lives in one place. Change a primitive and every component updates automatically — in Figma and in code.

---

### Token Architecture Diagram

> **Layout:** Centered · Max-width 640px · 2 stacked layers with arrow between

**Top layer (white card, blue left border `#226FF6`):**
**Semantic Tokens** — What components use
```
--color-brand-primary     →  blue/500
--color-feedback-error-bg →  red/50
--color-text-secondary    →  gray/600
--color-border-focus      →  blue/500
```

**Arrow (center, `#226FF6`):**
↑ References ↑

**Bottom layer (white card, gray left border `#CBD5E1`):**
**Primitive Tokens** — Raw values
```
--blue-500  =  #226FF6
--red-50    =  #FFF1F2
--gray-600  =  #475569
```

**Caption below (`#64748B`, 13px):**
One primitive change updates every semantic token that references it — and every component that uses that semantic token.

---

### Foundation Tiles (4-column grid)

**Tile 1 — Colors**
- Label: Colors
- Visual: 8 color swatches in a row
  - `#EBF3FF` blue/50
  - `#226FF6` blue/500 ← brand
  - `#1142AD` blue/700
  - `#F8FAFC` gray/50
  - `#64748B` gray/500
  - `#0F172A` gray/900
  - `#22C55E` green/500
  - `#EF4444` red/500
- Caption: 44 primitive tokens · 9 color groups

**Tile 2 — Spacing**
- Label: Spacing
- Visual: Horizontal bars of increasing length
  ```
  4px  ████
  8px  ████████
  12px ████████████
  16px ████████████████
  24px ████████████████████████
  32px ████████████████████████████████
  ```
- Caption: 4px base grid · 20 spacing tokens

**Tile 3 — Typography**
- Label: Typography
- Visual: Type scale staircase
  ```
  72px  Display
  48px  Heading 1
  36px  Heading 2
  24px  Heading 3
  16px  Body large
  14px  Body (default)
  12px  Caption
  11px  Label / Tag
  ```
- Caption: Lexend · 13 size tokens · 4 weight tokens

**Tile 4 — Radius & Shadow**
- Label: Radius & Shadow
- Visual: 3 rectangles with increasing radius + 3 shadow depth samples
  ```
  □  2px  (sm — checkbox)
  ▭  4px  (base — button, input)
  ▬  8px  (lg — card, modal)
  ◯  9999px (full — tag, badge, avatar)
  ```
  ```
  Shadow xs  (subtle table row)
  Shadow md  (dropdown, card)
  Shadow xl  (modal, dialog)
  ```
- Caption: 9 radius tokens · 7 shadow tokens

---

## SECTION 4 — COMPONENT OVERVIEW

> **Layout:** White background · 3-column card grid · 4 rows

### Header

**Section label (small caps, `#94A3B8`, 11px):**
Component library

**Heading (H2, `#0F172A`, 36px, weight 600):**
11 components. Every state designed.

**Subheading (`#64748B`, 16px):**
From atomic inputs to complex composed tags — each component covers all interactive states, accessibility requirements, and token mappings.

---

### Component Grid (3 × 4)

> Each card: white · border `#E2E8F0` · 8px radius · 24px padding
> Top: component screenshot/preview · Bottom: name + variant count badge

**Row 1:**

| Button | Input | Checkbox |
|--------|-------|----------|
| [screenshot] | [screenshot] | [screenshot] |
| **Button** | **Input** | **Checkbox** |
| `24 variants` | `16 states` | `8 states` |
| 4 styles × 3 sizes × 2 states | 6 states × SM/MD/LG | Unchecked / Checked / Indeterminate |

**Row 2:**

| Radio | Toggle | Alert |
|-------|--------|-------|
| [screenshot] | [screenshot] | [screenshot] |
| **Radio** | **Toggle** | **Alert** |
| `6 states` | `6 variants` | `24 variants` |
| Unselected / Selected / Disabled | On/Off × 3 sizes | 4 types × title/no-title/action |

**Row 3:**

| Badge | Tags | Avatar |
|-------|------|--------|
| [screenshot] | [screenshot] | [screenshot] |
| **Badge** | **Tags** | **Avatar** |
| `54 variants` | `162 variants` | `48 variants` |
| 6 colors × 3 styles × 3 sizes | 6 variants × 3 styles × 3 sizes × states | 4 sizes × 6 colors × 2 shapes |

**Row 4:**

| Tooltip | Icons | — |
|---------|-------|---|
| [screenshot] | [screenshot] | |
| **Tooltip** | **Icons** | |
| `4 positions` | `40+ icons` | |
| Top / Bottom / Left / Right | Lucide-based · 1.5px stroke · 3 sizes | |

---

## SECTION 5 — COMPONENT DEEP-DIVES

> **Layout:** White background · Tab or accordion navigation between components
> OR: Full vertical scroll with anchor links in sticky sidebar

### 5.1 BUTTON

> **Layout:** 2-column · Left: anatomy diagram · Right: variant + token table

**Component label:** Button

**Tagline:** The most-used component. Zero ambiguity.

**Description:**
Button is the primary action trigger across every surface in the system. With 24 variants spanning 4 styles × 3 sizes × 2 states, every product moment — from destructive confirmations to subtle ghost actions — is covered.

**Anatomy (annotated diagram):**
```
┌──────────────────────────────┐
│  [Icon 16px]  Label  [Icon 16px]  │
└──────────────────────────────┘
    ↑              ↑          ↑
  Optional      Required   Optional
```

**Variant table:**

| Style | Use case | Background token |
|-------|----------|-----------------|
| Primary | Main CTA · one per page | `--color-brand-primary` |
| Secondary | Secondary actions | transparent + `--color-border-default` |
| Destructive | Delete · irreversible actions | `--red-500` |
| Ghost | Low-emphasis · tertiary | transparent + `--color-text-secondary` |

**Size table:**

| Size | Height | H-padding | Font token |
|------|--------|-----------|------------|
| SM | 32px | 12px | `--font-size-sm` (12px) |
| MD | 40px | 16px | `--font-size-base` (14px) |
| LG | 48px | 20px | `--font-size-md` (16px) |

**States:** Default → Hover → Active → Focus (3px ring) → Disabled (40% opacity)

**Token map:**
```
--color-brand-primary   Background (Primary)
--color-brand-hover     Background on hover
--color-brand-active    Background on press
--color-text-on-brand   Label color
--shadow-focus-ring     Focus indicator
--radius-base           Border radius (4px)
```

**✅ DO:**
- Use Primary for the single most important action per view
- Pair Primary + Ghost for confirm / cancel dialogs
- Use Destructive only for permanent, irreversible actions

**❌ DON'T:**
- Don't place two Primary buttons side by side
- Don't use Ghost as the only action — pair with something more visible
- Don't repurpose button color to communicate status (use Badge or Alert instead)

---

### 5.2 INPUT

> **Layout:** Same as Button section

**Tagline:** Where users talk back. Built for every form state.

**Description:**
Input handles all text collection across the product. 16 states cover empty, filled, focused, error, disabled, and read-only — plus prefix/suffix slots for icons and units.

**Anatomy:**
```
[Label text]
┌──────────────────────────────────┐
│ [Prefix icon]  Placeholder text  [Suffix icon] │
└──────────────────────────────────┘
[Helper text or Error message]
```

**State table:**

| State | Border | Notes |
|-------|--------|-------|
| Default | `--color-border-default` | Empty, waiting |
| Focus | `--color-border-focus` | Active cursor |
| Filled | `--color-border-strong` | Has value |
| Error | `--color-border-error` | Validation failed |
| Disabled | `--color-border-default` 40% | Non-interactive |
| Read-only | `--color-bg-subtle` bg | Display only |

**Token map:**
```
--color-bg-surface        Background
--color-border-default    Border (default)
--color-border-focus      Border (focus)
--color-border-error      Border (error)
--color-text-primary      Input value text
--color-text-tertiary     Placeholder + icon
--color-text-secondary    Helper text
--color-feedback-error-text  Error message
--radius-base             Border radius (4px)
```

**✅ DO:**
- Always pair error state with an error message — never color alone
- Use helper text to prevent errors before they happen
- Use prefix icons to aid scanning (🔍 search, ✉ email)

**❌ DON'T:**
- Don't use placeholder as a label — it disappears on input
- Don't stack multiple error messages — show only the first failing rule
- Don't use read-only when disabled is appropriate — different affordances

---

### 5.3 ALERT

> **Layout:** 4 variants shown side-by-side at top, then anatomy + tokens below

**Tagline:** System feedback. Four flavors, zero noise.

**Description:**
Alert communicates system-level feedback — success confirmations, warnings, validation errors, and informational notices. 24 variants: 4 types × 3 densities × 2 icon states.

**Anatomy:**
```
┌─────────────────────────────────────────┐
│ [Icon]  Title text (optional)      [×]  │
│         Body / description text         │
│         [Action link]                   │
└─────────────────────────────────────────┘
```

**Variant table:**

| Type | Icon | BG token | Text token | Border token |
|------|------|----------|------------|--------------|
| Success | ✓ CheckCircle | `--color-feedback-success-bg` | `--color-feedback-success-text` | `--color-feedback-success-border` |
| Warning | ⚠ AlertTriangle | `--color-feedback-warning-bg` | `--color-feedback-warning-text` | `--color-feedback-warning-border` |
| Error | ✕ XCircle | `--color-feedback-error-bg` | `--color-feedback-error-text` | `--color-feedback-error-border` |
| Info | ℹ Info | `--color-feedback-info-bg` | `--color-feedback-info-text` | `--color-feedback-info-border` |

**✅ DO:**
- Use Success after a completed action (form submit, save, export)
- Use Warning for things needing attention but not blocking the user
- Place Error inline near the triggering element

**❌ DON'T:**
- Don't show 3+ alerts simultaneously — prioritize one
- Don't auto-dismiss Error alerts — user needs time to read and act
- Don't use Info as a tooltip replacement

---

### 5.4 TAGS

> **Layout:** Full-width variant grid at top · anatomy + token table below

**Tagline:** 162 variants. One consistent grammar.

**Description:**
Tags are the system's most complex component. Six variants × three styles × three sizes × three states — plus avatar and removable modifiers — produce 162 unique combinations. All governed by a consistent size-padding-radius grammar.

**Anatomy:**
```
[Avatar 20–24px]  [Label text]  [× Remove 10–12px]
     ↑                 ↑               ↑
  Optional          Required        Optional
```

**Variant table:**

| Variant | Semantic use |
|---------|-------------|
| Default | Neutral categorization |
| Brand | Primary / active filters |
| Success | Completed, approved, active status |
| Warning | Pending, review needed |
| Error | Failed, rejected, blocked |
| Orange | Custom category (billing, legal) |

**Style table:**

| Style | Background | Border | Use case |
|-------|-----------|--------|---------|
| Subtle | Tinted (blue/50) | None | Low-emphasis labels |
| Outlined | Transparent | Tinted border | Filter chips |
| Filled | Solid (blue/500) | None | Selected state, high-emphasis |

**Size table:**

| Size | Height | H-padding | Font | Avatar |
|------|--------|-----------|------|--------|
| SM | 20px | 6px | 11px | 16px (xs) |
| MD | 24px | 8px | 12px | 20px (xs) |
| LG | 28px | 10px | 13px | 24px (sm) |

**Token map (Brand/Subtle example):**
```
--color-brand-subtle   Background  →  blue/50
--color-brand-text     Label       →  blue/700
--color-brand-text     Remove icon →  blue/700
--radius-full          Border radius (9999px)
```

**✅ DO:**
- Use Tags for multi-value states (user can have multiple)
- Use `removable=true` when the user can dismiss the tag
- Use `avatar=true` for people / assignee tags

**❌ DON'T:**
- Don't use Tags where only one value is possible — use Badge
- Don't mix styles (subtle + filled) within the same tag group
- Don't truncate labels — cap visible count instead ("+ 3 more")

---

### 5.5 BADGE

**Tagline:** 54 variants. Compact status at a glance.

**Description:**
Badge is the lightest-weight status indicator — no interactivity, pure information. 54 variants: 6 colors × 3 styles × 3 sizes. Used for notification counts, status labels, and category markers.

**Key distinction from Tags:**

| | Badge | Tag |
|--|-------|-----|
| Interactive | ✕ Never | ✓ Optional (`clickable`) |
| Removable | ✕ Never | ✓ Optional (`removable`) |
| Avatar | ✕ No | ✓ Yes |
| Purpose | Status display | Categorization / filtering |

**✅ DO:**
- Use dot-only Badge for unread counts
- Use labeled Badge in tables for status columns
- Keep labels ≤ 2 words

**❌ DON'T:**
- Don't make Badge clickable — use Tag with `clickable=true`
- Don't use more than 2 badge types in a single table column

---

### 5.6 AVATAR

**Tagline:** Identity at every scale.

**Description:**
Avatar represents a person or entity. Initials-based with 6 color options, 4 sizes, and 2 shapes — circle for people, square for organizations. Used standalone, stacked in groups, and embedded in Tags.

**Size table:**

| Token | px | Use case |
|-------|----|----------|
| `xs` | 20px | Inside Tags (SM/MD) |
| `sm` | 24px | Inside Tags (LG) · dense lists |
| `md` | 32px | Default — comments, assignees |
| `lg` | 40px | Profile cards, confirmation dialogs |

**Color options:** Brand (blue) · Purple · Green · Orange · Rose · Teal

**✅ DO:**
- Circle shape for people · Square for organizations
- `xs` size when embedding in Tags
- Always add a tooltip when name isn't visible nearby

**❌ DON'T:**
- Don't use more than 3 initials
- Don't use Avatar alone without visible name in dense lists

---

### 5.7 CHECKBOX · RADIO · TOGGLE

**Selection controls. Consistent feel across every choice pattern.**

**Decision guide:**

| Control | When to use | Effect |
|---------|------------|--------|
| Checkbox | Multiple selections from a list | Applied on form submit |
| Radio | Single selection from mutually exclusive options | Applied on form submit |
| Toggle | Single binary on/off preference | Immediate effect — no submit |

**Checkbox states:** Unchecked · Checked · Indeterminate (each × enabled/disabled)

**Checkbox token map:**
```
--color-border-default    Border (unchecked)
--color-brand-primary     Background (checked)
--color-text-on-brand     Checkmark color
--shadow-focus-ring       Focus indicator
--radius-sm               Border radius (2px)
```

**Toggle sizes:** SM (32×20px) · MD (40×24px) · LG (48×28px)

**Toggle note:** Label always on the right. Never use Toggle for actions that need a confirm step.

---

### 5.8 TOOLTIP

**Tagline:** Context on demand. Never blocking.

**Description:**
Tooltip surfaces supporting information on hover/focus. 4 positions with smart collision detection. Max-width 240px. Appears after 300ms delay.

**Token map:**
```
--color-bg-overlay     Background  →  gray/900 (#0F172A)
--color-text-inverse   Text        →  white
--radius-base          Border radius (4px)
--shadow-md            Box shadow
--font-size-xs         Font size (11px)
```

**✅ DO:**
- Use for icon-only buttons — always label them
- Use for truncated text that needs full display

**❌ DON'T:**
- Don't put interactive elements (links, buttons) inside a tooltip
- Don't use tooltip as an error message
- Don't use on mobile as the primary way to reveal information

---

### 5.9 ICONS

**Tagline:** 40+ icons. One visual weight. Infinite clarity.

**Description:**
All icons are Lucide-based with 1.5px stroke weight and 24×24px grid. Icons inherit color from parent — no hardcoded fill.

**Size guide:**

| px | Use case |
|----|----------|
| 10px | Tags remove button (SM/MD) |
| 12px | Tags remove button (LG) |
| 16px | Input prefix/suffix · Button |
| 20px | Alert icons · Navigation |
| 24px | Empty states · Feature icons |

**Key icons in system:**
`X` `Check` `AlertTriangle` `XCircle` `Info` `ChevronDown` `Search` `Eye` `EyeOff` `Plus` `Edit` `Trash2`

---

## SECTION 6 — PATTERN COMPOSITIONS

> **Layout:** Light gray background `#F8FAFC` · 3-column card grid

### Header

**Section label (small caps):**
Composed patterns

**Heading:**
Components compose into patterns. Patterns compose into products.

**Subheading:**
Individual components are building blocks. Real product value emerges when they combine. These three patterns demonstrate how the system handles the most common B2B workflows.

---

### Pattern 1 — Data Entry Form

> **Card layout:** Wireframe left · description + component list right

**Pattern name:** Data Entry Form

**Components:** Input + Checkbox + Button (Primary + Ghost) + Alert

**Wireframe:**
```
┌─────────────────────────────────────────┐
│  Page title                             │
│  Subtitle text                          │
│                                         │
│  [Label]                                │
│  ┌─────────────────────────────┐        │
│  │ Placeholder                 │        │
│  └─────────────────────────────┘        │
│                                         │
│  [Label]                                │
│  ┌── Error border ─────────────┐        │
│  │ Value                       │        │
│  └─────────────────────────────┘        │
│  ✕ Error message text                   │
│                                         │
│  ☑ I agree to the terms                │
│                                         │
│  ┌── Alert Error ─────────────────┐     │
│  │ ✕  Please fix the errors above │     │
│  └────────────────────────────────┘     │
│                                         │
│  [ Cancel ]     [ Save Changes ]        │
└─────────────────────────────────────────┘
```

**Token cohesion story:**
Error state flows consistently: Input `--color-border-error` → error message `--color-feedback-error-text` → Alert `--color-feedback-error-border`. One token update repaints the entire error grammar.

---

### Pattern 2 — Filter Bar

> **Card layout:** Wireframe left · description + component list right

**Pattern name:** Content Filter Bar

**Components:** Input (Search) + Tags (removable) + Badge (result count) + Button (Ghost: Clear all)

**Wireframe:**
```
┌─────────────────────────────────────────┐
│  🔍 Search...                           │
└─────────────────────────────────────────┘

Active filters:
[Status: Active ×]  [Assignee: John D. ×]  [Priority: High ×]
[247 results]                              [ Clear all ]
```

**Interaction flow:**
1. User types → results filter live
2. User applies filter from dropdown → new removable Tag appears
3. Remove × on Tag → filter cleared, Badge count updates
4. "Clear all" → all tags removed, full result set

**Token cohesion story:**
Active filter Tags use Brand/Subtle style — `--color-brand-subtle` background, `--color-brand-text` label — visually connecting "selected" state to the primary brand color across every filter implementation.

---

### Pattern 3 — User Assignment

> **Card layout:** Wireframe left · description + component list right

**Pattern name:** Assignee Picker

**Components:** Avatar + Tags (avatar=true, removable) + Tooltip + Input (search)

**Wireframe:**
```
Assigned to:
[AB] [JD] [MK] [+3]     ← stacked avatar group

┌─────────────────────────────────────────┐
│  🔍 Search team members...              │
└─────────────────────────────────────────┘

[AB] Alex Brown      [ + Assign ]
[JD] John Doe        [ ✓ Assigned ]
[MK] Maria Kim       [ + Assign ]

Current assignees:
[ AB  Alex Brown × ]  [ JD  John Doe × ]  [ MK  Maria Kim × ]
```

**Token cohesion story:**
Avatar color tokens (`--blue-100` / `--blue-700`) coordinate with Tag's Brand/Subtle style. When an assignee is added as a Tag, the Avatar inside the Tag matches automatically — same color tokens, same visual identity.

---

## SECTION 7 — DESIGN ↔ CODE PARITY

> **Layout:** White background · Token table + 2-column screenshot pairs + 3-benefit cards

### Header

**Section label (small caps):**
Token parity

**Heading:**
What you design is what ships. Token-for-token.

**Subheading:**
Every Figma variable maps to a CSS custom property. The naming is intentional — `collection/group/variant` in Figma becomes `--collection-group-variant` in CSS.

---

### Token Mapping Table

> **Layout:** Centered · max-width 800px · 3 columns

| Figma Variable | CSS Custom Property | Resolved Value |
|----------------|--------------------|--------------------|
| `color/brand/primary` | `--color-brand-primary` | `#226FF6` |
| `color/brand/hover` | `--color-brand-hover` | `#1757D4` |
| `color/feedback/success/bg` | `--color-feedback-success-bg` | `#F0FDF4` |
| `color/feedback/error/text` | `--color-feedback-error-text` | `#B91C1C` |
| `color/text/secondary` | `--color-text-secondary` | `#475569` |
| `color/border/focus` | `--color-border-focus` | `#226FF6` |
| `color/state/hover` | `--color-state-hover` | `#EBF3FF` |
| `spacing/4` | `--spacing-4` | `16px` |
| `radius/full` | `--radius-full` | `9999px` |
| `shadow/focus-ring` | `--shadow-focus-ring` | `0 0 0 3px rgba(34,111,246,0.25)` |

---

### Figma ↔ Storybook Screenshot Pairs

> **Layout:** 2-column · "Figma (Design)" | "Storybook (Code)" · 3 rows

**Row 1 — Button:**
- Left: Figma screenshot · Button Primary MD
- Right: Storybook Canvas · same state
- Caption: "Same padding (16px H / 10px V) · same border-radius (4px) · same brand blue (#226FF6)"

**Row 2 — Alert variants:**
- Left: Figma 4-type Alert grid
- Right: Storybook Stories grid
- Caption: "Success / Warning / Error / Info — same token-mapped colors, icon sizes, and border treatment"

**Row 3 — Tags with Avatar:**
- Left: Figma Tags component · avatar variant
- Right: Storybook Tag with `avatar=true` prop
- Caption: "Avatar size, color inheritance, and remove button spacing match spec exactly"

---

### Benefit Cards (3-column)

> **Layout:** 3 equal cards · light border · 8px radius · 24px padding

**Card 1 — For Designers**
- Icon: 🎨 (or Figma icon)
- Title: **Design with confidence**
- Body: Every component in Figma is backed by a real implementation. Design tokens are shared, not copied. When you prototype, you're prototyping the real system.

**Card 2 — For Developers**
- Icon: `</>` (or Code icon)
- Title: **Build from one source of truth**
- Body: No design redlines needed. Token names map directly to CSS variables. Storybook shows every state, prop, and interaction — ready to copy into production.

**Card 3 — For Product Managers**
- Icon: 📦 (or Box icon)
- Title: **Ship faster, change safer**
- Body: New pages built from existing components launch in days, not weeks. A rebrand — changing one primitive token — updates every component simultaneously.

---

## SECTION 8 — METRICS & CLOSING CTA

> **Layout:** Dark background `#0F172A` · centered · Stats block + CTA

### Stats Block

> **Layout:** 3×2 grid · large display numbers in blue `#226FF6` · labels in gray `#94A3B8`

| Number | Label |
|--------|-------|
| **11** | Components shipped |
| **162** | Tag variants, zero inconsistency |
| **1 token** | Changes every component simultaneously |
| **40+** | Icons, one visual weight |
| **4px** | Spacing grid, perfect alignment always |
| **< 1 day** | New page composition time (from components) |

---

### Closing Statement

**Heading (white, 36px):**
See the system in action.

**Subheading (`#94A3B8`, 18px):**
Every component is live in Storybook and production-ready.

**Buttons:**
- `[ Explore Storybook → ]` — filled blue `#226FF6`
- `[ View Figma File ]` — ghost white border

**Footer caption (`#475569`, 12px):**
Built with Figma + React + Storybook
44 primitive tokens · 40+ semantic tokens · 11 components · 162 tag variants

---

## LOVABLE / FIGMA MAKE PROMPT

> Copy and paste this entire block into Lovable (lovable.dev) or Figma Make to generate the site

```
Build a single-page portfolio showcase website for a B2B Design System.
The site should feel like a premium case study — clean, minimal, typography-focused.

COLOR PALETTE:
- Primary: #226FF6
- Dark bg: #0F172A
- Surface: #FFFFFF
- Subtle bg: #F8FAFC
- Secondary text: #64748B
- Border: #E2E8F0

TYPOGRAPHY: Inter · fallback system-ui
LAYOUT: Max content width 1200px centered · section padding 80px desktop / 48px mobile
CARDS: border #E2E8F0 · border-radius 8px · shadow 0 4px 8px rgba(16,24,40,0.10)

--- SECTION 1: HERO (dark bg #0F172A, 2-col) ---
Left:
- Eyebrow: "B2B Design System · 2024" (small caps, #226FF6, 12px)
- H1: "A design system built for scale." (white, 56px, weight 700)
- Subhead: "11 components. 40+ semantic tokens. One source of truth — for designers and developers." (#94A3B8, 18px)
- Stats row: "44+ Primitives · 40+ Tokens · 11 Components · 162 Variants" (white, monospace)
- Buttons: "View in Storybook →" (filled blue) + "Open in Figma" (ghost white border)
Right:
- 2×3 grid of placeholder component cards (Button, Input, Alert, Tags, Badge, Avatar)
  Each card: semi-transparent dark surface, component name label

--- SECTION 2: PROBLEM & ROLE (white bg, 2-col) ---
Left col "The Problem":
- Section label: "WHY THIS SYSTEM EXISTS" (gray small caps 11px)
- H2: "Three problems that slow every product team down." (32px)
- 3 problem cards (icon + title + body):
  1. ⚠ AlertTriangle (yellow) · "Inconsistency" · "Every screen made its own spacing decisions. Buttons had 6 different heights. Color values were copy-pasted and drifted over time."
  2. Code icon (blue) · "Design–Dev Gap" · "Figma components diverged from shipped UI within weeks. Redlines didn't capture hover states or error conditions."
  3. Clock icon (gray) · "Slow velocity" · "New features required redesigning solved problems. No shared vocabulary meant every handoff started from scratch."
Right col "My Role":
- Section label: "WHAT I DID" (gray small caps 11px)
- H2: "Solo designer. End-to-end ownership." (32px)
- Vertical timeline (dot + line + text):
  Week 1–2: Discovery & Audit — "Inventoried existing UI patterns across 3 products. Identified 47 inconsistencies in spacing and color alone."
  Week 3–4: Token Architecture — "Designed 2-layer token system: 44 primitives → 40+ semantic aliases."
  Week 5–8: Component Design — "Designed 11 components in Figma with all variants, states, and annotations."
  Week 9–12: Documentation & Handoff — "Built Storybook docs. Wrote usage guidelines and token maps for each component."

--- SECTION 3: FOUNDATIONS (light gray #F8FAFC) ---
- Section label: "DESIGN FOUNDATIONS"
- H2: "Built on tokens, not hex codes."
- Subhead: "Every value in the system lives in one place. Change a primitive and every component updates automatically."
- Architecture diagram (2 stacked boxes with arrow):
  TOP box (blue left border): "Semantic Tokens — What components use" with 4 example rows
  BOTTOM box (gray left border): "Primitive Tokens — Raw values" with 4 example rows
  Arrow between: "↑ References ↑" (#226FF6)
- 4 tiles below (equal width):
  Tile 1 "Colors" — 8 color swatches: #EBF3FF #226FF6 #1142AD #F8FAFC #64748B #0F172A #22C55E #EF4444 · caption "44 primitive tokens"
  Tile 2 "Spacing" — horizontal bars 4/8/12/16/24/32px · caption "4px base grid · 20 spacing tokens"
  Tile 3 "Typography" — staircase of sizes 11px to 72px in Lexend · caption "13 size tokens · 4 weight tokens"
  Tile 4 "Radius & Shadow" — squares with 2/4/8/9999px radius + 3 shadow depths · caption "9 radius · 7 shadow tokens"

--- SECTION 4: COMPONENT OVERVIEW (white) ---
- H2: "11 components. Every state designed."
- Subhead: "From atomic inputs to complex composed tags — each component covers all interactive states."
- 3-column card grid (4 rows):
  Row 1: Button (24 variants) | Input (16 states) | Checkbox (8 states)
  Row 2: Radio (6 states) | Toggle (6 variants) | Alert (24 variants)
  Row 3: Badge (54 variants) | Tags (162 variants) | Avatar (48 variants)
  Row 4: Tooltip (4 positions) | Icons (40+) | [empty]
  Each card: placeholder preview area + component name (bold) + variant count (blue badge)

--- SECTION 5: TAGS SPOTLIGHT (dark #0F172A) ---
- H2: "Tags: The hardest component." (white)
- Subhead: "6 variants × 3 styles × 3 sizes = 162 unique combinations. One CSS grammar governs them all." (#94A3B8)
- Large visual: Grid of colored tag chips in 6 colors × 3 styles (subtle/outlined/filled)
  subtle row: light tinted backgrounds
  outlined row: transparent + colored borders
  filled row: solid colored backgrounds
- 3 insight cards below (dark surface, white text, blue accent border-left):
  "Spacing grammar: SM=6px, MD=8px, LG=10px horizontal padding — multiples of the 4px grid"
  "Token-driven color: Change --color-brand-primary and all Brand tags update instantly"
  "Avatar integration: Tags embed Avatar component at xs/sm size with matching color tokens"

--- SECTION 6: PATTERN COMPOSITIONS (light gray #F8FAFC) ---
- H2: "Components compose into patterns."
- Subhead: "Individual components are building blocks. Real value emerges when they combine."
- 3 pattern cards (equal width, white bg):
  Card 1 "Data Entry Form": wireframe with Label+Input+Error state+Checkbox+Alert+Buttons · "Components: Input, Checkbox, Alert, Button"
  Card 2 "Filter Bar": wireframe with Search input + Active tags (removable) + Badge count + Clear button · "Components: Input, Tags, Badge, Button"
  Card 3 "User Assignment": wireframe with Avatar stack + Search + Assignee list + Tags with avatars · "Components: Avatar, Tags, Tooltip, Input"

--- SECTION 7: DESIGN ↔ CODE PARITY (white) ---
- H2: "What you design is what ships."
- Subhead: "Every Figma variable maps to a CSS custom property. The naming is intentional."
- Token table (3 cols: Figma Variable | CSS Property | Value):
  color/brand/primary | --color-brand-primary | #226FF6
  color/feedback/success/bg | --color-feedback-success-bg | #F0FDF4
  color/text/secondary | --color-text-secondary | #475569
  color/border/focus | --color-border-focus | #226FF6
  spacing/4 | --spacing-4 | 16px
  radius/full | --radius-full | 9999px
- 3 benefit cards (icon + title + body):
  🎨 "For Designers: Design with confidence" — "Every Figma component is backed by real code. Tokens are shared, not copied."
  </> "For Developers: Build from one source" — "No redlines needed. Token names map directly to CSS variables. Storybook shows every state."
  📦 "For PMs: Ship faster, change safer" — "New pages launch in days. A rebrand updates every component from a single token change."

--- SECTION 8: CLOSING CTA (dark #0F172A, centered) ---
- Stats grid (3×2, large blue numbers):
  11 Components | 162 Tag variants | 1 token changes everything
  40+ Icons | 4px spacing grid | <1 day new page build
- H2: "See the system in action." (white, 36px)
- Subhead: "Every component is live in Storybook and production-ready." (#94A3B8)
- Buttons: "Explore Storybook →" (filled blue) + "View Figma File" (ghost white)
- Footer: "Built with Figma + React + Storybook · 44 primitives · 40+ semantic tokens · 11 components" (#475569, 12px)

DESIGN REQUIREMENTS:
- Mobile responsive: stack all columns to single column at <768px
- Smooth scroll navigation
- No animations required — clean static layout
- All section transitions via background color changes
- Button hover states: darken primary by 10%
- Card hover: lift shadow slightly
```
