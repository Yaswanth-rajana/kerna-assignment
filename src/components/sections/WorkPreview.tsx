'use client';

import Link from 'next/link';
import { PROJECTS } from '@/lib/constants';
import Container from '../Container';

export default function WorkPreview() {
  const previewProjects = PROJECTS.slice(0, 3);

  return (
    <section className="section-padding bg-white dark:bg-transparent">
      <Container>
        <h2 className="text-center mb-12 animate-fade-up">Our Work</h2>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {previewProjects.map((project, index) => (
            <Link
              href="/work"
              key={index}
              className="group block h-full animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="kerna-card flex h-full flex-col overflow-hidden border border-gray-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/40 hover:shadow-2xl dark:border-charcoal-800 dark:bg-charcoal-900 dark:shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <div className="preview flex h-32 flex-col justify-between border-b border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200 p-4 transition-transform duration-300 group-hover:scale-[1.02] dark:border-charcoal-800 dark:from-gray-800 dark:to-gray-900">
                  <span className="inline-flex self-start rounded-full border border-white/40 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-900 shadow-sm dark:border-white/10 dark:bg-white/90 dark:text-gray-900">
                    Sample Work
                  </span>

                  <div className="space-y-2">
                    <div className="h-2 w-3/4 rounded-full bg-gray-300/90 dark:bg-gray-700" />
                    <div className="h-2 w-1/2 rounded-full bg-gray-300/70 dark:bg-gray-700/80" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-block self-start rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-600 dark:text-teal-400">
                    {project.industry}
                  </span>

                  <h3 className="mb-2 mt-4 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-charcoal-600 dark:text-warm-400">
                    {project.description}
                  </p>

                  <div className="inline-flex items-center gap-1 text-sm font-medium text-teal-500 transition-all group-hover:gap-2 group-hover:translate-x-1">
                    Sample Work
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/work"
            className="btn btn-primary text-lg hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View All Work
          </Link>
        </div>
      </Container>
    </section>
  );
}
