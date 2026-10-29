import React, { useState } from 'react';
import { CONTACT_PAGE_DATA, COMPANY_INFO } from '../data/servicesData';
import { Phone, Mail, MapPin, Clock, FileText, AlertTriangle, CheckCircle, Send, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Consulta General',
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
    const text = `*CONTACTO WEB - SHERIFF SEGURIDAD*\n` +
      `*Nombre:* ${formData.name || 'No especificado'}\n` +
      `*Teléfono:* ${formData.phone || 'No especificado'}\n` +
      `*Email:* ${formData.email || 'No especificado'}\n` +
      `*Motivo:* ${formData.type}\n` +
      `*Mensaje:* ${formData.message || 'Deseo comunicarme con la administración.'}`;
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div style={{ paddingTop: '2rem' }}>
      {/* Header Banner Contacto */}
      <section style={{
        position: 'relative',
        padding: '5rem 0 3.5rem 0',
        background: 'linear-gradient(180deg, rgba(8, 25, 14, 0.8) 0%, rgba(6, 9, 7, 0.95) 100%)',
        borderBottom: '1px solid rgba(0, 230, 118, 0.2)'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <span className="glass-badge" style={{ marginBottom: '1.2rem' }}>
            <Phone size={16} />
            Atención al Cliente & RRHH
          </span>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            marginBottom: '1.2rem',
            lineHeight: 1.15
          }}>
            Contactos & <span className="gradient-text-green">Sede Central</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#c4dbca', lineHeight: 1.7, maxWidth: '750px', margin: '0 auto' }}>
            {CONTACT_PAGE_DATA.subtitle}
          </p>
        </div>
      </section>

      {/* Tarjetas de Datos de Contacto */}
      <section style={{ padding: '4rem 0', background: '#080d09' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.8rem',
            marginBottom: '4.5rem'
          }}>
            <div className="glass-panel" style={{ padding: '1.8rem' }}>
              <div style={{
                background: 'rgba(0, 230, 118, 0.1)',
                width: '50px',
                height: '50px',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                border: '1px solid rgba(0, 230, 118, 0.3)'
              }}>
                <Phone size={24} color="#00e676" />
              </div>
              <span style={{ fontSize: '0.78rem', color: '#88a890', textTransform: 'uppercase', fontWeight: 700 }}>
                Teléfono & WhatsApp
              </span>
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} style={{ display: 'block', fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginTop: '0.3rem' }}>
                {COMPANY_INFO.phone}
              </a>
              <span style={{ fontSize: '0.8rem', color: '#00e676', fontWeight: 600 }}>Atención 24hs</span>
            </div>

            <div className="glass-panel" style={{ padding: '1.8rem' }}>
              <div style={{
                background: 'rgba(0, 230, 118, 0.1)',
                width: '50px',
                height: '50px',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                border: '1px solid rgba(0, 230, 118, 0.3)'
              }}>
                <Mail size={24} color="#00e676" />
              </div>
              <span style={{ fontSize: '0.78rem', color: '#88a890', textTransform: 'uppercase', fontWeight: 700 }}>
                Correo Electrónico
              </span>
              <a href={`mailto:${COMPANY_INFO.email}`} style={{ display: 'block', fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginTop: '0.3rem' }}>
                {COMPANY_INFO.email}
              </a>
              <span style={{ fontSize: '0.8rem', color: '#8ea894' }}>Consultas y Administración</span>
            </div>

            <div className="glass-panel" style={{ padding: '1.8rem' }}>
              <div style={{
                background: 'rgba(0, 230, 118, 0.1)',
                width: '50px',
                height: '50px',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                border: '1px solid rgba(0, 230, 118, 0.3)'
              }}>
                <MapPin size={24} color="#00e676" />
              </div>
              <span style={{ fontSize: '0.78rem', color: '#88a890', textTransform: 'uppercase', fontWeight: 700 }}>
                Dirección
              </span>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginTop: '0.3rem' }}>
                {COMPANY_INFO.address}
              </div>
              <span style={{ fontSize: '0.8rem', color: '#8ea894' }}>Neuquén Capital, Argentina</span>
            </div>

            <div className="glass-panel" style={{ padding: '1.8rem' }}>
              <div style={{
                background: 'rgba(255, 215, 0, 0.1)',
                width: '50px',
                height: '50px',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                border: '1px solid rgba(255, 215, 0, 0.3)'
              }}>
                <Clock size={24} color="#ffd700" />
              </div>
              <span style={{ fontSize: '0.78rem', color: '#88a890', textTransform: 'uppercase', fontWeight: 700 }}>
                Horario de Atención
              </span>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginTop: '0.3rem' }}>
                {COMPANY_INFO.hoursOffice}
              </div>
              <span style={{ fontSize: '0.8rem', color: '#ffd700', fontWeight: 600 }}>Operatividad 24/7/365</span>
            </div>
          </div>

          {/* Sección de Recursos Humanos: Requisitos para Ingresar como Vigilador */}
          <div className="glass-panel" style={{
            padding: '3rem',
            background: 'linear-gradient(135deg, rgba(14, 28, 19, 0.95) 0%, rgba(6, 12, 8, 0.95) 100%)',
            border: '2px solid rgba(0, 230, 118, 0.35)',
            marginBottom: '4.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
              <div style={{
                background: 'rgba(0, 230, 118, 0.15)',
                padding: '0.6rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(0, 230, 118, 0.3)'
              }}>
                <FileText size={28} color="#00e676" />
              </div>
              <div>
                <span className="glass-badge" style={{ fontSize: '0.75rem', marginBottom: '0.3rem' }}>
                  Bolsa de Empleo y Postulaciones
                </span>
                <h2 style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 900 }}>
                  {CONTACT_PAGE_DATA.requirementsTitle}
                </h2>
              </div>
            </div>

            <p style={{ color: '#c4dbcb', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              {CONTACT_PAGE_DATA.requirementsSubtitle}
            </p>

            {/* Lista de Requisitos */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}>
              {CONTACT_PAGE_DATA.requirements.map((req, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.8rem',
                  padding: '1rem 1.2rem',
                  background: 'rgba(0, 0, 0, 0.35)',
                  borderRadius: 'var(--radius-sm)',
                  borderLeft: '3px solid var(--color-primary)'
                }}>
                  <CheckCircle size={20} color="#00e676" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ color: '#e2f0e6', fontSize: '0.96rem', lineHeight: 1.5 }}>{req}</span>
                </div>
              ))}
            </div>

            {/* Advertencias y Notas Exclusivas */}
            <div style={{
              background: 'rgba(255, 179, 0, 0.08)',
              border: '1px solid rgba(255, 179, 0, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffd700', fontWeight: 800 }}>
                <AlertTriangle size={18} />
                <span>Instrucciones Importantes para la Entrega de Documentación:</span>
              </div>
              {CONTACT_PAGE_DATA.requirementsNotes.map((note, idx) => (
                <p key={idx} style={{ color: '#ecdcb9', fontSize: '0.88rem', margin: 0, paddingLeft: '1.6rem' }}>
                  &bull; {note}
                </p>
              ))}
            </div>
          </div>

          {/* Formulario y Mapa */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}>
            {/* Formulario */}
            <div className="glass-panel" style={{
              padding: '2.5rem',
              background: 'rgba(12, 19, 14, 0.85)'
            }}>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 900, marginBottom: '0.6rem' }}>
                Dejanos tu Consulta
              </h3>
              <p style={{ color: '#8fae96', fontSize: '0.9rem', marginBottom: '1.8rem' }}>
                Te responderemos en minutos durante nuestro horario de atención o de inmediato por WhatsApp.
              </p>

              {submitted ? (
                <div style={{
                  padding: '2rem',
                  background: 'rgba(0, 230, 118, 0.1)',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  border: '1px solid var(--color-primary)'
                }}>
                  <CheckCircle size={44} color="#00e676" style={{ margin: '0 auto 1rem auto' }} />
                  <h4 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                    ¡Mensaje Recibido!
                  </h4>
                  <p style={{ color: '#c4dbcb', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    Nos pondremos en contacto con vos a la brevedad.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.85rem' }}
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#97b39d', marginBottom: '0.4rem', fontWeight: 600 }}>
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
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

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#97b39d', marginBottom: '0.4rem', fontWeight: 600 }}>
                      Teléfono o Celular *
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
                      Motivo de Contacto
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
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
                      <option value="Cotización de Servicios">Cotización de Servicios</option>
                      <option value="Capacitaciones y Cursos">Capacitaciones y Cursos</option>
                      <option value="Recursos Humanos / Postulación">Recursos Humanos / Postulación</option>
                      <option value="Alquiler de Vehículos">Alquiler de Vehículos</option>
                      <option value="Servicio de Maestranza">Servicio de Maestranza</option>
                      <option value="Otra Consulta">Otra Consulta</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#97b39d', marginBottom: '0.4rem', fontWeight: 600 }}>
                      Mensaje *
                    </label>
                    <textarea
                      required
                      rows="3"
                      placeholder="Escribinos tu consulta..."
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
                      <span>Enviar</span>
                    </button>
                    <button type="button" onClick={sendByWhatsApp} className="btn btn-whatsapp" style={{ flex: 1 }}>
                      <MessageSquare size={18} />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Mapa Embebido */}
            <div className="glass-panel" style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ padding: '1.2rem 1.6rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <strong style={{ color: '#ffffff', display: 'block' }}>Perito Moreno 62, Neuquén Capital</strong>
                <span style={{ fontSize: '0.8rem', color: '#88a890' }}>Sede Central Administrativa de Sheriff Seguridad</span>
              </div>
              <div style={{ flexGrow: 1, minHeight: '300px' }}>
                <iframe
                  title="Mapa de Sede Central Sheriff"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  loading="lazy"
                  src="https://maps.google.com/maps?q=Perito%20Moreno%2062,%20Neuquen,%20Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
