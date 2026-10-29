import React, { useState } from 'react';
import { MessageSquare, X, Shield, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    { label: 'Seguridad en Barrios Privados', text: 'Hola, me interesa conocer los servicios de seguridad y control para Barrios Privados.' },
    { label: 'Seguridad para Empresas / Comercio', text: 'Hola, quisiera cotizar vigilancia física para mi empresa o comercio.' },
    { label: 'Seguridad para Eventos / Entes', text: 'Hola, consulto por cobertura y custodia para un evento / predio.' },
    { label: 'Otra Consulta Inmediata', text: 'Hola, me comunico desde la web de Sheriff Seguridad para hacer una consulta.' }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: '25px',
      right: '25px',
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      fontFamily: 'var(--font-heading)'
    }}>
      {/* Ventana Desplegable de Opciones */}
      {isOpen && (
        <div className="glass-panel" style={{
          marginBottom: '1rem',
          width: '320px',
          background: 'rgba(8, 16, 10, 0.96)',
          border: '1px solid rgba(0, 230, 118, 0.4)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
          overflow: 'hidden',
          animation: 'fadeInUp 0.25s ease'
        }}>
          {/* Header del Widget */}
          <div style={{
            background: 'linear-gradient(135deg, #0d5f3a 0%, #052616 100%)',
            padding: '1.2rem',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{
                background: '#00e676',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#041208'
              }}>
                <Shield size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '0.95rem', display: 'block', lineHeight: 1.1 }}>SHERIFF Guardia 24hs</strong>
                <span style={{ fontSize: '0.72rem', color: '#bfe3cb' }}>Respuesta en línea inmediata</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '0.2rem'
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Opciones Rápidas */}
          <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#88a890', textTransform: 'uppercase', fontWeight: 700, paddingLeft: '0.3rem' }}>
              ¿En qué podemos ayudarte?
            </span>

            {quickOptions.map((opt, i) => (
              <a
                key={i}
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(opt.text)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.82rem',
                  color: '#e4eee6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                  fontWeight: 600
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 230, 118, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(0, 230, 118, 0.4)';
                  e.currentTarget.style.color = '#00e676';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#e4eee6';
                }}
              >
                <span>{opt.label}</span>
                <MessageSquare size={14} color="#00e676" />
              </a>
            ))}

            <div style={{
              marginTop: '0.5rem',
              paddingTop: '0.8rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'center'
            }}>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                style={{
                  fontSize: '0.78rem',
                  color: '#ffd700',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontWeight: 700
                }}
              >
                <PhoneCall size={13} />
                <span>O llamanos al {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Botón Principal Flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          border: '2px solid rgba(255, 255, 255, 0.25)',
          color: '#ffffff',
          boxShadow: '0 8px 30px rgba(37, 211, 102, 0.55)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Abrir WhatsApp de Sheriff Seguridad"
      >
        <span className="pulse-indicator" style={{
          position: 'absolute',
          top: '3px',
          right: '3px',
          width: '12px',
          height: '12px',
          background: '#ffffff',
          boxShadow: '0 0 10px #ffffff'
        }}></span>

        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
