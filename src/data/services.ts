import {
  Building2,
  Home,
  Layers,
  PaintBucket,
  SquareStack,
  Grid3x3,
  type LucideIcon,
} from 'lucide-react'

export type ServiceCategoryId = 'construction' | 'finishing'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  category: ServiceCategoryId
}

export const serviceCategories: {
  id: ServiceCategoryId
  title: string
  description: string
}[] = [
  {
    id: 'construction',
    title: 'Construction',
    description: 'Professional building and roofing services for residential and commercial projects.',
  },
  {
    id: 'finishing',
    title: 'Finishing',
    description: 'Quality finishing services to complete and enhance your property.',
  },
]

export const services: Service[] = [
  {
    id: 'building',
    title: 'Building',
    description: 'Professional building services for residential and commercial construction projects.',
    icon: Building2,
    category: 'construction',
  },
  {
    id: 'roofing',
    title: 'Roofing',
    description: 'Roof installation, repairs and related roofing work for a durable and reliable finish.',
    icon: Home,
    category: 'construction',
  },
  {
    id: 'plastering',
    title: 'Plastering',
    description: 'Quality internal and external plastering for smooth, clean and professional finishes.',
    icon: Layers,
    category: 'finishing',
  },
  {
    id: 'gamazine',
    title: 'Gamazine',
    description: 'Professional Gamazine application for durable and decorative wall finishes.',
    icon: SquareStack,
    category: 'finishing',
  },
  {
    id: 'painting',
    title: 'Painting',
    description: 'Interior and exterior painting services to give your property a clean, refreshed appearance.',
    icon: PaintBucket,
    category: 'finishing',
  },
  {
    id: 'ceiling',
    title: 'Ceiling',
    description: 'Professional ceiling installation and finishing for residential and commercial properties.',
    icon: SquareStack,
    category: 'finishing',
  },
  {
    id: 'paving',
    title: 'Paving',
    description: 'Professional paving for driveways, walkways and other outdoor areas.',
    icon: Grid3x3,
    category: 'finishing',
  },
  {
    id: 'tiling',
    title: 'Tiling',
    description: 'Wall and floor tiling with clean, precise installation and professional finishes.',
    icon: Grid3x3,
    category: 'finishing',
  },
]