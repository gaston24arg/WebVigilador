import React from 'react';
import { TRAINING_PAGE_DATA, COMPANY_INFO } from '../data/servicesData';
import { MessageSquare } from 'lucide-react';

// Pestaña CAPACITACIONES: replica las 5 secciones y todas las imágenes originales (/services/)
export default function TrainingView() {
  return (
    <div>
      {/* Sección 1: Banner principal con imagen original capacitaciones-hero.png */}
      <section style={{
        position: 'relative',
        padding: '6.5rem 0 5.5rem 0',
        backgroundImage: `url(${TRAINING_PAGE_DATA.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '2px solid rgba(229, 230, 0, 0.25)'
      }}>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(8, 13, 6, 0.55) 0%, rgba(8, 13, 6, 0.8) 100%)'
          }}
        ></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '900px' }}>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 900,
            color: '#ffffff',
            textTransform: 'uppercase',
            lineHeight: 1.15
          }}>
            {TRAINING_PAGE_DATA.heroTitle}
          </h1>
        </div>
      </section>

      {/* Sección 2: Aval oficial ministerial y distintivo primer-premio.png (#000000) */}
      <section style={{
        background: 'var(--bg-pure-black)',
        padding: '4.8rem 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={TRAINING_PAGE_DATA.badgeImage}
                alt="Reconocimiento N° 1 - Centro de Capacitación Oficial"
                style={{
                  width: '220px',
                  maxWidth: '100%',
                  height: 'auto',
                  filter: 'drop-shadow(0 0 24px rgba(0, 230, 118, 0.35))'
                }}
              />
            </div>

            <div>
              <p style={{
                color: '#ffffff',
                fontSize: '1.15rem',
                fontWeight: 700,
                lineHeight: 1.7,
                marginBottom: '1.2rem'
              }}>
                {TRAINING_PAGE_DATA.milestoneText}
              </p>
              <p style={{
                color: '#d4e2d6',
                fontSize: '1rem',
                lineHeight: 1.75
              }}>
                {TRAINING_PAGE_DATA.milestoneDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones 3, 4 y 5: Formación SHERIFF, Aprende... y Tu Futuro con sus fotos originales */}
      {TRAINING_PAGE_DATA.blocks.map((block) => (
        <section
          key={block.id}
          style={{
            background: block.bgColor,
            padding: '4.5rem 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  maxWidth: '420px',
                  width: '100%',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '2px solid rgba(229, 230, 0, 0.25)',
                  boxShadow: 'var(--shadow-lg)'
                }}>
                  <img
                    src={block.image}
                    alt={block.imageAlt}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
              </div>

              <div>
                <h2 style={{
                  fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)',
                  fontWeight: 900,
                  color: 'var(--color-brand-yellow)',
                  marginBottom: '1.4rem',
                  textTransform: 'uppercase'
                }}>
                  {block.title}
                </h2>

                {block.paragraphs && block.paragraphs.map((text, idx) => (
                  <p
                    key={idx}
                    style={{
                      color: '#f2f5f3',
                      fontSize: '1.04rem',
                      lineHeight: 1.75,
                      marginBottom: '1rem'
                    }}
                  >
                    {text}
                  </p>
                ))}

                {block.bullets && (
                  <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    {block.bullets.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          padding: '1rem 1.2rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderLeft: '3px solid var(--color-brand-yellow)',
                          borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                          color: '#edf5ef',
                          fontSize: '0.98rem',
                          lineHeight: 1.65
                        }}
                      >
                        <strong style={{ color: 'var(--color-brand-yellow)' }}>{item.label}</strong>{' '}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                )}

                {block.id === 'tu-futuro' && (
                  <div style={{ marginTop: '1.8rem' }}>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent('Hola, quisiera recibir información sobre las capacitaciones del Centro de Formación SHERIFF.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ padding: '0.9rem 1.8rem' }}
                    >
                      <MessageSquare size={18} />
                      <span>Consultar sobre Capacitaciones</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
