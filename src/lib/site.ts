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
      { label: "All Treatments", href: "/procedures/" },
      { label: "Root Canal Treatment", href: "/procedures/root-canal/" },
      { label: "Root Canal Safety", href: "/procedures/root-canal/root-canal-safety/" },
      { label: "Myths About Root Canals", href: "/procedures/root-canal/myths-about-root-canals/" },
      { label: "Root Resorption", href: "/procedures/root-canal/root-resorption/" },
      { label: "Endodontic Retreatment", href: "/procedures/endodontic-retreatment/" },
      { label: "Apicoectomy", href: "/procedures/apicoectomy/" },
      { label: "Cracked Teeth", href: "/procedures/cracked-teeth/" },
      { label: "Traumatic Injuries", href: "/procedures/traumatic-injuries/" },
    ],
  },
  {
    label: "Patient Information",
    href: "/patient-information/",
    columns: 2,
    children: [
      { label: "Patient Overview", href: "/patient-information/" },
      { label: "Why Choose An Endodontist", href: "/patient-information/why-choose-an-endodontist/" },
      { label: "Why Choose Our Practice", href: "/patient-information/why-choose-our-practice/" },
      { label: "First Visit", href: "/patient-information/first-visit/" },
      { label: "Scheduling", href: "/patient-information/scheduling/" },
      { label: "Financial Policy", href: "/patient-information/financial-policy/" },
      { label: "Insurance Information", href: "/patient-information/insurance-information/" },
      { label: "CareCredit", href: "/patient-information/care-credit/" },
      { label: "About Your Tooth", href: "/patient-information/about-your-tooth/" },
      { label: "Tooth Pain", href: "/patient-information/tooth-pain/" },
      { label: "Tooth-Saving Tips", href: "/patient-information/tooth-saving-tips/" },
      { label: "Advanced Technology", href: "/patient-information/advanced-technology/" },
      { label: "Endodontic FAQ", href: "/patient-information/endodontic-faq/" },
      { label: "Nitrous Oxide", href: "/patient-information/nitrous-oxide/" },
    ],
  },
  {
    label: "Instructions",
    href: "/instructions/",
    columns: 1,
    children: [
      { label: "Instructions Overview", href: "/instructions/" },
      { label: "Before Treatment", href: "/instructions/before-endodontic-treatment/" },
      { label: "Home Care Instructions", href: "/instructions/general-instructions/" },
      { label: "After-Treatment FAQ", href: "/instructions/after-treatment/" },
    ],
  },
  {
    label: "Meet Us",
    href: "/meet-us/",
    columns: 1,
    children: [
      { label: "Meet Us", href: "/meet-us/" },
      { label: "Meet Dr. Moore", href: "/meet-us/meet-dr-moore/" },
    ],
  },
  {
    label: "Referring Doctors",
    href: "/referring-doctors/",
    columns: 1,
    children: [
      { label: "Referring Doctors", href: "/referring-doctors/" },
      { label: "Referral Form", href: "/referring-doctors/referral-form/" },
      {
        label: "Colleagues For Excellence",
        href: "/referring-doctors/colleagues-for-excellence-newsletter/",
      },
      {
        label: "Endodontic Case Assessment",
        href: "/referring-doctors/endodontic-case-assessment/",
      },
      {
        label: "Treatment Planning Options",
        href: "/referring-doctors/treatment-planning-options/",
      },
      { label: "Links Of Interest", href: "/referring-doctors/links-of-interest/" },
    ],
  },
  { label: "Contact Us", href: "/contact-us/" },
] as const;
