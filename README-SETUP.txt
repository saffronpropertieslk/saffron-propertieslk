# Saffron Properties website

A static, responsive starter website for Saffron Properties, Sri Lanka.

## Before public launch
1. Replace `hello@saffronproperties.lk` in `index.html` and `script.js` with your real business email.
2. Replace the sample property cards and stock photos with real, authorised listings and photos. Sample listings are illustrative only.
3. Add your business phone/WhatsApp number and company details.
4. Check all claims, property prices, availability and legal disclosures.

## Deploy with Cloudflare Pages
- Create a public GitHub repository named `saffron-properties`.
- Upload the contents of this folder to the repository root (not the ZIP itself).
- In Cloudflare Dashboard, open Workers & Pages > Create application > Pages > Connect to Git.
- Select this repository.
- Framework preset: None; Build command: leave blank; Build output directory: `/` (if the UI asks for a directory, use `.`).
- Deploy.
- In the Pages project, open Custom domains and add `saffronproperties.lk` and `www.saffronproperties.lk`, following Cloudflare's DNS prompts.

This site uses external Unsplash image URLs and Google Fonts. The website files are free; external services and images have their own terms and availability.
