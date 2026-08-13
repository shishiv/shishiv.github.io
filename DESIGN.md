---
name: myke matos
description: perfil tecnico publico - callgraph interativo de infraestrutura
---

# design system: the callgraph

## direction

The page is one interactive callgraph. The first viewport shows how 6
infrastructure systems connect via labeled dependency arrows. Clicking any
node reveals its decisions, boundaries, and source link. Architecture
demonstrated, not described.

The visual world emerges from information design, not from any external
metaphor. Beauty comes from typography, spacing, and purposeful interaction.

## mode

Persuade. The visitor decides and acts. The page earns attention by showing
architecture immediately and earns the action (email about a remote role) by
proving operational capability through real code.

## tokens

- ground: `#f7f6f3` (warm light)
- surface: `#ffffff` (panels, expanded details)
- ink: `#1c1c1c` (primary text)
- ink-2: `#4a4a4a` (secondary text)
- ink-3: `#7a7a7a` (tertiary, labels)
- accent: `#1a5c5c` (deep teal - interaction, active states)
- accent-light: `#eaf5f5` (boundary callouts, active node bg)
- node-bg: `#f5f4f1`
- node-border: `#d4d3cf`
- edge: `rgba(28, 28, 28, 0.55)`

## typography

- display: Bricolage Grotesque (variable, optical sizes 12-96, weights 400/700)
- body: Literata (variable, optical sizes 7-72, weights 400/600)
- mono: JetBrains Mono (weights 400/600) - source paths and code only

Type is never used as costume. Mono appears only for genuine code references
(source paths, commit hashes, edge labels). Display carries headings and node
names. Body carries prose and decisions.

## structure

1. Sticky header: name + positioning statement + navigation (anchors + locale)
2. Graph section (first viewport):
   - Brief context sentence
   - SVG callgraph (viewBox 1000x480, 6 nodes, 6 edges with labels)
   - Detail panels (one per node, shown on click)
3. Limits section: 3 explicit boundaries with source links
4. Footer: CTA (email about remote work), contact links, attribution

## interaction

- Click/tap a node: highlights it and connected edges, shows detail panel below
- Only one node expanded at a time
- Close via button, Escape key, or clicking another node
- Keyboard: nodes are focusable (tabindex), Enter/Space activates
- Connected edges highlight in accent color on node activation

## graph topology

Real dependencies between infra-examples subsystems:
- bash-ops → github-actions (runner bootstrap)
- bash-ops → docker-swarm (operates deploy)
- github-actions → docker-swarm (publishes image)
- github-actions → playwright (runs tests)
- playwright → nextjs (tests contract)
- nextjs → drizzle (data layer)

## responsive behavior

- Desktop (>768px): full graph visible in viewport, detail panels below
- Tablet/mobile (<=768px): graph has min-width 600px, horizontally scrollable
  within its container. Nodes remain tappable (56px height).
- Small mobile (<=480px): header stacks, graph area taller to show more
- Footer stacks on narrow viewports

## motion

- Detail panel entrance: opacity + translateY (300ms, ease-out)
- Edge/node transitions: stroke/fill color (200ms, ease)
- All motion respects prefers-reduced-motion: reduce

## accessibility

- Skip link to graph section
- SVG has role="img" and aria-label
- Nodes have role="button", aria-expanded, aria-label with name and title
- Detail panels use aria-live="polite"
- Visible focus ring (2px solid accent, 3px offset)
- All touch targets >= 44px (nodes are 56px tall)
- No information conveyed by color alone (edges have labels, boundaries have text)

## content source

All factual content comes from infra-examples repo, pinned commit c0469a25.
Data file: src/data/infra.json. I18n: src/i18n/ui.ts.
