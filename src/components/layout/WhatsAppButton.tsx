import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat to ${siteConfig.companyName} on WhatsApp`}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] px-5 py-3.5 font-semibold text-white shadow-panel transition-transform duration-200 ease-industrial hover:scale-105 cut-corner-sm"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  )
}
