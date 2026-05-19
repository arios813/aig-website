'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTranslation } from '../contexts/LanguageContext'
import type { Translations } from '../locales/en'

type TeamMember = Translations['team']['members'][number]

interface TeamCardProps {
  member: TeamMember
  delay: number
  credentialsLabel: string
}

function TeamCard({ member, delay, credentialsLabel }: TeamCardProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="border border-[#C4CDD6]/12 hover:border-[#C4CDD6]/28 transition-colors duration-400 p-8 lg:p-10 h-full rounded-sm group">

        <div className="flex items-start gap-5 mb-7">
          <div className="w-[60px] h-[60px] flex-shrink-0 rounded-full border border-[#C4CDD6]/25 bg-[#C4CDD6]/5 flex items-center justify-center group-hover:border-[#C4CDD6]/45 transition-colors duration-400">
            <span
              className="text-2xl text-[#C4CDD6]"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              {member.initial}R
            </span>
          </div>
          <div className="pt-1">
            <h3
              className="text-[22px] text-white font-medium mb-1 leading-tight"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              {member.name}
            </h3>
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#C4CDD6]/50">
              {member.title}
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-[#C4CDD6]/15 to-transparent mb-6" />

        <p className="font-sans text-[14px] text-[#C4CDD6]/60 leading-[1.85] mb-8">
          {member.bio}
        </p>

        <div>
          <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#C4CDD6]/35 mb-4">
            {credentialsLabel}
          </p>
          <ul className="space-y-2.5">
            {member.credentials.map((cred, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-[9px] w-1 h-1 rounded-full bg-[#C4CDD6]/40 flex-shrink-0" />
                <span className="font-sans text-[13px] text-[#C4CDD6]/55 leading-snug">{cred}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  const { t } = useTranslation()
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  return (
    <section id="team" className="py-24 lg:py-36 bg-[#0D1B2A]" aria-label="Our Team">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-[#C4CDD6]/40 mb-4">
            {t.team.sectionLabel}
          </p>
          <h2
            className="text-4xl md:text-5xl text-white font-light leading-tight"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            {t.team.headline}
          </h2>
          <div className="w-12 h-px bg-[#C4CDD6]/30 mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {t.team.members.map((member, index) => (
            <TeamCard
              key={index}
              member={member}
              delay={index * 150}
              credentialsLabel={t.team.credentialsLabel}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
