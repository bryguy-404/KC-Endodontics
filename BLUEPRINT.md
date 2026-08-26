# KC Endodontics — Design Blueprint

## Overall direction & vibe
Calm, reassuring, and quietly premium — this reads like a trusted medical specialist, not a retail dental brand. Muted slate blues and warm grays pair with a literary serif (Spectral) for headlines, speaking to anxious patients who need clarity and to referring dentists who need a professional connection. The layout is soft-edged, generously spaced, and accessibility-forward throughout (skip link, focus rings, large tap targets, phone-first CTAs).

## Section-by-section breakdown

### Skip link + utility bar
- A "Skip to content" link is fixed top-left, hidden off-screen via -translate-y-16 and sliding into view on focus (white pill, #337AB7 text, shadow, z-50). Target is #main-a.
- Utility bar above the header: bg #577896, white text, text-xs, py-2. Left: bold tracking-wide tel link "Call 913-642-3636"; right: full street address (3700 W. 83rd Street, Suite 106, Prairie Village, KS 66208) linking to Google Maps in a new tab with hover:underline. Stacks vertically on mobile; row with justify-between from sm up.

### Header (sticky)
- sticky top-0 z-40, bg-white/95 with backdrop-blur, 1px bottom border #D2D3D4, min-h-20, flex row with justify-between and gap-5 inside the container.
- Left: logo image (client asset, src token [CLIENT_LOGO_DATA_URL]), max-h-14, width 170px on mobile and 210px from sm, object-contain, wrapped in a home link.
- Desktop nav (hidden below lg): text-sm font-semibold links with gap-7 — Treatments, Why choose us, Dr. Moore, New patients, Referring dentists — each hover:text-[#337AB7] — plus a rounded-full solid CTA "Call the office" (bg #577896, white, px-5 py-3, hover bg #454242).
- Mobile: an 11x11 (44px) round hamburger button (1px border #D2D3D4, 3-line stroke SVG) toggles a hidden panel below the header (border-t #D2D3D4, white bg, px-5 py-5) containing stacked semibold links with gap-4 and a full-width centered pill CTA. JS toggles the .hidden class and syncs aria-expanded; clicking any panel link closes it.

### Hero
- White section, py-16 → py-24 at sm. Two-column grid at lg with ratio 1.05fr / .95fr, gap-12, items-center.
- Text column: maroon #790000 eyebrow (text-xs, bold, uppercase, tracking-[.2em]) "Prairie Village endodontic specialist"; Spectral h1 "Specialist care that starts with reassurance." at text-5xl → 6xl (sm) → 7xl (lg), font-semibold, leading-[1.05], max-w-3xl, color #454242; lede paragraph mt-7, text-lg leading-8, #5d5959, max-w-xl; CTA row (column on mobile, row from sm, gap-3): solid pill "Call 913-642-3636" (bg #577896, hover #454242) and outline pill "New Patient Information" (1px border #577896, text #577896, hover bg #F2F0F0), both rounded-full, font-bold, min-h-12, px-7 py-3; then a quiet text-sm line in #676363: "Root canal treatment · Endodontic retreatment · Root canal surgery".
- Media column: figure with the photo-placeholder treatment (see Unique visual treatments), min-h 430px → 560px at sm, rounded-[2rem], role=img with descriptive aria-label. A white/95 caption chip sits absolute bottom-5 left-5 (rounded-xl, px-4 py-3, xs bold uppercase tracking-wider, shadow, max-w 260px) labeling the intended photo: warm clinician–patient interaction.

### Practice at a glance (stat band)
- Full-width band, bg #F2F0F0 with 1px top and bottom borders #D2D3D4, py-8.
- Small maroon eyebrow heading "Practice at a glance" (xs, bold, uppercase, tracking-[.18em], mb-5).
- Definition-list grid: 1 col → 2 (sm) → 4 (lg), gap-6. Each cell: dt in xs uppercase tracking-wider #6b6767, dd bold with mt-1. Pairs: Practice focus / Endodontic specialty care; Clinical lead / Dr. Moore; Location / Prairie Village, Kansas; Resources / Patients and referring dentists.

### Treatments (services)
- bg #F2F0F0, py-20 → py-28. Centered intro block max-w-3xl: maroon eyebrow "Endodontic care"; Spectral h2 "A focused path for your next step." text-4xl → 5xl; supporting paragraph in #625e5e leading-7.
- Card grid: stacked on mobile, 3 columns at lg, gap-5, mt-12. Cards are white, rounded-3xl, 1px border #D2D3D4, p-7, shadow-sm. Inside each: a maroon ordinal ("01" / "02" / "03", text-sm bold), Spectral h3 text-3xl font-semibold with mt-7, body copy #625e5e leading-7, and a bold #337AB7 text link with trailing arrow (→, hover:underline) that dials the office. Cards: Root canal treatment, Endodontic retreatment, Root canal surgery (apicoectomy).

### Why choose us (approach)
- White section, py-20 → py-28. Two-column grid at lg (grid-cols-2, gap-12, items-center): image left, text right.
- Image: photo placeholder, min-h 390px, rounded-3xl, caption chip bottom-left ("Calm office detail").
- Text: maroon eyebrow "Why choose KC Endodontics"; Spectral h2 "Professional by design. Personal by nature." (4xl → 5xl); lede text-lg leading-8 in #625e5e; then a 2×2 grid (sm:grid-cols-2, gap-4) of four value blurbs — Compassionate care, Personal guidance, Professionalism, Clinical excellence — each with a 2px left border in #577896, pl-4, a bold title, and a text-sm muted description.

### Quote band (brand statement)
- Full-bleed bg #577896, white text, py-16. Grid 1.2fr / .8fr at lg, items-center, gap-7.
- Left: large Spectral statement (text-4xl → 5xl, font-semibold): "Comfort and clarity belong alongside clinical excellence."
- Right: supporting paragraph, text-lg leading-8, white/90, with a 1px left rule in white/40 and pl-6 — an editorial pull-quote feel addressing both anxious patients and referring professionals.

### Dr. Moore (doctor bio)
- bg #F2F0F0, py-20 → py-28. Grid .85fr / 1.15fr at lg, gap-12, items-center: portrait placeholder left (photo treatment, min-h 480px, rounded-[2rem], caption chip "Portrait placeholder · Dr. Moore"), text right.
- Text: maroon eyebrow "Meet the specialist"; Spectral h2 "Dr. Moore" at text-5xl; paragraph text-lg leading-8 max-w-2xl in #625e5e; bold #337AB7 arrow link "Connect with the office →".

### New patients / Referring dentists (dual CTA cards)
- White section, py-20. Two rounded-3xl bordered cards (1px #D2D3D4, p-8) side by side at lg (grid-cols-2, gap-6), stacked on mobile.
- Patient card: eyebrow "For new patients" (tracking-[.18em]); Spectral h2 text-3xl "Begin with clear information."; paragraph; then a solid pill button "Call the office" (bg #577896, white, rounded-full, px-6 py-3, bold).
- Referral card (anchor id referrals-a): eyebrow "For referring dentists"; h2 "A direct specialist connection."; paragraph about referral coordination; a lighter-weight bold #337AB7 arrow text link "Call about a referral →". The visual hierarchy deliberately favors the patient CTA.

### Footer
- bg #454242, white text. Main row py-14: grid 1fr / auto at lg, items-end, gap-10.
- Left: white/65 eyebrow "KC Endodontics" (tracking-[.2em]); Spectral h2 text-4xl "Ready for a clear next step?"; inverted pill button (white bg, #454242 text, rounded-full, px-6 py-3, bold) with the phone number.
- Right: address block (address element, not-italic, leading-7, white/85) ending in a bold underlined white "View directions" link to Google Maps (new tab, rel noopener).
- Bottom bar: border-t white/15, py-5, centered text-xs white/60: "KC Endodontics · Prairie Village, Kansas".

### Behavior
- Smooth in-page scrolling (html scroll-behavior: smooth) with anchor navigation to section ids (treatments-a, approach-a, doctor-a, patients-a, referrals-a, contact-a).
- Mobile nav: button toggles panel visibility and aria-expanded; any panel link click closes it. Implement as a small client-side script or Astro island.
- Global :focus-visible: 3px solid #337AB7 outline with 3px offset.
- Every primary CTA is a tel: link to +1 913-642-3636 — there are no forms in this design. body uses overflow-x-hidden.

## Typography
- Headings: "Spectral", serif (Google Fonts, weights 500 and 600), applied via a .display utility class; all h1/h2/h3 render at font-semibold (600). Hero uses tight leading-[1.05]; other headings use default leading.
- Body: "Open Sans", sans-serif (weights 400, 600, 700). 400 for copy, 600 for nav links, 700 for buttons, labels, and inline links.
- Scale: h1 text-5xl → 6xl (sm) → 7xl (lg); section h2 text-4xl → 5xl; doctor h2 text-5xl; card h3 text-3xl; footer h2 text-4xl; ledes text-lg leading-8; standard copy leading-7; fine print text-sm and text-xs.
- Eyebrow/kicker pattern used before nearly every heading: text-xs, font-bold, uppercase, letter-spacing .2em (or .18em), colored #790000 (white/65 in the footer).
- Caption chips and dt labels: xs, uppercase, tracking-wider; utility-bar phone link uses tracking-wide.

## Color palette
- #577896 — Primary (slate blue): utility bar, solid buttons, quote-band background, value-blurb left borders, outline-button border/text.
- #790000 — Secondary (deep maroon): eyebrow/kicker labels and service-card ordinals; used in small doses only, never as a fill.
- #337AB7 — Accent (interactive blue): inline text links, nav hover color, focus-visible outline, skip-link text.
- #454242 — Foreground (warm charcoal): body and heading text, footer background, solid-button hover state.
- #FFFFFF — Background: page base, header, cards, caption chips, inverted footer button.
- #F2F0F0 — Muted surface (warm light gray): alternating section backgrounds, outline-button hover fill.
- #D2D3D4 — Border gray: header rule, card borders, stat-band rules, hamburger ring.
- #5d5959 / #625e5e / #676363 / #6b6767 — Muted text grays for supporting copy and small labels.
- #dce5eb → #b6c7d2 → #879eaf — Soft blue-gray gradient stops used only in photo placeholders.
- Alpha whites on dark surfaces: white/95 (header, chips), white/90–85 (copy), white/65–60 (labels/legal), white/40 and white/15 (rules).

## Spacing & layout
- Container: a shared .shell utility — width 100%, max-width 1280px, centered, horizontal padding 1.25rem, rising to 2rem at ≥640px and 3rem at ≥1024px. Recreate as a Tailwind component class or container config.
- Breakpoints: only sm (640px) and lg (1024px) are used. Navigation collapses below lg; most grids collapse to a single column below lg.
- Vertical rhythm: hero py-16 → py-24; major sections py-20 → py-28; stat band py-8; quote band py-16; dual-CTA section py-20; footer py-14 plus a py-5 legal row.
- Grids: hero lg:grid-cols-[1.05fr_.95fr]; approach lg:grid-cols-2; quote lg:grid-cols-[1.2fr_.8fr]; doctor lg:grid-cols-[.85fr_1.15fr]; treatments lg:grid-cols-3; stats sm:grid-cols-2 → lg:grid-cols-4; CTA cards lg:grid-cols-2. Asymmetric fr ratios are a signature move — preserve them.
- Gaps: gap-12 (3rem) on image/text splits, gap-5–7 on card and quote grids, gap-6 on stats, gap-10 in the footer.
- Header min-h-20; buttons min-h-12; hamburger 44×44px tap target.

## Unique visual treatments
- Photo placeholders (.photo-a): no real imagery. A layered CSS composition — a radial white highlight (circle at 72% 24%, white 0–8%, transparent at 9%) over a 145deg linear gradient (#dce5eb 0% → #b6c7d2 52% → #879eaf 100%) — plus an ::after inset outline (inset 9% 9% 18% 28%; 1px solid rgba(255,255,255,.5); border-radius 999px 999px 2rem 2rem; rotated 8deg) that evokes an abstract tooth/arch silhouette. Preserve this exact treatment as the placeholder/loading aesthetic for figures.
- Caption chips: small white/95 rounded chips (rounded-lg or rounded-xl) pinned absolute bottom-left inside every figure, xs bold uppercase tracking-wider with soft shadow; swap the copy for real captions once photography exists.
- Pill geometry: all buttons rounded-full with generous px-5/6/7 padding; cards rounded-3xl (1.5rem); hero and portrait media rounded-[2rem].
- Glass header: sticky bg-white/95 + backdrop-blur over a hairline bottom border.
- Editorial left rules: 2px #577896 borders on value blurbs; 1px white/40 rule on the quote-band paragraph.
- Numbered service cards with maroon ordinals (01–03) and arrow-suffixed (→) text links instead of buttons.
- Accessibility moves worth keeping: slide-in skip link, aria-expanded hamburger, figures with role=img and descriptive aria-labels standing in for images, visible 3px #337AB7 focus outlines, smooth anchor scrolling.
- Logo arrives as a data-URL token ([CLIENT_LOGO_DATA_URL]); keep an equivalent asset slot (public/ or imported asset) in the Astro build.