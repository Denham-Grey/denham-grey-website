# Denham & Grey Website — Launch Checklist

## Before deployment

- [ ] Store the package in a private company source repository.
- [ ] Confirm Node.js 22.13.0 or later.
- [ ] Run `npm ci` successfully.
- [ ] Run `npm run build` successfully.
- [ ] Confirm no secrets or personal credentials have been added to the source.
- [ ] Back up or preserve the existing website deployment.

## Temporary deployment review

- [ ] Open the home page at the temporary deployment URL.
- [ ] Confirm the page always opens at the top.
- [ ] Test desktop, tablet and mobile layouts.
- [ ] Check all navigation links and section anchors.
- [ ] Verify the animated capital-flow diagram and beneficiary arrows.
- [ ] Confirm every board and management image loads.
- [ ] Confirm all names and titles are correct.
- [ ] Test the office map link.
- [ ] Test both telephone links.
- [ ] Test `info@denhamandgrey.com` mail links.
- [ ] Check keyboard navigation and visible focus states.
- [ ] Check the site in current Chrome, Edge, Safari and Firefox.
- [ ] Obtain final business approval before DNS changes.

## Domain cutover

- [ ] Attach `www.denhamandgrey.com` to the approved deployment.
- [ ] Attach or redirect `denhamandgrey.com` to the canonical `www` address.
- [ ] Preserve MX, SPF, DKIM and DMARC DNS records.
- [ ] Confirm HTTPS and the TLS certificate.
- [ ] Confirm HTTP redirects to HTTPS.
- [ ] Verify that both root and `www` addresses resolve correctly.

## After launch

- [ ] Re-test navigation, images, email, telephone and map links on the live domain.
- [ ] Confirm mobile rendering on at least one physical Android and iPhone device.
- [ ] Submit or update the sitemap and domain in Google Search Console if used.
- [ ] Add uptime monitoring.
- [ ] Record the production release and rollback version.
- [ ] Retain the previous site for a short rollback window.
- [ ] Schedule dependency and content reviews.
