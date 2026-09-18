import {
  HardHat,
  MessageSquare,
  Award,
  ClipboardList,
  Building,
  Home,
  FileText,
  CheckCircle2,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const reasons = [
  { icon: HardHat, title: 'Quality workmanship', description: 'Work carried out properly and finished to a standard we would sign off on ourselves.' },
  { icon: MessageSquare, title: 'Reliable communication', description: 'You know what is happening on your project, without having to chase for updates.' },
  { icon: Award, title: 'Professional service', description: 'From the first site visit to the final walkthrough, handled properly.' },
  { icon: ClipboardList, title: 'Attention to detail', description: 'The small things are what separate a good job from a job that needs redoing.' },
  { icon: Building, title: 'Multiple trades, one company', description: 'Bricklaying to electrical, coordinated by a single point of contact.' },
  { icon: Home, title: 'Residential & commercial', description: 'Comfortable on a family home, a rental unit or a commercial property.' },
  { icon: FileText, title: 'Competitive quotations', description: 'Clear, itemised quotations before any work begins — no surprises.' },
  { icon: CheckCircle2, title: 'Committed to finishing properly', description: 'A job is only done when it is done right, not when it looks right from a distance.' },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-charcoal-900 py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A contractor you can hold to their word"
          light
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-charcoal-700 bg-charcoal-700 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="bg-charcoal-900 p-7">
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg font-bold text-sand-50">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-300">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
