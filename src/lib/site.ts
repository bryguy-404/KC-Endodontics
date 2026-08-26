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

export const navLinks = [
  { label: "Treatments", href: "/procedures/" },
  { label: "What to expect", href: "/#expect-a" },
  { label: "Why KC", href: "/#approach-a" },
  { label: "Dr. Moore", href: "/#doctor-a" },
] as const;
