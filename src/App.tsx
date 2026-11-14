import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SERVICES } from './data/services';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].title);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToContact();
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#0A0A0A] text-white overflow-x-clip">
      {/* 1. Sticky Navbar */}
      <Navbar onBookClick={scrollToContact} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection onBookClick={scrollToContact} />

        {/* 3. Services / Packages Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. About / Why Choose Us Section */}
        <AboutSection />

        {/* 5. Contact / Book Now Section */}
        <ContactSection
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />
      </main>

      {/* Minimal Dark Footer */}
      <Footer />
    </div>
  );
}
