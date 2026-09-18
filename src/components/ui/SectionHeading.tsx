interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2
        className={`mt-4 text-display-md ${light ? 'text-sand-50' : 'text-charcoal-900'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-charcoal-100' : 'text-charcoal-500'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
