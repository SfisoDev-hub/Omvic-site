import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { services } from '@/data/services'
import { useServiceRequest } from '@/hooks/useServiceRequest'
import Button from '@/components/ui/Button'

interface FormState {
  name: string
  surname: string
  phone: string
  email: string
  service: string
  location: string
  message: string
}

const initialState: FormState = {
  name: '',
  surname: '',
  phone: '',
  email: '',
  service: '',
  location: '',
  message: '',
}

type FormErrors = Partial<Record<keyof FormState, string>>

export default function Contact() {
  const { selectedService } = useServiceRequest()
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, service: selectedService }))
    }
  }, [selectedService])

  const handleChange = (field: keyof FormState) => (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const validate = (): FormErrors => {
    const next: FormErrors = {}

    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.surname.trim()) next.surname = 'Please enter your surname.'
    if (!form.phone.trim()) next.phone = 'Please enter a contact number.'

    if (!form.email.trim()) {
      next.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }

    if (!form.service) next.service = 'Please select the service you need.'
    if (!form.location.trim()) next.location = 'Please enter the project location.'
    if (!form.message.trim()) next.message = 'Please add a short description of the job.'

    return next
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      // NOTE: wire this up to your form backend / email service of choice
      // (e.g. Formspree, an API route, or a serverless function).
      setSubmitted(true)
      setForm(initialState)
    }
  }

  const inputClasses = (hasError?: boolean) =>
    `w-full border bg-white px-4 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-300 focus:outline-none ${
      hasError ? 'border-red-400' : 'border-charcoal-200 focus:border-gold'
    }`

  return (
    <section id="contact" className="container-wide py-24 sm:py-32">
      <div className="grid gap-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="section-eyebrow">Get In Touch</span>

          <h2 className="mt-4 text-display-md text-charcoal-900">
            Request your quotation
          </h2>

          <p className="mt-4 text-base leading-relaxed text-charcoal-500">
            Fill in the form and we&apos;ll get back to you with a quotation, or
            contact us directly using the details below.
          </p>

          <ul className="mt-10 space-y-6">
            <li className="flex items-start gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />

              <div>
                <p className="text-sm font-semibold text-charcoal-900">Phone</p>

                <a
                  href={siteConfig.contact.phoneHref}
                  className="text-sm text-charcoal-500 hover:text-gold-dark"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />

              <div>
                <p className="text-sm font-semibold text-charcoal-900">
                  WhatsApp
                </p>

                <a
                  href={siteConfig.contact.whatsappHref}
                  className="text-sm text-charcoal-500 hover:text-gold-dark"
                >
                  {siteConfig.contact.whatsapp}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />

              <div>
                <p className="text-sm font-semibold text-charcoal-900">Email</p>

                <a
                  href={siteConfig.contact.emailHref}
                  className="text-sm text-charcoal-500 hover:text-gold-dark"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />

              <div>
                <p className="text-sm font-semibold text-charcoal-900">
                  Location
                </p>

                <div className="text-sm leading-relaxed text-charcoal-500">
                  <p>6233 Umilo Street</p>
                  <p>Birch Acres, Kempton Park</p>
                  <p>1618</p>
                </div>

                <p className="mt-2 text-xs text-charcoal-400">
                  {siteConfig.contact.hours}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="lg:col-span-3 bg-sand-100 p-6 sm:p-10 cut-corner"
        >
          {submitted && (
            <div
              role="status"
              className="mb-6 border border-gold bg-gold-50 px-4 py-3 text-sm text-charcoal-800"
            >
              Thank you — your request has been received. We&apos;ll be in touch
              shortly.
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-charcoal-700"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                value={form.name}
                onChange={handleChange('name')}
                className={inputClasses(!!errors.name)}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />

              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="surname"
                className="mb-1.5 block text-sm font-medium text-charcoal-700"
              >
                Surname
              </label>

              <input
                id="surname"
                type="text"
                value={form.surname}
                onChange={handleChange('surname')}
                className={inputClasses(!!errors.surname)}
                aria-invalid={!!errors.surname}
                aria-describedby={errors.surname ? 'surname-error' : undefined}
              />

              {errors.surname && (
                <p id="surname-error" className="mt-1 text-xs text-red-500">
                  {errors.surname}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-sm font-medium text-charcoal-700"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange('phone')}
                className={inputClasses(!!errors.phone)}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />

              {errors.phone && (
                <p id="phone-error" className="mt-1 text-xs text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-charcoal-700"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                className={inputClasses(!!errors.email)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />

              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="service"
                className="mb-1.5 block text-sm font-medium text-charcoal-700"
              >
                Service Required
              </label>

              <select
                id="service"
                value={form.service}
                onChange={handleChange('service')}
                className={inputClasses(!!errors.service)}
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? 'service-error' : undefined}
              >
                <option value="">Select a service</option>

                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}

                <option value="Other">Other / Not sure</option>
              </select>

              {errors.service && (
                <p id="service-error" className="mt-1 text-xs text-red-500">
                  {errors.service}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="location"
                className="mb-1.5 block text-sm font-medium text-charcoal-700"
              >
                Project Location
              </label>

              <input
                id="location"
                type="text"
                placeholder="Suburb, city"
                value={form.location}
                onChange={handleChange('location')}
                className={inputClasses(!!errors.location)}
                aria-invalid={!!errors.location}
                aria-describedby={errors.location ? 'location-error' : undefined}
              />

              {errors.location && (
                <p id="location-error" className="mt-1 text-xs text-red-500">
                  {errors.location}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-charcoal-700"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="Tell us a bit about the job..."
                value={form.message}
                onChange={handleChange('message')}
                className={inputClasses(!!errors.message)}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />

              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-500">
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            className="mt-8 w-full sm:w-auto"
            icon={<Send className="h-4 w-4" />}
          >
            Submit Request
          </Button>
        </form>
      </div>
    </section>
  )
}