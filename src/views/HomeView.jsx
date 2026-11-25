import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

// Pestaña INICIO: replica la estructura exacta de las 7 secciones del sitio original
export default function HomeView({ onNavigate }) {
  return (
    <>
      <Hero />
      <ServicesSection onNavigate={onNavigate} />
      <AboutSection />
      <ContactSection />
    </>
  );
}
