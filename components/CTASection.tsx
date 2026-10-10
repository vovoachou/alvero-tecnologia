'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
              className="text-3xl md:text-5xl font-bold mb-10"
            >
              Vamos conversar sobre a sua empresa?
            </motion.h2>
            

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
                Agendar diagnóstico gratuito
                <ArrowRight size={24} />
              </Link>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
