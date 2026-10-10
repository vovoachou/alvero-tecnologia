'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, KeyRound, Headset } from 'lucide-react';

const diffs = [
  { icon: ShieldCheck, title: 'Sem surpresa no orçamento', description: 'O valor é fechado antes de começar.' },
  { icon: KeyRound, title: 'O sistema é seu', description: 'Código e dados pertencem à sua empresa.' },
  { icon: Headset, title: 'Suporte depois da entrega', description: 'O projeto não fica abandonado.' },
];

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="scroll-mt-20 py-24 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-14">Por que a Alvero</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {diffs.map((diff, i) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-bright-blue">
                <diff.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{diff.title}</h3>
                <p className="text-white/60 leading-relaxed">{diff.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
