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
    building: '/images/projects/Building7.jpeg',
    roofing: '/images/projects/Roofing2.webp',
    plastering: '/images/projects/plastering.jpeg',
    gamazine: '/images/projects/Gamazine&Painting.jpeg',
    painting: '/images/projects/Painting.jpeg',
    ceiling: '/images/projects/Ceiling3.jpeg',
    paving: '/images/projects/Paving3.jpeg',
    tiling: '/images/projects/Tiling3.jpeg',
  },

  projects: {
    // Building
    building1: '/images/projects/Building.jpeg',
    building2: '/images/projects/Building2.jpeg',
    building3: '/images/projects/Building3.jpeg',
    building4: '/images/projects/Building4.jpeg',
    building5: '/images/projects/Building5.jpeg',
    building6: '/images/projects/Building6.jpeg',
    building7: '/images/projects/Building7.jpeg',
    building8: '/images/projects/Building8.jpeg',
    building9: '/images/projects/Building9.jpeg',
    building10: '/images/projects/Building10.jpeg',
    building11: '/images/projects/Building11.jpeg',
    building12: '/images/projects/Building12.jpeg',
    building14: '/images/projects/Building14.jpeg',
    building15: '/images/projects/Building15.jpeg',
    building16: '/images/projects/Building16.jpeg',
    building17: '/images/projects/Building17.jpeg',
    building18: '/images/projects/Building18.jpeg',
    building19: '/images/projects/Building19.jpeg',
    building20: '/images/projects/Building20.jpeg',

    // Cabinets
    cabinet1: '/images/projects/cabinet.jpeg',
    cabinet2: '/images/projects/cabinet2.jpeg',
    cabinet3: '/images/projects/cabinet3.jpeg',
    cabinet4: '/images/projects/cabinet4.jpeg',
    cabinet5: '/images/projects/cabinet5.jpeg',
    cabinet6: '/images/projects/cabinet6.jpeg',
    cabinet7: '/images/projects/cabinet7.jpeg',
    cabinet8: '/images/projects/cabinet8.jpeg',
    cabinet9: '/images/projects/cabinet9.jpeg',
    cabinet10: '/images/projects/cabinet10.jpeg',
    cabinet11: '/images/projects/cabinet11.jpeg',
    cabinet12: '/images/projects/Cabinet12.jpeg',
    cabinet13: '/images/projects/Cabinet13.jpeg',
    cabinet14: '/images/projects/Cabinet14.jpeg',
    cabinet15: '/images/projects/Cabine15.jpeg',

    // Ceilings
    ceiling1: '/images/projects/Ceiling.jpeg',
    ceiling2: '/images/projects/Ceiling2.jpeg',
    ceiling3: '/images/projects/Ceiling3.jpeg',
    ceiling4: '/images/projects/Ceiling4.jpeg',

    // Paving
    paving1: '/images/projects/Paving.jpeg',
    paving2: '/images/projects/Paving2.jpeg',
    paving3: '/images/projects/Paving3.jpeg',

    // Roofing
    roofing1: '/images/projects/Roofing.jpeg',
    roofing: '/images/projects/Roofing2.webp',

    // Slabs
    slabs1: '/images/projects/Slabs.jpeg',
    slabs2: '/images/projects/Slabs2.jpeg',

    // Tiling
    tiling1: '/images/projects/Tiling.jpeg',
    tiling2: '/images/projects/Tiling2.jpeg',
    tiling3: '/images/projects/Tiling3.jpeg',
    tiling4: '/images/projects/Tiling4.jpeg',
    tiling5: '/images/projects/Tiling5.jpeg',

    // Other work
    plastering1: '/images/projects/plastering.jpeg',
    gamazinePainting1: '/images/projects/Gamazine&Painting.jpeg',
  },

  cta: u('photo-1504307651254-35680f356dfd', 2000),
} as const
