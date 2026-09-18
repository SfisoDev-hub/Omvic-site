import { ArrowRight, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { images } from '@/data/images'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden bg-charcoal-900">
      <img
        src={images.hero}
        alt="Construction site with structural steelwork underway"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/70 to-charcoal-900/30" />
      <div className="absolute inset-0 blueprint-bg opacity-40" />

      <div className="container-wide relative z-10 pb-20 pt-40 sm:pb-28">
        <span className="section-eyebrow text-gold-light">Residential &amp; Commercial</span>

        <h1 className="mt-6 max-w-4xl text-display-xl text-sand-50">
          Building. Renovating.
          <br />
          Maintaining.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-100">
          {siteConfig.companyName} provides professional construction, renovation and property maintenance
          services for residential and commercial clients — plumbing to paving, and everything between.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Button href="#contact" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
            Request a Quote
          </Button>
          <Button href="#services" variant="ghost" className="border-charcoal-100/40 text-sand-50 hover:border-gold hover:text-gold-light">
            View Our Services
          </Button>
          <Button
            href={siteConfig.contact.whatsappHref}
            variant="secondary"
            icon={<MessageCircle className="h-4 w-4" />}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
