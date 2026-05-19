'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'
import { useTranslation } from '../contexts/LanguageContext'

export default function Navbar() {
  const { t, toggleLocale } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#story',     label: t.nav.story },
    { href: '#team',      label: t.nav.team },
    { href: '#services',  label: t.nav.services },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#contact',   label: t.nav.contact },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0D1B2A]/96 backdrop-blur-md shadow-xl shadow-black/20 border-b border-[#C4CDD6]/10'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo + wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4CDD6] rounded"
            aria-label="American Investment Group SA — Home"
          >
            <Logo size={36} className="transition-transform duration-300 group-hover:scale-105" />
            <div className="leading-tight">
              <div
                className="text-[#D8DDE3] text-[17px] font-medium tracking-wider"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                American Investment
              </div>
              <div className="font-sans text-[#C4CDD6]/70 text-[10px] tracking-[0.22em] uppercase">
                Group SA
              </div>
            </div>
          </a>

          {/* Desktop links + lang toggle */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-sans text-[13px] text-[#C4CDD6]/80 hover:text-white tracking-wider uppercase transition-colors duration-200 group py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4CDD6] rounded"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C4CDD6]/60 group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggleLocale}
              aria-label={t.nav.langAriaLabel}
              className="font-sans text-[13px] px-3 py-1.5 border border-[#C4CDD6]/30 text-[#C4CDD6]/70 hover:border-[#C4CDD6]/60 hover:text-[#C4CDD6] rounded-sm tracking-widest uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4CDD6]"
            >
              {t.nav.langLabel}
            </button>

            <a
              href="#contact"
              className="font-sans text-[13px] px-5 py-2.5 border border-[#C4CDD6]/35 text-[#C4CDD6] hover:bg-[#C4CDD6]/8 hover:border-[#C4CDD6]/65 rounded-sm transition-all duration-250 tracking-wider uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4CDD6]"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile right side: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLocale}
              aria-label={t.nav.langAriaLabel}
              className="font-sans text-[12px] px-2.5 py-1 border border-[#C4CDD6]/30 text-[#C4CDD6]/70 rounded-sm tracking-widest uppercase transition-all duration-200"
            >
              {t.nav.langLabel}
            </button>
            <button
              className="flex flex-col justify-center items-center w-9 h-9 gap-1.5 text-[#C4CDD6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4CDD6] rounded"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`block w-6 h-px bg-current transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0D1B2A]/98 backdrop-blur-md border-t border-[#C4CDD6]/10 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center py-3.5 font-sans text-sm text-[#C4CDD6]/80 hover:text-white tracking-wider uppercase border-b border-[#C4CDD6]/8 transition-colors duration-200 last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex justify-center font-sans text-sm px-5 py-3 border border-[#C4CDD6]/35 text-[#C4CDD6] hover:bg-[#C4CDD6]/8 rounded-sm tracking-wider uppercase transition-all duration-200"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  )
}
