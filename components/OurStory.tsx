'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTranslation } from '../contexts/LanguageContext'

export default function OurStory() {
  const { t } = useTranslation()
  const s = t.story

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const { ref: col1Ref, isVisible: col1Visible } = useScrollReveal()
  const { ref: col2Ref, isVisible: col2Visible } = useScrollReveal()
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal()

  return (
    <section id="story" className="py-24 lg:py-36 bg-[#F8F7F5]" aria-label="Our Story">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-[#0D1B2A]/45 mb-4">
            {s.sectionLabel}
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#0D1B2A] font-light leading-tight"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            {s.headline}
          </h2>
          <div className="w-12 h-px bg-[#0D1B2A]/25 mt-6" />
        </div>

        {/* Two-column story */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-20">

          {/* Alcides */}
          <div
            ref={col1Ref}
            className={`transition-all duration-700 ease-out delay-100 ${col1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#0D1B2A]/25" />
              <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#0D1B2A]/45">
                {s.founder.eyebrow}
              </span>
            </div>
            <h3
              className="text-2xl text-[#0D1B2A] mb-5 font-medium"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              {s.founder.name}
            </h3>
            <div className="space-y-4 font-sans text-[15px] text-[#0D1B2A]/65 leading-[1.85]">
              <p>{s.founder.p1}</p>
              <p>{s.founder.p2}</p>
              <p>{s.founder.p3}</p>
            </div>
          </div>

          {/* Andrew */}
          <div
            ref={col2Ref}
            className={`transition-all duration-700 ease-out delay-200 ${col2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#0D1B2A]/25" />
              <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#0D1B2A]/45">
                {s.partner.eyebrow}
              </span>
            </div>
            <h3
              className="text-2xl text-[#0D1B2A] mb-5 font-medium"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              {s.partner.name}
            </h3>
            <div className="space-y-4 font-sans text-[15px] text-[#0D1B2A]/65 leading-[1.85]">
              <p>{s.partner.p1}</p>
              <p>{s.partner.p2}</p>
              <p>{s.partner.p3}</p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className={`border-t border-[#0D1B2A]/10 pt-12 transition-all duration-700 ease-out ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {s.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl md:text-4xl text-[#0D1B2A] font-light mb-2"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                  {stat.value}
                </div>
                <div className="font-sans text-[11px] tracking-widest text-[#0D1B2A]/45 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
