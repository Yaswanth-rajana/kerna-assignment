'use client';

import { DollarSign, MapPin, Sparkles, Target, Wrench } from 'lucide-react';
import { REASONS } from '@/lib/constants';
import Container from '../Container';

const ICONS = [Target, Sparkles, Wrench, DollarSign, MapPin];

export default function WhyChoose() {
  return (
    <section className="section-padding bg-section-bg dark:bg-dark-bg border-y border-gray-200 dark:border-white/5 overflow-hidden relative">
      <div
        aria-hidden="true"
        className="hidden dark:block absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at top, rgba(20, 184, 166, 0.08), transparent 60%)',
        }}
      />
       {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="mb-4">Why Choose Kerna</h2>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REASONS.slice(0, 3).map((reason, index) => (
              <div
                key={index}
                className={`kerna-card group p-8 flex flex-col justify-between h-full animate-fade-up hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-400/40 transition-all duration-300 ease-out ${
                  index === 0 ? 'border-2 border-teal-400/40 shadow-lg lg:scale-[1.02]' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-teal-400/10 dark:from-teal-500/20 dark:to-teal-400/10 rounded-xl flex items-center justify-center mb-5 text-teal-600 border border-teal-500/10 group-hover:from-teal-500/30 group-hover:to-teal-400/20 group-hover:text-white transition-all duration-300">
                  {(() => {
                    const Icon = ICONS[index];
                    return <Icon className="w-6 h-6 stroke-[2.2]" />;
                  })()}
                </div>
                <h3 className="mt-0 mb-3 font-semibold">{reason.heading}</h3>
                <p className="text-gray-500 dark:text-slate-300 flex-1">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-8 mt-8 flex-col md:flex-row">
            {REASONS.slice(3).map((reason, index) => (
              <div
                key={reason.heading}
                className="kerna-card group p-8 flex flex-col justify-between h-full animate-fade-up hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-400/40 transition-all duration-300 ease-out w-full md:w-[calc(50%-1rem)] max-w-[22rem]"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-teal-400/10 dark:from-teal-500/20 dark:to-teal-400/10 rounded-xl flex items-center justify-center mb-5 text-teal-600 border border-teal-500/10 group-hover:from-teal-500/30 group-hover:to-teal-400/20 group-hover:text-white transition-all duration-300">
                  {(() => {
                    const Icon = ICONS[index + 3];
                    return <Icon className="w-6 h-6 stroke-[2.2]" />;
                  })()}
                </div>
                <h3 className="mt-0 mb-3 font-semibold">{reason.heading}</h3>
                <p className="text-gray-500 dark:text-slate-300 flex-1">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
