import React from 'react';
import { TRAINING_PAGE_DATA, COMPANY_INFO } from '../data/servicesData';
import { Award, ShieldCheck, Cpu, Scale, HeartPulse, GraduationCap, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

export default function TrainingView() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu': return <Cpu size={28} color="#00e676" />;
      case 'Scale': return <Scale size={28} color="#ffd700" />;
      case 'HeartPulse': return <HeartPulse size={28} color="#00e676" />;
      default: return <ShieldCheck size={28} color="#00e676" />;
    }
  };

  return (
    <div style={{ paddingTop: '2rem' }}>
      {/* Hero Banner de Capacitaciones */}
      <section style={{
        position: 'relative',
        padding: '5rem 0 4rem 0',
        background: 'linear-gradient(180deg, rgba(13, 95, 58, 0.4) 0%, rgba(6, 9, 7, 0.95) 100%)',
        borderBottom: '1px solid rgba(0, 230, 118, 0.2)'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
          <div className="glass-badge" style={{
            padding: '0.6rem 1.4rem',
            marginBottom: '1.5rem',
            background: 'rgba(8, 28, 16, 0.85)',
            border: '1px solid var(--color-primary)'
          }}>
            <Award size={18} color="#00e676" />
            <span>{TRAINING_PAGE_DATA.badge}</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            marginBottom: '1.2rem',
            lineHeight: 1.15
          }}>
            Centro de Capacitación <br />
            <span className="gradient-text-green">Oficial SHERIFF</span>
          </h1>

          <p style={{ fontSize: '1.18rem', color: '#d5e7dc', lineHeight: 1.7, maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            Marcamos un hito en la seguridad privada al ser el único centro formador homologado ministerialmente en la provincia para instruir a la nueva generación de vigiladores.
          </p>

          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hola,%20quisiera%20recibir%20información%20sobre%20las%20capacitaciones%20y%20cursos%20del%20Centro%20de%20Formación%20SHERIFF.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary shimmer-effect"
            style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
          >
            <span>Consultar Cursos y Capacitaciones</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Hito Histórico y Aval Público */}
      <section style={{ padding: '4.5rem 0', background: '#080d09' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="section-tag">
                <GraduationCap size={16} />
                Pioneros en la Patagonia
              </span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#ffffff', marginBottom: '1.2rem', lineHeight: 1.2 }}>
                {TRAINING_PAGE_DATA.milestoneTitle}
              </h2>

              <p style={{ fontSize: '1.1rem', color: '#00e676', fontWeight: 700, lineHeight: 1.6, marginBottom: '1.2rem' }}>
                {TRAINING_PAGE_DATA.milestoneText}
              </p>

              <p style={{ fontSize: '1rem', color: '#a8c2af', lineHeight: 1.7, marginBottom: '2rem' }}>
                {TRAINING_PAGE_DATA.milestoneDesc}
              </p>

              <div style={{
                background: 'rgba(0, 230, 118, 0.08)',
                borderLeft: '4px solid var(--color-primary)',
                padding: '1.2rem 1.5rem',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0'
              }}>
                <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.3rem', fontSize: '1.05rem' }}>
                  Formación Integral Homologada
                </strong>
                <span style={{ color: '#c3dac7', fontSize: '0.9rem' }}>
                  Habilitado por resolución del Ministerio de Seguridad de Neuquén bajo los más estrictos marcos pedagógicos y operativos.
                </span>
              </div>
            </div>

            {/* Tarjeta con Escudo de Reconocimiento */}
            <div className="glass-panel" style={{
              padding: '3rem',
              background: 'linear-gradient(135deg, rgba(12, 26, 17, 0.95) 0%, rgba(6, 12, 8, 0.95) 100%)',
              border: '2px solid rgba(0, 230, 118, 0.4)',
              textAlign: 'center',
              boxShadow: '0 20px 50px rgba(0,0,0,0.7)'
            }}>
              <img
                src="/assets/images/primer-premio.png"
                alt="Reconocimiento Oficial"
                style={{
                  width: '120px',
                  height: 'auto',
                  margin: '0 auto 1.5rem auto',
                  filter: 'drop-shadow(0 0 20px rgba(0, 230, 118, 0.4))'
                }}
              />
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 900, marginBottom: '0.5rem' }}>
                Centro de Capacitación N° 1
              </h3>
              <p style={{ color: '#ffd700', fontSize: '0.92rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.2rem' }}>
                Aval Público Ministerial
              </p>
              <p style={{ color: '#a2bda9', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Garantizamos que el 100% de nuestros vigiladores cuenten con la matrícula y preparación técnica exigida por ley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos Formativos */}
      <section style={{ padding: '4.5rem 0', background: '#060907' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">Ecosistema Educativo</span>
            <h2 className="section-title">
              Plan de Estudios & <span className="gradient-text-green">Módulos de Formación</span>
            </h2>
            <p className="section-subtitle">
              {TRAINING_PAGE_DATA.formationText}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {TRAINING_PAGE_DATA.modules.map((mod, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '2.4rem 2rem',
                  background: 'rgba(12, 19, 14, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(0, 230, 118, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(0, 230, 118, 0.25)'
                }}>
                  {getIcon(mod.icon)}
                </div>

                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#00e676',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}>
                  {mod.hours}
                </div>

                <h3 style={{ fontSize: '1.3rem', color: '#ffffff', fontWeight: 800 }}>
                  {mod.title}
                </h3>

                <p style={{ color: '#9cb3a1', fontSize: '0.92rem', lineHeight: 1.6, flexGrow: 1 }}>
                  {mod.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#cbe0cf', fontSize: '0.82rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} color="#00e676" />
                  <span>Certificación con Examen Final</span>
                </div>
              </div>
            ))}
          </div>

          {/* Cita de Crecimiento y Futuro */}
          <div className="glass-panel" style={{
            padding: '3rem',
            background: 'linear-gradient(135deg, rgba(8, 25, 14, 0.9) 0%, rgba(5, 16, 9, 0.9) 100%)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <h3 style={{ fontSize: '1.6rem', color: '#ffffff', fontWeight: 900, marginBottom: '1.2rem' }}>
              {TRAINING_PAGE_DATA.futureTitle}
            </h3>
            <p style={{
              fontSize: '1.12rem',
              color: '#dbeee0',
              fontStyle: 'italic',
              lineHeight: 1.7,
              marginBottom: '2rem'
            }}>
              {TRAINING_PAGE_DATA.futureQuote}
            </p>

            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hola,%20deseo%20consultar%20por%20capacitaciones%20de%20seguridad%20privada.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '0.9rem 2rem' }}
            >
              <MessageSquare size={18} />
              <span>Contactar al Departamento Académico</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
