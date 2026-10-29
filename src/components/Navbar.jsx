import React, { useState, useEffect } from 'react';
import { Shield, Phone, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export default function Navbar({ activeTab, onSelectTab }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTabs = [
    { id: 'inicio', name: 'Inicio' },
    { id: 'servicios', name: 'Servicios' },
    { id: 'capacitaciones', name: 'Capacitaciones' },
    { id: 'acerca-de', name: 'Acerca de' },
    { id: 'contacto', name: 'Contacto' }
  ];

  const handleTabClick = (tabId) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner de Guardia Activa */}
      <div style={{
        background: 'linear-gradient(90deg, #051d10 0%, #0d3822 50%, #051d10 100%)',
        borderBottom: '1px solid rgba(0, 230, 118, 0.25)',
        padding: '0.45rem 1rem',
        fontSize: '0.8rem',
        color: '#c2d4c6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.2rem',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 101
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <span className="pulse-indicator"></span>
          <span style={{ color: '#00e676', fontWeight: 700 }}>GUARDIA OPERATIVA 24/7</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span>{COMPANY_INFO.resolutionNumber} &bull; Neuquén</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a 
            href={`tel:${COMPANY_INFO.phoneRaw}`} 
            style={{ color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}
          >
            <Phone size={13} color="#00e676" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(8, 12, 9, 0.95)' : 'rgba(8, 12, 9, 0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0, 230, 118, 0.2)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.8)' : 'none'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem'
        }}>
          {/* Logo Brand */}
          <button
            onClick={() => handleTabClick('inicio')}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.9rem',
              textAlign: 'left',
              padding: 0
            }}
          >
            <img 
              src="/assets/images/logo.png" 
              alt="SHERIFF Seguridad" 
              style={{
                height: '52px',
                width: 'auto',
                filter: 'drop-shadow(0 2px 10px rgba(0, 230, 118, 0.35))'
              }}
              onError={(e) => { e.target.src = '/assets/images/icon.png'; }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 900,
                letterSpacing: '0.08em',
                color: '#ffffff',
                lineHeight: 1.1
              }}>
                SHERIFF
              </span>
              <span style={{
                fontSize: '0.68rem',
                fontWeight: 800,
                letterSpacing: '0.22em',
                color: '#00e676',
                textTransform: 'uppercase'
              }}>
                SEGURIDAD S.R.L.
              </span>
            </div>
          </button>

          {/* Desktop Tabs */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.04)',
            padding: '0.3rem 0.5rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }} className="desktop-nav">
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  style={{
                    background: isActive ? 'var(--color-primary)' : 'transparent',
                    color: isActive ? '#041208' : '#d2e3d5',
                    border: 'none',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.45rem 1.1rem',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? '0 2px 12px rgba(0, 230, 118, 0.4)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.target.style.color = '#00e676';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.target.style.color = '#d2e3d5';
                  }}
                >
                  {tab.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }} className="desktop-actions">
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hola,%20deseo%20solicitar%20asesoramiento%20de%20seguridad%20para%20mis%20instalaciones.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                padding: '0.65rem 1.25rem',
                fontSize: '0.85rem'
              }}
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              padding: '0.55rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              display: 'none'
            }}
            className="mobile-trigger"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: 'rgba(8, 12, 9, 0.98)',
            borderTop: '1px solid rgba(0, 230, 118, 0.2)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
          }}>
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  style={{
                    background: isActive ? 'rgba(0, 230, 118, 0.15)' : 'transparent',
                    border: isActive ? '1px solid var(--color-primary)' : '1px solid transparent',
                    color: isActive ? '#00e676' : '#ffffff',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '1rem',
                    fontWeight: 800,
                    textAlign: 'left',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{tab.name}</span>
                  {isActive && <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00e676' }}></span>}
                </button>
              );
            })}

            <div style={{ paddingTop: '0.8rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hola,%20deseo%20solicitar%20asesoramiento%20de%20seguridad.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageSquare size={18} />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav, .desktop-actions {
            display: none !important;
          }
          .mobile-trigger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
