'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import LocaleSwitcher from './LocaleSwitcher'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('nav')

  const navLinks = [
    { name: t('home'), href: '#' },
    { name: t('results'), href: '#results' },
    { name: t('solutions'), href: '#solutions' },
    { name: t('process'), href: '#process' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="AutoraLabs" 
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation + CTA */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <LocaleSwitcher />
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5"
            >
              {t('cta')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-primary-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors px-2 py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="px-2 py-1">
                <LocaleSwitcher />
              </div>
              <a
                href="#cta"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-full transition-all mt-2"
              >
                {t('cta')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
