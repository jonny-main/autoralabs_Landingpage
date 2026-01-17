import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Operations Director',
    company: 'TechFlow Inc.',
    avatar: 'SC',
    quote: 'We cut our manual workload by 70% in the first month. The ROI was immediate and the team adoption was seamless. Best decision we made this year.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CEO',
    company: 'Nextera Solutions',
    avatar: 'MR',
    quote: 'Finally, a platform that delivers on its promises. Our team saves 15+ hours weekly, and the insights we get have transformed our decision-making.',
  },
  {
    name: 'Emily Watson',
    role: 'Product Manager',
    company: 'Quantum Labs',
    avatar: 'EW',
    quote: 'The integration was painless and support is incredible. Within 72 hours we were up and running. I recommend AutoraLabs to everyone I know.',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 border border-primary-200 rounded-full text-primary-600 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Loved by Teams Everywhere
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-slate-100 transition-all duration-300"
            >
              {/* 5-Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>

                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
