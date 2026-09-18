import { ShieldCheck, HardHat, ClipboardCheck, Users } from 'lucide-react'
import { images } from '@/data/images'
import { siteConfig } from '@/data/siteConfig'
import SectionHeading from '@/components/ui/SectionHeading'

const stats = [
  { icon: ClipboardCheck, label: '10+ Services' },
  { icon: Users, label: 'Residential & Commercial' },
  { icon: HardHat, label: 'Quality Workmanship' },
  { icon: ShieldCheck, label: 'Reliable Service' },
]

export default function About() {
  return (
    <section id="about" className="container-wide py-24 sm:py-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={images.about}
            alt="Tradesperson at work on a construction site"
            className="h-[28rem] w-full object-cover cut-corner"
          />
          <div className="absolute -bottom-6 -right-4 hidden w-52 border border-charcoal-100 bg-white p-5 shadow-panel sm:block lg:-right-8">
            <p className="font-display text-3xl font-extrabold text-charcoal-900">10+</p>
            <p className="mt-1 text-sm text-charcoal-500">trades and services under one company</p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About Us"
            title="One company, every trade your property needs"
          />
          <p className="mt-6 text-base leading-relaxed text-charcoal-500">
            {siteConfig.companyName} provides reliable construction and maintenance solutions across multiple
            trades — from structural building work through to the finishing details. Our approach is built on
            quality workmanship, professional service and reliable project delivery, whether we're laying a
            single wall or managing a full renovation.
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal-500">
            Every job is carried out by experienced tradespeople with attention to detail and safety front of
            mind, for residential homeowners, property managers and commercial clients alike.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="flex items-start gap-3 border-l-2 border-gold pl-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                  <span className="text-sm font-medium text-charcoal-700">{stat.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
