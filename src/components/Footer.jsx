import React from 'react';
import { COMPANY_INFO } from '../data/servicesData';
import { Shield, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

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
      background: '#040705',
      borderTop: '1px solid rgba(0, 230, 118, 0.15)',
      padding: '4rem 0 2rem 0',
      color: '#8ba691'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Columna Marca */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <img
                src="/assets/images/logo.png"
                alt="SHERIFF"
                style={{ height: '48px', width: 'auto' }}
                onError={(e) => { e.target.src = '/assets/images/icon.png'; }}
              />
              <div>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 900,
                  color: '#ffffff',
                  display: 'block',
                  lineHeight: 1
                }}>
                  SHERIFF
                </span>
                <span style={{ fontSize: '0.65rem', color: '#00e676', fontWeight: 800, letterSpacing: '0.18em' }}>
                  SEGURIDAD S.R.L.
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#8faea0', lineHeight: 1.6, marginBottom: '1.2rem' }}>
              Servicios de seguridad física, perimetral y tecnológica las 24 horas en Neuquén y la Patagonia.
            </p>

            <div style={{
              display: 'inline-block',
              padding: '0.4rem 0.8rem',
              background: 'rgba(0, 230, 118, 0.08)',
              border: '1px solid rgba(0, 230, 118, 0.25)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.75rem',
              color: '#00e676',
              fontWeight: 700
            }}>
              {COMPANY_INFO.resolutionNumber}
            </div>
          </div>

          {/* Columna Navegación Pestañas */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 800, marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Pestañas Oficiales
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <button onClick={() => handleNav('inicio')} style={{ background: 'none', border: 'none', color: '#97b19e', textAlign: 'left', cursor: 'pointer', padding: 0 }}>
                Inicio
              </button>
              <button onClick={() => handleNav('servicios')} style={{ background: 'none', border: 'none', color: '#97b19e', textAlign: 'left', cursor: 'pointer', padding: 0 }}>
                Servicios (Seguridad, Flota & Maestranza)
              </button>
              <button onClick={() => handleNav('capacitaciones')} style={{ background: 'none', border: 'none', color: '#97b19e', textAlign: 'left', cursor: 'pointer', padding: 0 }}>
                Centro de Capacitación Oficial
              </button>
              <button onClick={() => handleNav('acerca-de')} style={{ background: 'none', border: 'none', color: '#97b19e', textAlign: 'left', cursor: 'pointer', padding: 0 }}>
                Acerca de (Historia, Misión y Valores)
              </button>
              <button onClick={() => handleNav('contacto')} style={{ background: 'none', border: 'none', color: '#97b19e', textAlign: 'left', cursor: 'pointer', padding: 0 }}>
                Contacto & RRHH (Requisitos Vigilador)
              </button>
            </div>
          </div>

          {/* Columna Especialidades */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 800, marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Soluciones Integrales
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li><span style={{ color: '#97b19e' }}>Barrios Privados & Countries</span></li>
              <li><span style={{ color: '#97b19e' }}>Vigilancia Electrónica & CCTV</span></li>
              <li><span style={{ color: '#97b19e' }}>Custodia en Entes Públicos y Eventos</span></li>
              <li><span style={{ color: '#97b19e' }}>Alquiler de Vehículos sin Chofer</span></li>
              <li><span style={{ color: '#97b19e' }}>Servicio Integral de Maestranza</span></li>
            </ul>
          </div>

          {/* Columna Contacto */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 800, marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Contacto Directo
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={15} color="#00e676" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} style={{ color: '#ffffff', fontWeight: 600 }}>
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={15} color="#00e676" />
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#ffffff' }}>
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={15} color="#00e676" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#97b19e' }}>
                  {COMPANY_INFO.address}, {COMPANY_INFO.city}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior Copyright */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem'
        }}>
          <div>
            &copy; 2026 {COMPANY_INFO.name}. Todos los derechos reservados.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Neuquén &bull; Patagonia Argentina</span>

            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                padding: '0.4rem 0.8rem',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.78rem'
              }}
            >
              <span>Subir</span>
              <ArrowUp size={14} color="#00e676" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
