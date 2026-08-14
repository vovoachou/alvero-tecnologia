'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionsSection from '@/components/SolutionsSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import ProcessSection from '@/components/ProcessSection';
import AboutSection from '@/components/AboutSection';
import CasesSection from '@/components/CasesSection';
import DemoSection from '@/components/DemoSection';
import InvestmentSection from '@/components/InvestmentSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Content Sections */}
      <Hero />
      <ProblemSection />
      <SolutionsSection />
      <ProcessSection />
      <DifferentialsSection />
      <AboutSection />
      <CasesSection />
      <DemoSection />
      <InvestmentSection />
      <FAQSection />
      <CTASection />
      
      <Footer />
    </main>
  );
}
