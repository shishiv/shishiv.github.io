# Orion direction artifact

**Status:** unapproved evidence for review. Orion is not a production direction, implementation plan, or release approval.

Open [`index.html`](./index.html) to review responsive variant B. It is a standalone HTML document with inline CSS and local image assets. The composition switches from `orion-atmosphere-desktop.png` to the separately composed mobile plate at `800px` and below.

## Advisor composition

[`advisor.html`](./advisor.html) is the next composition, built separately so the previous B remains available. It places the focused case below the headline in the dark left column. The right-hand constellation uses an inclined belt and a downward-right operation path, without the duplicate route or floating all-cases link.

On mobile, the unlabelled constellation sits below the introduction. An ordered method strip and four full-width case selectors replace the desktop overlays. Selecting a case updates the desktop panel or the expanded mobile row. There is no automatic cycling or spatial animation. The 390×844 layout scrolls vertically by design.

Source Sans 3, Source Serif 4 and IBM Plex Mono are served locally from `assets/fonts/`, with their OFL licenses. The heading has no kicker. Labels and selected rings have explicit separation after a browser inspection. The article action opens the existing public case index, not a nonexistent article. About and contact are labelled, inactive navigation samples in this prototype.

Local preview:

```sh
python -m http.server 4173 --bind 127.0.0.1 --directory docs/direction/orion
```

Open `http://localhost:4173/advisor.html`. Captures are named `screenshots/orion-advisor-{width}x{height}.png`. The production app is unchanged.

## Conflict with `DESIGN.md`

Orion proposes replacing the home page's technology stack graph with a case constellation, a visible method path, case labels, and a focused-case panel. `DESIGN.md` currently requires the Cases slide to retain the orbital stack graph and forbids project cards or case controls on the home slide. Approval of this artifact would therefore require a separate product and design-system decision before production work.

## Human decisions still required

1. Should Orion replace the technology stack graph on the home page?
2. May the public portfolio name Scapola Comunica and Inclusão Digital UEMG in this context?

## Evidence in this folder

- `assets/` contains the two atmospheric plates, their unchanged provenance sidecars, and the source manifest.
- `reference/` contains the live baseline and the legacy A, B, and C captures from the direction pack.
- `screenshots/` contains Chromium renders of this variant at `1440x900`, `1268x768`, and `390x844`.
