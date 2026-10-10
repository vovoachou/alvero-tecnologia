'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SolutionsSection from '@/components/SolutionsSection';
import ProcessSection from '@/components/ProcessSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Content Sections */}
      <Hero />
      <SolutionsSection />
      <ProcessSection />
      <DifferentialsSection />
      <FAQSection />
      <CTASection />
      
      <Footer />
    </main>
  );
}
