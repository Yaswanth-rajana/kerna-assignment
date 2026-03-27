'use client';

import Link from 'next/link';
import { ROLES } from '@/lib/constants';
import Container from '../Container';

const ROLE_ICONS = [
  <svg key="dev" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-[2.5px] text-teal-600 dark:text-teal-400" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polyline points="16,18 22,12 16,6" /><polyline points="8,6 2,12 8,18" /></svg>,
  <svg key="mkt" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-[2.5px] text-teal-600 dark:text-teal-400" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  <svg key="brand" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-[2.5px] text-teal-600 dark:text-teal-400" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
];

export default function CareersPreview() {
  return (
    <section className="section-padding bg-section-bg dark:bg-dark-bg/50 border-t border-gray-200 dark:border-white/5">
      <Container>
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="mb-4">Join Our Team</h2>
          <p className="mx-auto max-w-xl text-charcoal-600 dark:text-warm-400">
            Internship opportunities designed to build skills, confidence, and real experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ROLES.map((role, index) => (
            <Link href="/careers" key={index} className="group block h-full animate-fade-up cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
              <div 
                className="kerna-card p-8 flex flex-col h-full bg-white border border-gray-200 dark:border-gray-700 hover:border-teal-400 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon badge + duration */}
                <div className="flex items-start justify-between mb-8 transition-transform group-hover:scale-[1.05]">
                  <div className="w-8 h-8 bg-teal-50 dark:bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-600 border border-teal-500/10">
                    {ROLE_ICONS[index % ROLE_ICONS.length]}
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/10 bg-teal-500/10 px-3 py-1 text-[10px] font-semibold text-teal-600 dark:text-teal-400">
                     <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                    {role.duration}
                  </span>
                </div>

                <h3 className="mb-3 group-hover:text-teal-600 transition-colors">{role.title}</h3>
                <p className="flex-1 mb-8">
                   {role.description}
                </p>

                <div className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition-all duration-300 group-hover:translate-x-1 group-hover:gap-3 dark:text-teal-400">
                  Apply Now
                   <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/careers"
             className="btn btn-primary text-lg"
          >
            View All Roles
          </Link>
        </div>
      </Container>
    </section>
  );
}
