# Town Crier — Public Web Site

Public web content for Town Crier, the audio-first driving companion app for Android.

## What's here

- **`index.html`** — landing page at `/`
- **`privacy.html`** — privacy policy at `/privacy`
- **`style.css`** — site-wide stylesheet

## Deploy

This repo is deployed via Cloudflare Pages, connected to the `main` branch. Every push to `main` triggers an automatic deploy.

Production URL: [https://towncrierapp.com](https://towncrierapp.com)

## Editing

To update the site:

1. Edit the relevant HTML file locally
2. Test the change by opening the HTML file directly in a browser
3. Commit and push to `main`
4. Cloudflare Pages deploys automatically (~1 minute)

## Design principles

- No JavaScript required — content is fully accessible without JS
- Mobile-first responsive layout
- Amber accents matching the Town Crier brand
- Fast loading (single CSS file, no external dependencies)

## Adding pages

Create a new HTML file at the repo root. Include the standard header/nav/footer pattern from `index.html` and reference `/style.css` for consistent styling.

## License

Content in this repository is licensed under the MIT License. See `LICENSE`.
