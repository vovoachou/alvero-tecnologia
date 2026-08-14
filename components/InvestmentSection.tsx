'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Code, BrainCircuit, Zap, LineChart, Rocket, HelpCircle } from 'lucide-react';

const investments = [
  {
    icon: Code,
    title: 'Sistema Sob Medida',
    range: 'R$ 8.000 a R$ 25.000',
    description: 'Sistemas web de alta performance integrados aos seus bancos de dados e sistemas legados.',
    color: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    icon: BrainCircuit,
    title: 'Agentes de IA',
    range: 'R$ 3.500 a R$ 10.000',
    description: 'Funcionários digitais com LLMs customizados integrados ao WhatsApp, e-mail ou sistemas internos.',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
  },
  {
    icon: Zap,
    title: 'Automação de Processos',
    range: 'R$ 2.500 a R$ 7.000',
    description: 'Integração de ferramentas (APIs, webhooks, planilhas) para automatizar fluxos repetitivos.',
    color: 'text-cyan-600 bg-cyan-50 border-cyan-100',
  },
  {
    icon: LineChart,
    title: 'Painel de Indicadores',
    range: 'R$ 4.000 a R$ 12.000',
    description: 'Dashboards dinâmicos para visualização de dados operacionais e financeiros em tempo real.',
    color: 'text-teal-600 bg-teal-50 border-teal-100',
  },
  {
    icon: Rocket,
    title: 'Do Rascunho ao App',
    range: 'R$ 12.000 a R$ 35.000',
    description: 'Desenvolvimento completo de novos produtos digitais (MVPs, plataformas SaaS) focados no mercado.',
    color: 'text-slate-700 bg-slate-100 border-slate-200',
  },
];

export default function InvestmentSection() {
  return (
    <section id="investimento" className="py-24 bg-white relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-digital-turquoise/5 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary-blue/10 text-primary-blue rounded-full text-xs font-bold uppercase tracking-wider mb-6"
          >
            Preço Público e Transparente
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-navy mb-6 tracking-tight"
          >
            Faixas de Investimento
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            Diferente da maioria do mercado, mostramos a faixa de investimento aqui. Você chega na conversa já sabendo se cabe no seu orçamento — sem enrolação.
          </motion.p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {investments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background-soft border border-border-subtle rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-primary-blue hover:shadow-brand-sm transition-all group"
            >
              <div className="flex items-center gap-5 flex-1">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center flex-shrink-0 ${item.color} shadow-sm group-hover:scale-105 transition-transform`}>
                  <item.icon size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-1 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-text-secondary max-w-md leading-relaxed">{item.description}</p>
                </div>
              </div>
              
              <div className="flex flex-col md:items-end justify-center w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0 border-border-subtle/50">
                <span className="text-xs text-text-secondary font-medium mb-1">Faixa de Investimento</span>
                <span className="text-2xl font-bold text-navy-secondary group-hover:text-primary-blue transition-colors whitespace-nowrap mb-3 md:mb-1">
                  {item.range}
                </span>
                <span className="text-[10px] text-text-secondary leading-none">Varia de acordo com a complexidade técnica</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-navy text-white rounded-[32px] p-8 md:p-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 gradient-institutional opacity-10 blur-3xl pointer-events-none" />
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-digital-turquoise flex-shrink-0 mt-1">
              <HelpCircle size={20} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Como definimos o valor final?</h4>
              <p className="text-white/60 text-sm max-w-xl leading-relaxed">
                As faixas acima servem como uma referência de mercado. O orçamento exato do seu projeto é calculado após nosso diagnóstico técnico gratuito, onde analisamos seus processos e requisitos operacionais.
              </p>
            </div>
          </div>
          <Link
            href="/diagnostico"
            className="px-6 py-4 bg-white text-navy hover:bg-bright-blue hover:text-white rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-2 group/btn"
          >
            Agendar Diagnóstico
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
