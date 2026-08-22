---
name: myke matos
description: founder / cto portfolio with case-led orbital archive
---

# design system: orbital archive

## stack

Next.js 15 App Router with static export, React 19, TypeScript, Anime.js 4 and plain CSS. The project does not use Tailwind.

## mode

Persuade + Experience. The home establishes Myke as a Founder / CTO who works across product, engineering and operations. It should make the person, thesis and selected work legible before technical documentation.

The professional thesis is the space between intent and useful reality: Myke helps real ideas and problems move through investigation, shared choices, maps, contracts, decomposition, construction, testing and human experience. The people living the problem and the context retain authority; agents extend execution without replacing human judgment. Public cases must prove parts of that traversal without inflating their evidence.

## direction

An evidence-first editorial portfolio with dark framing, a warm paper section for public work and restrained orbital geometry as a signature rather than a stack diagram. Sections may use distinct SVG artifacts tied to their job: orbital path for the whole-loop thesis, a process line for the method, a ruled field for reflection and an envelope path for contact. The visual world combines a sans + serif italic + mono type system and direct, source-backed project narratives. Lowercase is intentional.

The home is not an infrastructure dashboard. Technical architecture remains available on a separate documentary route.

## structure

Desktop home:

1. Sticky top header: identity, direct section anchors and language.
2. Hero: positioning statement, two direct actions and restrained orbital traces.
3. Evidence ledger: three public cases with explicit state and a direct path to each full entry.
4. Method: the three repeated responsibilities behind the work.
5. About: one personal statement and three ruled notes.
6. Contact: email first, followed by public profiles.
7. Deep-link case indexes:
   - `/case/`;
   - `/en/case/`.
7. Legacy architecture routes redirect to the matching case index.

At 1268 × 768, the hero fills the first viewport and exposes an explicit path to evidence. The document must not scroll horizontally.

## content hierarchy

The home only uses facts that support positioning, work or proof. Biographical details, metrics and arguments that need context belong in cases or future articles, not as isolated fragments.

The home leads with “da intenção ao que funciona” and names translation as the work rather than claiming unilateral authority over what should exist. Three public cases prove parts of that sequence with direct sources and explicit limits; code and local receipts do not prove customer outcomes, adoption, revenue, uptime or current production state.

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

`/case/` is the editorial index. Each case opens a rendered six-chapter journey: idea → why → crossing → system → observed evidence → boundary. The visitor advances through the story like slides, while the route remains linkable and keyboard-operable. Architecture is visualized in the system chapter as a bounded conceptual flow, not presented as live topology. The only surface labelled primary source is the pinned GitHub repository. A live product link, when available, is labelled as a public artifact rather than a source. The legacy `/arquitetura/` route redirects to the index.

The index exposes that reading method once, then lets each case lead with identity, an editorial thesis and factual context. Architecture sits below the narrative as secondary metadata. Rows do not pretend to be links until a real article destination exists.

## publication boundary

Project logos identify cases; they do not imply endorsement. Scapola and UEMG assets require final authorization/context review before public release. The page must not add claims unsupported by primary evidence.
