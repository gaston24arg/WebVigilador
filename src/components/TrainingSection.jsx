import React from 'react';
import { TRAINING_TOPICS, COMPANY_INFO } from '../data/servicesData';
import { HeartPulse, ShieldCheck, ScanFace, FileCheck, GraduationCap, ArrowRight } from 'lucide-react';

export default function TrainingSection() {
  const getTopicIcon = (name) => {
    switch (name) {
      case 'HeartPulse': return <HeartPulse size={30} color="#00e676" />;
      case 'ShieldCheck': return <ShieldCheck size={30} color="#00e676" />;
      case 'ScanFace': return <ScanFace size={30} color="#00e676" />;
      case 'FileCheck': return <FileCheck size={30} color="#00e676" />;
      default: return <GraduationCap size={30} color="#00e676" />;
    }
  };

  return (
    <section id="capacitaciones" className="section" style={{
      background: 'linear-gradient(180deg, #060907 0%, #08110b 50%, #060907 100%)'
    }}>
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">
            <GraduationCap size={16} />
            Formación Continua y Excelencia
          </span>
          <h2 className="section-title">
            Capacitaciones de <span className="gradient-text-green">Nuestro Personal</span>
          </h2>
          <p className="section-subtitle">
            Un servicio de seguridad eficaz depende de la preparación de sus recursos humanos. Todo nuestro equipo atraviesa programas de instrucción continua bajo estándares rigurosos.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>
          {TRAINING_TOPICS.map((topic, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '2.2rem 1.8rem',
                background: 'rgba(13, 22, 16, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                background: 'rgba(0, 230, 118, 0.08)',
                width: '64px',
                height: '64px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(0, 230, 118, 0.25)'
              }}>
                {getTopicIcon(topic.icon)}
              </div>

              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.3
              }}>
                {topic.title}
              </h3>

              <p style={{
                fontSize: '0.92rem',
                color: '#9cb1a0',
                lineHeight: 1.6
              }}>
                {topic.desc}
              </p>

              <div style={{
                marginTop: 'auto',
                paddingTop: '0.8rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#00e676',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}>
                <span>Programa Homologado</span>
                &bull;
                <span>100% Activo</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA para eventos y empresas */}
        <div className="glass-panel" style={{
          background: 'linear-gradient(135deg, rgba(13, 95, 58, 0.35) 0%, rgba(5, 38, 22, 0.8) 100%)',
          border: '1px solid rgba(0, 230, 118, 0.35)',
          padding: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          borderRadius: 'var(--radius-lg)'
        }}>
          <div style={{ maxWidth: '650px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.4rem' }}>
              ¿Organizas un evento masivo o necesitas personal calificado?
            </h3>
            <p style={{ color: '#c4dbca', fontSize: '0.95rem' }}>
              Disponemos de equipos especializados en control de accesos, custodia y respuesta sanitaria primaria en Neuquén y alrededores.
            </p>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hola,%20quisiera%20solicitar%20personal%20de%20seguridad%20capacitado%20para%20un%20evento%20o%20instalación.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.9rem 1.8rem', flexShrink: 0 }}
          >
            <span>Consultar Disponibilidad</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
