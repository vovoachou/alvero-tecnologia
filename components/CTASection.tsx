'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-background-soft">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[48px] overflow-hidden bg-navy-gradient p-12 md:p-20 text-white text-center shadow-brand-dark"
        >
          {/* Decorative bits */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
             <div className="absolute top-0 left-0 w-64 h-64 bg-bright-blue/30 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-digital-turquoise/20 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8"
            >
              Descubra qual solução faz sentido para sua operação.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed"
            >
              Em um diagnóstico técnico especializado, mapeamos o principal gargalo da sua empresa e projetamos caminhos para gerar controle absoluto, produtividade e escalabilidade.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-8"
            >
              <Link
                href="/diagnostico"
                className="px-12 py-5 bg-primary-blue hover:bg-bright-blue text-white rounded-2xl font-bold text-xl transition-all shadow-xl hover:scale-105 flex items-center gap-3"
              >
                Agendar diagnóstico estratégico
                <ArrowRight size={24} />
              </Link>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50 font-medium">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-digital-turquoise" />
                  Sem compromisso
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-digital-turquoise" />
                  Conversa direta
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-digital-turquoise" />
                  Análise inicial
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-digital-turquoise" />
                  Orientação técnica
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
