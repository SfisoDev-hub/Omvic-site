import { images } from './images'

export interface FeaturedService {
  id: string
  title: string
  description: string
  image: string
  points: string[]
}

export const featuredServices: FeaturedService[] = [
  {
    id: 'building',
    title: 'Building',
    description:
      'Professional building services for residential and commercial construction projects, delivered with quality workmanship and attention to detail.',
    image: images.featured.building,
    points: ['Residential & commercial building', 'New construction projects', 'Quality workmanship'],
  },
  {
    id: 'roofing',
    title: 'Roofing',
    description:
      'Reliable roofing services covering roof installation, repairs and related work to help protect your property and keep it in good condition.',
    image: images.featured.roofing,
    points: ['Roof installation', 'Roof repairs', 'Residential & commercial roofing'],
  },
  {
    id: 'plastering',
    title: 'Plastering',
    description:
      'Quality internal and external plastering that creates smooth, clean surfaces ready for the next stage of your project.',
    image: images.featured.plastering,
    points: ['Internal plastering', 'External plastering', 'Smooth professional finishes'],
  },
  {
    id: 'gamazine',
    title: 'Gamazine',
    description:
      'Professional Gamazine application for durable and decorative wall finishes that enhance the appearance of your property.',
    image: images.featured.gamazine,
    points: ['Wall finishing', 'Decorative finishes', 'Residential & commercial properties'],
  },
  {
    id: 'painting',
    title: 'Painting',
    description:
      'Interior and exterior painting services that give your property a clean, refreshed and professional appearance.',
    image: images.featured.painting,
    points: ['Interior painting', 'Exterior painting', 'Property repainting'],
  },
  {
    id: 'ceiling',
    title: 'Ceiling',
    description:
      'Professional ceiling installation and finishing for residential and commercial properties.',
    image: images.featured.ceiling,
    points: ['Ceiling installation', 'Ceiling finishing', 'Residential & commercial properties'],
  },
  {
    id: 'paving',
    title: 'Paving',
    description:
      'Professional paving for driveways, walkways and outdoor areas, completed with attention to a clean and durable finish.',
    image: images.featured.paving,
    points: ['Driveway paving', 'Walkways', 'Outdoor areas'],
  },
  {
    id: 'tiling',
    title: 'Tiling',
    description:
      'Wall and floor tiling with clean, precise installation for residential and commercial spaces.',
    image: images.featured.tiling,
    points: ['Floor tiling', 'Wall tiling', 'Residential & commercial spaces'],
  },
]