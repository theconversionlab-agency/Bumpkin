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
- **Features, phone screens, reviews:** `FEATURES` and `REVIEWS` at the top of `script.js`. Add `image: "assets/screens/1.png"` to a feature to show a real screenshot in the phone (portrait, ~1170×2532).
- **Colours / font:** CSS variables at the top of `styles.css`.
- **Hero / CTA / outcome photos:** swap the gradient backgrounds noted in comments in `styles.css`.
- **Text, links, store URLs:** `index.html`.
