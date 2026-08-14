'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, ArrowUpRight } from 'lucide-react';

const cases = [
  {
    tag: 'Distribuidora & Logística',
    title: 'Automação de Faturamento e Estoque',
    description: 'Integração de ERP legado com portal web de pedidos e agentes de IA de suporte técnico. Redução de 75% no tempo de processamento.',
    status: 'Em Homologação',
    impact: '75% mais rápido',
  },
  {
    tag: 'Fintech & Crédito',
    title: 'Esteira Cognitiva de Análise de Crédito',
    description: 'Agentes inteligentes que analisam extratos bancários e geram relatórios consolidados em segundos, mantendo a privacidade de dados.',
    status: 'Em Implantação',
    impact: '90% menos esforço manual',
  },
];

export default function CasesSection() {
  return (
    <section id="cases" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-primary-blue font-bold tracking-widest text-xs uppercase mb-4 block">Cases de Sucesso</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tight">
              A tecnologia gerando <br />
              <span className="text-gradient">retorno operacional real.</span>
            </h2>
          </div>
          <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
            Desenvolvemos soluções focadas na resolução de gargalos operacionais específicos. Veja alguns dos projetos em andamento e homologação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cases.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background-soft border border-border-subtle rounded-[32px] p-8 flex flex-col justify-between hover:shadow-brand-sm hover:border-primary-blue transition-all group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="px-3 py-1 bg-primary-blue/10 text-primary-blue border border-primary-blue/20 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {project.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-text-secondary font-medium">
                    <Sparkles size={14} className="text-digital-turquoise animate-pulse" />
                    <span>{project.status}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-navy mb-4 tracking-tight group-hover:text-primary-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="pt-6 border-t border-border-subtle/50 flex justify-between items-center">
                <div>
                  <span className="block text-xs text-text-secondary">Impacto Estimado</span>
                  <span className="text-lg font-bold text-navy-secondary">{project.impact}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy group-hover:bg-primary-blue group-hover:text-white transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global placeholder note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-md mx-auto"
        >
          <p className="text-xs text-text-secondary italic">
            * Por questões de confidencialidade e cláusulas contratuais de propriedade intelectual, omitimos os nomes reais dos clientes nestes cases.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
