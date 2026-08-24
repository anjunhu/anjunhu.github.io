# anjunhu.github.io

Personal GitHub Pages site. No build step: static files served as-is.

```
.
├── index.html      landing page: name + six project cards
├── brdfbox/        real-time WebGL path tracer (BRDF Box)
└── twmars/         "Composing Agents, Compounding Risks" tutorial site (CACR)
```

## Cards, in order

| # | Project | Accent | Destinations |
|---|---------|--------|--------------|
| 1 | Composing Agents, Compounding Risks (CACR) | `#5B9BD5` blue | `/twmars/` · [RecSys '26](https://recsys.acm.org/recsys26/tutorials/) · [CIKM '26](https://cikm2026.diag.uniroma1.it/accepted-tutorials/) |
| 2 | ConnACF | `#4FB3A8` teal | [paper](https://www.amazon.science/publications/attacking-and-defending-multi-agent-collaborative-filtering-systems-through-connectivity) · [code](https://github.com/anjunhu/ConnACF) · [RecSys '26](https://recsys.acm.org/recsys26/contributions/#content-tab-1-3-tab) |
| 3 | RFMD, Reference Free Memorisation Detection across Diffusion Models | `#7A8798` slate | none, private until Sept 2026 |
| 4 | MiDSummer | `#9B7EDE` violet | [ICCV 2025 poster](https://iccv.thecvf.com/virtual/2025/poster/1817) |
| 5 | Adversarial Transferability | `#D9645B` crimson | [AFAF](https://github.com/anjunhu/AFAF) · [reading list](https://github.com/jindonggu/awesome_adversarial_transferability) |
| 6 | BRDF Box | `#E8A24E` amber | `/brdfbox/` |

Each card carries a hand-drawn inline SVG mark tinted with its accent, no image
files. Accent is set per card via a `--accent` custom property, so recolouring a
project means changing one hex in `:root`.

Card 3 is a `div`, not a link: dashed border, muted accent, no destination. When
RFMD goes public, change the wrapper to `<a href="…">` and drop `.locked`.
Cards 1, 2 and 5 are also `div`s because they carry several destinations
rather than one; nesting anchors inside an anchor would be invalid HTML.

## House style

No em dashes or en dashes anywhere in this repo (a standing preference). Use a
colon, a comma, parentheses, or "to" for ranges. After editing, confirm zero hits
for both the literal characters and their HTML entity forms:

```bash
grep -rnE $'\u2014|\u2013|&#109;dash;|&#110;dash;' --exclude-dir=.git .
```

Known exception: `twmars/assets/img/connacf_connectivity.svg` contains one en dash
as a traced glyph, inherited from the upstream ConnACF figure. It is not editable
as text and the page loads the `.png` anyway, so it never renders on the site.
Fixing it means regenerating the figure from its source.

## Layout

Fluid `1fr` columns inside a `max-width: 1140px` container: 3 across on desktop,
2 below 980px, 1 below 640px. Verified with no horizontal overflow down to 320px.

## Run locally

```bash
python3 -m http.server 8000
# → http://localhost:8000/
```

`/brdfbox/` needs WebGL 2 and loads ~56 MB of models and HDR maps on first visit.
