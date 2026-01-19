import { FileText, Receipt, BarChart3, UserPlus } from 'lucide-react'

const solutions = [
  {
    icon: FileText,
    title: 'Automated Contract Creation',
    description: 'Generate and send error-free legal documents in seconds.',
  },
  {
    icon: Receipt,
    title: 'Hands-Off Invoicing',
    description: 'Automate your entire billing cycle from trigger to payment.',
  },
  {
    icon: BarChart3,
    title: 'Executive Reporting',
    description: 'Real-time dashboards that pull data across your tools automatically.',
  },
  {
    icon: UserPlus,
    title: 'Seamless Onboarding',
    description: 'Standardize and automate every step of bringing on new clients or hires.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 border border-primary-200 rounded-full text-primary-600 text-sm font-medium mb-4">
            Our Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Powerful tools designed to solve your biggest challenges and drive measurable growth.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20">
                  <solution.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
