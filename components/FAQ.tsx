'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How much does AutoraLabs cost?',
    answer: 'We offer flexible pricing plans starting from $29/month for small teams. Enterprise plans with custom features are also available. All plans include a 14-day free trial with no credit card required.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Most teams are up and running within 5 minutes. Our intuitive onboarding guides you through connecting your tools, and our support team is available 24/7 if you need assistance.',
  },
  {
    question: 'Can I integrate with my existing tools?',
    answer: 'Absolutely! We integrate with 200+ popular tools including Slack, Salesforce, HubSpot, Zapier, and more. Our open API also allows for custom integrations.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Security is our top priority. We use bank-grade AES-256 encryption, are SOC 2 Type II certified, and comply with GDPR. Your data is never shared or sold to third parties.',
  },
  {
    question: 'What if I need to cancel?',
    answer: 'You can cancel anytime with no questions asked. There are no long-term contracts or cancellation fees. We\'ll even help you export your data if needed.',
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes! All plans include access to our help center and email support. Pro and Enterprise plans include priority support with dedicated account managers and live chat.',
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
            Everything you need to know about AutoraLabs. Can't find your answer? Contact us.
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
