'use client'

import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTranslation } from '../contexts/LanguageContext'

interface FormData {
  firstName: string
  lastName: string
  email: string
  interest: string
  message: string
}

export default function Contact() {
  const { t } = useTranslation()
  const c = t.contact

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const { ref: formRef, isVisible: formVisible } = useScrollReveal()
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal()

  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', interest: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputBase =
    'w-full bg-transparent border border-[#C4CDD6]/20 text-white placeholder-[#C4CDD6]/30 font-sans text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#C4CDD6]/55 focus:ring-1 focus:ring-[#C4CDD6]/25 transition-all duration-200'
  const labelBase =
    'block font-sans text-[11px] tracking-[0.22em] uppercase text-[#C4CDD6]/45 mb-2'

  return (
    <section id="contact" className="py-24 lg:py-36 bg-[#0D1B2A]" aria-label="Contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-[#C4CDD6]/40 mb-4">
            {c.sectionLabel}
          </p>
          <h2
            className="text-4xl md:text-5xl text-white font-light leading-tight"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            {c.headline}
          </h2>
          <div className="w-12 h-px bg-[#C4CDD6]/30 mt-6" />
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">

          {/* Contact info */}
          <div
            ref={infoRef}
            className={`transition-all duration-700 ease-out ${infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="font-sans text-[15px] text-[#C4CDD6]/65 leading-[1.85] mb-10">
              {c.intro}
            </p>

            <div className="space-y-8">
              <div>
                <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#C4CDD6]/35 mb-3">
                  {c.officeLabels.primary}
                </div>
                <div className="font-sans text-[14px] text-[#C4CDD6]/70 leading-loose">
                  <div className="text-white font-medium mb-1">{c.offices.primaryName}</div>
                  {c.offices.primaryAddress.split('\n').map((line, i) => (
                    <span key={i}>{line}{i === 0 ? <br /> : null}</span>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#C4CDD6]/35 mb-3">
                  {c.officeLabels.us}
                </div>
                <div className="font-sans text-[14px] text-[#C4CDD6]/70 leading-loose">
                  <div className="text-white font-medium mb-1">{c.offices.usName}</div>
                  {c.offices.usAddress.split('\n').map((line, i) => (
                    <span key={i}>{line}{i === 0 ? <br /> : null}</span>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#C4CDD6]/35 mb-3">
                  {c.officeLabels.inquiries}
                </div>
                <a
                  href={`mailto:${c.offices.email}`}
                  className="font-sans text-[14px] text-[#C4CDD6]/70 hover:text-[#C4CDD6] transition-colors duration-200 underline underline-offset-4 decoration-[#C4CDD6]/25"
                >
                  {c.offices.email}
                </a>
              </div>
            </div>

            <div className="w-full h-px bg-[#C4CDD6]/10 my-10" />

            <p className="font-sans text-[12px] text-[#C4CDD6]/30 leading-relaxed">
              {c.disclaimer}
            </p>
          </div>

          {/* Form */}
          <div
            ref={formRef}
            className={`transition-all duration-700 ease-out delay-150 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-[#C4CDD6]/15 rounded-sm px-8">
                <div className="w-14 h-14 rounded-full border border-[#C4CDD6]/30 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#C4CDD6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  className="text-2xl text-white font-light mb-3"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                  {c.success.headline}
                </h3>
                <p className="font-sans text-[14px] text-[#C4CDD6]/55 leading-relaxed max-w-sm">
                  {c.success.body}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className={labelBase}>{c.form.firstName}</label>
                    <input id="firstName" name="firstName" type="text" autoComplete="given-name" required value={formData.firstName} onChange={handleChange} placeholder={c.form.firstNamePlaceholder} className={inputBase} />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelBase}>{c.form.lastName}</label>
                    <input id="lastName" name="lastName" type="text" autoComplete="family-name" required value={formData.lastName} onChange={handleChange} placeholder={c.form.lastNamePlaceholder} className={inputBase} />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelBase}>{c.form.email}</label>
                  <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} placeholder={c.form.emailPlaceholder} className={inputBase} />
                </div>

                <div>
                  <label htmlFor="interest" className={labelBase}>{c.form.interest}</label>
                  <div className="relative">
                    <select id="interest" name="interest" required value={formData.interest} onChange={handleChange} className={`${inputBase} appearance-none cursor-pointer pr-10`} style={{ colorScheme: 'dark' }}>
                      {c.form.interestOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} style={{ background: '#0D1B2A' }}>{opt.label}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" aria-hidden="true">
                      <svg className="w-4 h-4 text-[#C4CDD6]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelBase}>{c.form.message}</label>
                  <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange} placeholder={c.form.messagePlaceholder} className={`${inputBase} resize-none`} />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full font-sans text-[13px] font-medium tracking-[0.1em] uppercase px-8 py-4 bg-[#C4CDD6] text-[#0D1B2A] hover:bg-[#D8DDE3] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-250 rounded-sm flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      {c.form.submitting}
                    </>
                  ) : c.form.submit}
                </button>

                <p className="font-sans text-[11px] text-[#C4CDD6]/30 text-center leading-relaxed">
                  {c.form.privacyNote}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
