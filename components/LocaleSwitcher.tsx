'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { locales, type Locale } from '@/i18n/config'

const localeLabels: Record<Locale, string> = {
  en: 'EN',
  pt: 'PT',
}

export default function LocaleSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  // Get the other locale (the one we can switch to)
  const otherLocale = locales.find((l) => l !== locale) as Locale

  const handleSwitch = () => {
    router.replace(pathname, { locale: otherLocale })
  }

  return (
    <button
      onClick={handleSwitch}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-primary-600 border border-slate-200 hover:border-primary-300 rounded-full transition-all"
      aria-label={`Switch to ${otherLocale === 'en' ? 'English' : 'Portuguese'}`}
    >
      <span className="text-xs text-slate-400">{localeLabels[locale]}</span>
      <span className="text-slate-300">/</span>
      <span className="font-semibold">{localeLabels[otherLocale]}</span>
    </button>
  )
}
