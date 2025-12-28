# Urban Footwear

Static HTML/CSS/JS storefront for footwear, rebuilt from the React reference. No build step required.

## Features
- Hero banner with local background image and CTA
- Feature highlights, featured carousel, and category-filtered product grid
- Product detail overlay with add-to-cart and per-product reviews
- Persistent cart in localStorage with quantity controls and checkout modal
- Responsive layout, Google Fonts + Font Awesome; fallback images for reliability

## Tech Stack
- HTML, CSS, vanilla JavaScript
- No bundler or framework

## Project Structure
- index.html — main page and modals
- css/style.css — theming, layout, responsive styles
- js/data.js — product, feature, and review seed data
- js/ui.js — render helpers and shared UI utilities
- js/cart.js — cart state and persistence
- js/app.js — wiring for interactions, filters, overlays
- assets/banner.jpg — hero background

## Running Locally
1) Clone the repo
```bash
git clone https://github.com/zubairahmed-sketch/Web-Engineering-Project.git
cd Web-Engineering-Project
```
2) Open `index.html` directly in a browser, or serve locally (recommended):
```bash
# python 3
python -m http.server 5500
# then open http://localhost:5500/
```

## Customization
- Update `js/data.js` to change products, categories, or reviews.
- Swap hero background at `assets/banner.jpg` and adjust the `.Home` section in `css/style.css` as needed.
- Modify colors in `:root` inside `css/style.css`.

## Notes
- All images have a fallback to avoid broken thumbnails.
- Cart uses browser localStorage; clearing site data resets it.
