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
    id: 'construction',
    title: 'Construction & Bricklaying',
    description:
      'From boundary walls to full structural builds, our bricklaying and building work is set out properly and built to plan — not rushed to look right for a week.',
    image: images.featured.building,
    points: ['New builds & extensions', 'Boundary & retaining walls', 'Structural brickwork'],
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    description:
      'Burst pipes, geyser installations, blocked drains or a full re-plumb — handled by tradespeople who diagnose the problem properly before opening a wall.',
    image: images.featured.plumbing,
    points: ['Leak detection & repair', 'Geyser installation', 'Bathroom & kitchen plumbing'],
  },
  {
    id: 'electrical',
    title: 'Electrical',
    description:
      'Wiring, distribution boards, fault-finding and new installations, completed with the safety of your property and household in mind.',
    image: images.featured.electrical,
    points: ['Fault-finding & repairs', 'New wiring & installations', 'Distribution board work'],
  },
  {
    id: 'roofing',
    title: 'Roofing',
    description:
      'Re-roofing, roof repairs and new roof structures, built to keep South African weather out for good rather than until the next storm.',
    image: images.featured.roofing,
    points: ['Tiled & IBR roofing', 'Leak repairs', 'Roof structure replacement'],
  },
  {
    id: 'tiling-flooring',
    title: 'Tiling & Flooring',
    description:
      'Precise, level tiling and flooring installation for kitchens, bathrooms, living areas and commercial floors.',
    image: images.featured.tiling,
    points: ['Floor & wall tiling', 'Screeding', 'Commercial & residential flooring'],
  },
  {
    id: 'paving',
    title: 'Paving',
    description:
      'Driveways, walkways and outdoor paving, laid on a properly prepared base so it stays level for years, not months.',
    image: images.featured.paving,
    points: ['Driveway paving', 'Walkways & outdoor areas', 'Base preparation & drainage'],
  },
  {
    id: 'maintenance',
    title: 'Property Maintenance',
    description:
      'Ongoing maintenance for landlords, body corporates and businesses that need one reliable contractor instead of a different callout for every job.',
    image: images.featured.maintenance,
    points: ['Scheduled maintenance', 'Callout repairs', 'Residential & commercial'],
  },
]
