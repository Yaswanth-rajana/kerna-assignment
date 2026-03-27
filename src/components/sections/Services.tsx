'use client';

import {
  BarChart3,
  Globe,
  MapPin,
  Palette,
  PenTool,
  Share2,
  ShoppingCart,
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import Container from '../Container';

const ICONS = [
  Globe,
  ShoppingCart,
  Palette,
  Share2,
  PenTool,
  BarChart3,
  MapPin,
];

export default function Services() {
  return (
    <section className="section-padding pb-20 md:pb-28 bg-section-bg dark:bg-dark-bg/50 border-y border-gray-200 dark:border-white/5">
      <Container>
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-200">
            Tailored solutions to help small businesses thrive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className={`kerna-card group h-full p-8 flex flex-col justify-between animate-fade-up hover:-translate-y-1 hover:shadow-xl hover:border-teal-400/40 transition-all duration-300 ${
                index === SERVICES.length - 1 ? 'md:col-span-2 lg:col-span-3 max-w-md mx-auto w-full' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-teal-50 dark:bg-teal-500/10 rounded-xl flex items-center justify-center mb-6 text-teal-600 border border-teal-500/10 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                  {(() => {
                    const Icon = ICONS[index % ICONS.length];
                    return <Icon className="w-6 h-6 stroke-[2.2]" />;
                  })()}
                </div>
                <h3 className={`mb-3 ${index === SERVICES.length - 1 ? 'whitespace-nowrap text-lg md:text-xl' : 'min-h-[3.5rem]'}`}>
                  {service.title}
                </h3>
                <p className="flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
