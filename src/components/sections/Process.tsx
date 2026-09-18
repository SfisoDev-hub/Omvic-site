import { PhoneCall, ClipboardCheck, FileSignature, HardHat } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Contact Us',
    description: 'Reach out by phone, WhatsApp or the contact form and tell us what you need done.',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Site Assessment',
    description: 'We assess the site (in person or remotely, depending on the job) to understand the full scope.',
  },
  {
    number: '03',
    icon: FileSignature,
    title: 'Quotation',
    description: 'You receive a clear, itemised quotation before any work begins, no vague pricing.',
  },
  {
    number: '04',
    icon: HardHat,
    title: 'Project Execution',
    description: 'Work is carried out to plan, with communication throughout until the job is complete.',
  },
]

export default function Process() {
  return (
    <section id="process" className="container-wide py-24 sm:py-32">
      <SectionHeading
        eyebrow="Our Process"
        title="From first contact to a finished job"
        align="center"
      />

      <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <div className="absolute left-0 right-0 top-9 hidden h-px bg-charcoal-200 lg:block" aria-hidden="true" />

        {steps.map((step) => {
          const Icon = step.icon
          return (
            <div key={step.number} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="relative z-10 flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center border-2 border-gold bg-sand-50">
                <Icon className="h-7 w-7 text-gold-dark" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <span className="mt-5 font-display text-sm font-bold text-gold-dark">{step.number}</span>
              <h3 className="mt-1 font-display text-xl font-bold text-charcoal-900">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-charcoal-500">{step.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
