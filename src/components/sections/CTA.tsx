import { ArrowRight, MessageCircle } from 'lucide-react'
import { images } from '@/data/images'
import { siteConfig } from '@/data/siteConfig'
import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal-900 py-24 sm:py-32">
      <img
        src={images.cta}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/95 to-charcoal-900/70" />

      <div className="container-wide relative z-10 max-w-2xl">
        <h2 className="text-display-md text-sand-50">Have a project in mind?</h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal-100">
          Tell us what you need and we&apos;ll help you get started
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="#contact" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
            Request a Quote
          </Button>
          <Button
            href={siteConfig.contact.whatsappHref}
            variant="ghost"
            className="border-charcoal-100/40 text-sand-50 hover:border-gold hover:text-gold-light"
            icon={<MessageCircle className="h-4 w-4" />}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  )
}
