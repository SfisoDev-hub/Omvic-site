import { createContext, useContext, useState, type ReactNode } from 'react'

interface ServiceRequestContextValue {
  selectedService: string
  requestQuote: (serviceTitle: string) => void
}

const ServiceRequestContext = createContext<ServiceRequestContextValue | undefined>(undefined)

export function ServiceRequestProvider({ children }: { children: ReactNode }) {
  const [selectedService, setSelectedService] = useState('')

  const requestQuote = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ServiceRequestContext.Provider value={{ selectedService, requestQuote }}>
      {children}
    </ServiceRequestContext.Provider>
  )
}

export function useServiceRequest() {
  const context = useContext(ServiceRequestContext)
  if (!context) {
    throw new Error('useServiceRequest must be used within a ServiceRequestProvider')
  }
  return context
}
