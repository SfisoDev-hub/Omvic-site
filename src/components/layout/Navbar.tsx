import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

import { siteConfig } from '@/data/siteConfig'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = () => setIsOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-industrial ${
        isScrolled || isOpen
          ? 'bg-charcoal-900/97 shadow-panel backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-wide flex h-20 items-center justify-between"
        aria-label="Primary"
      >
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center"
          aria-label="OmVic Projects & Construction"
        >
          <img
            src="/images/omvic-logo.png"
            alt="OmVic Projects & Construction"
            className="h-20 w-auto scale-[1.8] origin-left object-contain"
          />
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-9 lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-charcoal-100 transition-colors duration-200 hover:text-gold-light"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop contact */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-charcoal-100 hover:text-gold-light"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.contact.phone}
          </a>

          <Button href="#contact" variant="primary">
            Request a Quote
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="text-sand-50 lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-charcoal-700 bg-charcoal-900 px-5 pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block border-b border-charcoal-700 py-3 text-base font-medium text-charcoal-100 hover:text-gold-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={siteConfig.contact.phoneHref}
              className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-charcoal-100"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.phone}
            </a>

            <Button
              href="#contact"
              variant="primary"
              onClick={handleNavClick}
              className="w-full"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}