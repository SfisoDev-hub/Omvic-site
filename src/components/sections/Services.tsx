import { useState } from 'react'
import { services, serviceCategories, type ServiceCategoryId } from '@/data/services'
import ServiceCard from '@/components/ui/ServiceCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { useServiceRequest } from '@/hooks/useServiceRequest'

type FilterId = 'all' | ServiceCategoryId

export default function Services() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all')
  const { requestQuote } = useServiceRequest()

  const filtered = activeFilter === 'all' ? services : services.filter((s) => s.category === activeFilter)

  return (
    <section id="services" className="bg-sand-100 py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading
          eyebrow="What We Do"
          title="Construction and finishing services"
          description="Professional building and finishing services delivered with quality workmanship and attention to detail."
        />

        <div className="mt-10 flex flex-wrap gap-3" role="tablist" aria-label="Filter services by category">
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ease-industrial ${
              activeFilter === 'all'
                ? 'bg-charcoal-900 text-sand-50'
                : 'bg-white text-charcoal-600 hover:bg-charcoal-100'
            }`}
          >
            All Services
          </button>
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ease-industrial ${
                activeFilter === cat.id
                  ? 'bg-charcoal-900 text-sand-50'
                  : 'bg-white text-charcoal-600 hover:bg-charcoal-100'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} onRequestQuote={requestQuote} />
          ))}
        </div>
      </div>
    </section>
  )
}
