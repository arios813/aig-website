'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTranslation } from '../contexts/LanguageContext'
import type { Translations } from '../locales/en'

type PortfolioItem = Translations['portfolio']['items'][number]
type StatusKey = keyof Translations['portfolio']['statusLabels']

const statusStyles: Record<StatusKey, string> = {
  Active: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  Development: 'text-amber-700 bg-amber-50 border-amber-200',
  Pipeline: 'text-[#0D1B2A]/60 bg-[#0D1B2A]/5 border-[#0D1B2A]/15',
}

interface PortfolioCardProps {
  item: PortfolioItem
  index: number
  statusLabel: string
}

function PortfolioCard({ item, index, statusLabel }: PortfolioCardProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`h-full flex flex-col p-8 lg:p-10 border transition-all duration-300 rounded-sm group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0D1B2A]/10 ${
          item.highlight
            ? 'border-[#C4CDD6]/30 bg-[#0D1B2A]'
            : 'border-[#0D1B2A]/12 bg-white hover:border-[#0D1B2A]/25'
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <span
            className={`font-sans text-[10px] tracking-[0.28em] uppercase ${item.highlight ? 'text-[#C4CDD6]/50' : 'text-[#0D1B2A]/40'}`}
          >
            {item.category}
          </span>
          <span
            className={`font-sans text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border ${statusStyles[item.status as StatusKey]}`}
          >
            {statusLabel}
          </span>
        </div>

        <h3
          className={`text-2xl font-medium mb-4 leading-snug ${item.highlight ? 'text-white' : 'text-[#0D1B2A]'}`}
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          {item.title}
        </h3>

        <p
          className={`font-sans text-[14px] leading-[1.8] mb-6 flex-grow ${item.highlight ? 'text-[#C4CDD6]/60' : 'text-[#0D1B2A]/60'}`}
        >
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className={`font-sans text-[11px] tracking-wide px-2.5 py-1 rounded-full border ${
                item.highlight
                  ? 'border-[#C4CDD6]/20 text-[#C4CDD6]/50'
                  : 'border-[#0D1B2A]/12 text-[#0D1B2A]/45'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const { t } = useTranslation()
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  return (
    <section id="portfolio" className="py-24 lg:py-36 bg-[#F8F7F5]" aria-label="Portfolio">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-[#0D1B2A]/45 mb-4">
            {t.portfolio.sectionLabel}
          </p>
          <h2
            className="text-4xl md:text-5xl text-[#0D1B2A] font-light leading-tight"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            {t.portfolio.headline}
          </h2>
          <div className="w-12 h-px bg-[#0D1B2A]/25 mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {t.portfolio.items.map((item, index) => (
            <PortfolioCard
              key={index}
              item={item}
              index={index}
              statusLabel={t.portfolio.statusLabels[item.status as StatusKey]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
