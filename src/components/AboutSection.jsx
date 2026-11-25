import React from 'react';
import { COMPANY_INFO } from '../data/servicesData';

// Secciones 3 y 4 de INICIO: Cita del Director + Retrato y "Los mejores profesionales a su servicio" + Foto grupal
export default function AboutSection() {
  return (
    <>
      {/* Sección 3: Cita testimonial y retrato oficial de Luis Ariel Hernandez */}
      <section style={{
        background: 'var(--color-olive-bg)',
        padding: '4.5rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            {/* Columna izquierda: tarjeta de cita en verde oscuro #024427 */}
            <div style={{
              background: 'var(--color-forest-card)',
              border: '1px solid rgba(229, 230, 0, 0.28)',
              borderRadius: 'var(--radius-lg)',
              padding: '3rem 2.4rem',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <blockquote style={{
                margin: 0,
                fontSize: 'clamp(1.2rem, 2.3vw, 1.55rem)',
                fontWeight: 700,
                fontStyle: 'italic',
                color: '#ffffff',
                lineHeight: 1.6,
                marginBottom: '1.8rem'
              }}>
                “ {COMPANY_INFO.quote} ”
              </blockquote>

              <div style={{
                width: '70px',
                height: '3px',
                background: 'var(--color-brand-yellow)',
                marginBottom: '0.9rem'
              }}></div>

              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 900,
                color: 'var(--color-brand-yellow)',
                letterSpacing: '-0.01em'
              }}>
                {COMPANY_INFO.director}
              </h2>
            </div>

            {/* Columna derecha: retrato original del director */}
            <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '2px solid rgba(229, 230, 0, 0.25)',
                boxShadow: 'var(--shadow-lg)',
                maxWidth: '520px',
                width: '100%'
              }}>
                <img
                  src={COMPANY_INFO.directorImage}
                  alt={`Retrato de ${COMPANY_INFO.director} - SHERIFF Seguridad S.R.L.`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: "Los mejores profesionales a su servicio" + foto grupal del equipo */}
      <section style={{
        background: 'var(--bg-pure-black)',
        padding: '5rem 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* Columna izquierda: texto institucional y habilitación ministerial */}
            <div>
              <h2 style={{
                fontSize: 'clamp(1.85rem, 3.6vw, 2.45rem)',
                fontWeight: 900,
                color: '#ffffff',
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}>
                Los mejores profesionales a su servicio
              </h2>

              <div style={{
                padding: '1rem 1.25rem',
                background: 'rgba(92, 184, 72, 0.12)',
                borderLeft: '4px solid var(--color-brand-yellow)',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                marginBottom: '1.5rem'
              }}>
                <p style={{
                  color: 'var(--color-brand-yellow)',
                  fontWeight: 800,
                  fontSize: '1rem',
                  lineHeight: 1.5
                }}>
                  Empresa habilitada por {COMPANY_INFO.resolutionNumber} &bull; {COMPANY_INFO.resolutionAuthority}
                </p>
              </div>

              <p style={{
                color: '#dce8de',
                fontSize: '1.05rem',
                lineHeight: 1.75,
                fontWeight: 500
              }}>
                {COMPANY_INFO.description}
              </p>
            </div>

            {/* Columna derecha: fotografía grupal original */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '2px solid rgba(92, 184, 72, 0.35)',
                boxShadow: 'var(--shadow-lg)',
                maxWidth: '540px',
                width: '100%'
              }}>
                <img
                  src={COMPANY_INFO.teamImage}
                  alt="Equipo operativo de SHERIFF Seguridad S.R.L. en reunión técnica"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
