'use client';

import Button from '../Button';
import Container from '../Container';

export default function Hero() {
  return (
    <section className="relative pt-[120px] pb-24 md:pt-[160px] md:pb-32 overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#eef6f5] dark:from-dark-bg dark:to-dark-bg border-b border-gray-200 dark:border-white/5">
      {/* SaaS Premium Glow (Light) / Teal Blob (Dark) */}
      <div className="hidden dark:block">
        <div aria-hidden="true" className="blob-1 absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-teal-500/5 blur-3xl transition-all duration-1000" />
        <div aria-hidden="true" className="blob-2 absolute -bottom-24 -right-20 w-[380px] h-[380px] rounded-full bg-teal-500/5 blur-3xl transition-all duration-1000" />
      </div>
      
      {/* Light Mode Specific Glow - SaaS Feel */}
      <div className="dark:hidden">
        <div aria-hidden="true" className="hero-glow top-0 left-0 animate-pulse duration-[4s]" />
        <div aria-hidden="true" className="hero-glow bottom-0 right-0 opacity-50 animate-pulse duration-[6s]" />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-20 mx-auto h-40 max-w-2xl bg-gradient-to-r from-teal-500/10 via-transparent to-transparent blur-3xl"
          />
          <span className="section-eyebrow animate-fade-up uppercase tracking-[0.3em] font-bold text-teal-600 mb-6 block">
            PR &amp; Marketing Agency
          </span>

          <h1 className="relative mb-8 animate-fade-up delay-100 text-text-primary dark:text-white">
             Where Strategy <br className="hidden md:block" />
            <span className="text-teal-500 italic font-medium">Meets Spark.</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary dark:text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-up delay-150">
            We help small businesses grow with smart strategy, bold design, and marketing that actually works.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center animate-fade-up delay-300">
            <Button
              href="/contact"
              variant="primary"
              className="hover:scale-105 transition-all duration-300"
            >
              Work With Kerna
            </Button>
            <Button
              variant="secondary"
              href="/careers"
              className="hover:scale-105 transition-all duration-300"
            >
              Join as an Intern
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
