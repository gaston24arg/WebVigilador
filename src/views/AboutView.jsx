import React from 'react';
import { ABOUT_PAGE_DATA } from '../data/servicesData';

// Pestaña ACERCA DE: replica las 3 secciones y el banner original de Plaza de las Banderas (/about/)
export default function AboutView() {
  return (
    <div>
      {/* Sección 1: Banner principal con imagen original plaza-bandera.jpg */}
      <section style={{
        position: 'relative',
        padding: '6.5rem 0 5.5rem 0',
        backgroundImage: `url(${ABOUT_PAGE_DATA.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '2px solid rgba(229, 230, 0, 0.25)'
      }}>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(8, 13, 6, 0.58) 0%, rgba(8, 13, 6, 0.8) 100%)'
          }}
        ></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '860px' }}>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 900,
            color: '#ffffff',
            textTransform: 'uppercase',
            lineHeight: 1.15
          }}>
            {ABOUT_PAGE_DATA.heroTitle}
          </h1>
        </div>
      </section>

      {/* Sección 2: Bloque "Conócenos..." sobre verde oliva institucional */}
      <section style={{
        background: 'linear-gradient(180deg, #273c21 0%, var(--color-olive-bg) 100%)',
        padding: '4.8rem 0'
      }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <p style={{
            color: 'var(--color-brand-yellow)',
            fontSize: '1.25rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '1rem'
          }}>
            {ABOUT_PAGE_DATA.introTag}
          </p>

          <p style={{
            color: '#ffffff',
            fontSize: '1.12rem',
            lineHeight: 1.8,
            marginBottom: '3rem',
            fontWeight: 500
          }}>
            {ABOUT_PAGE_DATA.introText}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
            {ABOUT_PAGE_DATA.sections.map((section, idx) => (
              <div
                key={idx}
                style={{
                  padding: '2rem',
                  background: 'rgba(8, 13, 6, 0.45)',
                  borderLeft: '4px solid var(--color-brand-yellow)',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0'
                }}
              >
                <h2 style={{
                  fontSize: 'clamp(1.45rem, 3vw, 1.9rem)',
                  fontWeight: 900,
                  color: '#ffffff',
                  marginBottom: '0.75rem'
                }}>
                  {section.title}
                </h2>
                <p style={{
                  color: '#e5efe7',
                  fontSize: '1rem',
                  lineHeight: 1.75
                }}>
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 3: "Nuestra Misión" y "Nuestros Valores" en tarjeta de alto contraste */}
      <section style={{
        background: 'var(--color-olive-bg)',
        padding: '2rem 0 5rem 0'
      }}>
        <div className="container">
          <div style={{
            background: '#e4ebe5',
            color: '#112115',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            border: '2px solid rgba(229, 230, 0, 0.45)',
            boxShadow: 'var(--shadow-lg)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '3rem'
          }}>
            {/* Columna 1: Nuestra Misión */}
            <div>
              <h2 style={{
                fontSize: '1.7rem',
                fontWeight: 900,
                color: '#0d3b1e',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                borderBottom: '3px solid #0d5f3a',
                paddingBottom: '0.5rem'
              }}>
                Nuestra Misión
              </h2>
              <p style={{
                color: '#1b3822',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                fontWeight: 600
              }}>
                {ABOUT_PAGE_DATA.mission}
              </p>
            </div>

            {/* Columna 2: Nuestros Valores */}
            <div>
              <h2 style={{
                fontSize: '1.7rem',
                fontWeight: 900,
                color: '#0d3b1e',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                borderBottom: '3px solid #0d5f3a',
                paddingBottom: '0.5rem'
              }}>
                Nuestros Valores
              </h2>
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.9rem'
              }}>
                {ABOUT_PAGE_DATA.values.map((val, idx) => (
                  <li key={idx} style={{ color: '#1b3822', fontSize: '0.98rem', lineHeight: 1.65 }}>
                    <strong style={{ color: '#0a4028', textTransform: 'uppercase' }}>{val.title}:</strong>{' '}
                    {val.desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
