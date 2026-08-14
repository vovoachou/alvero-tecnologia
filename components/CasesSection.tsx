'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Hourglass, ArrowUpRight } from 'lucide-react';

const incomingProjects = [
  {
    area: 'Sistemas Sob Medida',
    focus: 'ERP Operacional & Banco de Dados',
    description: 'Centralização de processos que hoje rodam em planilhas desconectadas para um painel web integrado e multiusuário.',
  },
  {
    area: 'Agentes de IA',
    focus: 'Suporte & Triagem de Leads',
    description: 'Funcionários digitais conectados via API oficial do WhatsApp Business para pré-qualificar contatos comerciais.',
  },
  {
    area: 'Automação de Processos',
    focus: 'Integrações & Sincronização',
    description: 'Conexão autônoma entre plataformas financeiras e CRMs para faturamento rápido e eliminação de digitação manual.',
  },
];

export default function CasesSection() {
  return (
    <section id="cases" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-blue/5 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary-blue/10 text-primary-blue rounded-full text-xs font-bold uppercase tracking-wider mb-6"
          >
            Nossa Trajetória
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-navy mb-6 tracking-tight"
          >
            Cases de Sucesso
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            A Alvero Tecnologia preza pela transparência absoluta. Nossos primeiros sistemas, agentes de IA e automações personalizadas estão atualmente em fase de desenvolvimento e homologação prática. Assim que os resultados operacionais forem consolidados em produção, publicaremos os estudos de caso detalhados aqui.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {incomingProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background-soft border border-border-subtle rounded-[32px] p-8 flex flex-col justify-between hover:shadow-brand-sm hover:border-primary-blue/30 transition-all group relative overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="px-3 py-1 bg-white border border-border-subtle rounded-full text-[10px] font-bold uppercase tracking-wider text-text-secondary">
                    {project.area}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-primary-blue font-semibold">
                    <Hourglass size={14} className="animate-spin text-bright-blue" style={{ animationDuration: '4s' }} />
                    <span>Em Andamento</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-navy mb-4 tracking-tight group-hover:text-primary-blue transition-colors">
                  {project.focus}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="pt-6 border-t border-border-subtle/50 mt-8 flex items-center justify-between">
                <span className="text-[10px] text-text-secondary uppercase font-bold tracking-wider">Etapa: Desenvolvimento</span>
                <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center text-navy/40 group-hover:bg-primary-blue group-hover:text-white transition-all">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
