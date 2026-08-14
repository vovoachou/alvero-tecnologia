'use client';

import React from 'react';
import { motion } from 'motion/react';
import { PlayCircle, MessageSquare, Database, LayoutPanelTop, Terminal } from 'lucide-react';

const demos = [
  {
    icon: MessageSquare,
    title: 'Agente de IA em ação',
    description: 'Veja como nosso agente atende leads qualificados no WhatsApp 24h por dia.',
    visual: 'WhatsApp Demo',
  },
  {
    icon: Database,
    title: 'Automação de dados',
    description: 'Integração real entre planilhas, CRM e sistemas financeiros sem intervenção humana.',
    visual: 'Data Flow',
  },
  {
    icon: LayoutPanelTop,
    title: 'Dashboard Operacional',
    description: 'Controle total da operação com indicadores que atualizam em tempo real.',
    visual: 'Dashboard View',
  },
];

export default function DemoSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6"
          >
            Menos promessa. <br />
            <span className="text-primary-blue">Mais solução funcionando.</span>
          </motion.h2>
          <p className="text-lg text-text-secondary">
            Priorizamos demonstrações reais sobre mockups conceituais. Tecnologia pronta para ser implantada.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {demos.map((demo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-navy p-1"
            >
              <div className="bg-white rounded-[22px] h-full overflow-hidden flex flex-col">
                <div className="aspect-video bg-navy-secondary relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 gradient-institutional opacity-10 group-hover:opacity-20 transition-opacity" />
                  <div className="relative z-10 text-white flex flex-col items-center gap-4">
                     <PlayCircle size={48} className="text-bright-blue cursor-pointer hover:scale-110 transition-transform" />
                     <span className="text-[10px] font-bold tracking-widest uppercase opacity-50">{demo.visual}</span>
                  </div>
                  
                  {/* Decorative tech lines */}
                  <div className="absolute top-4 left-4 flex gap-1">
                     <div className="w-2 h-2 rounded-full bg-red-500/50" />
                     <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                     <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <demo.icon size={20} className="text-primary-blue" />
                    <h3 className="text-xl font-bold text-navy">{demo.title}</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {demo.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
