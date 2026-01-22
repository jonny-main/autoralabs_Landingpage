'use client'

import { Search, Map, Cog, LucideIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

const stepIcons: LucideIcon[] = [Search, Map, Cog]

export default function Process() {
  const t = useTranslations('process')

  return (
    <section id="process" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 border border-primary-200 rounded-full text-primary-600 text-sm font-medium mb-4">
            {t('badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {stepIcons.map((Icon, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white text-xl font-bold mb-6 shadow-lg shadow-primary-500/30 relative z-10">
                  {t(`steps.${index}.number`)}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 border border-primary-100 mb-6">
                  <Icon className="w-8 h-8 text-primary-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {t(`steps.${index}.title`)}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                  {t(`steps.${index}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
