import { Check, ArrowRight } from 'lucide-react'
import { featuredServices } from '@/data/featuredServices'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { useServiceRequest } from '@/hooks/useServiceRequest'

export default function FeaturedServices() {
  const { requestQuote } = useServiceRequest()

  return (
    <section className="py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Core Capabilities"
          title="The trades our clients rely on most"
        />
      </div>

      <div className="mt-16 flex flex-col gap-20 sm:gap-28">
        {featuredServices.map((item, index) => {
          const reversed = index % 2 === 1
          return (
            <div key={item.id} className="container-wide grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={reversed ? 'lg:order-2' : ''}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-80 w-full object-cover cut-corner sm:h-[26rem]"
                />
              </div>
              <div className={reversed ? 'lg:order-1' : ''}>
                <span className="font-display text-6xl font-extrabold text-charcoal-100">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 text-display-md text-charcoal-900">{item.title}</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal-500">{item.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-charcoal-700">
                      <Check className="h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => requestQuote(item.title)}
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal-900 hover:text-gold-dark"
                >
                  Request a quotation for {item.title.toLowerCase()}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="container-wide mt-4 flex justify-center sm:mt-0">
        <Button href="#services" variant="ghost" className="mt-10">
          View all services
        </Button>
      </div>
    </section>
  )
}
