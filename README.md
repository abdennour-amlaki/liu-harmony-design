# LIU HARMONY DESIGN — V2

Professional static website prepared for hosting.

## Files
- `index.html` — main website
- `liu.css` — design and responsive layout
- `liu.js` — menu, filters, reveal animations, email enquiry form
- `robots.txt` — crawler rules
- `sitemap.xml` — SEO sitemap

## Before going live
1. Upload all files to the hosting public folder (`public_html`, `htdocs`, or equivalent).
2. Make sure `index.html` is in the root.
3. Activate HTTPS/SSL.
4. Confirm that `https://liuharmonydesign.com/` points to the hosting.
5. Replace the Instagram/Facebook placeholder footer links with the real profiles.
6. Replace the Unsplash image URLs with optimized owned images when available.

## Contact
WhatsApp: +66 82 780 7095
Email: khamjira441@gmail.com
Location: Bangkok, Thailand

## Backend
The enquiry form sends submissions to `backend/server.js` at `/api/contacts`.
Run the backend with `npm install` and `npm start` inside the `backend` folder. Set `PORT`, `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, and `DB_PORT` in production when using MySQL.
