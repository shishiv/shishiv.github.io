# Orion image-native assets

Generated from `orion-nebula-background.png` as a visual reference. These assets are atmospheric only; they do not carry product meaning.

## Asset manifest

| File | Native dimensions | Intended crop | Blend / layer | Use |
|---|---:|---|---|---|
| `orion-atmosphere-desktop.png` | 1536 × 1024 | `cover`; keep the left ~42% dark and low-detail; nebula resolves center-right/lower-right; right edge can sit behind an opaque case surface | `normal`, behind all semantic UI; optional CSS darkening gradient over reading zones | Desktop Orion background for landscape viewports |
| `orion-atmosphere-mobile.png` | 1024 × 1536 | `cover`; preserve the dark upper/upper-middle reading zone; nebula falls into lower center/right; use a top/left dark overlay if needed | `normal`, behind content and semantic SVG; optional `multiply`/dark gradient only if contrast requires it | Mobile Orion background for portrait/reflowed viewports |

## What stays code

- constellation geometry, paths, stars used as case anchors, and all interaction states: semantic HTML/SVG;
- the four major-star case mapping and method constellation: semantic data + accessible labels;
- all labels, headlines, metadata, metrics/limits, navigation, controls, focus states, and copy: HTML/CSS/React;
- project logos and other real case assets: existing authorized product assets;
- responsive positioning, motion, hover/focus, reduced-motion behavior, and contrast overlays: CSS/JS/SVG.

No repeatable dust/grain texture is included: both generated fields already contain restrained natural grain/star texture, and a second texture layer would add noise under body copy without adding semantic value.

## Provenance

- `orion-atmosphere-desktop.provenance.json`
- `orion-atmosphere-mobile.provenance.json`

Each sidecar records the exact generation prompt, model/provider, reference path, native output size, and visual inspection result. The generator does not provide an embedded metadata-write option, so provenance is carried in exact sidecars adjacent to each raster.

## Verification boundary

- Both PNGs are RGB, non-transparent atmospheric plates by design; dimensions were checked from the generated files.
- Visual inspection found no text, logos, watermark, UI, people, recognizable objects, constellation lines, nodes, or geometric symbols.
- Generated dimensions are the provider's native output (`1536×1024` desktop and `1024×1536` mobile), not the prompt's nominal canvas wording.
