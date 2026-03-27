'use client';

import { STEPS } from '@/lib/constants';
import Container from '../Container';

/**
 * HowWeWork Section
 * A clean horizontal process flow with 4 connected steps.
 */
export default function HowWeWork() {
  return (
    <section className="section-padding pb-20 md:pb-32 bg-white dark:bg-transparent relative overflow-hidden">
      <div
        aria-hidden="true"
        className="hidden dark:block absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, transparent, rgba(13, 148, 136, 0.10), transparent)',
        }}
      />
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 animate-fade-up">
          <h2 className="mb-6 text-slate-900 dark:text-white">How We Work</h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            A simple, transparent process that delivers results for your business.
          </p>
        </div>

        {/* Timeline Flow Container */}
        <div className="relative mt-8 md:mt-16">
          {/* Continuous Connection Line - Only Desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-16 md:top-20 left-0 right-0 h-[1px] bg-teal-500/40 opacity-40 z-0 shadow-[0_0_25px_rgba(20,184,166,0.25)]"
          />

          {/* Grid for Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {STEPS.map((step, index) => (
              <div
                key={index}
                className="relative pt-16 md:pt-20 flex flex-col items-center group transition-all duration-300"
              >
                {/* Step Circle - Centered on the Line (Desktop) */}
                <div 
                  className="hidden md:flex absolute top-10 md:top-14 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-teal-500 text-white items-center justify-center text-xl font-bold z-20 ring-4 ring-white dark:ring-black shadow-[0_0_25px_rgba(20,184,166,0.25)] group-hover:scale-110 group-hover:bg-teal-600 transition-all duration-300 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:w-[2px] after:h-6 after:bg-teal-400/40 after:transition-colors group-hover:after:bg-teal-400/70"
                >
                  {index + 1}
                </div>

                {/* Card - Sits below the line */}
                <div
                  className="kerna-card mt-12 md:mt-16 w-full p-8 text-center animate-fade-up h-full flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl hover:border-teal-400/40 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Mobile Step Circle - Only Visible on Mobile */}
                  <div className="md:hidden w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-bold mb-6 ring-4 ring-white dark:ring-black shadow-md dark:shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                    {index + 1}
                  </div>

                  <h3 className="mb-4 text-sm font-bold tracking-wide text-teal-600 dark:text-teal-400">
                    {step.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
