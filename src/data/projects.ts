import { images } from './images'

export type ProjectCategory =
  | 'Building'
  | 'Renovations'
  | 'Plumbing'
  | 'Electrical'
  | 'Roofing'
  | 'Tiling'
  | 'Paving'
  | 'Maintenance'

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
  { id: 'p1', title: 'Boundary Wall Build', category: 'Building', location: '[Project Location]', image: images.projects.building1 },
  { id: 'p2', title: 'Residential Extension', category: 'Building', location: '[Project Location]', image: images.projects.building2 },
  { id: 'p3', title: 'Full Home Renovation', category: 'Renovations', location: '[Project Location]', image: images.projects.renovation1 },
  { id: 'p4', title: 'Kitchen Renovation', category: 'Renovations', location: '[Project Location]', image: images.projects.renovation2 },
  { id: 'p5', title: 'Bathroom Re-Plumb', category: 'Plumbing', location: '[Project Location]', image: images.projects.plumbing1 },
  { id: 'p6', title: 'Distribution Board Upgrade', category: 'Electrical', location: '[Project Location]', image: images.projects.electrical1 },
  { id: 'p7', title: 'Tiled Roof Replacement', category: 'Roofing', location: '[Project Location]', image: images.projects.roofing1 },
  { id: 'p8', title: 'Bathroom Floor Tiling', category: 'Tiling', location: '[Project Location]', image: images.projects.tiling1 },
  { id: 'p9', title: 'Driveway Paving', category: 'Paving', location: '[Project Location]', image: images.projects.paving1 },
  { id: 'p10', title: 'Commercial Property Maintenance', category: 'Maintenance', location: '[Project Location]', image: images.projects.maintenance1 },
]

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'Building',
  'Renovations',
  'Plumbing',
  'Electrical',
  'Roofing',
  'Tiling',
  'Paving',
  'Maintenance',
]
