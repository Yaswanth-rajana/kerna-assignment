import Link from 'next/link';
import { ROLES } from '@/lib/constants';
import Container from '@/components/Container';
import Button from '@/components/Button';

// Role icons
const ROLE_ICONS = [
  <svg key="dev" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-[2.5px] text-teal-600 dark:text-teal-400" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polyline points="16,18 22,12 16,6" /><polyline points="8,6 2,12 8,18" /></svg>,
  <svg key="mkt" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-[2.5px] text-teal-600 dark:text-teal-400" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  <svg key="brand" viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-[2.5px] text-teal-600 dark:text-teal-400" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
];

export default function CareersPage() {
  return (
    <main className="section-padding bg-main dark:bg-dark-bg border-t border-gray-200 dark:border-white/5">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-up">
          <h1 className="mb-6">Join Our Team</h1>
          <p className="max-w-2xl mx-auto mb-6 italic">
            Be part of a lean, creative agency helping small businesses grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROLES.map((role, index) => (
            <div
              key={index}
              className="kerna-card group p-8 flex flex-col animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Header row: icon + duration */}
              <div className="flex items-start justify-between mb-8 transition-transform group-hover:scale-[1.05]">
                <div className="w-12 h-12 bg-teal-50 dark:bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-600 border border-teal-500/10">
                  {ROLE_ICONS[index % ROLE_ICONS.length]}
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/10 bg-teal-500/10 px-3 py-1 text-xs font-medium normal-case text-teal-600 dark:text-teal-400">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                  {role.duration}
                </span>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3 dark:text-white group-hover:text-teal-600 transition-colors">
                  {role.title}
                </h2>
                <p className="mb-8">
                  {role.description}
                </p>

                <div className="mb-8 pt-8 border-t border-gray-200 dark:border-white/5 border-dashed">
                  <ul className="space-y-3">
                    {role.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                        <span className="w-2 h-2 bg-teal-400 rounded-full shrink-0" />
                        <span className="leading-relaxed text-slate-700 dark:text-slate-200">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link href="/contact" className="block mt-4">
                <Button variant="primary" className="w-full text-lg py-4">
                  Apply Now →
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
