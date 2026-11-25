import React from 'react';
import { COMPANY_INFO } from '../data/servicesData';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ onSelectTab }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tabId) => {
    if (onSelectTab) {
      onSelectTab(tabId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      background: 'var(--color-olive-bg)',
      borderTop: '2px solid rgba(229, 230, 0, 0.25)',
      padding: '3rem 0 2rem 0',
      color: '#d8e3da'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem'
        }}>
          {/* Identidad de marca */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <img
                src={COMPANY_INFO.logoHeader}
                alt="SHERIFF Seguridad S.R.L."
                style={{ height: '50px', width: 'auto' }}
                onError={(e) => { e.currentTarget.src = '/assets/images/icon.png'; }}
              />
              <div>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  fontWeight: 900,
                  color: '#ffffff',
                  display: 'block',
                  lineHeight: 1.05
                }}>
                  SHERIFF
                </span>
                <span style={{ fontSize: '0.68rem', color: 'var(--color-brand-yellow)', fontWeight: 800, letterSpacing: '0.16em' }}>
                  SEGURIDAD S.R.L.
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#d1ded3', lineHeight: 1.6 }}>
              {COMPANY_INFO.resolutionNumber} &bull; {COMPANY_INFO.resolutionAuthority}.
            </p>
          </div>

          {/* Navegación por pestañas */}
          <div>
            <h4 style={{ color: 'var(--color-brand-yellow)', fontSize: '0.92rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Navegación
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.88rem' }}>
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'servicios', label: 'Servicios' },
                { id: 'capacitaciones', label: 'Capacitaciones' },
                { id: 'acerca-de', label: 'Acerca de' },
                { id: 'contacto', label: 'Contactos' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNav(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#e5efe7',
                    textAlign: 'left',
                    cursor: 'pointer',
                    padding: 0,
                    fontWeight: 600
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contacto directo */}
          <div>
            <h4 style={{ color: 'var(--color-brand-yellow)', fontSize: '0.92rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Contacto Directo
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                <Phone size={15} color="#e5e600" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} style={{ color: '#ffffff', fontWeight: 700 }}>
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                <Mail size={15} color="#e5e600" />
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#ffffff' }}>
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                <MapPin size={15} color="#e5e600" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#e5efe7' }}>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior de derechos reservados igual al sitio original */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.14)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          textTransform: 'uppercase',
          letterSpacing: '0.04em'
        }}>
          <div style={{ color: '#d1d1d1', fontWeight: 700 }}>
            &copy; 2026 SHERIFF SEGURIDAD S.R.L. &mdash; TODOS LOS DERECHOS RESERVADOS.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            style={{
              background: 'rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(229, 230, 0, 0.4)',
              color: '#ffffff',
              padding: '0.45rem 0.9rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.78rem',
              fontWeight: 700
            }}
          >
            <span>Subir</span>
            <ArrowUp size={14} color="#e5e600" />
          </button>
        </div>
      </div>
    </footer>
  );
}
