'use client'

import { useState } from 'react'
import { ArrowRight, Clock, Shield, Zap, X, CheckCircle } from 'lucide-react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function CTAForm() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [phone, setPhone] = useState<string>('')
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    company_website: '',
    email: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'audit-request',
          ...formData,
          phone: phone || '',
        }).toString(),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          first_name: '',
          last_name: '',
          company_website: '',
          email: '',
        })
        setPhone('')
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsSubmitted(false)
  }

  return (
    <>
      <section id="cta" className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-500 to-primary-700 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-400/30 rounded-full blur-[80px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Find Your Hidden Efficiency?
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-10">
            Stop losing hundreds of hours to repetitive tasks. Let us audit your operations and build your roadmap to a scalable future.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full transition-all hover:shadow-xl"
          >
            Claim Your Operational Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Benefit Text */}
          <p className="mt-6 text-primary-100 flex items-center justify-center gap-2">
            <span>Stop hiring for admin. Start scaling with systems.</span>
          </p>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-primary-100">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Bank-grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="text-sm">Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              /* Success Message */
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-slate-600 mb-6">
                  We've received your request. Our team will reach out shortly to schedule your operational audit.
                </p>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              /* Form */
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Claim Your Operational Audit
                </h3>
                <p className="text-slate-600 mb-6">
                  Fill in your details and we'll get in touch to schedule your free audit.
                </p>

                <form
                  name="audit-request"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Hidden fields for Netlify */}
                  <input type="hidden" name="form-name" value="audit-request" />
                  <input type="hidden" name="bot-field" />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={phone}
                    onChange={(value) => setPhone(value || '')}
                    className="phone-input-container"
                  />
                  <input
                    type="url"
                    name="company_website"
                    value={formData.company_website}
                    onChange={handleChange}
                    placeholder="Company Website"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-400 text-white font-semibold rounded-full transition-all"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                    {!isSubmitting && (
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        .phone-input-container {
          display: flex;
          gap: 0.5rem;
        }
        .phone-input-container .PhoneInputCountry {
          padding: 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          background: white;
        }
        .phone-input-container .PhoneInputInput {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          font-size: 1rem;
          color: #0f172a;
        }
        .phone-input-container .PhoneInputInput:focus {
          outline: none;
          ring: 2px;
          ring-color: #3b82f6;
          border-color: transparent;
        }
        .phone-input-container .PhoneInputInput::placeholder {
          color: #94a3b8;
        }
      `}</style>
    </>
  )
}
