import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { serviceCategories } from '@/data/services'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-900 text-charcoal-200">
      <div className="container-wide grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-extrabold text-sand-50">{siteConfig.companyName}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-300">
            Professional construction, renovation and property maintenance services for residential and commercial
            clients across South Africa.
          </p>
          <div className="mt-6 flex gap-4">
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="text-charcoal-300 hover:text-gold-light">
              <Facebook className="h-5 w-5" />
            </a>
            <a href={siteConfig.social.instagram} aria-label="Instagram" className="text-charcoal-300 hover:text-gold-light">
              <Instagram className="h-5 w-5" />
            </a>
            <a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="text-charcoal-300 hover:text-gold-light">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-sand-50">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceCategories.map((cat) => (
              <li key={cat.id}>
                <a href="#services" className="text-charcoal-300 hover:text-gold-light">
                  {cat.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-sand-50">Quick Links</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-charcoal-300 hover:text-gold-light">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-sand-50">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-charcoal-300">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={siteConfig.contact.phoneHref} className="hover:text-gold-light">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={siteConfig.contact.whatsappHref} className="hover:text-gold-light">
                WhatsApp: {siteConfig.contact.whatsapp}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={siteConfig.contact.emailHref} className="hover:text-gold-light">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{siteConfig.contact.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-700">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-6 text-xs text-charcoal-400 sm:flex-row">
          <p>
            © {year} {siteConfig.companyName}. All rights reserved.
          </p>
          <p>Site built with care for residential and commercial clients across South Africa.</p>
        </div>
      </div>
    </footer>
  )
}
