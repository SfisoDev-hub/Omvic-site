import {
  Hammer,
  Building2,
  Ruler,
  Layers,
  Droplets,
  Zap,
  Home,
  Grid3x3,
  PaintBucket,
  Wrench,
  ShieldCheck,
  SquareStack,
  Waves,
  Construction,
  type LucideIcon,
} from 'lucide-react'

export type ServiceCategoryId = 'building' | 'installations' | 'exterior'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  category: ServiceCategoryId
}

export const serviceCategories: { id: ServiceCategoryId; title: string; description: string }[] = [
  {
    id: 'building',
    title: 'Building & Construction',
    description: 'Structural and building work carried out to a proper standard, from single walls to full extensions.',
  },
  {
    id: 'installations',
    title: 'Installations',
    description: 'Plumbing, electrical and surface installations handled by tradespeople who know the trade.',
  },
  {
    id: 'exterior',
    title: 'Exterior & Maintenance',
    description: 'Everything that keeps a property looking sharp and functioning properly, inside and out.',
  },
]

export const services: Service[] = [
  // Building & Construction
  {
    id: 'bricklaying',
    title: 'Bricklaying',
    description: 'Walls, boundary walls and structural brickwork built square, level and built to last.',
    icon: Hammer,
    category: 'building',
  },
  {
    id: 'plastering',
    title: 'Plastering',
    description: 'Smooth internal and external plastering and skim coats, finished ready for paint.',
    icon: Layers,
    category: 'building',
  },
  {
    id: 'general-building',
    title: 'General Building',
    description: 'General construction work across residential and commercial sites, managed from start to finish.',
    icon: Building2,
    category: 'building',
  },
  {
    id: 'extensions',
    title: 'Extensions',
    description: 'Room additions, garages and outbuildings designed and built to fit the existing structure.',
    icon: Ruler,
    category: 'building',
  },
  {
    id: 'renovations',
    title: 'Renovations',
    description: 'Full or partial renovations that modernise a space without compromising on quality.',
    icon: Construction,
    category: 'building',
  },

  // Installations
  {
    id: 'plumbing',
    title: 'Plumbing',
    description: 'Installations, leak repairs, geysers and general plumbing for homes and businesses.',
    icon: Droplets,
    category: 'installations',
  },
  {
    id: 'electrical',
    title: 'Electrical',
    description: 'Wiring, fault-finding, installations and electrical repairs carried out safely and correctly.',
    icon: Zap,
    category: 'installations',
  },
  {
    id: 'roofing',
    title: 'Roofing',
    description: 'New roofs, roof repairs and re-roofing for tiled, IBR and flat-roof structures.',
    icon: Home,
    category: 'installations',
  },
  {
    id: 'tiling',
    title: 'Tiling',
    description: 'Floor and wall tiling for kitchens, bathrooms and outdoor areas, laid with precision.',
    icon: Grid3x3,
    category: 'installations',
  },
  {
    id: 'ceilings',
    title: 'Ceiling Installation',
    description: 'Ceiling boards, cornicing and bulkheads installed and finished to a clean standard.',
    icon: SquareStack,
    category: 'installations',
  },
  {
    id: 'flooring',
    title: 'Flooring',
    description: 'Screeding and floor covering installation across a range of materials and finishes.',
    icon: Layers,
    category: 'installations',
  },

  // Exterior & Maintenance
  {
    id: 'paving',
    title: 'Paving',
    description: 'Driveways, walkways and outdoor paving laid with proper base preparation and falls.',
    icon: Grid3x3,
    category: 'exterior',
  },
  {
    id: 'painting',
    title: 'Painting',
    description: 'Interior and exterior painting, from single rooms to full property repaints.',
    icon: PaintBucket,
    category: 'exterior',
  },
  {
    id: 'waterproofing',
    title: 'Waterproofing',
    description: 'Roof, wall and surface waterproofing to keep water out where it matters most.',
    icon: Waves,
    category: 'exterior',
  },
  {
    id: 'property-maintenance',
    title: 'Property Maintenance',
    description: 'Ongoing maintenance for residential and commercial properties, on a callout or contract basis.',
    icon: Wrench,
    category: 'exterior',
  },
  {
    id: 'repairs',
    title: 'Repairs',
    description: 'General repairs across trades, handled by a single point of contact instead of five different callouts.',
    icon: ShieldCheck,
    category: 'exterior',
  },
]
