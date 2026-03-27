'use client';

import { useState } from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    portfolio: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const roles = [
    'Web Development Intern',
    'Marketing / Sales Intern',
    'Branding & Research Intern',
  ];

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.role) newErrors.role = 'Please select the role you are applying for';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
    setFormData({ fullName: '', email: '', role: '', portfolio: '', message: '' });
  };

  if (submitted) {
    return (
      <main className="pt-[100px] pb-[120px] md:pt-[120px]">
        <Container>
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="card-premium dark:bg-charcoal-800 p-20 rounded-[40px] border-4 border-teal-500/10">
              <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-teal-500/40 animate-bounce">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-6 dark:text-white">Application submitted successfully!</h1>
              <p className="text-xl text-text-secondary dark:text-warm-400 mb-12 font-medium leading-relaxed">
                Thank you for applying to Kerna. <br /> A team member will review your submission and get back to you soon.
              </p>
              <Button className="text-lg px-10 py-5" onClick={() => setSubmitted(false)}>Submit Another Application</Button>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="pt-[100px] pb-20 md:pt-[120px] md:pb-32 bg-main dark:bg-dark-bg border-t border-gray-200 dark:border-white/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Form Side */}
          <div className="animate-fade-up">
            <h1 className="mb-6">Apply Now</h1>
            <p className="italic mb-12 max-w-lg">
              Strategy meets spark here. Fill out the details below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <label className="block text-xs font-bold uppercase tracking-widest text-teal-600 mb-4 ml-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                  className={`kerna-input ${errors.fullName ? 'border-red-500 ring-2 ring-red-500/15' : ''}`}
                  placeholder="Johnathan Doe"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" role="alert" className="mt-2 ml-1 text-sm font-medium text-red-500 dark:text-red-400">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-teal-600 mb-2 ml-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className={`kerna-input ${errors.email ? 'border-red-500 ring-2 ring-red-500/15' : ''}`}
                  placeholder="john@kerna.co"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-2 ml-1 text-sm font-medium text-red-500 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-teal-600 mb-2 ml-1">Select Role You&apos;re Applying For *</label>
                <select
                  required
                  value={formData.role}
                  onChange={(e) => updateField('role', e.target.value)}
                  className={`kerna-input appearance-none bg-stone-50 dark:bg-dark-card ${errors.role ? 'border-red-500 ring-2 ring-red-500/15' : ''}`}
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2314B8A6\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2rem' }}
                  aria-invalid={Boolean(errors.role)}
                  aria-describedby={errors.role ? 'role-error' : undefined}
                >
                  <option value="">Select role you&apos;re applying for</option>
                  {roles.map((role) => (<option key={role} value={role}>{role}</option>))}
                </select>
                {errors.role && (
                  <p id="role-error" role="alert" className="mt-2 ml-1 text-sm font-medium text-red-500 dark:text-red-400">
                    {errors.role}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-teal-600 mb-2 ml-1">Portfolio Link</label>
                <input
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => updateField('portfolio', e.target.value)}
                  className="kerna-input"
                  placeholder="https://behance.net/you"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-teal-600 mb-2 ml-1">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  className="kerna-input resize-none"
                  placeholder="How can we help you grow?"
                />
              </div>

              <Button
                type="submit"
                className="w-full text-xl py-6 rounded-2xl shadow-2xl shadow-teal-500/10 hover:scale-[1.02] active:scale-95 transition-all font-black tracking-tight"
                disabled={submitting}
              >
                {submitting ? 'Submitting application...' : 'Submit Application'}
              </Button>
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:pt-[120px] space-y-8 animate-fade-up delay-200">
            <div className="kerna-card p-8">
              <h2 className="text-2xl font-bold mb-8 dark:text-white">Contact Details</h2>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center text-teal-600 border border-teal-500/10">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-[2.5]" stroke="currentColor"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-teal-600 mb-1">Direct Line</p>
                    <a href="tel:+917569612318" className="block text-xl font-bold dark:text-white leading-tight hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      +91 75696 12318
                    </a>
                    <a href="tel:+919949686160" className="block text-xl font-bold dark:text-white leading-tight hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      +91 99496 86160
                    </a>
                  </div>
                </div>
                
                 <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center text-teal-600 border border-teal-500/10">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-[2.5]" stroke="currentColor"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-teal-600 mb-1">Visakhapatnam HQ</p>
                    <p className="text-xl font-bold dark:text-white leading-tight">Marripalem, Visakhapatnam, Andhra Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-premium h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg dark:shadow-black/30">
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
    </main>
  );
}
