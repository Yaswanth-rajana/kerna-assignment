import { Star, TrendingUp, Users } from 'lucide-react';
import Container from '../Container';

export default function About() {
  const cards = [
    {
      title: 'Mission',
      content: 'To make smart, affordable marketing accessible to small businesses and help them punch above their weight.',
    },
    {
      title: 'Who We Work With',
      content: 'Local businesses, startups, and independent brands.',
    },
    {
      title: 'What We Solve',
      content: 'Confusing marketing, weak online presence, and scattered branding.',
    },
  ];

  const cardIcons = [Star, Users, TrendingUp];

  return (
    <section className="section-padding bg-white dark:bg-transparent relative overflow-hidden">
      {/* Decorative pulse glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/3 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="mb-6">About Kerna</h2>
          </div>

          <div className="space-y-8 text-center max-w-3xl mx-auto mb-20 animate-fade-up">
            <p className="text-2xl md:text-3xl font-bold tracking-tight leading-tight dark:text-white">
              Kerna is a lean, strategy-driven PR and marketing agency built for small businesses that want to look professional, move fast, and grow without burning money.
            </p>
            <p className="text-slate-600 dark:text-slate-200">
              We combine clear strategy with creative execution to help local brands build a strong digital presence — from websites and branding to social media and content.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12 md:mt-16 animate-fade-up">
            {cards.map((card, i) => (
              <div key={card.title} className="kerna-card group p-8 flex flex-col hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-teal-50 dark:bg-teal-500/10 rounded-xl flex items-center justify-center mb-6 text-teal-600 border border-teal-500/10 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                  {(() => {
                    const Icon = cardIcons[i];
                    return <Icon className="w-5 h-5 stroke-[2.2]" />;
                  })()}
                </div>
                <h3 className="mb-3 text-teal-600 dark:text-teal-400 uppercase tracking-wide text-xs font-bold">{card.title}</h3>
                <p className="flex-1 text-slate-600 dark:text-slate-200">
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
