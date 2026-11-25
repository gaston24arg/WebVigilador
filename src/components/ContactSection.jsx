import React from 'react';
import { COMPANY_INFO } from '../data/servicesData';
import { MessageSquare, MapPin } from 'lucide-react';

// Secciones 5, 6 y 7 de INICIO: Banner "¿Alguna consulta?" (fondo-slider.png), franja UBICANOS y mapa
export default function ContactSection() {
  return (
    <>
      {/* Sección 5: Banner "¿Alguna consulta?" con imagen original fondo-slider.png */}
      <section style={{
        position: 'relative',
        padding: '5.5rem 0',
        backgroundImage: `url(${COMPANY_INFO.ctaBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderTop: '1px solid rgba(229, 230, 0, 0.25)',
        borderBottom: '1px solid rgba(229, 230, 0, 0.25)'
      }}>
        {/* Superposición oscura para alto contraste */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(8, 13, 6, 0.86) 0%, rgba(11, 20, 11, 0.78) 100%)'
          }}
        ></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '820px' }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
            fontWeight: 900,
            color: '#ffffff',
            textTransform: 'uppercase',
            marginBottom: '1.8rem',
            letterSpacing: '-0.02em'
          }}>
            ¿Alguna consulta?
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem',
            color: 'var(--color-brand-yellow)',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            fontWeight: 800,
            marginBottom: '2.2rem',
            lineHeight: 1.5
          }}>
            <p style={{ color: 'var(--color-brand-yellow)' }}>
              Teléfono:{' '}
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} style={{ color: '#ffffff', textDecoration: 'underline' }}>
                {COMPANY_INFO.phone}
              </a>
            </p>
            <p style={{ color: 'var(--color-brand-yellow)' }}>
              Email:{' '}
              <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#ffffff', textDecoration: 'underline' }}>
                {COMPANY_INFO.email}
              </a>
            </p>
            <p style={{ color: 'var(--color-brand-yellow)' }}>
              Dirección: <span style={{ color: '#ffffff' }}>{COMPANY_INFO.address}</span>
            </p>
            <p style={{ color: 'var(--color-brand-yellow)' }}>
              Atención: <span style={{ color: '#ffffff' }}>{COMPANY_INFO.hoursOffice}</span>
            </p>
          </div>

          <a
            href={COMPANY_INFO.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp shimmer-effect"
            style={{
              padding: '1rem 2.4rem',
              fontSize: '1.05rem',
              fontWeight: 900
            }}
          >
            <MessageSquare size={20} />
            <span>Escribinos</span>
          </a>
        </div>
      </section>

      {/* Sección 6: Franja UBICANOS */}
      <section style={{
        background: 'var(--bg-pure-black)',
        padding: '2.4rem 0 1.4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(1.9rem, 4vw, 2.6rem)',
            fontWeight: 900,
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}>
            UBICANOS
          </h2>
          <div style={{
            width: '90px',
            height: '4px',
            background: 'var(--color-brand-yellow)',
            margin: '0.8rem auto 0 auto',
            borderRadius: 'var(--radius-full)'
          }}></div>
        </div>
      </section>

      {/* Sección 7: "Estamos en:" + Mapa de Google embebido */}
      <section style={{
        background: 'var(--bg-pure-black)',
        padding: '2rem 0 5rem 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            background: '#0d150e',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden'
          }}>
            <div style={{ padding: '2.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-brand-yellow)', marginBottom: '0.8rem' }}>
                <MapPin size={22} />
                <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Sede Central
                </span>
              </div>
              <h3 style={{
                fontSize: 'clamp(1.7rem, 3vw, 2.2rem)',
                fontWeight: 900,
                color: 'var(--color-brand-yellow)',
                marginBottom: '0.8rem'
              }}>
                Estamos en:
              </h3>
              <p style={{
                color: '#ffffff',
                fontSize: '1.15rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                marginBottom: '1.5rem'
              }}>
                {COMPANY_INFO.addressShort}
              </p>
              <a
                href="https://maps.google.com/?q=Perito+Moreno+62,+Neuqu%C3%A9n"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '0.85rem', padding: '0.7rem 1.3rem' }}
              >
                Abrir en Google Maps
              </a>
            </div>

            <div style={{ width: '100%', minHeight: '360px', height: '100%' }}>
              <iframe
                title="Mapa de Google de Perito Moreno 62, Neuquén"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px', display: 'block' }}
                loading="lazy"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(COMPANY_INFO.mapsQuery)}&z=15&hl=es&t=m&output=embed&iwloc=near`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
