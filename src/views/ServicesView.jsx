import React from 'react';
import { SERVICES_PAGE_DATA, COMPANY_INFO } from '../data/servicesData';
import { MessageSquare } from 'lucide-react';
import QuoteCalculator from '../components/QuoteCalculator';

// Pestaña SERVICIOS: replica las 7 secciones y todas las imágenes originales (/inicio/)
export default function ServicesView() {
  return (
    <div>
      {/* Sección 1: Banner principal con imagen original servicios-hero.png */}
      <section style={{
        position: 'relative',
        padding: '6.5rem 0 5.5rem 0',
        backgroundImage: `url(${SERVICES_PAGE_DATA.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '2px solid rgba(229, 230, 0, 0.25)'
      }}>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(8, 13, 6, 0.62) 0%, rgba(8, 13, 6, 0.82) 100%)'
          }}
        ></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '880px' }}>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 900,
            color: '#ffffff',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            lineHeight: 1.15
          }}>
            {SERVICES_PAGE_DATA.heroTitle}
          </h1>
          <p style={{
            fontSize: '1.12rem',
            color: '#e5efe7',
            lineHeight: 1.7,
            maxWidth: '720px',
            margin: '0 auto'
          }}>
            {SERVICES_PAGE_DATA.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Sección 2: Franja de 4 íconos originales (#1b3016) */}
      <section style={{
        background: 'var(--color-olive-deep)',
        padding: '3rem 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            {SERVICES_PAGE_DATA.iconStrip.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.9rem',
                  padding: '1.2rem'
                }}
              >
                <div style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(229, 230, 0, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.8rem'
                }}>
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{ width: '54px', height: '54px', objectFit: 'contain' }}
                  />
                </div>
                <h2 style={{
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  textTransform: 'uppercase'
                }}>
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 3: "Seguridad en Todas Partes" — 4 tarjetas fotográficas originales (#1b3014) */}
      <section style={{
        background: 'var(--color-olive-bg)',
        padding: '4.8rem 0'
      }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(1.9rem, 4vw, 2.7rem)',
            fontWeight: 900,
            color: 'var(--color-brand-yellow)',
            textTransform: 'uppercase',
            marginBottom: '3rem'
          }}>
            {SERVICES_PAGE_DATA.everywhereTitle}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.8rem'
          }}>
            {SERVICES_PAGE_DATA.everywhereCards.map((card) => (
              <article
                key={card.id}
                className="glass-panel"
                style={{
                  background: 'rgba(8, 13, 6, 0.85)',
                  border: '1px solid rgba(229, 230, 0, 0.2)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ width: '100%', aspectRatio: '3 / 4', overflow: 'hidden', background: '#080d06' }}>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
                <div style={{ padding: '1.25rem 1rem', textAlign: 'center' }}>
                  <h3 style={{
                    fontSize: '1.05rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    textTransform: 'uppercase'
                  }}>
                    {card.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 4: "Protección Profesional y Confiable para su Tranquilidad." (#000000) */}
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
            <div>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.6vw, 2.5rem)',
                fontWeight: 900,
                color: '#ffffff',
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}>
                {SERVICES_PAGE_DATA.protectionBlock.title}
              </h2>
              {SERVICES_PAGE_DATA.protectionBlock.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  style={{
                    color: '#dce8de',
                    fontSize: '1rem',
                    lineHeight: 1.75,
                    marginBottom: idx === 0 ? '1.2rem' : 0
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid rgba(229, 230, 0, 0.25)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <img
                src={SERVICES_PAGE_DATA.protectionBlock.image}
                alt="Planificación operativa y monitoreo en Sheriff Seguridad"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Secciones 5, 6 y 7: Alquiler de Vehículos, Servicio de Maestranza y Vigilancia Electrónica */}
      {SERVICES_PAGE_DATA.featuredServices.map((service) => {
        const isImageLeft = service.imagePosition === 'left';
        return (
          <section
            key={service.id}
            style={{
              background: service.bgColor,
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
                {/* Imagen del servicio */}
                <div style={{
                  order: isImageLeft ? 1 : 2,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    maxWidth: '380px',
                    width: '100%',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '2px solid rgba(229, 230, 0, 0.28)',
                    boxShadow: 'var(--shadow-lg)'
                  }}>
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                  </div>
                </div>

                {/* Descripción del servicio */}
                <div style={{ order: isImageLeft ? 2 : 1 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.85rem, 3.6vw, 2.5rem)',
                    fontWeight: 900,
                    color: 'var(--color-brand-yellow)',
                    marginBottom: '1.3rem',
                    textTransform: 'uppercase'
                  }}>
                    {service.title}
                  </h2>

                  {service.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      style={{
                        color: '#edf5ef',
                        fontSize: '1.02rem',
                        lineHeight: 1.75,
                        marginBottom: '1rem'
                      }}
                    >
                      {p}
                    </p>
                  ))}

                  <div style={{ marginTop: '1.6rem' }}>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(`Hola, quisiera solicitar presupuesto y asesoramiento para ${service.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ padding: '0.85rem 1.6rem' }}
                    >
                      <MessageSquare size={18} />
                      <span>Consultar por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Cotizador rápido adicional de la nueva versión */}
      <QuoteCalculator />
    </div>
  );
}
