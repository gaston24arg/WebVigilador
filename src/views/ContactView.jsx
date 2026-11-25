import React from 'react';
import { CONTACT_PAGE_DATA, COMPANY_INFO } from '../data/servicesData';
import { Phone, Mail, MapPin, MessageSquare, AlertTriangle } from 'lucide-react';

// Pestaña CONTACTOS: replica las 2 secciones y el banner original contactos-hero.jpg (/contact-2/)
export default function ContactView() {
  return (
    <div>
      {/* Sección 1: Banner principal con imagen original contactos-hero.jpg */}
      <section style={{
        position: 'relative',
        padding: '6.5rem 0 5.5rem 0',
        backgroundImage: `url(${CONTACT_PAGE_DATA.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '2px solid rgba(229, 230, 0, 0.25)'
      }}>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(27, 48, 22, 0.72)'
          }}
        ></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '840px' }}>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 900,
            color: '#ffffff',
            textTransform: 'uppercase',
            lineHeight: 1.15
          }}>
            {CONTACT_PAGE_DATA.heroTitle}
          </h1>
        </div>
      </section>

      {/* Sección 2: Marco verde oscuro #1b3016 con interior 2 columnas en negro #000000 */}
      <section style={{
        background: 'var(--color-olive-deep)',
        padding: '4.5rem 0'
      }}>
        <div className="container">
          <div style={{
            background: 'var(--bg-pure-black)',
            border: '1px solid rgba(229, 230, 0, 0.25)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            boxShadow: 'var(--shadow-lg)'
          }}>
            {/* Columna izquierda: Puedes Encontrarnos En */}
            <div>
              <h2 style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.1rem)',
                fontWeight: 900,
                color: 'var(--color-brand-yellow)',
                textTransform: 'uppercase',
                marginBottom: '2rem'
              }}>
                {CONTACT_PAGE_DATA.findUsTitle}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                <div>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    color: 'var(--color-forest-accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '0.35rem'
                  }}>
                    <Phone size={15} />
                    Teléfono o WhatsApp
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    style={{ display: 'block', fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.85rem' }}
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <a
                    href={COMPANY_INFO.whatsappDefaultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem' }}
                  >
                    <MessageSquare size={18} />
                    <span>Escribir por WhatsApp</span>
                  </a>
                </div>

                <div>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    color: 'var(--color-forest-accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '0.35rem'
                  }}>
                    <Mail size={15} />
                    Email
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>

                <div>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    color: 'var(--color-forest-accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '0.35rem'
                  }}>
                    <MapPin size={15} />
                    Dirección
                  </span>
                  <p style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase' }}>
                    {COMPANY_INFO.address}
                  </p>
                  <p style={{ color: '#d8e3da', fontSize: '0.95rem', marginTop: '0.35rem', fontWeight: 600 }}>
                    Atención: {COMPANY_INFO.hoursOffice}
                  </p>
                </div>
              </div>
            </div>

            {/* Columna derecha: Requisitos para ingresar como Vigilador */}
            <div style={{
              borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
              paddingLeft: 'clamp(0rem, 2vw, 2rem)'
            }}>
              <h2 style={{
                fontSize: 'clamp(1.55rem, 3vw, 2rem)',
                fontWeight: 900,
                color: '#ffffff',
                marginBottom: '1.6rem',
                lineHeight: 1.25
              }}>
                {CONTACT_PAGE_DATA.requirementsTitle}
              </h2>

              <ol style={{
                paddingLeft: '1.35rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.95rem',
                color: '#f2f5f3',
                fontSize: '0.98rem',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}>
                {CONTACT_PAGE_DATA.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ol>

              {/* Notas obligatorias en rojo de alto contraste */}
              <div style={{
                background: 'rgba(213, 62, 62, 0.14)',
                border: '1px solid rgba(255, 107, 107, 0.45)',
                borderRadius: 'var(--radius-md)',
                padding: '1.3rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-danger-text)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  fontSize: '0.88rem'
                }}>
                  <AlertTriangle size={18} />
                  <span>Importante</span>
                </div>
                {CONTACT_PAGE_DATA.requirementsNotes.map((note, idx) => (
                  <p
                    key={idx}
                    style={{
                      color: '#ff9494',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      lineHeight: 1.5
                    }}
                  >
                    * {note}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
