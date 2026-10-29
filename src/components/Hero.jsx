import React, { useState, useRef } from 'react';
import { ShieldCheck, Play, Pause, Volume2, VolumeX, ArrowRight, Award, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="inicio" style={{
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '4rem 0'
    }}>
      {/* Video Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/assets/images/banner.png"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.65) contrast(1.1)'
          }}
        >
          <source src="/assets/video/sheriff.mp4" type="video/mp4" />
          <source src="https://sheriffseguridad.com.ar/wp-content/uploads/2026/03/nuevo-video.mp4" type="video/mp4" />
        </video>

        {/* Gradiente Cinematográfico Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            linear-gradient(180deg, rgba(6, 9, 7, 0.75) 0%, rgba(6, 9, 7, 0.4) 40%, rgba(6, 9, 7, 0.85) 85%, #060907 100%),
            radial-gradient(circle at 50% 50%, rgba(13, 95, 58, 0.25) 0%, transparent 60%)
          `
        }}></div>
      </div>

      {/* Contenido Principal */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: '960px',
        margin: '0 auto'
      }}>
        {/* Badge Ministerial Oficial */}
        <div style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
          <div className="glass-badge" style={{
            padding: '0.5rem 1.2rem',
            background: 'rgba(8, 28, 16, 0.75)',
            border: '1px solid rgba(0, 230, 118, 0.4)',
            boxShadow: '0 0 20px rgba(0, 230, 118, 0.2)'
          }}>
            <Award size={16} color="#00e676" />
            <span>Habilitación Ministerial N° 0527 &bull; Prov. de Neuquén</span>
          </div>
        </div>

        {/* Título Principal de Alto Impacto */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
          fontWeight: 900,
          lineHeight: 1.12,
          textTransform: 'uppercase',
          marginBottom: '1.4rem',
          letterSpacing: '-0.02em'
        }}>
          Seguridad y Vigilancia <br />
          <span className="gradient-text-green">Especializada las 24 Horas</span>
        </h1>

        {/* Subtítulo Institucional */}
        <p style={{
          fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
          color: '#d4e3d8',
          maxWidth: '780px',
          margin: '0 auto 2.5rem auto',
          lineHeight: 1.6,
          fontWeight: 400
        }}>
          Ponemos a tu disposición los mejores profesionales integrando tecnología de vanguardia para garantizar la máxima protección en <strong>barrios privados, empresas, comercios y eventos</strong> en Neuquén y el Alto Valle.
        </p>

        {/* Botones de Acción CTA */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.2rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          <a href="#cotizador" className="btn btn-primary shimmer-effect" style={{
            fontSize: '1.05rem',
            padding: '1rem 2.2rem'
          }}>
            <span>Solicitar Cotización Inmediata</span>
            <ArrowRight size={18} />
          </a>

          <a href="#servicios" className="btn btn-secondary" style={{
            fontSize: '1.05rem',
            padding: '1rem 2rem'
          }}>
            <span>Explorar Servicios</span>
          </a>
        </div>

        {/* Píldoras de Seguridad Destacadas */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {[
            'Patrullaje Preventivo 24hs',
            'Control de Accesos Digital',
            'Personal Capacitado en RCP',
            'Respaldo Legal Inmediato'
          ].map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.88rem',
              color: '#a3bfa8',
              fontWeight: 600
            }}>
              <ShieldCheck size={16} color="#00e676" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Controles Flotantes del Video de Fondo */}
      <div style={{
        position: 'absolute',
        bottom: '25px',
        right: '25px',
        zIndex: 5,
        display: 'flex',
        gap: '0.5rem',
        background: 'rgba(6, 9, 7, 0.75)',
        backdropFilter: 'blur(10px)',
        padding: '0.4rem',
        borderRadius: 'var(--radius-full)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <button
          onClick={togglePlay}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title={isPlaying ? "Pausar video" : "Reproducir video"}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>

        <button
          onClick={toggleMute}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title={isMuted ? "Activar audio" : "Silenciar audio"}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#servicios" style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 5,
        color: 'rgba(255, 255, 255, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.2rem',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }}>
        <span>Conocer más</span>
        <ChevronDown size={18} style={{ animation: 'bounce 2s infinite' }} />
      </a>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(6px); }
          60% { transform: translateY(3px); }
        }
      `}</style>
    </section>
  );
}
