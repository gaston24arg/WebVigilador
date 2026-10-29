import React from 'react';
import { COMPANY_INFO } from '../data/servicesData';
import { ShieldCheck, Award, FileBadge, Check, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="empresa" className="section" style={{
      background: 'radial-gradient(circle at 80% 20%, rgba(13, 95, 58, 0.18) 0%, #060907 70%)',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Columna Izquierda: Fotos y Respaldo Visual */}
          <div style={{ position: 'relative' }}>
            <div className="glass-panel" style={{
              overflow: 'hidden',
              padding: '0.6rem',
              background: 'rgba(10, 16, 11, 0.85)',
              border: '1px solid rgba(0, 230, 118, 0.3)',
              position: 'relative'
            }}>
              <img
                src="/assets/images/grupo-sheriff.png"
                alt="Equipo Oficial de Sheriff Seguridad"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--radius-md)',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Badge Flotante de Habilitación Ministerial */}
            <div className="glass-panel" style={{
              position: 'absolute',
              bottom: '-25px',
              right: '-15px',
              background: 'rgba(8, 22, 13, 0.95)',
              border: '1px solid var(--color-primary)',
              boxShadow: '0 10px 30px rgba(0, 230, 118, 0.3)',
              padding: '1.2rem 1.6rem',
              maxWidth: '300px',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                background: 'rgba(0, 230, 118, 0.15)',
                padding: '0.75rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Award size={32} color="#00e676" />
              </div>
              <div>
                <div style={{
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#9ebd9f',
                  fontWeight: 700
                }}>
                  Resolución Oficial
                </div>
                <div style={{
                  fontSize: '1.2rem',
                  fontWeight: 900,
                  color: '#ffffff'
                }}>
                  N°: 0527
                </div>
                <div style={{
                  fontSize: '0.7rem',
                  color: '#00e676',
                  fontWeight: 600
                }}>
                  Gobierno de Neuquén
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Información Institucional y Cita */}
          <div>
            <span className="section-tag">
              <FileBadge size={16} />
              Aval Institucional y Trayectoria
            </span>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              Los Mejores Profesionales <br />
              <span className="gradient-text-green">A Su Servicio</span>
            </h2>

            <div style={{
              padding: '1rem 1.4rem',
              background: 'rgba(0, 230, 118, 0.06)',
              borderLeft: '4px solid var(--color-primary)',
              borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
              marginBottom: '1.8rem'
            }}>
              <p style={{
                fontSize: '0.95rem',
                color: '#e0eee3',
                fontWeight: 600,
                lineHeight: 1.5
              }}>
                {COMPANY_INFO.resolutionNumber} &bull; {COMPANY_INFO.resolutionAuthority}
              </p>
            </div>

            <p style={{
              fontSize: '1.05rem',
              color: '#c2d6c6',
              lineHeight: 1.7,
              marginBottom: '2rem'
            }}>
              {COMPANY_INFO.description}
            </p>

            {/* Cita de Luis Ariel Hernandez */}
            <div className="glass-panel" style={{
              padding: '1.6rem',
              background: 'rgba(14, 23, 17, 0.75)',
              marginBottom: '2rem',
              border: '1px solid rgba(255, 215, 0, 0.25)'
            }}>
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontStyle: 'italic',
                color: '#ffffff',
                lineHeight: 1.5,
                marginBottom: '0.8rem'
              }}>
                “{COMPANY_INFO.quote}”
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}>
                <div style={{ width: '25px', height: '2px', background: 'var(--color-accent-gold)' }}></div>
                <span style={{
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  color: 'var(--color-accent-gold)',
                  letterSpacing: '0.04em'
                }}>
                  {COMPANY_INFO.director}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#889f8b' }}>&bull; Director Operativo</span>
              </div>
            </div>

            {/* Puntos Clave */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}>
              {[
                { title: "Seguridad Habilitada", desc: "Marco legal 100% formal" },
                { title: "Respuesta Inmediata", desc: "Monitoreo 24/7/365" },
                { title: "Personal Homologado", desc: "Entrenado y asegurado" },
                { title: "Optimización de Costos", desc: "Procesos de alta eficiencia" }
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <div style={{
                    background: 'rgba(0, 230, 118, 0.1)',
                    padding: '0.3rem',
                    borderRadius: '4px',
                    marginTop: '2px'
                  }}>
                    <Check size={14} color="#00e676" />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem', color: '#ffffff' }}>{p.title}</strong>
                    <span style={{ fontSize: '0.78rem', color: '#8aa18e' }}>{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
