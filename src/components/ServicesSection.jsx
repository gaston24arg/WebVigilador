import React from 'react';
import { HOME_SERVICES } from '../data/servicesData';
import { ArrowRight } from 'lucide-react';

// Sección 2 de INICIO: "Nuestros Servicios" con las 3 tarjetas e imágenes originales
export default function ServicesSection({ onNavigate }) {
  return (
    <section
      id="nuestros-servicios"
      style={{
        background: 'var(--bg-pure-black)',
        padding: '5rem 0'
      }}
    >
      <div className="container">
        {/* Encabezado y separador amarillo original */}
        <div style={{ textAlign: 'center', marginBottom: '3.2rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 900,
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            marginBottom: '1rem'
          }}>
            Nuestros Servicios
          </h2>
          <div style={{
            width: '120px',
            height: '4px',
            background: 'var(--color-brand-yellow)',
            margin: '0 auto',
            borderRadius: 'var(--radius-full)'
          }}></div>
        </div>

        {/* Grilla de las 3 tarjetas originales */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch'
        }}>
          {HOME_SERVICES.map((service) => (
            <article
              key={service.id}
              className="glass-panel"
              style={{
                background: '#0c120d',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{
                width: '100%',
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                background: '#080d06'
              }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transition: 'transform 0.5s ease'
                  }}
                />
              </div>

              <div style={{
                padding: '1.8rem 1.6rem 2rem 1.6rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                gap: '0.85rem'
              }}>
                <h3 style={{
                  fontSize: '1.35rem',
                  fontWeight: 900,
                  color: 'var(--color-forest-accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: '#f2f5f3',
                  fontSize: '0.96rem',
                  lineHeight: 1.65,
                  fontWeight: 500
                }}>
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Acceso directo a la pestaña SERVICIOS */}
        {onNavigate && (
          <div style={{ textAlign: 'center', marginTop: '2.8rem' }}>
            <button
              type="button"
              onClick={() => {
                onNavigate('servicios');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn"
              style={{
                background: 'var(--color-brand-yellow)',
                color: '#080d06',
                fontWeight: 900,
                padding: '0.9rem 2rem',
                boxShadow: '0 6px 22px rgba(229, 230, 0, 0.25)'
              }}
            >
              <span>Ver Todos los Servicios</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
