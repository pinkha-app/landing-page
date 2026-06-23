<div align="center">
  <img src="public/icons/bowl.png" width="120" alt="Pinkha bowl" />

  # pinkha.app — landing

  Marketing site for [Pinkha](https://github.com/pinkha-app/pinkha) — beautiful, native notes for iPhone, iPad and Mac.

  **Live →** [landing-page-mu-virid-91.vercel.app](https://landing-page-mu-virid-91.vercel.app)
</div>

---

## Stack

- [Astro 7](https://astro.build) — static site framework
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling
- [@fontsource/fraunces](https://fontsource.org) + [@fontsource/inter](https://fontsource.org) — variable web fonts
- TypeScript (strict)
- Auto-deploy to [Vercel](https://vercel.com) on push to `master`

## Develop

```sh
pnpm install
pnpm dev          # http://localhost:4321
```

## Build

```sh
pnpm build        # → ./dist
pnpm preview      # serves the built output
```

## Structure

```
src/
├── components/   Hero, Features, Manifesto, Screenshots, OpenSource, Footer, Decor, NavBar, Particles, Reveal
├── layouts/      Base (head, OG, JSON-LD, ClientRouter) and Legal (privacy/terms)
├── pages/        index, privacy, terms, 404
└── styles/       global.css (Tailwind theme + custom selection, scroll-padding)
public/
├── icons/        bowl.png — the app logo
├── robots.txt
└── favicon.{png,ico}
```

## Deploy

Pushes to `master` trigger a fresh production deploy on Vercel automatically. PRs get their own preview URL.

To deploy manually:

```sh
vercel --prod
```

## License

Dual MIT / Apache 2.0 — see [LICENSE-MIT](LICENSE-MIT) and [LICENSE-APACHE](LICENSE-APACHE).
