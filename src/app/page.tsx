import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import HowWeWork from '@/components/sections/HowWeWork';
import WhyChoose from '@/components/sections/WhyChoose';
import WorkPreview from '@/components/sections/WorkPreview';
import CareersPreview from '@/components/sections/CareersPreview';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <HowWeWork />
      <WhyChoose />
      <WorkPreview />
      <CareersPreview />
      <ContactSection />
    </main>
  );
}