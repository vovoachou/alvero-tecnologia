'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Target, ShieldCheck, Zap, HeartHandshake, History } from 'lucide-react';

const diffs = [
  {
    icon: Target,
    title: 'Escopo Fechado',
    description: 'Entregáveis definidos e aprovados antes do início. Você recebe exatamente o que foi contratado.',
  },
  {
    icon: ShieldCheck,
    title: 'Investimento Estratégico',
    description: 'Soluções desenhadas para o retorno sobre o investimento, com clareza sobre custos e benefícios.',
  },
  {
    icon: Zap,
    title: 'Agilidade Operacional',
    description: 'Desenvolvimento em ciclos curtos e iterativos para colocar tecnologia rodando o quanto antes.',
  },
  {
    icon: HeartHandshake,
    title: 'Garantia e Propriedade',
    description: 'Contratos formais que garantem a propriedade intelectual e o suporte necessário após a implantação.',
  },
  {
    icon: History,
    title: 'Suporte de Longo Prazo',
    description: 'Hospedagem, manutenção e evolução contínua para que a tecnologia cresça com seu negócio.',
  },
];

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-24 bg-navy text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-navy-secondary)_0%,_transparent_100%)] opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Tecnologia sem incertezas, <br />
            <span className="text-bright-blue">focada em execução.</span>
          </motion.h2>
          <div className="w-20 h-1 gradient-institutional rounded-full mb-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {diffs.map((diff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-bright-blue shadow-lg">
                <diff.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{diff.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {diff.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-institutional opacity-[0.03]" />
          <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left relative z-10">
            Você sabe exatamente o que está <br className="hidden lg:block" /> construindo e para onde seu negócio vai.
          </h3>
          <div className="px-8 py-4 bg-primary-blue rounded-xl font-bold text-white shadow-xl relative z-10">
            Diagnóstico Estratégico
          </div>
        </motion.div>
      </div>
    </section>
  );
}
