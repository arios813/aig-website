'use client'

import Logo from './Logo'
import { useTranslation } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useTranslation()
  const f = t.footer
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#070f18] border-t border-[#C4CDD6]/8" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-10">

          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-6 group" aria-label="Back to top">
              <Logo size={40} />
              <div className="leading-tight">
                <div
                  className="text-[#D8DDE3] text-[16px] font-medium tracking-wider"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                  American Investment
                </div>
                <div className="font-sans text-[#C4CDD6]/55 text-[10px] tracking-[0.22em] uppercase">
                  Group Inc.
                </div>
              </div>
            </a>

            <p className="font-sans text-[13px] text-[#C4CDD6]/45 leading-[1.8] max-w-[260px] mb-8">
              {f.tagline}
            </p>

            <div className="flex flex-wrap gap-2">
              {f.locations.map((loc) => (
                <span
                  key={loc}
                  className="font-sans text-[10px] tracking-wider uppercase px-2.5 py-1.5 border border-[#C4CDD6]/15 text-[#C4CDD6]/40 rounded-full"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns — render in locale-defined order */}
          {(Object.entries(f.columns) as unknown as [string, { label: string; href: string }[]][]).map(
            ([category, links]) => (
              <div key={category}>
                <h3 className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#C4CDD6]/35 mb-5">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-sans text-[13px] text-[#C4CDD6]/50 hover:text-[#C4CDD6] transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#C4CDD6]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-[#C4CDD6]/30">
            {f.copyright.replace('{year}', String(year))}
          </p>
          <div className="flex items-center gap-6">
            {f.legalLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="font-sans text-[11px] text-[#C4CDD6]/30 hover:text-[#C4CDD6]/55 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-[#C4CDD6]/5 bg-[#040a10]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5">
          <p className="font-sans text-[10px] text-[#C4CDD6]/20 leading-relaxed text-center">
            {f.legalDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}
