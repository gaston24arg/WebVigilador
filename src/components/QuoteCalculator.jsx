import React, { useState } from 'react';
import { Calculator, Shield, MessageSquare, Check, Sparkles, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';
import confetti from 'canvas-confetti';

export default function QuoteCalculator() {
  const [serviceType, setServiceType] = useState('barrio');
  const [coverageHours, setCoverageHours] = useState('24h');
  const [guardsCount, setGuardsCount] = useState(2);
  const [includePatrol, setIncludePatrol] = useState(true);
  const [includeAccessControl, setIncludeAccessControl] = useState(true);
  const [includeRCP, setIncludeRCP] = useState(true);
  const [clientName, setClientName] = useState('');
  const [clientLocation, setClientLocation] = useState('Neuquén Capital');

  const serviceNames = {
    barrio: 'Barrio Privado / Country',
    empresa: 'Empresa / Planta Industrial / Depósito',
    comercio: 'Comercio / Centro de Distribución',
    evento: 'Evento Masivo / Ente Público',
    otro: 'Custodia Personalizada'
  };

  const coverageNames = {
    '24h': 'Servicio Integral 24 Horas / 365 Días',
    'nocturno': 'Solo Turno Nocturno y Fines de Semana (12hs)',
    'diurno': 'Turno Diurno Comercial (8hs a 12hs)',
    'evento': 'Jornada por Evento (Horas puntuales)'
  };

  const generateWhatsAppMessage = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });

    const lines = [
      `*SOLICITUD DE COTIZACIÓN - SHERIFF SEGURIDAD*`,
      `---------------------------------------`,
      `*Cliente/Contacto:* ${clientName || 'Particular/Empresa'}`,
      `*Ubicación:* ${clientLocation}`,
      `*Tipo de Servicio:* ${serviceNames[serviceType]}`,
      `*Modalidad de Cobertura:* ${coverageNames[coverageHours]}`,
      `*Cantidad de Puestos/Guardias:* ${guardsCount}`,
      `*Requerimientos Adicionales:*`,
      `- Patrullaje Móvil: ${includePatrol ? 'Sí' : 'No'}`,
      `- Control de Accesos Computarizado: ${includeAccessControl ? 'Sí' : 'No'}`,
      `- Personal Certificado RCP/Primeros Auxilios: ${includeRCP ? 'Sí' : 'No'}`,
      `---------------------------------------`,
      `Hola, me gustaría recibir una propuesta formal y presupuesto para esta configuración. ¡Muchas gracias!`
    ];

    const encoded = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encoded}`, '_blank');
  };

  return (
    <section id="cotizador" className="section" style={{
      background: 'radial-gradient(circle at 20% 50%, rgba(13, 95, 58, 0.22) 0%, #060907 80%)'
    }}>
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">
            <Calculator size={16} />
            Herramienta Exclusiva Online
          </span>
          <h2 className="section-title">
            Cotizador de <span className="gradient-text-green">Seguridad en Vivo</span>
          </h2>
          <p className="section-subtitle">
            Configurá tu necesidad de seguridad en segundos y obtené una propuesta personalizada enviada de inmediato a nuestra central de operaciones.
          </p>
        </div>

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          {/* Formulario de Configuración */}
          <div className="glass-panel" style={{
            padding: '2.2rem',
            background: 'rgba(12, 19, 14, 0.85)',
            border: '1px solid rgba(0, 230, 118, 0.25)'
          }}>
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={20} color="#00e676" />
              1. Seleccioná el tipo de instalación
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.6rem', marginBottom: '1.8rem' }}>
              {[
                { id: 'barrio', label: 'Barrio Privado' },
                { id: 'empresa', label: 'Empresa / Industria' },
                { id: 'comercio', label: 'Comercio' },
                { id: 'evento', label: 'Evento / Ente' }
              ].map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setServiceType(item.id)}
                  style={{
                    padding: '0.75rem 0.6rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textAlign: 'center',
                    cursor: 'pointer',
                    background: serviceType === item.id ? 'rgba(0, 230, 118, 0.18)' : 'rgba(255, 255, 255, 0.04)',
                    border: serviceType === item.id ? '1px solid var(--color-primary)' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: serviceType === item.id ? '#00e676' : '#d2e3d5',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={20} color="#00e676" />
              2. Horario y puestos requeridos
            </h3>

            {/* Selector de Horarios */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#9bb4a0', marginBottom: '0.5rem', fontWeight: 600 }}>
                Cobertura horaria:
              </label>
              <select
                value={coverageHours}
                onChange={(e) => setCoverageHours(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  background: 'rgba(5, 12, 7, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#ffffff',
                  fontSize: '0.92rem',
                  fontFamily: 'inherit',
                  outline: 'none'
                }}
              >
                <option value="24h">Servicio Integral 24 Horas / 365 Días</option>
                <option value="nocturno">Turno Nocturno y Fines de Semana (12 Horas)</option>
                <option value="diurno">Turno Diurno Comercial (8 a 12 Horas)</option>
                <option value="evento">Jornada Específica de Evento</option>
              </select>
            </div>

            {/* Slider de Guardias */}
            <div style={{ marginBottom: '1.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.85rem', color: '#9bb4a0', fontWeight: 600 }}>
                  Cantidad de puestos / vigiladores:
                </label>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#00e676' }}>
                  {guardsCount} {guardsCount === 1 ? 'Guardia' : 'Guardias'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                value={guardsCount}
                onChange={(e) => setGuardsCount(parseInt(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#00e676',
                  cursor: 'pointer'
                }}
              />
            </div>

            {/* Opciones Adicionales */}
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={20} color="#ffd700" />
              3. Módulos Adicionales
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'Patrullaje Preventivo / Móvil', state: includePatrol, set: setIncludePatrol },
                { label: 'Control de Accesos Computarizado', state: includeAccessControl, set: setIncludeAccessControl },
                { label: 'Personal con Certificación RCP & Primeros Auxilios', state: includeRCP, set: setIncludeRCP }
              ].map((opt, i) => (
                <label
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.65rem 0.85rem',
                    background: opt.state ? 'rgba(0, 230, 118, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                    border: opt.state ? '1px solid rgba(0, 230, 118, 0.3)' : '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    color: opt.state ? '#ffffff' : '#99b39e',
                    transition: 'all 0.2s'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={opt.state}
                    onChange={(e) => opt.set(e.target.checked)}
                    style={{ accentColor: '#00e676', width: '16px', height: '16px' }}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Resumen de Propuesta en Vivo */}
          <div className="glass-panel" style={{
            padding: '2.2rem',
            background: 'linear-gradient(180deg, rgba(8, 26, 15, 0.95) 0%, rgba(5, 18, 10, 0.95) 100%)',
            border: '2px solid rgba(0, 230, 118, 0.4)',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.7)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#00e676', fontWeight: 800, letterSpacing: '0.08em' }}>
                  Resumen de Propuesta
                </span>
                <h4 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 900 }}>
                  Plan Personalizado
                </h4>
              </div>

              <span className="glass-badge" style={{ background: 'rgba(0, 230, 118, 0.15)' }}>
                Res. N° 0527
              </span>
            </div>

            {/* Inputs de contacto rápido */}
            <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: '#88a891', display: 'block', marginBottom: '0.3rem' }}>
                  Tu Nombre o Empresa (opcional):
                </label>
                <input
                  type="text"
                  placeholder="Ej: Barrio Los Álamos / Juan Pérez"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.9rem',
                    background: 'rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#ffffff',
                    fontSize: '0.88rem'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: '#88a891', display: 'block', marginBottom: '0.3rem' }}>
                  Localidad / Zona:
                </label>
                <input
                  type="text"
                  placeholder="Ej: Neuquén Capital, Plottier, Cipolletti"
                  value={clientLocation}
                  onChange={(e) => setClientLocation(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.9rem',
                    background: 'rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#ffffff',
                    fontSize: '0.88rem'
                  }}
                />
              </div>
            </div>

            {/* Detalle Desglosado */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '1.2rem',
              marginBottom: '1.8rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              flexGrow: 1
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '0.5rem' }}>
                <span style={{ color: '#8faea0' }}>Instalación:</span>
                <strong style={{ color: '#ffffff' }}>{serviceNames[serviceType]}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '0.5rem' }}>
                <span style={{ color: '#8faea0' }}>Cobertura:</span>
                <strong style={{ color: '#ffffff', textAlign: 'right', maxWidth: '180px' }}>{coverageHours === '24h' ? '24hs Continuas' : coverageHours}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '0.5rem' }}>
                <span style={{ color: '#8faea0' }}>Puestos / Guardias:</span>
                <strong style={{ color: '#00e676' }}>{guardsCount} personal</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                <span style={{ color: '#8faea0' }}>Servicios Incluidos:</span>
                <strong style={{ color: '#ffffff' }}>
                  {[includePatrol && 'Patrulla', includeAccessControl && 'Accesos', includeRCP && 'RCP'].filter(Boolean).join(' + ') || 'Básico'}
                </strong>
              </div>
            </div>

            {/* Botón WhatsApp de Acción */}
            <button
              onClick={generateWhatsAppMessage}
              type="button"
              className="btn btn-whatsapp shimmer-effect"
              style={{
                width: '100%',
                padding: '1.1rem',
                fontSize: '1rem',
                fontWeight: 800
              }}
            >
              <MessageSquare size={20} />
              <span>Solicitar Presupuesto por WhatsApp</span>
            </button>

            <p style={{
              fontSize: '0.75rem',
              color: '#849e89',
              textAlign: 'center',
              marginTop: '0.8rem',
              lineHeight: 1.4
            }}>
              Respuesta y asesoramiento técnico directo con nuestro equipo operativo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
