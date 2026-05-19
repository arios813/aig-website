'use client'

import { useEffect, useState } from 'react'
import Logo from './Logo'
import { useTranslation } from '../contexts/LanguageContext'

export default function Hero() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D1B2A]"
      aria-label="Hero"
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #C4CDD6 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(26,46,66,0.6),transparent)]" />
      <div className="absolute top-0 left-0 w-full h-px opacity-20" style={{ background: 'linear-gradient(to right, transparent, #C4CDD6 40%, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-full h-px opacity-10" style={{ background: 'linear-gradient(to right, transparent, #C4CDD6 60%, transparent)' }} />
      <div className="absolute top-0 left-16 w-px h-32 bg-gradient-to-b from-[#C4CDD6]/20 to-transparent hidden lg:block" />
      <div className="absolute top-0 right-16 w-px h-32 bg-gradient-to-b from-[#C4CDD6]/20 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-20">

        {/* Globe */}
        <div
          className={`flex justify-center mb-10 transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
          style={{ transitionDelay: '150ms' }}
        >
          <div className="relative">
            <Logo size={76} />
            <div className="absolute inset-0 rounded-full bg-[#C4CDD6]/5 blur-xl -z-10 scale-150" />
          </div>
        </div>

        {/* Overline */}
        <div
          className={`font-sans text-[11px] tracking-[0.35em] uppercase text-[#C4CDD6]/55 mb-7 transition-all duration-900 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
          style={{ transitionDelay: '280ms' }}
        >
          {t.hero.overline}
        </div>

        {/* Headline */}
        <h1
          className={`mb-8 transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: '#ffffff',
            letterSpacing: '-0.01em',
            transitionDelay: '380ms',
          }}
        >
          {t.hero.headlineLine1}
          <br />
          <em style={{ color: '#C4CDD6', fontStyle: 'italic', fontWeight: 400 }}>
            {t.hero.headlineItalic}
          </em>
          <br />
          {t.hero.headlineLine3}
        </h1>

        {/* Rule */}
        <div
          className={`w-16 h-px bg-gradient-to-r from-transparent via-[#C4CDD6]/60 to-transparent mx-auto mb-8 transition-all duration-700 ease-out ${mounted ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
          style={{ transitionDelay: '520ms' }}
        />

        {/* Subtext */}
        <p
          className={`font-sans text-base sm:text-[17px] text-[#C4CDD6]/70 max-w-2xl mx-auto leading-[1.8] mb-12 transition-all duration-900 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '580ms' }}
        >
          {t.hero.subtext}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-900 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '680ms' }}
        >
          <a
            href="#contact"
            className="font-sans text-[13px] font-medium px-9 py-4 bg-[#C4CDD6] text-[#0D1B2A] hover:bg-[#D8DDE3] transition-colors duration-250 tracking-[0.08em] uppercase rounded-sm"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#services"
            className="font-sans text-[13px] px-9 py-4 border border-[#C4CDD6]/35 text-[#C4CDD6] hover:bg-[#C4CDD6]/8 hover:border-[#C4CDD6]/60 transition-all duration-250 tracking-[0.08em] uppercase rounded-sm"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ease-out ${mounted ? 'opacity-40' : 'opacity-0'}`}
        style={{ transitionDelay: '1200ms' }}
        aria-hidden="true"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] text-[#C4CDD6] uppercase">
          {t.hero.scroll}
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#C4CDD6] to-transparent animate-pulse" />
      </div>
    </section>
  )
}
