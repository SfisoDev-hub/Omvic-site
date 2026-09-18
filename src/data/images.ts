// ---------------------------------------------------------------------------
// IMAGE REGISTRY
// All placeholder photography is registered here so it can be swapped for
// real project photos later without touching component code. Replace each
// URL with an image hosted in /public/images/ (or your CMS/CDN of choice) —
// e.g. change "hero" to "/images/hero-site.jpg" once you have real photos.
//
// Current values point to royalty-free Unsplash stock photography and are
// PLACEHOLDERS ONLY.
// ---------------------------------------------------------------------------

const u = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`

export const images = {
  hero: u('photo-1541888946425-d81bb19240f5', 2000),
  about: u('photo-1541976590-713941681591'),

  featured: {
    building: u('photo-1503387762-592deb58ef4e'),
    plumbing: u('photo-1607472829322-eb93494fb5b8'),
    electrical: u('photo-1621905252507-b35492cc74b4'),
    roofing: u('photo-1632759145351-1d592919f522'),
    tiling: u('photo-1600566753086-00f18fb6b3ea'),
    paving: u('photo-1590496793907-4c4c8f0daab2'),
    maintenance: u('photo-1581578731548-c64695cc6952'),
  },

  projects: {
    building1: u('photo-1486406146926-c627a92ad1ab'),
    building2: u('photo-1509391366360-2e959784a276'),
    renovation1: u('photo-1600585154340-be6161a56a0c'),
    renovation2: u('photo-1523217582562-09d0def993a6'),
    plumbing1: u('photo-1558618666-fcd25c85cd64'),
    electrical1: u('photo-1565608438257-fac3c27beb36'),
    roofing1: u('photo-1600607687644-c7f34b5063c0'),
    tiling1: u('photo-1600607687920-4e2a09cf159d'),
    paving1: u('photo-1595750198297-c4dcd0e8dab7'),
    maintenance1: u('photo-1581092160607-ee22621dd758'),
  },

  cta: u('photo-1504307651254-35680f356dfd', 2000),
} as const
