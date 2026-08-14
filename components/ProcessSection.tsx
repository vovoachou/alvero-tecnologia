'use client';

import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    title: 'Diagnóstico',
    description: 'Análise técnica profunda para entender o processo, os gargalos e o objetivo estratégico.',
  },
  {
    title: 'Mapeamento',
    description: 'Definição da arquitetura, fluxos de dados, integrações e KPIs de sucesso do projeto.',
  },
  {
    title: 'Plano de Execução',
    description: 'Apresentação da solução proposta, viabilidade técnica e entregáveis mapeados.',
  },
  {
    title: 'Desenvolvimento',
    description: 'Engenharia em ciclos iterativos, com validações constantes e transparência total.',
  },
  {
    title: 'Deployment',
    description: 'Testes de estresse, treinamento da operação e entrada em produção assistida.',
  },
  {
    title: 'Escalabilidade',
    description: 'Suporte especializado, monitoramento e evolução contínua da tecnologia.',
  },
];

export default function ProcessSection() {
  return (
    <section id="como-funciona" className="py-24 bg-white overflow-hidden relative">
      {/* Subtle tech background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6"
          >
            Engenharia aplicada, <br />
            <span className="text-primary-blue">passo a passo.</span>
          </motion.h2>
          <p className="text-lg text-text-secondary">
            Nossa metodologia garante que cada linha de código contribua diretamente para a eficiência da sua operação.
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-0 left-8 md:left-1/2 bottom-0 w-px bg-border-subtle -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 w-full md:px-12 text-center md:text-left">
                  <div className={`p-8 rounded-[32px] bg-background-soft border border-border-subtle hover:border-primary-blue/30 transition-colors ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    <span className="text-primary-blue font-bold text-sm uppercase tracking-widest mb-2 block">Passo 0{i + 1}</span>
                    <h3 className="text-2xl font-bold text-navy mb-4">{step.title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-background-soft shadow-brand-md text-primary-blue font-bold text-xl">
                  {i + 1}
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
