// ---------------------------------------------------------------------------
// SITE CONFIG
// Every piece of company-specific detail lives in this one file on purpose,
// so it can be swapped out for real information without hunting through
// components. Replace every [PLACEHOLDER] below.
// ---------------------------------------------------------------------------

export const siteConfig = {
  companyName: '[COMPANY NAME]',
  tagline: 'Building. Renovating. Maintaining.',
  ownerName: '[OWNER NAME]',

  contact: {
    phone: '[PHONE NUMBER]',
    phoneHref: 'tel:[PHONE NUMBER]',
    whatsapp: '[WHATSAPP NUMBER]',
    whatsappHref: 'https://wa.me/[WHATSAPP NUMBER]',
    email: '[EMAIL ADDRESS]',
    emailHref: 'mailto:[EMAIL ADDRESS]',
    address: '[COMPANY ADDRESS]',
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
