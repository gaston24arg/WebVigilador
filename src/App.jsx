import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

// Vistas / Pestañas
import HomeView from './views/HomeView';
import ServicesView from './views/ServicesView';
import TrainingView from './views/TrainingView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';

export default function App() {
  const getTabFromHash = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['inicio', 'servicios', 'capacitaciones', 'acerca-de', 'contacto'].includes(hash)) {
      return hash;
    }
    // Mapeo amigable para URLs viejas de WordPress
    if (hash === 'services') return 'capacitaciones';
    if (hash === 'about') return 'acerca-de';
    if (hash === 'contact' || hash === 'contact-2') return 'contacto';
    return 'inicio';
  };

  const [activeTab, setActiveTab] = useState(getTabFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(getTabFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    window.location.hash = tabId;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} />
      
      <main style={{ flexGrow: 1 }}>
        {activeTab === 'inicio' && <HomeView onNavigate={handleSelectTab} />}
        {activeTab === 'servicios' && <ServicesView />}
        {activeTab === 'capacitaciones' && <TrainingView />}
        {activeTab === 'acerca-de' && <AboutView />}
        {activeTab === 'contacto' && <ContactView />}
      </main>

      <Footer onSelectTab={handleSelectTab} />
      <WhatsAppWidget />
    </div>
  );
}
