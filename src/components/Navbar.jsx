import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
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

  // Pestañas exactas del sitio original en el mismo orden
  const navTabs = [
    { id: 'inicio', name: 'INICIO' },
    { id: 'servicios', name: 'SERVICIOS' },
    { id: 'capacitaciones', name: 'CAPACITACIONES' },
    { id: 'acerca-de', name: 'ACERCA DE' },
    { id: 'contacto', name: 'CONTACTOS' }
  ];

  const handleTabClick = (tabId) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Barra superior institucional con habilitación y guardia 24/7 */}
      <div style={{
        background: 'linear-gradient(90deg, #080d06 0%, #1b3014 50%, #080d06 100%)',
        borderBottom: '1px solid rgba(229, 230, 0, 0.22)',
        padding: '0.45rem 1rem',
        fontSize: '0.78rem',
        color: '#d8e3da',
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
          <span style={{ color: 'var(--color-brand-yellow)', fontWeight: 800 }}>GUARDIA OPERATIVA 24/7</span>
          <span style={{ opacity: 0.45 }}>|</span>
          <span>{COMPANY_INFO.resolutionNumber} &bull; Neuquén</span>
        </div>

        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          style={{ color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700 }}
        >
          <Phone size={13} color="#e5e600" />
          <span>{COMPANY_INFO.phone}</span>
        </a>
      </div>

      {/* Barra de navegación principal con logo circular original y 5 pestañas */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(8, 13, 6, 0.96)' : 'rgba(8, 13, 6, 0.84)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(229, 230, 0, 0.2)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.75)' : 'none'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.7rem',
          paddingBottom: '0.7rem',
          gap: '1rem'
        }}>
          {/* Logotipo oficial circular de SHERIFF */}
          <button
            type="button"
            onClick={() => handleTabClick('inicio')}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textAlign: 'left',
              padding: 0
            }}
          >
            <img
              src={COMPANY_INFO.logoHeader}
              alt="SHERIFF Seguridad S.R.L."
              style={{
                height: '56px',
                width: 'auto',
                filter: 'drop-shadow(0 2px 10px rgba(229, 230, 0, 0.25))'
              }}
              onError={(e) => { e.currentTarget.src = '/assets/images/icon.png'; }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: 900,
                letterSpacing: '0.08em',
                color: '#ffffff',
                lineHeight: 1.05
              }}>
                SHERIFF
              </span>
              <span style={{
                fontSize: '0.68rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: 'var(--color-brand-yellow)',
                textTransform: 'uppercase'
              }}>
                SEGURIDAD S.R.L.
              </span>
            </div>
          </button>

          {/* Pestañas de escritorio */}
          <nav
            aria-label="Navegación principal del sitio"
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '0.3rem 0.45rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(255, 255, 255, 0.09)'
            }}
          >
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => handleTabClick(tab.id)}
                  style={{
                    background: isActive ? 'var(--color-brand-yellow)' : 'transparent',
                    color: isActive ? '#080d06' : '#f2f5f3',
                    border: 'none',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.5rem 1rem',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 2px 14px rgba(229, 230, 0, 0.35)' : 'none'
                  }}
                >
                  {tab.name}
                </button>
              );
            })}
          </nav>

          {/* Botón WhatsApp del encabezado (funcional) */}
          <div className="desktop-actions" style={{ display: 'flex', alignItems: 'center' }}>
            <a
              href={COMPANY_INFO.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                background: 'transparent',
                border: '2px solid var(--color-brand-yellow)',
                color: 'var(--color-brand-yellow)',
                padding: '0.55rem 1.15rem',
                fontSize: '0.82rem',
                fontWeight: 800
              }}
            >
              <MessageSquare size={16} />
              <span>WHATSAPP</span>
            </a>
          </div>

          {/* Botón del menú móvil */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              color: '#ffffff',
              padding: '0.55rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              display: 'none'
            }}
            className="mobile-trigger"
            aria-label="Abrir o cerrar menú de navegación"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú desplegable móvil */}
        {mobileMenuOpen && (
          <div style={{
            background: 'rgba(8, 13, 6, 0.98)',
            borderTop: '1px solid rgba(229, 230, 0, 0.25)',
            padding: '1.25rem 1.5rem 1.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.85)'
          }}>
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabClick(tab.id)}
                  style={{
                    background: isActive ? 'rgba(229, 230, 0, 0.16)' : 'transparent',
                    border: isActive ? '1px solid var(--color-brand-yellow)' : '1px solid transparent',
                    color: isActive ? 'var(--color-brand-yellow)' : '#ffffff',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.95rem',
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
                  {isActive && <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-brand-yellow)' }}></span>}
                </button>
              );
            })}

            <div style={{ paddingTop: '0.8rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <a
                href={COMPANY_INFO.whatsappDefaultUrl}
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
        @media (max-width: 980px) {
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
