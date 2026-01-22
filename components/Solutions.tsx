import { FileText, Receipt, BarChart3, UserPlus } from 'lucide-react'

const solutions = [
  {
    icon: FileText,
    title: 'Criação Automática de Contratos',
    description: 'Gere e envie documentos legais sem erros em segundos.',
  },
  {
    icon: Receipt,
    title: 'Faturação Automatizada',
    description: 'Automatize todo o seu ciclo de faturação, do início ao pagamento.',
  },
  {
    icon: BarChart3,
    title: 'Relatórios Executivos',
    description: 'Dashboards em tempo real que recolhem dados de todas as suas ferramentas automaticamente.',
  },
  {
    icon: UserPlus,
    title: 'Onboarding Simplificado',
    description: 'Padronize e automatize cada etapa da integração de novos clientes ou colaboradores.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 border border-primary-200 rounded-full text-primary-600 text-sm font-medium mb-4">
            As Nossas Soluções
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Tudo o Que Precisa para Ter Sucesso
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ferramentas poderosas concebidas para resolver os seus maiores desafios e impulsionar um crescimento mensurável.
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
