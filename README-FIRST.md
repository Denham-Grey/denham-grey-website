# Denham & Grey Website — IT Handover Package

Prepared: 2 August 2026

This package contains the complete, self-contained Denham & Grey website for
handover to the company's IT team.

## Package contents

- `source/` — editable source code, locked dependencies, fonts and all website assets
- `production-build/` — validated deployment-ready build
- `docs/IT-HANDOVER-GUIDE.md` — technical setup, deployment and maintenance guide
- `docs/LAUNCH-CHECKLIST.md` — pre-launch, DNS and post-launch checks
- `docs/CONTENT-AND-ASSET-INVENTORY.md` — functional and asset inventory
- `docs/EMAIL-TEMPLATE.txt` — ready-to-forward handover email

The leadership portraits have been copied into the package and the handover
source uses local image paths. It therefore does not depend on the current
Denham & Grey website for those images.

Recommended first step: open `docs/IT-HANDOVER-GUIDE.md` and deploy the site to
a temporary Cloudflare Workers URL for review before changing the live domain.

Current design reference:
https://denham-and-grey.daviddenischinda.chatgpt.site
