import React from 'react';
import { Code, Zap, LineChart, BrainCircuit, Smartphone } from 'lucide-react';

const items = [
  { icon: Code, name: 'Sistemas de gestão', pain: 'Para quem ainda controla tudo em planilhas.' },
  { icon: Zap, name: 'Automação de processos', pain: 'Para a equipe que repete as mesmas tarefas todo dia.' },
  { icon: LineChart, name: 'Painéis de indicadores', pain: 'Para ver seus números sem pedir para ninguém.' },
  { icon: BrainCircuit, name: 'Agentes de IA', pain: 'Para o atendimento que não dá conta da demanda.' },
  { icon: Smartphone, name: 'Aplicativos e plataformas', pain: 'Para tirar do papel uma ideia de produto.' },
];

export default function SolutionsSection() {
  return (
    <section id="o-que-fazemos" className="scroll-mt-20 py-24 bg-background-soft">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-5xl font-bold text-navy text-center mb-14">O que construímos</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl p-6 border border-border-subtle shadow-brand-sm flex items-start gap-4 lg:flex-col lg:items-center lg:text-center sm:last:col-span-2 lg:last:col-span-1"
            >
              <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-primary-blue/10 text-primary-blue flex items-center justify-center">
                <item.icon size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy leading-snug mb-1">{item.name}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.pain}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-text-secondary mt-10">Cada projeto é desenhado para a sua operação.</p>
      </div>
    </section>
  );
}
