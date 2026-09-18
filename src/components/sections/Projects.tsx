import { useState } from 'react'
import { projects, projectCategories, type ProjectCategory } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import SectionHeading from '@/components/ui/SectionHeading'

type Filter = 'All' | ProjectCategory

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="bg-sand-100 py-24 sm:py-32">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our Work"
            title="A look at recent projects"
            description="Placeholder gallery — replace each image and detail in src/data/projects.ts with real completed work as it becomes available."
          />

          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold transition-colors duration-200 ease-industrial ${
                  activeFilter === cat
                    ? 'bg-charcoal-900 text-sand-50'
                    : 'bg-white text-charcoal-600 hover:bg-charcoal-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
