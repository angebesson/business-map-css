# References

Articles I studied before and while building this. For each one: what it covers and what I want to take from it. The "take" lines are drafts, to be edited as I actually use them.

## Carmen Ansio — carmenansio.com

| Article | What it covers | What I want to take |
|---|---|---|
| [Matchstick flame (canvas)](https://www.carmenansio.com/articles/matchstick-flame-canvas/) | An animated match in `<canvas>`; layered sine waves for irregular flicker, particles, a state machine, reduced-motion handling. | The motion idea, not the technique: irregular timing (unrelated durations) and designing by states. Keep colour and state when `prefers-reduced-motion` is on. |
| [Modernist tiles with CSS Grid](https://www.carmenansio.com/articles/modernist-tiles-css-grid/) | Pure-CSS tile generator on a 9-column grid: subgrid, layered gradients, per-cell variables, `sin()` / `cos()` / `atan2()` in `calc()`. | Draw each stage with gradients instead of images; subgrid overlays; per-cell custom properties. Watch out: avoid `fr` inside trig `calc()`. |
| [3D CSS guide](https://www.carmenansio.com/articles/3d-css-guide/) | `perspective`, `preserve-3d`, `translateZ`, `backface-visibility`, cuboids from six faces, parallax. | Tilt on hover and flip cards for the stages. Watch out: `overflow` and Safari filters flatten 3D. |
| [Variable font on scroll](https://www.carmenansio.com/articles/variable-font-scroll/) | `font-variation-settings` animated by a named `view-timeline`, sticky pinning, staggered `animation-range`. | Section titles that gain weight as they cross the screen. Use `overflow: clip`, not `hidden`. Needs a variable font loaded with a weight range. |
| [Spring physics in CSS](https://www.carmenansio.com/articles/spring-physics-css/) | Spring easing as a precomputed `linear()` curve, with a `cubic-bezier()` fallback in `@supports`. | Bouncy button and card entrances. Paste a generated curve into a custom property. |
| [Animated icon libraries](https://www.carmenansio.com/articles/animated-icon-libraries/) | SVG + CSS vs Lottie, dotLottie, Rive, and icon libraries. | One inline SVG icon per stage, animated in CSS (`stroke-dasharray`, `data-state`). No runtime library. |

## Amit Sheen — Master.dev (Frontend Masters)

| Article | What it covers | What I want to take |
|---|---|---|
| [The Deep Card Conundrum](https://blog.master.dev/the-deep-card-conundrum/) | Why a card can't have both 3D depth and clipped content (`preserve-3d` is flattened by `overflow`, `opacity`, `filter`), and a `perspective-origin` fix with `cos()` / `sin()`. | A layered 3D card for the showcase section; the flat `scale` / `translate` fallback for everything else. Add keyboard and reduced-motion support, which the article doesn't cover. |

## Patterns across all of them
- Prefer native CSS to a JavaScript library when the effect is simple.
- State the limits and the browser support, and ship a fallback (`@supports`).
- Respect `prefers-reduced-motion`; several articles skip it, so it is a place to do better.
