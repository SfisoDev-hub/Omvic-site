import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-[0.95rem] transition-colors duration-200 ease-industrial cut-corner-sm'

const variants: Record<Variant, string> = {
  primary: 'bg-gold text-charcoal-900 hover:bg-gold-light',
  secondary: 'bg-charcoal-900 text-sand-50 hover:bg-charcoal-700',
  ghost: 'border border-charcoal-300 text-charcoal-800 hover:border-gold hover:text-gold-dark',
}

interface CommonProps {
  variant?: Variant
  icon?: ReactNode
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export default function Button({ variant = 'primary', icon, children, className = '', ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
        {icon}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon}
    </button>
  )
}
