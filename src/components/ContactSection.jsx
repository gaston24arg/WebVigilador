import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/servicesData';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Barrios Privados',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const sendByWhatsApp = () => {
    const text = `*CONSULTA DESDE LA WEB - SHERIFF SEGURIDAD*\n` +
      `*Nombre:* ${formData.name || 'No especificado'}\n` +
      `*Teléfono:* ${formData.phone || 'No especificado'}\n` +
      `*Email:* ${formData.email || 'No especificado'}\n` +
      `*Servicio:* ${formData.service}\n` +
      `*Mensaje:* ${formData.message || 'Deseo recibir información y asesoramiento.'}`;
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contacto" className="section" style={{
      background: 'linear-gradient(180deg, #060907 0%, #0d1710 100%)',
      position: 'relative'
    }}>
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-tag">
            <Mail size={16} />
            Canales de Atención Directa
          </span>
          <h2 className="section-title">
            ¿Tenés alguna consulta? <span className="gradient-text-green">Escribinos</span>
          </h2>
          <p className="section-subtitle">
            Nuestro equipo operativo y de atención está disponible para responder tus dudas y coordinar una visita técnica a tus instalaciones.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3.5rem'
        }}>
          {/* Tarjetas de Información de Contacto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div className="glass-panel" style={{
              padding: '1.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              background: 'rgba(14, 22, 16, 0.75)'
            }}>
              <div style={{
                background: 'rgba(0, 230, 118, 0.12)',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(0, 230, 118, 0.3)'
              }}>
                <Phone size={24} color="#00e676" />
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#88a690', textTransform: 'uppercase', fontWeight: 700 }}>
                  Teléfono & WhatsApp
                </span>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} style={{ display: 'block', fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>
                  {COMPANY_INFO.phone}
                </a>
                <span style={{ fontSize: '0.78rem', color: '#00e676', fontWeight: 600 }}>Atención y Emergencias</span>
              </div>
            </div>

            <div className="glass-panel" style={{
              padding: '1.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              background: 'rgba(14, 22, 16, 0.75)'
            }}>
              <div style={{
                background: 'rgba(0, 230, 118, 0.12)',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(0, 230, 118, 0.3)'
              }}>
                <Mail size={24} color="#00e676" />
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#88a690', textTransform: 'uppercase', fontWeight: 700 }}>
                  Correo Electrónico
                </span>
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>
                  {COMPANY_INFO.email}
                </a>
                <span style={{ fontSize: '0.78rem', color: '#8aa38e' }}>Presupuestos y Administración</span>
              </div>
            </div>

            <div className="glass-panel" style={{
              padding: '1.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              background: 'rgba(14, 22, 16, 0.75)'
            }}>
              <div style={{
                background: 'rgba(0, 230, 118, 0.12)',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(0, 230, 118, 0.3)'
              }}>
                <MapPin size={24} color="#00e676" />
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#88a690', textTransform: 'uppercase', fontWeight: 700 }}>
                  Dirección de Oficinas
                </span>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>
                  {COMPANY_INFO.address}
                </div>
                <span style={{ fontSize: '0.78rem', color: '#8aa38e' }}>{COMPANY_INFO.province}</span>
              </div>
            </div>

            <div className="glass-panel" style={{
              padding: '1.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              background: 'rgba(14, 22, 16, 0.75)'
            }}>
              <div style={{
                background: 'rgba(255, 215, 0, 0.12)',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 215, 0, 0.3)'
              }}>
                <Clock size={24} color="#ffd700" />
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#88a690', textTransform: 'uppercase', fontWeight: 700 }}>
                  Horario de Atención Administrativa
                </span>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>
                  {COMPANY_INFO.hoursOffice}
                </div>
                <span style={{ fontSize: '0.78rem', color: '#ffd700', fontWeight: 600 }}>Servicios de Guardia: 24 Horas Activos</span>
              </div>
            </div>
          </div>

          {/* Formulario de Mensaje */}
          <div className="glass-panel" style={{
            padding: '2.5rem',
            background: 'rgba(14, 23, 17, 0.85)',
            border: '1px solid rgba(0, 230, 118, 0.3)'
          }}>
            <h3 style={{ fontSize: '1.45rem', color: '#ffffff', marginBottom: '0.6rem', fontWeight: 900 }}>
              Envianos un Mensaje
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#99b59e', marginBottom: '1.8rem' }}>
              Completá el formulario o contactanos directamente por WhatsApp para una atención inmediata.
            </p>

            {submitted ? (
              <div style={{
                background: 'rgba(0, 230, 118, 0.12)',
                border: '1px solid var(--color-primary)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                textAlign: 'center'
              }}>
                <CheckCircle size={48} color="#00e676" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                  ¡Mensaje Enviado con Éxito!
                </h4>
                <p style={{ color: '#c4d6c7', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                  Gracias por comunicarte con SHERIFF Seguridad. Nuestro equipo responderá tu solicitud a la brevedad.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#97b39d', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Nombre y Apellido / Razón Social *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Marcelo Gómez / Constructora Patagónica"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(6, 12, 8, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#97b39d', marginBottom: '0.4rem', fontWeight: 600 }}>
                      Teléfono de Contacto *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: 299 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(6, 12, 8, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#ffffff',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#97b39d', marginBottom: '0.4rem', fontWeight: 600 }}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(6, 12, 8, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#ffffff',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#97b39d', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Servicio de Interés
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(6, 12, 8, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                  >
                    <option value="Barrios Privados">Barrios Privados & Countries</option>
                    <option value="Empresas y Comercios">Empresas & Comercios</option>
                    <option value="Entes Públicos y Eventos">Entes Públicos & Eventos Masivos</option>
                    <option value="Vigilancia Tecnológica">Vigilancia Tecnológica & Monitoreo</option>
                    <option value="Otra Consulta">Otra Consulta Especial</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#97b39d', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Mensaje o Detalle del Requerimiento *
                  </label>
                  <textarea
                    required
                    rows="3"
                    placeholder="Contanos sobre las instalaciones, ubicación y necesidades de seguridad..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(6, 12, 8, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                  <button type="submit" className="btn btn-primary shimmer-effect" style={{ flex: 1 }}>
                    <Send size={18} />
                    <span>Enviar Consulta</span>
                  </button>

                  <button
                    type="button"
                    onClick={sendByWhatsApp}
                    className="btn btn-whatsapp"
                    style={{ flex: 1 }}
                  >
                    <MessageSquare size={18} />
                    <span>Enviar a WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Mapa de Ubicación en Neuquén Capital */}
        <div className="glass-panel" style={{
          overflow: 'hidden',
          background: 'rgba(11, 18, 13, 0.8)',
          border: '1px solid rgba(0, 230, 118, 0.25)'
        }}>
          <div style={{
            padding: '1.2rem 1.8rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MapPin size={20} color="#00e676" />
              <div>
                <strong style={{ color: '#ffffff', fontSize: '1rem' }}>Sede Central Sheriff Seguridad</strong>
                <span style={{ display: 'block', fontSize: '0.8rem', color: '#88a68e' }}>Perito Moreno 62, Neuquén Capital</span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Perito+Moreno+62,+Neuqu%C3%A9n"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}
            >
              Abrir en Google Maps
            </a>
          </div>

          <div style={{ width: '100%', height: '360px', position: 'relative' }}>
            <iframe
              title="Ubicación Sheriff Seguridad Neuquén"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.2)' }}
              loading="lazy"
              src="https://maps.google.com/maps?q=Perito%20Moreno%2062,%20Neuquen,%20Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
