import { images } from './images'

export type ProjectCategory =
  | 'Building'
  | 'Roofing'
  | 'Tiling'
  | 'Paving'
  | 'Cabinets'
  | 'Ceilings'
  | 'Slabs'
  | 'Plastering'
  | 'Painting'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  location: string
  image: string
}

// Replace "title", "location" and "image" with real project details and
// photography as work is completed. "location" can be a suburb/area only.
export const projects: Project[] = [
  // BUILDING
  ...[
    images.projects.building1,
    images.projects.building2,
    images.projects.building3,
    images.projects.building4,
    images.projects.building5,
    images.projects.building6,
    images.projects.building7,
    images.projects.building8,
    images.projects.building9,
    images.projects.building10,
    images.projects.building11,
    images.projects.building12,
    images.projects.building14,
    images.projects.building15,
    images.projects.building16,
    images.projects.building17,
    images.projects.building18,
    images.projects.building19,
    images.projects.building20,
  ].map((image, index) => ({
    id: `building-${index + 1}`,
    title: 'Building Project',
    category: 'Building' as ProjectCategory,
    location: '',
    image,
  })),

  // ROOFING
  {
    id: 'roofing-1',
    title: 'Roofing Project',
    category: 'Roofing',
    location: '',
    image: images.projects.roofing1,
  },

  // TILING
  ...[
    images.projects.tiling1,
    images.projects.tiling2,
    images.projects.tiling3,
    images.projects.tiling4,
    images.projects.tiling5,
  ].map((image, index) => ({
    id: `tiling-${index + 1}`,
    title: 'Tiling Project',
    category: 'Tiling' as ProjectCategory,
    location: '',
    image,
  })),

  // PAVING
  ...[
    images.projects.paving1,
    images.projects.paving2,
    images.projects.paving3,
  ].map((image, index) => ({
    id: `paving-${index + 1}`,
    title: 'Paving Project',
    category: 'Paving' as ProjectCategory,
    location: '',
    image,
  })),

  // CABINETS
  ...[
    images.projects.cabinet1,
    images.projects.cabinet2,
    images.projects.cabinet3,
    images.projects.cabinet4,
    images.projects.cabinet5,
    images.projects.cabinet6,
    images.projects.cabinet7,
    images.projects.cabinet8,
    images.projects.cabinet9,
    images.projects.cabinet10,
    images.projects.cabinet11,
    images.projects.cabinet12,
    images.projects.cabinet13,
    images.projects.cabinet14,
    images.projects.cabinet15,
  ].map((image, index) => ({
    id: `cabinet-${index + 1}`,
    title: 'Cabinet Installation',
    category: 'Cabinets' as ProjectCategory,
    location: '',
    image,
  })),

  // CEILINGS
  ...[
    images.projects.ceiling1,
    images.projects.ceiling2,
    images.projects.ceiling3,
    images.projects.ceiling4,
  ].map((image, index) => ({
    id: `ceiling-${index + 1}`,
    title: 'Ceiling Project',
    category: 'Ceilings' as ProjectCategory,
    location: '',
    image,
  })),

  // SLABS
  ...[
    images.projects.slabs1,
    images.projects.slabs2,
  ].map((image, index) => ({
    id: `slabs-${index + 1}`,
    title: 'Concrete Slab Project',
    category: 'Slabs' as ProjectCategory,
    location: '',
    image,
  })),

  // PLASTERING
  {
    id: 'plastering-1',
    title: 'Plastering Project',
    category: 'Plastering',
    location: '',
    image: images.projects.plastering1,
  },

  // PAINTING
  {
    id: 'painting-1',
    title: 'Gamazine & Painting',
    category: 'Painting',
    location: '',
    image: images.projects.gamazinePainting1,
  },
]

export const projectCategories: ProjectCategory[] = [
  'Building',
  'Roofing',
  'Tiling',
  'Paving',
  'Cabinets',
  'Ceilings',
  'Slabs',
  'Plastering',
  'Painting',
]