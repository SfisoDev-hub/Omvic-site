import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

// NOTE: "image" comes from src/data/images.ts. Once real project photography
// is available, either replace the relevant entry in images.ts, or swap this
// component to read from an "image" field pointing at /public/images/projects/.
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <figure className="group relative overflow-hidden bg-charcoal-900 cut-corner">
      <img
        src={project.image}
        alt={`${project.title} — ${project.category} project in ${project.location}`}
        loading="lazy"
        className="h-72 w-full object-cover transition-transform duration-500 ease-industrial group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/10 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-gold-light">{project.category}</span>
        <p className="mt-1 font-display text-xl font-bold text-sand-50">{project.title}</p>
        <p className="text-sm text-charcoal-100">{project.location}</p>
      </figcaption>
    </figure>
  )
}
