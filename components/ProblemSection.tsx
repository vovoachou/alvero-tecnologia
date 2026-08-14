'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Share2, Repeat, MessageSquare, BarChart3 } from 'lucide-react';

const pains = [
  {
    icon: Share2,
    title: 'Informações espalhadas',
    description: 'Dados importantes ficam divididos entre planilhas, sistemas e conversas.',
  },
  {
    icon: Repeat,
    title: 'Trabalho repetitivo',
    description: 'A equipe perde tempo copiando dados, atualizando controles e montando relatórios.',
  },
  {
    icon: MessageSquare,
    title: 'Atendimento lento',
    description: 'Leads e clientes aguardam respostas enquanto a equipe tenta acompanhar a demanda.',
  },
  {
    icon: BarChart3,
    title: 'Decisão no escuro',
    description: 'O gestor não consegue enxergar os números da empresa em tempo real.',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6"
          >
            Sua empresa cresceu. <br className="hidden md:block" />
            <span className="text-primary-blue">Os processos ficaram para trás?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            Muitas empresas continuam operando com informações espalhadas, planilhas, mensagens e tarefas manuais. Isso gera retrabalho, demora, falta de controle e dependência de pessoas específicas.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-background-soft border border-border-subtle hover:border-primary-blue/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-brand-sm group-hover:scale-110 transition-transform">
                <pain.icon size={24} className="text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">{pain.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {pain.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-navy text-white text-center"
        >
          <blockquote className="text-xl md:text-2xl font-medium italic">
            &quot;A Alvero transforma esses gargalos em soluções digitais simples, conectadas e mensuráveis.&quot;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
