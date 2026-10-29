import React, { useState } from 'react';
import { SERVICES, COMPANY_INFO } from '../data/servicesData';
import { CheckCircle2, MessageSquare, Shield, ArrowUpRight } from 'lucide-react';

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredServices = activeFilter === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => {
        if (activeFilter === 'residencial') return s.id === 'barrios-privados';
        if (activeFilter === 'comercial') return s.id === 'empresas-comercios';
        if (activeFilter === 'eventos') return s.id === 'entes-publicos-eventos';
        if (activeFilter === 'tecnologia') return s.id === 'tecnologia-vigilancia';
        return true;
      });

  return (
    <section id="servicios" className="section" style={{
      background: 'linear-gradient(180deg, #060907 0%, #0a110c 50%, #060907 100%)'
    }}>
      <div className="container">
        {/* Encabezado de Sección */}
        <div className="section-title-wrap">
          <span className="section-tag">
            <Shield size={16} />
            Especialización Operativa
          </span>
          <h2 className="section-title">
            Nuestros <span className="gradient-text-green">Servicios de Seguridad</span>
          </h2>
          <p className="section-subtitle">
            Soluciones de custodia, patrullaje y control de acceso adaptadas a los estándares más exigentes del sector residencial, comercial e institucional.
          </p>

          {/* Filtros de Categorías */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}>
            {[
              { id: 'all', label: 'Todos los Servicios' },
              { id: 'residencial', label: 'Barrios Privados' },
              { id: 'comercial', label: 'Empresas y Comercios' },
              { id: 'eventos', label: 'Entes Públicos & Eventos' },
              { id: 'tecnologia', label: 'Vigilancia Tecnológica' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  background: activeFilter === f.id ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.05)',
                  color: activeFilter === f.id ? '#041208' : '#c3d4c6',
                  border: activeFilter === f.id ? '1px solid var(--color-primary)' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.5rem 1.2rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla de Servicios */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                background: 'rgba(14, 22, 16, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative'
              }}
            >
              {/* Contenedor de Imagen con Overlay y Badge */}
              <div style={{
                position: 'relative',
                height: '240px',
                overflow: 'hidden',
                background: '#0a100b'
              }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(6,9,7,0.85) 100%)'
                }}></div>

                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px'
                }}>
                  <span className="glass-badge" style={{
                    background: 'rgba(5, 18, 10, 0.85)',
                    backdropFilter: 'blur(8px)',
                    fontSize: '0.75rem'
                  }}>
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
              }}>
                <h3 style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  marginBottom: '0.5rem',
                  color: '#ffffff'
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.92rem',
                  color: '#00e676',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>
                  {service.tagline}
                </p>

                <p style={{
                  fontSize: '0.92rem',
                  color: '#9db3a2',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  {service.summary}
                </p>

                {/* Lista de Features con Checks */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  marginBottom: '2rem',
                  flexGrow: 1
                }}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      fontSize: '0.88rem',
                      color: '#cdddd1'
                    }}>
                      <CheckCircle2 size={16} color="#00e676" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Acciones de la Tarjeta */}
                <div style={{
                  display: 'flex',
                  gap: '0.8rem',
                  marginTop: 'auto',
                  paddingTop: '1.2rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hola,%20solicito%20presupuesto%20y%20asesoramiento%20para%20el%20servicio%20de%20*${encodeURIComponent(service.title)}*.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{
                      flex: 1,
                      fontSize: '0.88rem',
                      padding: '0.75rem 1rem'
                    }}
                  >
                    <MessageSquare size={16} />
                    <span>Consultar Ahora</span>
                  </a>

                  <a
                    href="#cotizador"
                    className="btn btn-secondary"
                    style={{
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    title="Cotizar en vivo"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
