'use client'

import { ArrowRight, Clock, Shield, Zap } from 'lucide-react'

export default function CTAForm() {
  return (
    <section id="cta" className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-500 to-primary-700 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-400/30 rounded-full blur-[80px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-10">
          Join 500+ companies already saving time and scaling faster. Start your free trial today.
        </p>

        {/* Form */}
        <form
          name="landing-leads"
          method="POST"
          data-netlify="true"
          className="max-w-md mx-auto"
        >
          {/* Hidden field for Netlify */}
          <input type="hidden" name="form-name" value="landing-leads" />

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-4 rounded-full bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full transition-all hover:shadow-xl"
            >
              Try for Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>

        {/* Benefit Text */}
        <p className="mt-6 text-primary-100 flex items-center justify-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Save 10+ hours a week — no credit card required</span>
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
  )
}
