import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Services } from './components/Services';
import { Feature } from './components/Feature';
import { Method } from './components/Method';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileBookingBar } from './components/MobileBookingBar';
import { CookieBanner } from './components/CookieBanner';
import { PrivacyModal } from './components/PrivacyModal';
import { CookieModal } from './components/CookieModal';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isCookieOpen, setIsCookieOpen] = useState(false);

  // Initialize scroll reveal animations
  useScrollReveal();

  useEffect(() => {
    document.documentElement.lang = 'it';
  }, []);

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a className="skip-link" href="#contenuto">
        Salta al contenuto
      </a>

      {/* Header and Topline */}
      <Header />

      {/* Main Content Area */}
      <main id="contenuto">
        <Hero />
        <Intro />
        <Services />
        <Feature />
        <Method />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenCookie={() => setIsCookieOpen(true)}
      />

      {/* Mobile Sticky Booking Bar */}
      <MobileBookingBar />

      {/* GDPR Cookie Banner */}
      <CookieBanner onOpenCookiePolicy={() => setIsCookieOpen(true)} />

      {/* Legal Modals */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
      <CookieModal
        isOpen={isCookieOpen}
        onClose={() => setIsCookieOpen(false)}
      />
    </>
  );
};

export default App;
