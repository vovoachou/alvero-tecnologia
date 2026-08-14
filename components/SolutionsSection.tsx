'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Code, BrainCircuit, Zap, LineChart, Rocket } from 'lucide-react';

const solutions = [
  {
    icon: Code,
    title: 'Sistema Sob Medida',
    promise: 'Engenharia de software focada em processos.',
    description: 'Sistemas web robustos projetados para a realidade da sua operação, integrando dados e eliminando gargalos manuais.',
    cta: 'Consultar viabilidade técnica',
    color: 'bg-blue-600',
    slug: 'sistema',
  },
  {
    icon: BrainCircuit,
    title: 'Agentes de IA',
    promise: 'Inteligência cognitiva aplicada ao negócio.',
    description: 'Funcionários digitais treinados para suporte, vendas e análise de dados, operando 24/7 com precisão e escala.',
    cta: 'Conhecer arquitetura de IA',
    color: 'bg-indigo-600',
    slug: 'ia',
  },
  {
    icon: Zap,
    title: 'Automação de Processos',
    promise: 'Eficiência operacional autônoma.',
    description: 'Conectamos seu ecossistema de ferramentas para que tarefas repetitivas sejam executadas de forma invisível e segura.',
    cta: 'Mapear automação',
    color: 'bg-cyan-600',
    slug: 'automacao',
  },
  {
    icon: LineChart,
    title: 'Painel de Indicadores',
    promise: 'Visibilidade estratégica em tempo real.',
    description: 'Dashboards avançados que consolidam KPIs vitais da sua empresa para decisões baseadas em dados, não em suposições.',
    cta: 'Visualizar inteligência',
    color: 'bg-blue-800',
    slug: 'dashboards',
  },
  {
    icon: Rocket,
    title: 'Do Rascunho ao App',
    promise: 'Do conceito ao produto digital.',
    description: 'Desenvolvimento ágil de MVPs e plataformas SaaS escaláveis, com foco em segurança, performance e experiência do usuário.',
    cta: 'Desenvolver projeto',
    color: 'bg-slate-800',
    slug: 'app',
  },
];

export default function SolutionsSection() {
  return (
    <section id="solucoes" className="py-24 bg-background-soft relative overflow-hidden">
      {/* Technological background detail */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#172033 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6"
          >
            Arquitetura tecnológica focada <br />
            <span className="text-primary-blue">em resultados operacionais.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            Cada projeto é desenhado com escopo técnico rigoroso e focado na escalabilidade do seu negócio. Tecnologia que resolve, sem promessas vagas.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[32px] p-8 border border-border-subtle shadow-brand-sm hover:shadow-brand-md transition-all flex flex-col h-full group"
            >
              <div className={`w-14 h-14 rounded-2xl ${solution.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                <solution.icon size={28} />
              </div>

              <h3 className="text-2xl font-bold text-navy mb-2 tracking-tight">{solution.title}</h3>
              <p className="text-primary-blue font-bold text-[10px] mb-4 tracking-[0.1em] uppercase">{solution.promise}</p>
              
              <p className="text-text-secondary leading-relaxed mb-8 flex-grow text-sm">
                {solution.description}
              </p>

              <Link
                href={`/solucoes/${solution.slug}`}
                className="w-full py-4 bg-background-soft hover:bg-primary-blue hover:text-white text-navy rounded-xl font-bold transition-all flex items-center justify-center gap-2 group/btn"
              >
                {solution.cta}
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}

          {/* Featured Combined Solution */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1 rounded-[32px] gradient-institutional p-px shadow-brand-md"
          >
            <div className="bg-navy rounded-[31px] p-8 h-full flex flex-col text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 gradient-institutional opacity-20 blur-3xl" />
              
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 w-fit">
                Full Stack Ops
              </span>
              <h3 className="text-2xl font-bold mb-4">Operação Digital</h3>
              <p className="text-white/70 leading-relaxed mb-10 text-sm">
                Uma infraestrutura completa que une Sistemas, Agentes de IA e Dashboards em um ecossistema único para controle absoluto.
              </p>
              
              <div className="mt-auto">
                <Link
                  href="/diagnostico"
                  className="w-full py-4 bg-white text-navy rounded-xl font-bold transition-all flex items-center justify-center gap-2 hover:bg-bright-blue hover:text-white"
                >
                  Agendar consultoria técnica
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
