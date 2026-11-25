import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section
      id="inicio"
      aria-label="Presentación principal de SHERIFF Seguridad S.R.L."
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 'calc(100vh - 96px)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#000000'
      }}
    >
      {/* Video de fondo original (contiene la animación corporativa y el escudo oficial) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        poster="/assets/images/banner.png"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1
        }}
      >
        <source src={COMPANY_INFO.heroVideo} type="video/mp4" />
      </video>

      {/* Degradado inferior sutil para transicionar limpiamente hacia Nuestros Servicios sin tapar el video */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          background:
            'linear-gradient(180deg, rgba(8, 13, 6, 0.25) 0%, rgba(0, 0, 0, 0) 22%, rgba(0, 0, 0, 0) 76%, rgba(0, 0, 0, 0.88) 100%)'
        }}
      ></div>

      {/* Indicador discreto para bajar a Nuestros Servicios */}
      <a
        href="#nuestros-servicios"
        style={{
          position: 'relative',
          zIndex: 3,
          marginBottom: '1.5rem',
          color: '#ffffff',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.25rem',
          fontSize: '0.78rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)'
        }}
      >
        <span>Nuestros Servicios</span>
        <ChevronDown size={20} color="#e5e600" style={{ animation: 'bounce 2s infinite' }} />
      </a>

      {/* Controles flotantes discretos de reproducción y audio */}
      <div style={{
        position: 'absolute',
        bottom: '22px',
        left: '22px',
        zIndex: 4,
        display: 'flex',
        gap: '0.4rem',
        background: 'rgba(8, 13, 6, 0.78)',
        backdropFilter: 'blur(10px)',
        padding: '0.35rem',
        borderRadius: 'var(--radius-full)',
        border: '1px solid rgba(229, 230, 0, 0.3)'
      }}>
        <button
          type="button"
          onClick={togglePlay}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '0.45rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title={isPlaying ? 'Pausar video' : 'Reproducir video'}
          aria-label={isPlaying ? 'Pausar video de fondo' : 'Reproducir video de fondo'}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '0.45rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title={isMuted ? 'Activar audio' : 'Silenciar audio'}
          aria-label={isMuted ? 'Activar audio del video' : 'Silenciar audio del video'}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

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
