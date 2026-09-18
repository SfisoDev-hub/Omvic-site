import { ArrowUpRight } from 'lucide-react'
import type { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
  onRequestQuote: (serviceTitle: string) => void
}

export default function ServiceCard({ service, onRequestQuote }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <div className="group flex flex-col justify-between border border-charcoal-100 bg-white p-7 transition-colors duration-200 ease-industrial hover:border-gold">
      <div>
        <Icon className="h-8 w-8 text-gold-dark" strokeWidth={1.75} aria-hidden="true" />
        <h3 className="mt-5 text-lg font-display font-bold text-charcoal-900">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{service.description}</p>
      </div>
      <button
        type="button"
        onClick={() => onRequestQuote(service.title)}
        className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-charcoal-800 transition-colors duration-200 hover:text-gold-dark"
      >
        Request a quotation
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-industrial group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </div>
  )
}
