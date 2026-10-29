import React from 'react';
import { ABOUT_PAGE_DATA, COMPANY_INFO } from '../data/servicesData';
import { Shield, Award, Users, Target, HeartHandshake, CheckCircle2, TrendingUp, Sparkles, MessageSquare } from 'lucide-react';

export default function AboutView() {
  return (
    <div style={{ paddingTop: '2rem' }}>
      {/* Hero Banner Acerca de */}
      <section style={{
        position: 'relative',
        padding: '5rem 0 4rem 0',
        background: 'linear-gradient(180deg, rgba(8, 25, 14, 0.8) 0%, rgba(6, 9, 7, 0.95) 100%)',
        borderBottom: '1px solid rgba(0, 230, 118, 0.2)'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="glass-badge" style={{ marginBottom: '1.2rem' }}>
            <Award size={16} />
            {ABOUT_PAGE_DATA.badge}
          </span>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            marginBottom: '1.2rem',
            lineHeight: 1.15
          }}>
            Liderazgo, Trayectoria & <br />
            <span className="gradient-text-green">Compromiso en Neuquén</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#c4dbca', lineHeight: 1.7, maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
            Más de 8 años construyendo seguridad y confianza para las principales familias, empresas e instituciones de la Patagonia.
          </p>

          {/* Tarjetas de Hitos / Trayectoria */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            textAlign: 'left'
          }}>
            <div className="glass-panel" style={{ padding: '1.5rem', border: '1px solid rgba(0, 230, 118, 0.3)' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#00e676', lineHeight: 1 }}>+8 Años</div>
              <div style={{ fontSize: '0.85rem', color: '#cbe2cf', marginTop: '0.4rem', fontWeight: 600 }}>Trayectoria Ininterrumpida</div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', border: '1px solid rgba(255, 215, 0, 0.3)' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#ffd700', lineHeight: 1 }}>Top 3</div>
              <div style={{ fontSize: '0.85rem', color: '#cbe2cf', marginTop: '0.4rem', fontWeight: 600 }}>Empresas Más Grandes de Neuquén</div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', border: '1px solid rgba(0, 230, 118, 0.3)' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#00e676', lineHeight: 1 }}>+35 Años</div>
              <div style={{ fontSize: '0.85rem', color: '#cbe2cf', marginTop: '0.4rem', fontWeight: 600 }}>Experiencia Estratégica en Seguridad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones Detalladas de Acerca de */}
      <section style={{ padding: '4.5rem 0', background: '#080d09' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '4.5rem'
          }}>
            {/* Foto Corporativa */}
            <div style={{ position: 'relative' }}>
              <div className="glass-panel" style={{
                overflow: 'hidden',
                padding: '0.5rem',
                border: '1px solid rgba(0, 230, 118, 0.3)'
              }}>
                <img
                  src="/assets/images/grupo-sheriff.png"
                  alt="Equipo de Sheriff Seguridad"
                  style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)' }}
                />
              </div>

              <div className="glass-panel" style={{
                position: 'absolute',
                bottom: '-20px',
                left: '20px',
                padding: '1rem 1.4rem',
                background: 'rgba(8, 22, 12, 0.95)',
                border: '1px solid var(--color-primary)'
              }}>
                <span style={{ fontSize: '0.75rem', color: '#97ba9c', textTransform: 'uppercase', fontWeight: 700 }}>Director General</span>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ffffff' }}>{COMPANY_INFO.director}</div>
              </div>
            </div>

            {/* Bloques de Texto */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {ABOUT_PAGE_DATA.sections.map((sec, idx) => (
                <div key={idx} style={{
                  paddingBottom: idx < ABOUT_PAGE_DATA.sections.length - 1 ? '1.5rem' : '0',
                  borderBottom: idx < ABOUT_PAGE_DATA.sections.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
                }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem' }}>
                    {sec.title}
                  </h3>
                  <p style={{ color: '#a7c2af', lineHeight: 1.7, fontSize: '0.96rem' }}>
                    {sec.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Misión Institucional */}
          <div className="glass-panel" style={{
            padding: '3rem',
            background: 'linear-gradient(135deg, rgba(12, 28, 17, 0.9) 0%, rgba(6, 12, 8, 0.95) 100%)',
            border: '2px solid rgba(0, 230, 118, 0.35)',
            marginBottom: '4.5rem',
            textAlign: 'center'
          }}>
            <span className="section-tag" style={{ justifyContent: 'center' }}>
              <Target size={16} />
              Propósito y Dirección
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', marginBottom: '1.2rem' }}>
              Nuestra Misión
            </h2>
            <p style={{
              fontSize: '1.18rem',
              color: '#d6ebd9',
              lineHeight: 1.8,
              maxWidth: '850px',
              margin: '0 auto',
              fontStyle: 'italic'
            }}>
              {ABOUT_PAGE_DATA.mission}
            </p>
          </div>

          {/* Nuestros Valores */}
          <div>
            <div className="section-title-wrap">
              <span className="section-tag">Pilares Morales y Operativos</span>
              <h2 className="section-title">
                Nuestros <span className="gradient-text-green">Valores Fundamentales</span>
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2rem'
            }}>
              {ABOUT_PAGE_DATA.values.map((val, i) => (
                <div
                  key={i}
                  className="glass-panel"
                  style={{
                    padding: '2.2rem 1.8rem',
                    background: 'rgba(12, 19, 14, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(0, 230, 118, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.2rem',
                    color: '#00e676',
                    fontWeight: 900,
                    fontSize: '1.2rem'
                  }}>
                    0{i + 1}
                  </div>

                  <h3 style={{ fontSize: '1.3rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.6rem' }}>
                    {val.title}
                  </h3>

                  <p style={{ color: '#9cb5a0', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
