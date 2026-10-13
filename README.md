# Bumpkin website

Static landing page (HTML/CSS/JS, no build step). Open `index.html` in a browser, or deploy the folder to any static host (Vercel, Netlify, GitHub Pages).

## Page flow
1. Hero — headline, phone mockup, store badges
2. "As seen in" logo marquee
3. **Pinned feature showcase** — the page holds while the phone screen and text swap through each feature (dots on the right show progress)
4. Bento grid of extra modes
5. Social proof — count-up number, ratings, scrolling reviews
6. Outcome cards (horizontal scroll)
7. Final CTA with QR code + footer

## Editing
- **For Individuals / For Events toggle:** each mode's hero text, hero screen and showcase features live in `MODES` at the top of `script.js` (`INDIVIDUAL_FEATURES`, `EVENT_FEATURES`). Link straight to the events version with `?for=events`.
- **Reviews:** `REVIEWS` in `script.js`.
- **Hero photo:** `assets/hero.jpg`. **Product Hunt badge:** in the hero of `index.html` (dummy vote count and link).
- **Phone screens:** HTML recreations of the app (dummy data) in `app-screens.js`: `card`, `directory`, `nearby`, `contacts`, `rewind`, `events`. To use a real screenshot instead, set `image: "assets/screens/1.png"` on a feature (portrait, ~1170×2532).
- **Logo / QR codes:** `assets/logo.svg` (dummy), `assets/qr-download.svg` and `assets/qr-card.svg` (point at dummy bumpkin.app URLs; regenerate when the real links exist).
- **Store & social links:** dummy URLs in `index.html` (search for `apps.apple.com`, `play.google.com`, `instagram.com`).
- **Colours / font:** CSS variables at the top of `styles.css`.
- **Photos:** hero, final CTA and outcome cards use gradients; swap in photos via `styles.css`.
- **Text, links, store URLs:** `index.html`.
