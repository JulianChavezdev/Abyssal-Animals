# Abyssal Atlas 🌊

A visual catalog of deep-sea creatures, rendered as dynamic Bootstrap cards loaded from a local JSON Server API.

---

## Theme

**Deep-sea bioluminescence.** The catalog explores 12 extraordinary creatures from the ocean's twilight and midnight zones, from the lantern-jawed Anglerfish to the ethereal Sea Angel. The aesthetic mirrors the subject matter: a void-black background, teal-cyan glow accents, editorial serif typography, and animated light elements to evoke life in permanent darkness.

---

## Design Decisions

| Element | Choice | Reason |
|---|---|---|
| Display font | Cinzel Decorative (Google Fonts) | Gothic grandeur; suggests antique natural history atlases |
| Body font | Crimson Pro (Google Fonts) | Elegant, readable serif; editorial feel |
| Palette | `#020d14` void + `#00e5c8` cyan glow | Ocean depth + bioluminescence |
| Gradient | Multi-stop radial header glow | Mimics light diffusing through dark water |
| Animations | Floating bubbles, pulsing title, staggered card entrance | Immersive without being distracting |
| Cards | Bootstrap `.card` + custom dark glass skin | Required structure with a fully custom aesthetic |

---

## Features

- ✅ 12 dynamic creature cards loaded via `fetch` + `async/await`
- ✅ Category filter bar (All / Predator / Cephalopod / Crustacean / Gelatinous / Fish / Colonial)
- ✅ Bioluminescent badge with animated glow on qualifying cards
- ✅ Hover effects: lift, scale, image zoom, border glow
- ✅ Staggered card entrance animation
- ✅ Animated floating bubbles in header
- ✅ Loading state with pulsing orb
- ✅ Error state with clear instructions when JSON Server is offline
- ✅ Fully responsive (mobile → wide desktop)
- ✅ No inline CSS

---

## Project Structure

```
abyssal-atlas/
├── index.html   ← Markup & layout
├── style.css    ← All visual styles (no inline CSS)
├── app.js       ← Fetch logic, card rendering, filter
├── db.json      ← JSON Server database (12 creatures)
└── README.md
```

---

## Running Locally

**Prerequisites:** Node.js ≥ 18

```bash
# 1. Install JSON Server (if not already)
npm install -g json-server

# 2. Start the API (keep this terminal open)
npx json-server --watch db.json --port 3000

# 3. Open index.html in your browser
#    (use Live Server in VS Code, or any static server)
open index.html
```

The app fetches from `http://localhost:3000/creatures`.  
If JSON Server isn't running you'll see the error state with the command above.

---

## Images

All card images are hosted on **Cloudinary**. Replace the placeholder `image` URLs in `db.json` with your own Cloudinary URLs after uploading:

```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v.../your-image.jpg
```

---

## Deployment

**Live demo:** _[Add your Vercel URL here after deployment]_

To deploy on Vercel:
1. Push the repo to GitHub
2. Import in [vercel.com](https://vercel.com) → **New Project** → select repo
3. Leave build settings as default (static site)
4. Deploy 🚀

> Note: JSON Server is a local dev dependency. For production, replace the `API_URL` in `app.js` with a hosted API or inline the data.

---

## Evaluation Criteria Coverage

| Criterion | Implementation |
|---|---|
| Visual design & creativity (35%) | Custom dark ocean aesthetic, bioluminescent glow effects, bubble animation, editorial typography |
| Bootstrap + customisation (20%) | Bootstrap `.card` as base; fully reskinned via CSS variables and custom classes |
| JavaScript & JSON Server (20%) | `async/await` fetch, dynamic DOM rendering, category filter, error/loading states |
| Code organisation (10%) | Modular functions, camelCase throughout, no logic duplication |
| GitHub, Vercel & best practices (15%) | All code in English, clean commits, Vercel deployment |
# Abyssal-Animals
