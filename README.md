# business-map-css

An interactive business map (traffic → retention) built to practice modern CSS.

Based on my Pareto Talent Bootcamp final project (Head to Hand): the same business structure, rebuilt as a scrolling page where each stage of the funnel is a lab for a different set of CSS features.

**Live:** _(coming soon)_

## Why this exists
I wanted to learn the new CSS properly, not by reading specs but by building something with a real structure behind it. The business map gave me that structure.

## What it demonstrates
| Stage | Techniques |
|---|---|
| Foundation | `@layer`, nesting, `@property`, `oklch()`, `color-mix()` |
| Hero | CSS-only looping "thought bubble" animation |
| Whole page | Scroll-driven animations (`animation-timeline: scroll()` / `view()`) |
| Traffic tile | Gradient-drawn pattern (`radial-gradient` hard stops), per-cell custom properties, `atan2()` + `round()` for rotation, `subgrid` overlay |
| Typography | Variable font (`wght` 200–800) animated on scroll with named view timelines (`view-timeline`, `animation-range`), no JS |
| Planned | `:has()`, `field-sizing`, container queries, View Transitions, anchor positioning, `@starting-style`, popover, `light-dark()` |

## Palette
A random palette on every visit (press space or use the button to reshuffle). JavaScript only sets five variables, `--c1` to `--c5`; CSS derives background, ink, paper and accent from them with `color-mix()`, so any palette works. The first one is from [coolors.co](https://coolors.co/ff7477-e69597-ceb5b7-b5d6d6-9cf6f6). The accent blends from `--c1` to `--c5` as you scroll (an animated `@property`).

## Browser support
Scroll-driven animations are wrapped in `@supports`, so browsers without them show a static, fully readable page. `prefers-reduced-motion` is respected.

## Run it
No build step. Open `index.html`.

## Status
Work in progress. Version 1: hero + six stages.
