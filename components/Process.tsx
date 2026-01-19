import { Search, Map, Cog } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: Search,
    title: 'Deep-Dive Operational Audit',
    description: 'We identify exactly where manual tasks are draining your time and profit.',
  },
  {
    number: '2',
    icon: Map,
    title: 'Strategic Automation Roadmap',
    description: 'Receive a custom blueprint of what to automate first and the expected ROI.',
  },
  {
    number: '3',
    icon: Cog,
    title: 'Full-Scale Implementation',
    description: 'We build the custom systems that transform your back-end into a hands-off machine.',
  },
]

export default function Process() {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 border border-primary-200 rounded-full text-primary-600 text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Your Path to Operational Freedom
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A proven process that starts with understanding your business and ends with fully automated systems.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white text-xl font-bold mb-6 shadow-lg shadow-primary-500/30 relative z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 border border-primary-100 mb-6">
                  <step.icon className="w-8 h-8 text-primary-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
