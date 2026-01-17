import { X, Check } from 'lucide-react'

const oldWayItems = [
  'Manual processes that waste hours every week',
  'Scattered tools that don\'t communicate',
  'Delayed insights lead to missed opportunities',
  'High overhead costs eating into margins',
  'Inconsistent results you can\'t rely on',
]

const newWayItems = [
  'Automated workflows save 15+ hours weekly',
  'Unified platform with seamless data flow',
  'Real-time analytics for instant decisions',
  'Reduced costs by up to 60%',
  'Predictable, measurable outcomes every time',
]

export default function Comparison() {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            There's a Better Way
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how our approach transforms the traditional challenges into competitive advantages.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Old Way Card */}
          <div className="relative p-8 bg-red-50 border border-red-200 rounded-2xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-red-500 rounded-t-2xl" />
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-red-600">The Old Way</h3>
            </div>

            <ul className="space-y-4">
              {oldWayItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* New Way Card */}
          <div className="relative p-8 bg-emerald-50 border border-emerald-200 rounded-2xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-t-2xl" />
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-emerald-600">The New Way</h3>
            </div>

            <ul className="space-y-4">
              {newWayItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
