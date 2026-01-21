'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How does the process work?',
    answer: 'We start with a deep-dive operational audit to map your manual workflows and identify bottlenecks. We then provide a strategic roadmap before moving into custom development and implementation.',
  },
  {
    question: 'Is there an upfront cost?',
    answer: 'Yes. We charge for the initial audit and strategy phase. This ensures you receive a high-value blueprint and a clear ROI calculation before committing to full-scale automation development.',
  },
  {
    question: 'Which tasks are best for automation?',
    answer: 'We specialize in high-impact back-end tasks such as automated reporting, client onboarding, contract generation, and hands-off invoicing.',
  },
  {
    question: 'How does this help me scale without hiring?',
    answer: 'By replacing manual admin with automated systems, your current team can handle up to 5x more volume, allowing you to grow revenue without increasing your payroll.',
  },
  {
    question: 'Will this work with my existing software?',
    answer: 'Absolutely. We design our solutions to integrate seamlessly with your current tech stack—whether that is your CRM, accounting software, or project management tools.',
  },
  {
    question: 'What kind of ROI can I expect?',
    answer: 'Most clients reclaim 30-50+ hours of manual labor per week and see a minimum 200% ROI within the first year of implementation.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 border border-primary-200 rounded-full text-primary-600 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Learn how our operational audits and strategic automations help you scale without adding headcount.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
