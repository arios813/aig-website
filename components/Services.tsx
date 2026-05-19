'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTranslation } from '../contexts/LanguageContext'
import type { Translations } from '../locales/en'

type ServiceItem = Translations['services']['items'][number]

interface ServiceCardProps {
  service: ServiceItem
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`bg-[#F8F7F5] transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="p-8 lg:p-10 h-full hover:bg-[#F3F2F0] transition-colors duration-300">
        <div
          className="text-[40px] text-[#0D1B2A]/12 font-light mb-5 leading-none"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          aria-hidden="true"
        >
          {service.number}
        </div>
        <div className="w-8 h-px bg-[#0D1B2A]/30 mb-5" />
        <h3
          className="text-[22px] text-[#0D1B2A] font-medium mb-4 leading-snug"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          {service.title}
        </h3>
        <p className="font-sans text-[14px] text-[#0D1B2A]/60 leading-[1.8] mb-6">
          {service.description}
        </p>
        <ul className="space-y-2">
          {service.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-[7px] w-1 h-1 rounded-full bg-[#0D1B2A]/35 flex-shrink-0" />
              <span className="font-sans text-[12px] text-[#0D1B2A]/50 tracking-wide leading-snug">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Services() {
  const { t } = useTranslation()
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  return (
    <section id="services" className="py-24 lg:py-36 bg-[#F8F7F5]" aria-label="Services">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-[#0D1B2A]/45 mb-4">
            {t.services.sectionLabel}
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#0D1B2A] font-light leading-tight"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            {t.services.headline}
          </h2>
          <div className="w-12 h-px bg-[#0D1B2A]/25 mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0D1B2A]/10 border border-[#0D1B2A]/10">
          {t.services.items.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
