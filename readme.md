# Elapsd Marketing Site

Static site for Elapsd, built with [Eleventy](https://www.11ty.dev/) and deployed on [Netlify](https://www.netlify.com/).

## Stack

- Eleventy (`@11ty/eleventy`)
- Nunjucks layouts/includes
- Markdown content pages
- Plain CSS + vanilla JavaScript

## Features

- Fast static output with minimal runtime dependencies
- Shared layout and includes for nav/footer
- Responsive screenshot grids on the home page
- Accessible screenshot lightbox:
  - keyboard support (`Tab`, `Esc`, arrow keys)
  - focus trap and focus restore
  - backdrop click to close
  - previous/next navigation

## Project Structure

```text
.
├── .eleventy.js              # Eleventy config
├── netlify.toml              # Netlify build + headers
├── src
│   ├── _includes
│   │   ├── layout.njk        # Base page shell
│   │   ├── nav.njk
│   │   └── footer.njk
│   ├── assets
│   │   ├── css/site.css
│   │   ├── js/lightbox.js
│   │   └── img/*             # Screenshots and assets
│   └── index.md              # Home page content
└── _site                     # Generated output (build artifact)
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

This starts Eleventy in serve/watch mode.

## Build

```bash
npm run build
```

Build output is written to `_site/`.

## Deploy (Netlify)

The repo already includes Netlify config in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `_site`

To deploy:

1. Connect this GitHub repo to Netlify.
2. Keep the default build settings from `netlify.toml`.
3. Push to `main` to trigger deploys.

## Content and Styling

- Edit home page content in `src/index.md`.
- Edit global styles in `src/assets/css/site.css`.
- Update/reuse layout partials in `src/_includes/`.
- Add/replace screenshots in `src/assets/img/`.

## Notes

- `src/assets` is configured as passthrough copy in `.eleventy.js`, so assets are published as `/assets/...`.
- No client framework or third-party lightbox library is used.
