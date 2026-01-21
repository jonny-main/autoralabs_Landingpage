import { Target, TrendingUp, Shield } from 'lucide-react'

const benefits = [
  {
    icon: Target,
    title: 'Audit-Driven Strategy',
    description: "We don't just plug in tools; we perform a deep-dive diagnostic of your workflows to find exactly where you're losing money.",
  },
  {
    icon: TrendingUp,
    title: 'Capacity Expansion',
    description: 'Turn weeks of manual reporting, invoicing, and onboarding into seconds of automated precision.',
  },
  {
    icon: Shield,
    title: 'Operational Excellence',
    description: 'Eliminate the human error that leads to expensive mistakes in contracts and backend data management.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-primary-50/30 to-white">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 border border-primary-200 rounded-full text-primary-600 text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Strategy First, Tools Second
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We focus on understanding your business before implementing solutions.
          </p>
        </div>

        {/* Benefits Row */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              {/* Geometric Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-slate-200 mb-6 group-hover:border-primary-300 group-hover:shadow-lg group-hover:shadow-primary-100 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary-500" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
