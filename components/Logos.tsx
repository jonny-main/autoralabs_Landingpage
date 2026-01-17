export default function Logos() {
  const companies = [
    'Acme Corp',
    'TechFlow',
    'Quantum',
    'Nextera',
    'Synapse',
  ]

  return (
    <section className="relative py-16 lg:py-20 border-t border-b border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-10">
          Trusted by industry leaders
        </p>

        {/* Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              {/* Placeholder Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-200 group-hover:bg-primary-100 flex items-center justify-center transition-colors">
                  <span className="text-lg font-bold text-slate-500 group-hover:text-primary-600 transition-colors">
                    {company.charAt(0)}
                  </span>
                </div>
                <span className="text-lg font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                  {company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
