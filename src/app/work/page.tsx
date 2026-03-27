import { PROJECTS } from '@/lib/constants';
import Container from '@/components/Container';

export default function WorkPage() {
  return (
    <main className="section-padding bg-main dark:bg-dark-bg border-t border-gray-200 dark:border-white/5">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
          <h1 className="mb-6">Our Work</h1>
          <p className="max-w-2xl mx-auto italic">
            A simple look at recent sample work for local businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="kerna-card flex h-full flex-col border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-xl dark:border-gray-700 dark:bg-charcoal-900"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="inline-block self-start rounded-full bg-teal-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                {project.industry}
              </span>

              <h2 className="mb-3 mt-6 text-2xl font-bold dark:text-white">
                {project.title}
              </h2>
              <p className="mb-8">{project.description}</p>

              <div className="mt-auto rounded-2xl border border-gray-200 bg-gray-50/80 p-5 text-sm text-charcoal-700 dark:border-white/5 dark:bg-white/[0.03] dark:text-warm-300">
                {project.problem} &rarr; {project.solution}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
