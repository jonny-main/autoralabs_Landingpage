import { TrendingUp, Users, Clock } from 'lucide-react'

const metrics = [
  {
    icon: TrendingUp,
    value: '4.2x',
    label: 'Average ROI',
    description: 'Return on investment within first year',
  },
  {
    icon: Users,
    value: '10K+',
    label: 'Active Users',
    description: 'Professionals trust our platform daily',
  },
  {
    icon: Clock,
    value: '30-50+ Hours',
    label: 'Total Man-Hours Reclaimed:',
    description: 'Manual tasks that can be fully automated',
  },
]

export default function Metrics() {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-200 rounded-2xl hover:border-primary-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-100"
            >
              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center mb-5 shadow-lg shadow-primary-500/20">
                  <metric.icon className="w-6 h-6 text-white" />
                </div>

                {/* Value */}
                <div className="text-4xl lg:text-5xl font-extrabold text-primary-600 mb-2 tracking-tight">
                  {metric.value}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-slate-800 mb-2">
                  {metric.label}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
