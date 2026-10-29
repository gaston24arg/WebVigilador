import React from 'react';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TrainingSection from '../components/TrainingSection';
import QuoteCalculator from '../components/QuoteCalculator';
import ContactSection from '../components/ContactSection';

export default function HomeView({ onNavigate }) {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <AboutSection />
      <TrainingSection />
      <QuoteCalculator />
      <ContactSection />
    </>
  );
}
