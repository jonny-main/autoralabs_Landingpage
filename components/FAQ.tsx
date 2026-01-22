'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Como funciona o processo?',
    answer: 'Começamos com uma auditoria operacional aprofundada para mapear os seus fluxos de trabalho manuais e identificar estrangulamentos. De seguida, fornecemos um roteiro estratégico antes de avançar para o desenvolvimento e implementação personalizados.',
  },
  {
    question: 'Existe um custo inicial?',
    answer: 'Sim. Cobramos pela fase inicial de auditoria e estratégia. Isto garante que recebe um plano de alto valor e um cálculo claro do ROI antes de se comprometer com o desenvolvimento de automação em larga escala.',
  },
  {
    question: 'Quais tarefas são melhores para automação?',
    answer: 'Especializamo-nos em tarefas de alto impacto, como relatórios automatizados, onboarding de clientes, geração de contratos e faturação automatizada.',
  },
  {
    question: 'Como é que isto me ajuda a escalar sem contratar?',
    answer: 'Ao substituir a administração manual por sistemas automatizados, a sua equipa atual pode lidar com até 5x mais volume, permitindo-lhe aumentar as receitas sem aumentar a folha de pagamentos.',
  },
  {
    question: 'Isto funciona com o meu software atual?',
    answer: 'Absolutamente. Desenhamos as nossas soluções para se integrarem perfeitamente com a sua stack tecnológica atual — seja o seu CRM, software de contabilidade ou ferramentas de gestão de projetos.',
  },
  {
    question: 'Que tipo de ROI posso esperar?',
    answer: 'A maioria dos clientes recupera 30-50+ horas de trabalho manual por semana e vê um ROI mínimo de 200% no primeiro ano de implementação.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 border border-primary-200 rounded-full text-primary-600 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Saiba como as nossas auditorias operacionais e automações estratégicas o ajudam a escalar sem aumentar a equipa.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
