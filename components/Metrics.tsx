'use client'

import { TrendingUp, Users, Clock, LucideIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

const metricIcons: LucideIcon[] = [Clock, Users, TrendingUp]

export default function Metrics() {
  const t = useTranslations('metrics')

  return (
    <section id="results" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {metricIcons.map((Icon, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-200 rounded-2xl hover:border-primary-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-100"
            >
              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center mb-5 shadow-lg shadow-primary-500/20">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Value */}
                <div className="text-4xl lg:text-5xl font-extrabold text-primary-600 mb-2 tracking-tight">
                  {t(`items.${index}.value`)}
                </div>

                {/* Label */}
                <div className="text-base font-medium text-slate-600 leading-relaxed">
                  {t(`items.${index}.label`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
