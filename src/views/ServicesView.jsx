import React, { useState } from 'react';
import { SERVICES_PAGE_DATA, COMPANY_INFO } from '../data/servicesData';
import { ShieldCheck, MessageSquare, Check, Car, Sparkles, Eye, Users2, ShieldAlert, ArrowRight } from 'lucide-react';
import QuoteCalculator from '../components/QuoteCalculator';

export default function ServicesView() {
  const [selectedService, setSelectedService] = useState('all');

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert size={26} color="#00e676" />;
      case 'Eye': return <Eye size={26} color="#00e676" />;
      case 'Users2': return <Users2 size={26} color="#00e676" />;
      case 'Car': return <Car size={26} color="#00e676" />;
      case 'Sparkles': return <Sparkles size={26} color="#00e676" />;
      default: return <ShieldCheck size={26} color="#00e676" />;
    }
  };

  const categories = selectedService === 'all'
    ? SERVICES_PAGE_DATA.categories
    : SERVICES_PAGE_DATA.categories.filter(c => c.id === selectedService);

  return (
    <div style={{ paddingTop: '2rem' }}>
      {/* Header Banner de Servicios */}
      <section style={{
        position: 'relative',
        padding: '5rem 0 3.5rem 0',
        background: 'linear-gradient(180deg, rgba(8, 25, 14, 0.8) 0%, rgba(6, 9, 7, 0.95) 100%)',
        borderBottom: '1px solid rgba(0, 230, 118, 0.2)'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="glass-badge" style={{ marginBottom: '1.2rem' }}>
            <ShieldCheck size={16} />
            Pestaña Oficial de Servicios
          </span>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            marginBottom: '1.2rem',
            lineHeight: 1.15
          }}>
            Servicios de <span className="gradient-text-green">Seguridad & Operatividad</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#c4dbca', lineHeight: 1.7, marginBottom: '2rem' }}>
            {SERVICES_PAGE_DATA.heroSubtitle}
          </p>

          {/* Filtros Rápidos */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setSelectedService('all')}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                background: selectedService === 'all' ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.05)',
                color: selectedService === 'all' ? '#041208' : '#ffffff',
                border: '1px solid rgba(0, 230, 118, 0.3)',
                transition: 'all 0.2s'
              }}
            >
              Todos los Servicios (5)
            </button>

            {SERVICES_PAGE_DATA.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedService(cat.id)}
                style={{
                  padding: '0.6rem 1.2rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: selectedService === cat.id ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.05)',
                  color: selectedService === cat.id ? '#041208' : '#c2d6c6',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.2s'
                }}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bloque Institucional de Servicios (Texto textual de WordPress) */}
      <section style={{ padding: '3.5rem 0', background: '#070c08' }}>
        <div className="container">
          <div className="glass-panel" style={{
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(13, 95, 58, 0.15) 0%, rgba(6, 12, 8, 0.9) 100%)',
            border: '1px solid rgba(0, 230, 118, 0.3)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#00e676', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em' }}>
                Protección Profesional y Confiable
              </span>
              <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginTop: '0.4rem', marginBottom: '1rem', fontWeight: 900 }}>
                Sheriff S.R.L.
              </h2>
              <p style={{ color: '#d0e3d4', lineHeight: 1.7, fontSize: '0.98rem' }}>
                {SERVICES_PAGE_DATA.intro}
              </p>
            </div>

            <div style={{
              background: 'rgba(0,0,0,0.4)',
              padding: '1.8rem',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--color-primary)'
            }}>
              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.6rem', fontWeight: 800 }}>
                Nuestros Pilares Operativos
              </h3>
              <p style={{ color: '#a2bca8', fontSize: '0.92rem', lineHeight: 1.6 }}>
                {SERVICES_PAGE_DATA.pillars}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo Extendido de Servicios */}
      <section style={{ padding: '4rem 0', background: '#060907' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {categories.map((service, index) => (
              <div
                key={service.id}
                className="glass-panel"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                  overflow: 'hidden',
                  background: 'rgba(12, 19, 14, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.6)'
                }}
              >
                {/* Imagen del Servicio */}
                <div style={{
                  position: 'relative',
                  minHeight: '320px',
                  overflow: 'hidden',
                  order: index % 2 === 1 ? 2 : 1
                }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(6, 9, 7, 0.75) 100%)'
                  }}></div>
                </div>

                {/* Contenido Detallado */}
                <div style={{
                  padding: '3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  order: index % 2 === 1 ? 1 : 2
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                    <div style={{
                      background: 'rgba(0, 230, 118, 0.12)',
                      padding: '0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(0, 230, 118, 0.3)'
                    }}>
                      {getServiceIcon(service.icon)}
                    </div>
                    <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#ffffff' }}>
                      {service.title}
                    </h3>
                  </div>

                  <p style={{ fontSize: '1rem', color: '#c5d8ca', lineHeight: 1.7, marginBottom: '1.8rem' }}>
                    {service.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.2rem' }}>
                    {service.items.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', color: '#e0eee3', fontSize: '0.92rem' }}>
                        <Check size={18} color="#00e676" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hola,%20quisiera%20solicitar%20presupuesto%20y%20asesoramiento%20para%20el%20servicio%20de%20*${encodeURIComponent(service.title)}*.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ padding: '0.85rem 1.6rem' }}
                    >
                      <MessageSquare size={18} />
                      <span>Cotizar por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cotizador Integrado */}
      <QuoteCalculator />
    </div>
  );
}
