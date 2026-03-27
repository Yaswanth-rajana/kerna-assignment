import Link from 'next/link';
import Container from '../Container';

export default function ContactSection() {
  return (
    <section className="section-padding bg-white dark:bg-transparent relative overflow-hidden">
      <Container>
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="mb-4">Get in Touch</h2>
          <p className="max-w-2xl mx-auto italic">
            Strategy meets spark. Let&apos;s build your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Info Side (2/5) */}
          <div className="lg:col-span-2 flex flex-col gap-6 animate-fade-up">
            <div className="kerna-card p-8 flex-1">
              <h3 className="mb-8 tracking-tighter">Reach Kerna</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center shrink-0 text-teal-600 border border-teal-500/10">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 mb-1">Direct Line</p>
                    <a href="tel:+917569612318" className="block text-xl font-bold dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      +91 75696 12318
                    </a>
                    <a href="tel:+919949686160" className="block text-xl font-bold dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      +91 99496 86160
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center shrink-0 text-teal-600 border border-teal-500/10">
                   <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 mb-1">Visakhapatnam HQ</p>
                    <p className="text-xl font-bold dark:text-white">Marripalem, Visakhapatnam, Andhra Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
               className="btn btn-primary w-full text-lg py-5"
            >
              Get in Touch
            </Link>
          </div>

          {/* Map Side (3/5) */}
          <div className="lg:col-span-3 min-h-[400px] animate-fade-up">
             <div className="map-premium h-[350px] md:h-[450px] w-full rounded-xl overflow-hidden shadow-lg dark:shadow-black/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.4389561590316!2d83.24420142282327!3d17.74319497588421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3967b3899bbe9%3A0x3fd6768247180757!2sSAi%20Sundar%20Residency!5e0!3m2!1sen!2sin!4v1769022633919!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kerna Location Map"
                />
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
