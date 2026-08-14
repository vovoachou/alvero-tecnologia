'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, CheckSquare } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excelência Técnica',
    description: 'Não desenvolvemos códigos genéricos. Cada solução é projetada com arquitetura de alta performance e código limpo.',
  },
  {
    icon: Users,
    title: 'Parceria de Verdade',
    description: 'Trabalhamos lado a lado com sua equipe para entender sua operação no nível dos processos, não das ideias abstratas.',
  },
  {
    icon: CheckSquare,
    title: 'Transparência Total',
    description: 'Escopos claros, prazos respeitados e preços públicos. Você no controle absoluto do que está contratando.',
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-background-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-blue font-bold tracking-widest text-xs uppercase mb-4 block">Sobre Nós</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Parceiro tecnológico de crescimento sustentável.
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              A Alvero Tecnologia nasceu com uma missão clara: democratizar o acesso a soluções de software sob medida e inteligência artificial para pequenas e médias empresas. Acreditamos que a tecnologia deve se adaptar ao seu negócio, e não o contrário.
            </p>
            <p className="text-text-secondary text-base leading-relaxed mb-8">
              Nossa equipe une engenharia de software rigorosa a uma compreensão de processos operacionais para eliminar gargalos manuais e dar controle estratégico para os gestores.
            </p>
            
            <div className="grid grid-cols-2 gap-6 border-t border-border-subtle pt-8">
              <div>
                <span className="block text-4xl font-extrabold text-primary-blue mb-1">100%</span>
                <span className="text-xs font-semibold text-navy uppercase tracking-wider">Código Próprio e Seguro</span>
              </div>
              <div>
                <span className="block text-4xl font-extrabold text-digital-turquoise mb-1">24/7</span>
                <span className="text-xs font-semibold text-navy uppercase tracking-wider">Suporte e Evolução</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((val, i) => (
              <div 
                key={i} 
                className="bg-white rounded-[24px] p-6 border border-border-subtle hover:border-primary-blue/30 transition-all flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue flex-shrink-0">
                  <val.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">{val.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
