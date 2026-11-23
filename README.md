# Town Crier — Public Web Site

Public web content for Town Crier, the audio-first driving companion app for iPhone and Android.

## What's here

- **`index.html`** — landing page at `/`
- **`support.html`** — support + FAQ at `/support`
- **`privacy.html`** — privacy policy at `/privacy`
- **`delete-data.html`** — data deletion at `/delete-data`
- **`style.css`** — site-wide stylesheet
- **`assets/`** — store badges, screenshots, icons, `og-image.jpg` (1200×630 share card), self-hosted IBM Plex Sans in `assets/fonts/`

## Deploy

This repo is deployed via Cloudflare Pages, connected to the `main` branch. Every push to `main` triggers an automatic deploy.

Production URL: [https://towncrierapp.com](https://towncrierapp.com)

## Editing

To update the site:

1. Edit the relevant HTML file locally
2. Test with a local server (`python3 -m http.server`) — pages use root-relative `/assets/` paths, so opening files directly won't load images
3. Commit and push to `main`
4. Cloudflare Pages deploys automatically (~1 minute)

## Design principles

- No JavaScript required — the only script reorders store badges for Android visitors; everything works without it
- Mobile-first responsive layout
- Amber accents matching the Town Crier brand
- Fast loading (single CSS file, self-hosted fonts, no external dependencies)

## Adding pages

Create a new HTML file at the repo root. Include the standard header/nav/footer pattern from `index.html` and reference `/style.css` for consistent styling.

## License

Content in this repository is licensed under the MIT License. See `LICENSE`.
