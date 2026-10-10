import React from 'react';

const steps = [
  { title: 'Diagnóstico gratuito', description: 'Entendemos o seu negócio e o que precisa ser resolvido.' },
  { title: 'Proposta fechada', description: 'Escopo, prazo e valor definidos em contrato.' },
  { title: 'Desenvolvimento e entrega', description: 'Você acompanha cada etapa e tem suporte depois da entrega.' },
];

export default function ProcessSection() {
  return (
    <section id="como-funciona" className="scroll-mt-20 py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-5xl font-bold text-navy text-center mb-14">Como funciona</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="p-8 rounded-3xl bg-background-soft border border-border-subtle"
            >
              <div className="w-12 h-12 rounded-full bg-primary-blue text-white font-bold text-xl flex items-center justify-center mb-6">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
