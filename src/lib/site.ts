export const site = {
  name: "KC Endodontics",
  title: "KC Endodontics | Endodontist in Prairie Village, KS",
  description:
    "KC Endodontics provides professional, compassionate endodontic specialty care in Prairie Village, Kansas, including root canal treatment, retreatment, and endodontic surgery.",
  url: "https://www.kcendodontics.com",
  legacyUrl: "https://www.kcendodontics.com",
  phone: {
    display: "913-642-3636",
    href: "tel:+19136423636",
  },
  fax: "913-642-5066",
  address: {
    street: "3700 W. 83rd Street, Suite 106",
    city: "Prairie Village",
    state: "KS",
    zip: "66208",
    get full() {
      return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
    },
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=3700+W.+83rd+Street%2C+Suite+106%2C+Prairie+Village%2C+KS+66208",
  hours: [
    { days: "Monday", hours: "8am–4pm" },
    { days: "Wednesday–Thursday", hours: "8am–4pm" },
  ],
} as const;

export const navItems = [
  {
    label: "Treatments",
    href: "/procedures/",
    columns: 2,
    children: [
      { label: "All treatments", href: "/procedures/" },
      { label: "Root canal treatment", href: "/procedures/root-canal/" },
      { label: "Root canal safety", href: "/procedures/root-canal/root-canal-safety/" },
      { label: "Myths about root canals", href: "/procedures/root-canal/myths-about-root-canals/" },
      { label: "Root resorption", href: "/procedures/root-canal/root-resorption/" },
      { label: "Endodontic retreatment", href: "/procedures/endodontic-retreatment/" },
      { label: "Apicoectomy", href: "/procedures/apicoectomy/" },
      { label: "Cracked teeth", href: "/procedures/cracked-teeth/" },
      { label: "Traumatic injuries", href: "/procedures/traumatic-injuries/" },
    ],
  },
  {
    label: "Patient information",
    href: "/patient-information/",
    columns: 2,
    children: [
      { label: "Patient overview", href: "/patient-information/" },
      { label: "Why choose an endodontist", href: "/patient-information/why-choose-an-endodontist/" },
      { label: "Why choose our practice", href: "/patient-information/why-choose-our-practice/" },
      { label: "First visit", href: "/patient-information/first-visit/" },
      { label: "Scheduling", href: "/patient-information/scheduling/" },
      { label: "Financial policy", href: "/patient-information/financial-policy/" },
      { label: "Insurance information", href: "/patient-information/insurance-information/" },
      { label: "CareCredit", href: "/patient-information/care-credit/" },
      { label: "About your tooth", href: "/patient-information/about-your-tooth/" },
      { label: "Tooth pain", href: "/patient-information/tooth-pain/" },
      { label: "Tooth-saving tips", href: "/patient-information/tooth-saving-tips/" },
      { label: "Advanced technology", href: "/patient-information/advanced-technology/" },
      { label: "Endodontic FAQ", href: "/patient-information/endodontic-faq/" },
      { label: "Nitrous oxide", href: "/patient-information/nitrous-oxide/" },
    ],
  },
  {
    label: "Instructions",
    href: "/instructions/",
    columns: 1,
    children: [
      { label: "Instructions overview", href: "/instructions/" },
      { label: "Before treatment", href: "/instructions/before-endodontic-treatment/" },
      { label: "Home care instructions", href: "/instructions/general-instructions/" },
      { label: "After-treatment FAQ", href: "/instructions/after-treatment/" },
    ],
  },
  {
    label: "Meet us",
    href: "/meet-us/",
    columns: 1,
    children: [
      { label: "Meet us", href: "/meet-us/" },
      { label: "Meet Dr. Moore", href: "/meet-us/meet-dr-moore/" },
    ],
  },
  {
    label: "Referring doctors",
    href: "/referring-doctors/",
    columns: 1,
    children: [
      { label: "Referring doctors", href: "/referring-doctors/" },
      { label: "Referral form", href: "/referring-doctors/referral-form/" },
      {
        label: "Colleagues for Excellence",
        href: "/referring-doctors/colleagues-for-excellence-newsletter/",
      },
      {
        label: "Endodontic case assessment",
        href: "/referring-doctors/endodontic-case-assessment/",
      },
      {
        label: "Treatment planning options",
        href: "/referring-doctors/treatment-planning-options/",
      },
      { label: "Links of interest", href: "/referring-doctors/links-of-interest/" },
    ],
  },
  { label: "Contact us", href: "/contact-us/" },
] as const;
