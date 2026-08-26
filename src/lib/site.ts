export const site = {
  name: "KC Endodontics",
  title: "KC Endodontics | Calm Precision",
  description:
    "KC Endodontics provides compassionate, personalized endodontic specialty care in Prairie Village, Kansas under Dr. Moore — root canal treatment, retreatment, and root canal surgery.",
  url: "https://kcendodontics.com",
  phone: {
    display: "913-642-3636",
    href: "tel:+19136423636",
  },
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
} as const;

export const navLinks = [
  { label: "Treatments", href: "#treatments-a" },
  { label: "Why choose us", href: "#approach-a" },
  { label: "Dr. Moore", href: "#doctor-a" },
  { label: "New patients", href: "#patients-a" },
  { label: "Referring dentists", href: "#referrals-a" },
] as const;
