# Denham & Grey Website — IT Handover Guide

## 1. Purpose of this package

This is the complete production handover for the Denham & Grey institutional
website. It includes editable source, a validated build, local fonts, the hero
image, favicon, leadership portraits and deployment documentation.

The handover source is functionally equivalent to the approved website, with
one portability improvement: leadership images have been stored locally so the
new deployment does not rely on the old website.

## 2. Technical profile

- Framework: React 19 with Next.js 16 application structure
- Build runtime: Vinext and Vite
- Language: TypeScript
- Styling: responsive CSS with locally bundled Google-font files
- Recommended host: Cloudflare Workers
- Database: none
- Authentication: none in use
- Required environment variables: none
- Contact form backend: none; contact links open the visitor's email client
- External operational links: Google Maps, telephone and email links

## 3. System requirements

- Node.js `22.13.0` or later
- npm
- Git is optional for deployment but recommended for change control
- Linux, WSL or a Linux CI runner for the provided verified build script
- A Cloudflare account with permission to create or update Workers and domains

## 4. Local development

From the `source` directory:

```bash
npm ci
npm run dev
```

Use the local address shown by the development server. The site is responsive;
test at desktop, tablet and mobile widths.

## 5. Build and validate

```bash
npm run build
```

This creates and validates:

- `dist/server/index.js`
- `dist/server/wrangler.json`
- `dist/client/`
- `dist/.openai/hosting.json`

The package also includes a validated `production-build/` snapshot. Building
again from `source/` is preferred so the IT team owns a reproducible process.

## 6. Recommended Cloudflare Workers deployment

Do not alter the live domain first. Deploy to the temporary Worker address,
complete quality assurance, and only then connect the domain.

From `source/`:

```bash
npm ci
npm run build
npx wrangler login
npx wrangler deploy --config dist/server/wrangler.json
```

For a CI/CD pipeline, replace interactive login with a Cloudflare API token
stored in the CI secret manager. The token should have only the permissions
needed to deploy this Worker and manage its route. Do not commit tokens or
credentials into this project.

### Deploying the supplied production build

After running `npm ci` in `source/`, the included snapshot can be deployed with:

```bash
./node_modules/.bin/wrangler deploy --config ../production-build/server/wrangler.json
```

## 7. Domain and DNS cutover

1. Back up or retain the existing `www.denhamandgrey.com` deployment.
2. Deploy this site to the temporary Worker URL.
3. Obtain written approval of the temporary deployment.
4. In Cloudflare Workers, add `www.denhamandgrey.com` as a Custom Domain.
5. Point the root domain `denhamandgrey.com` to the same site or redirect it to
   `https://www.denhamandgrey.com`.
6. Confirm that Cloudflare has issued a valid TLS certificate.
7. Check both `http://` and `https://` routes; HTTP should redirect to HTTPS.
8. Keep the prior deployment available until the cutover is confirmed.

If DNS is managed outside Cloudflare, follow the records supplied by the host
and preserve all unrelated mail records, especially MX, SPF, DKIM and DMARC.

## 8. Source maintenance

- Content and people: `app/page.tsx`
- Visual design and responsive rules: `app/globals.css`
- Page title, description and fonts: `app/layout.tsx`
- Leadership portraits: `public/people/`
- Hero image: `public/hero-landscape.png`
- Favicon: `public/favicon.svg`

After any change:

```bash
npm run build
```

Commit the change to the company's source repository before deployment. Use
feature branches and retain the last known-good production release for rollback.

## 9. Items intentionally not included

- Analytics or tag manager
- Cookie-consent banner
- Content-management system
- Contact-form processing service
- Database
- User accounts

These should be added only when Denham & Grey selects the relevant provider,
data-retention policy and privacy requirements.

## 10. Security and operational notes

- Never add passwords, API keys or deployment tokens to the source files.
- Use Cloudflare/hosting account roles instead of sharing a master login.
- Enable multi-factor authentication for hosting and DNS administrators.
- Limit deployment permissions to the minimum required.
- Keep Node packages updated through reviewed pull requests, not directly in production.
- Protect the domain registrar account and preserve mail-related DNS records.
- Configure uptime monitoring after launch.
- Add analytics only after confirming the privacy notice and consent approach.

## 11. Recommended ownership model

- Business owner: approves content, people, contact details and public claims.
- IT owner: source repository, hosting, DNS, SSL, deployment and backups.
- Design/content support: implements approved page changes through source control.
- Release approver: signs off the temporary deployment before every production cutover.
