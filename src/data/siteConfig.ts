// ---------------------------------------------------------------------------
// SITE CONFIG
// ---------------------------------------------------------------------------

export const siteConfig = {
  companyName: 'OmVic Projects & Construction',

  tagline: 'Building. Renovating. Maintaining.',

  ownerName: 'Victor',

  contact: {
    phone: '+27 76 511 1998',
    phoneHref: 'tel:+27765111998',

    whatsapp: '+27 76 511 1998',
    whatsappHref: 'https://wa.me/27765111998',

    email: 'victor@omvic.co.za',
    emailHref: 'mailto:victor@omvic.co.za',

    address: '6233 Umilo Street, Birch Acres, Kempton Park, 1618',

    hours: 'Mon – Fri: 07:00 – 17:00 · Sat: 08:00 – 13:00',
  },

  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Our Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
}

export type SiteConfig = typeof siteConfig