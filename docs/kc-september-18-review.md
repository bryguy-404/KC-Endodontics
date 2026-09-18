# KC Endodontics — September 18 review and handoff

Status: confirmed changes implemented and checked locally. Approved for commit and push to `main` on September 18, 2026. Production deployment status is not verified by this report. Eastland files were not edited.

Preview: http://127.0.0.1:4323/

Sedation preview: http://127.0.0.1:4323/procedures/sedation-dentistry/

## Sources and decisions

Reviewed Kyle’s September 15 baseline audit and September 17 **v2** sedation brief against the KC source and live website. The revised sedation brief takes precedence. It explicitly confirms IV sedation and nitrous for children and adults, so the earlier request to avoid naming unconfirmed sedation options is superseded by the new document.

The v2 brief contains a few sample sentences combining nitrous and the anesthesiologist despite its own separation rule. Those sentences were split. IV sedation uses “administered and monitored by a board-eligible anesthesiologist”; nitrous is provided by Dr. Moore, without an insurance eligibility check or authorization, and paid out of pocket at the visit. Benefit-check references in the landing-page lede, referral paragraph and eligibility FAQ explicitly identify IV sedation to avoid implying nitrous requires insurance approval.

Missing answers and assets were identified before source edits. No new general insurance participation, payment-method, office-hours, family-detail, or after-hours policy claims were invented.

## Implemented changes

- Added the hero badge linking directly to the Missouri Medicaid callout on the sedation page. Updated the hero comfort-options bullet and removed both floating photo overlays.
- Replaced the “Practice at a glance” bar with the Kansas/Missouri Medicaid insurance band, phone button, sedation link and inclusive patient wording.
- Revised the homepage sedation strip with separate IV sedation and nitrous side cards, retaining KC colors, type and its position directly after treatments.
- Made root canal treatment the primary full-width treatment card. Changed the other four treatments to compact rows and retained a full-width sedation card after them.
- Simplified the “Why choose” values to a plain two-column list and updated affordability copy.
- Removed seven redundant homepage/footer eyebrow labels and most repeated interior-page labels while retaining the v2-required sedation labels. Changed sidebar call-box copy by section and made the footer CTA a direct phone link with office hours.
- Reordered and rewrote the sedation page according to v2: prominent Kansas/Missouri Medicaid callout, separate IV and nitrous sections, children/adults wording, eligibility/payment distinctions, Eastland referral information and seven FAQs. Visible FAQ answers and FAQPage schema share the same source.
- Updated the shared sedation callout on root canal, retreatment, apicoectomy and cracked-teeth pages; the treatment overview card; nitrous information; insurance coverage block and Missouri Medicaid plan label; and the financial-policy/CareCredit sedation payment sentences.
- Replaced source/migration commentary and repetitive “current/maintained” hedging in Meet Us, Endodontic References, referring-doctor resources, related links, CareCredit and the scheduling explanation on Disclaimer. Preserved meaningful uses such as current medications and current clinical evidence.
- Opened the four main procedure pages with symptom-focused summaries. Existing root-canal clinical body and referral worksheet/form content remain unchanged.
- Added a lazy-loaded Google map below Contact’s phone block, retaining the address and directions link.
- Moved the two existing stock JPEG source files into Astro assets and rendered responsive WebP images at 400, 640, 960 and 1200 widths. Kept the hero eager/high-priority and the office image lazy-loaded. Real-photo replacements are pending assets.
- Added “KC Endodontics logo” alt text; shortened Home’s description to 128 characters, both local contact-page SEO titles and After Treatment FAQ’s title.
- Preserved and verified the existing desktop/mobile/footer sedation links, both sitemap entries, Dentist service schema, canonical URLs and BreadcrumbList schema.

## Questions for Kyle / Dr. Moore / Michelle

Updated after reviewing the archived website. The old site supplies the sources for the hours, insurance list, payment methods, biography and welcome copy. See [the archived-site findings and source links](kc-wayback-review.md) for the complete evidence and crawl limitations.

1. **Hours:** Are Monday, Wednesday and Thursday, 8am–4pm, still correct? Are Tuesday, Friday and weekends closed, or should other hours be shown?
2. **Insurance:** Has the archived 16-plan list changed? Please identify additions/removals and which plans should specifically be described as in-network.
3. **Payments:** Are Visa, Mastercard, Discover, American Express, cash, checks and CareCredit still accepted, with payment due at service unless arranged in advance?
4. **After hours:** The old site said the office telephone was answered day and night. Is that still true, and what exact instructions should patients follow now?
5. **Missouri Medicaid:** Does acceptance extend to non-sedation endodontic cases, or should the site continue saying sedation cases only?

**Materials for the requested personal-content improvements:** an approved portrait, team/office photos and two welcome sentences from Dr. Moore. If a team page is wanted, supply names, roles and short bios. The recovered archive does not provide these materials. His family details already appeared in the old public biography; corrections/removal can be handled in normal copy approval instead of a separate discovery question.

**Optional form decision:** the old Scheduling page did offer an appointment-request form. If it should be restored, confirm the recipient and response process before implementation.

**Agency follow-up:** GTM/GA4 IDs and access, call-attribution decision, Cloudflare/Search Console access, redirect/indexing work, and whether to retain Meet Us pending team materials or merge it into the doctor page.

No need to ask for real homepage statistics: v2 explicitly replaces that bar. No need to reconfirm IV/nitrous availability or anesthesiologist wording: v2 resolves those. Eastland’s separate wording and publishing remain in its own task.

## Email findings

Searched the connected mailbox for KC/Dr. Moore correspondence, photos/attachments, hours, insurance, payments, sedation, analytics IDs and account access. No additional approved practice photos, complete hours, insurance/payment confirmations, welcome copy, tracking IDs or non-sedation Missouri Medicaid confirmation were found in the relevant results. This is a search result, not a claim that the materials do not exist elsewhere.

- [Kyle’s September 17 “next round, eastland and kc endo” email](https://mail.google.com/mail/u/?authuser=bryan%40alphadogagency.com#all/1a0b148885a82914) supplies the updated briefs and says this weekend is fine. Its body adds no further clinical or operational details.
- [August 12 GSC update](https://mail.google.com/mail/u/?authuser=bryan%40alphadogagency.com#all/19ff68b28e56170d) lists KC as still pending because domain access was needed. No later completion confirmation was found. Kyle’s earlier GSC request specified info@ and adding kyle@ as an owner; that does not establish the current client property owner.
- [September 3 domain update](https://mail.google.com/mail/u/?authuser=bryan%40alphadogagency.com#all/1a068193e02b28a0) says the domain is already in the practice’s GoDaddy account and DNS was repointed. A domain transfer is therefore not a new client question.

No email has been sent.

## Audit item disposition

| Audit items | Result |
| --- | --- |
| S1 | Pending GTM/GA4 IDs, access and call-attribution decision. No placeholder tracking installed. |
| S2 | Live issue confirmed: HTTPS www and non-www both return 200; HTTP non-www redirects to HTTPS non-www. Pending Cloudflare access. |
| S3 | Pending Search Console ownership/access. Existing sitemap and canonicals verified locally. |
| S4 | Confirmed copy cleanup completed; general payment-method assertions and insurance network classification await Michelle. Referral-form wording deliberately retained per RD3. |
| S5, H5, MU2, MD1 | Pending real photos; existing stock and monogram remain. |
| S6–S10 | Implemented section-specific call boxes, reduced labels, responsive images, logo alt and metadata trims. |
| S11 | Pending complete hours; published hours and schema unchanged. |
| H1 | Floating overlays removed; real hero photo pending. |
| H2 | Implemented v2 insurance band instead of older remove/statistics alternatives. |
| H3, H4, H6 | Implemented treatment hierarchy, plain values list and direct phone/footer hours CTA. |
| H7 | Pending Dr. Moore’s own welcome text. |
| MU1 | Implemented approved practice-voice sentence. |
| MU3 | Pending team materials versus merge/redirect decision. |
| MD2 | Verified against the old public biography; changes/removal can be handled during normal copy approval. |
| C1 | Lazy Google map added and verified. |
| C2 | Pending after-hours workflow/copy. |
| T1 | Clinical body preserved; approved sedation callout updated. |
| T2, T3 | Symptom-focused introductions and references cleanup implemented. |
| PI1 | V2-confirmed coverage block updated; general plan names and network/acceptance classification await confirmation. |
| PI2 | Confirmed sedation/nitrous payment sentence updated; general payment-method rewrite pending. |
| PI3, RD1, RD2 | Copy cleanup implemented. |
| RD3 | Referral worksheet and delivery/privacy instructions unchanged. |
| SED1–SED3 | Superseded by and implemented under September 17 v2. No Eastland changes. |

For S2, the intended rule is an HTTP 301 from host `kcendodontics.com` to `https://www.kcendodontics.com` with the same path and query string. It must be applied at Cloudflare; no browser-side redirect was substituted.

## Verification

- `npm run build`: passed; 44 HTML pages including the custom 404; Sites worker packaged 63 static assets.
- `npm run astro -- check`: 0 errors, 0 warnings, one pre-existing unused-import hint in `visual-diff.mjs`.
- `git diff --check`: passed.
- Built-site audit: 43 public pages have unique titles/descriptions, self-referencing www canonicals and one H1; no duplicate IDs; 45 distinct internal paths and all internal anchors resolve.
- Verified Missouri Medicaid spelling, separation of nitrous/anesthesiologist sentences, Dentist service schema, both sitemaps, FAQ schema and four shared callout placements.
- Browser QA on 22 affected routes at 390px and 1440px: no horizontal/content overflow or error overlays. Responsive images loaded; all seven FAQs opened with page JavaScript disabled and matched schema text exactly.
- Desktop dropdown, mobile Treatments accordion/navigation, and homepage Medicaid anchor passed. Contact map loaded at the correct address. Browser error log showed no application errors.
- Visually reviewed homepage, insurance band, treatment hierarchy, sedation strip, values list, footer, sedation hero/coverage/IV/nitrous/FAQ sections, procedure/insurance callouts and mobile map.

## Publishing coordination

A fresh September 18 check found the existing public sedation URL already returns **200**, so the previously reported 404 is resolved:
https://www.kcendodontics.com/procedures/sedation-dentistry/

These v2/baseline changes passed local review and are approved for the `main` branch handoff. The local preview is not a shareable external staging deployment. Verify the resulting production deployment when coordinating with the separate Eastland task; KC retains the expected URL and includes the `#missouri-medicaid` anchor.
