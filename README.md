# PROFFISIO — V2

Static marketing website deployed to GitHub Pages. The contact form opens the visitor's email app and does not require a backend or database.

## Files
- `index.html` — main website
- `liu.css` — design and responsive layout
- `liu.js` — menu, filters, reveal animations, email enquiry form
- `robots.txt` — crawler rules
- `sitemap.xml` — SEO sitemap

## Deployment

The GitHub Actions workflow deploys the static site to GitHub Pages whenever changes are pushed to `main`. In the repository settings, enable GitHub Pages with **GitHub Actions** as the build and deployment source.

The custom domain is configured as `liuharmonydesign.com` in `CNAME`. Set the domain's DNS records to GitHub Pages as described in [GitHub's custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site), then enable HTTPS in the Pages settings. The canonical URL, sitemap and robots file already use this domain.

## Contact form

The form creates an email addressed to `khamjira441@gmail.com` with the enquiry details. The visitor must have an email app configured and press Send. No backend or database is needed.

## Google Search

After the site is live over HTTPS:
1. Add and verify `liuharmonydesign.com` in [Google Search Console](https://search.google.com/search-console).
2. Submit `https://liuharmonydesign.com/sitemap.xml` in Search Console.
3. Use URL Inspection to request indexing of `https://liuharmonydesign.com/`.

Indexing and ranking are controlled by Google and are not immediate or guaranteed.

## Before going live

- Confirm the custom domain belongs to the business and its DNS points to GitHub Pages.
- Replace the Unsplash sample images with project images that you own or are licensed to use.
- Confirm business name, contact details, service areas and social profile links are correct.

## Contact
WhatsApp: +66 82 780 7095
Email: khamjira441@gmail.com
Location: Bangkok, Thailand
