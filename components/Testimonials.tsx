'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTranslation } from '../contexts/LanguageContext'
import type { Translations } from '../locales/en'

type TestimonialItem = Translations['testimonials']['items'][number]

interface TestimonialCardProps {
  testimonial: TestimonialItem
  index: number
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <figure className="h-full flex flex-col p-8 lg:p-10 border border-[#C4CDD6]/12 hover:border-[#C4CDD6]/25 transition-colors duration-300 rounded-sm">
        <div
          className="text-[72px] text-[#C4CDD6]/15 leading-none mb-2 -mt-2 select-none"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          aria-hidden="true"
        >
          &ldquo;
        </div>
        <blockquote className="font-sans text-[15px] text-[#C4CDD6]/65 leading-[1.85] flex-grow mb-8 -mt-4">
          {testimonial.quote}
        </blockquote>
        <div className="w-8 h-px bg-[#C4CDD6]/20 mb-6" />
        <figcaption className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-[#C4CDD6]/25 bg-[#C4CDD6]/5 flex items-center justify-center flex-shrink-0">
            <span
              className="text-sm text-[#C4CDD6]/60"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              {testimonial.initials}
            </span>
          </div>
          <div>
            <div className="font-sans text-[13px] text-[#C4CDD6]/80 font-medium">
              {testimonial.author}
            </div>
            <div className="font-sans text-[11px] text-[#C4CDD6]/40 tracking-wide mt-0.5">
              {testimonial.title}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default function Testimonials() {
  const { t } = useTranslation()
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-36 bg-[#0D1B2A] relative overflow-hidden"
      aria-label="Testimonials"
    >
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: `radial-gradient(circle, #C4CDD6 1px, transparent 1px)`, backgroundSize: '56px 56px' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-[#C4CDD6]/40 mb-4">
            {t.testimonials.sectionLabel}
          </p>
          <h2
            className="text-4xl md:text-5xl text-white font-light leading-tight"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            {t.testimonials.headline}
          </h2>
          <div className="w-12 h-px bg-[#C4CDD6]/30 mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {t.testimonials.items.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        <p className="font-sans text-[11px] text-[#C4CDD6]/25 text-center mt-10 max-w-lg mx-auto leading-relaxed">
          {t.testimonials.disclaimer}
        </p>
      </div>
    </section>
  )
}
