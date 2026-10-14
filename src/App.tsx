import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { Testimonial } from './components/Testimonial';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';

export default function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string | undefined>(undefined);
  const [selectedProjectForContact, setSelectedProjectForContact] = useState<string | undefined>(undefined);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workElement = document.getElementById('work');
    if (workElement) {
      workElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForContact(serviceName);
    setSelectedProjectForContact(undefined);
    scrollToContact();
  };

  const handleInquireProject = (projectName: string) => {
    setSelectedProjectForContact(projectName);
    setSelectedServiceForContact(undefined);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#FFF9F8] text-[#292326] flex flex-col font-sans selection:bg-[#F7C8D3] selection:text-[#292326]">
      {/* Sticky Top Header */}
      <Header onOpenContact={scrollToContact} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onStartProject={scrollToContact}
          onViewWork={scrollToWork}
        />

        {/* 2. About / Introduction Section */}
        <About />

        {/* 3. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Portfolio / Selected Work Section */}
        <Portfolio onInquireProject={handleInquireProject} />

        {/* 5. Process Section */}
        <Process />

        {/* 6. Why Work With Us Section */}
        <WhyUs />

        {/* 7. Client Testimonial Section */}
        <Testimonial />

        {/* 8. Conversion Call-To-Action Section */}
        <CallToAction
          onStartProject={scrollToContact}
          onGetInTouch={scrollToContact}
        />

        {/* 9. Contact Section with Validated Interactive Form */}
        <Contact
          preselectedService={selectedServiceForContact}
          preselectedProject={selectedProjectForContact}
        />
      </main>

      {/* 10. Footer Section */}
      <Footer />

      {/* 11. Discreet Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
}
