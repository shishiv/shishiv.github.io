---
name: myke matos
description: founder / cto portfolio with case-led orbital archive
---

# design system: orbital archive

## stack

Next.js 15 App Router with static export, React 19, TypeScript, Anime.js 4 and plain CSS. The project does not use Tailwind.

## mode

Persuade + Experience. The home establishes Myke as a Founder / CTO who works across product, engineering and operations. It should make the person, thesis and selected work legible before technical documentation.

The evidence-backed professional claim is: “I take messy real-world problems through the whole loop: find the constraint, change the system, test the path, and make it run.” Product, design, research and technology are means inside that loop, not narrower substitutes for it.

## direction

A dark editorial archive with a persistent narrow rail and one viewport of content at a time. The visual world combines restrained orbital geometry, a sans + serif italic + mono type system and real project identities. Lowercase is intentional.

The home is not an infrastructure dashboard. Technical architecture remains available on a separate documentary route.

## structure

Desktop home:

1. Persistent rail: identity, cases, personal about, articles and contact.
2. Cases slide, selected by default:
   - positioning statement;
   - orbital stack graph connecting related frameworks, data, delivery and operations technologies;
   - no project cards or case controls on the home slide.
3. About slide:
   - one personal statement grounded in current study, research and product work;
   - three ruled notes — curiosity, continuity and encounter — as extensions of that narrative, never service cards;
   - no contact links.
4. Contact slide:
   - direct conversation is separated from public work;
   - email is the primary action and each full row explains the destination before activation.
5. Cases slide: the editorial index renders inside the persistent rail shell and owns its own vertical scroll.
6. Deep-link case indexes:
   - `/case/`;
   - `/en/case/`.
7. Legacy architecture routes redirect to the matching case index.

At 1268 × 768, every desktop slide fits exactly one viewport and the cases tabs touch the bottom edge. The document must not scroll horizontally.

## content hierarchy

The home only uses facts that support positioning, work or proof. Biographical details, metrics and arguments that need context belong in cases or future articles, not as isolated fragments.

“Construir é só metade” remains the editorial headline, while its supporting sentence must name the full method: restriction discovery, system change, path testing and operation. Cases must eventually prove that sequence; the trace corpus proves the repeated working method, not customer outcomes, adoption, revenue, uptime or reliability.

Case copy states the product context and responsibility. It does not claim revenue, scale, uptime, adoption or institutional endorsement.

## typography

- Display: Source Sans 3.
- Editorial contrast: Source Serif 4 italic.
- Technical labels and architecture paths: IBM Plex Mono.

Display tracking stays between -0.02em and -0.04em. Body copy remains compact and readable; technical labels never replace explanatory prose.

## color

- background: `#07080b`;
- surface: `#0b0d12`;
- primary text: `#f1efe9`;
- secondary text: `#a7acb6`;
- structural line: `#292d36`;
- accent: `#ff6842`.

Individual cases may tint orbit lines and selected stars from their identity, while text and interaction retain the shared system.

## interaction

- Rail buttons switch between Cases, About and Contact without leaving the page.
- Cases renders the editorial index inside the rail shell; `/case/` and `/en/case/` remain deep-linkable standalone routes.
- Stack logos support pointer, focus, Enter and Space interaction.
- Hover/focus previews the selected technology, its direct neighbors and connecting paths; click pins it for touch and pointer users.
- Automatic cycling stops after a deliberate selection and under reduced motion.

## motion

- Slide navigation uses an interruptible WAAPI transition: `translateX(±18px)` + opacity, 180ms, `cubic-bezier(0.23, 1, 0.32, 1)`. Reduced motion keeps only a 160ms opacity transition.
- Technology relationships use SVG line drawing.
- Three neutral orbital tracks establish depth; curved relationship paths carry the semantic network without reading as infrastructure topology.
- Only the selected stack logo, direct neighbors and their paths receive color, a restrained aura and offset depth.
- Node positions stay fixed for spatial consistency; inner visual wrappers may scale for hover, press and active feedback without overwriting SVG placement transforms.
- A compact editorial readout names the focused technology and reconnects the stack to the thesis: tools change while the operating loop remains.
- `prefers-reduced-motion` starts case cycling paused, removes spatial movement and keeps a short opacity transition.

## responsive behavior

Desktop (over 800px): persistent rail, one-viewport slides, parallel text/visual relationships.

Mobile (800px and below):

- identity and navigation become a compact top header;
- core navigation remains present and horizontally arranged;
- cases become a vertical reading flow;
- the orbital graphic moves behind and away from body copy;
- case narrative receives a protected surface;
- four case tabs stack as full-width touch targets;
- About fits one viewport at 390 × 844;
- no horizontal overflow.

Mobile is not a scaled desktop composition.

## accessibility

- Skip link targets main content.
- Portuguese and English route groups emit the correct document-level `lang` in static HTML.
- Rail state uses `aria-current` and a non-color marker.
- Stack nodes expose locale-matched accessible names and remain keyboard-selectable.
- Automatic stack cycling never writes to an ARIA live region.
- Interactive targets are at least 44px.
- Focus rings remain visible.
- Hover motion is gated to fine pointers.
- Reduced motion is implemented in CSS and runtime behavior.

## case articles

`/case/` is the editorial index for articles organized as situation → constraint → system change → path test → operation → evidence limits. Architecture is supporting evidence for a decision under constraints, not the article's central claim. The legacy `/arquitetura/` route redirects there; the superseded callgraph implementation is not retained.

The index exposes that reading method once, then lets each case lead with identity, an editorial thesis and factual context. Architecture sits below the narrative as secondary metadata. Rows do not pretend to be links until a real article destination exists.

## publication boundary

Project logos identify cases; they do not imply endorsement. Scapola and UEMG assets require final authorization/context review before public release. The page must not add claims unsupported by primary evidence.
