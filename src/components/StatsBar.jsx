import React from 'react';
import { STATS } from '../data/servicesData';
import { Clock, ShieldCheck, Award, MapPin } from 'lucide-react';

export default function StatsBar() {
  const getIcon = (index) => {
    switch (index) {
      case 0: return <Clock size={28} color="#00e676" />;
      case 1: return <Award size={28} color="#ffd700" />;
      case 2: return <ShieldCheck size={28} color="#00e676" />;
      case 3: return <MapPin size={28} color="#ffd700" />;
      default: return <ShieldCheck size={28} color="#00e676" />;
    }
  };

  return (
    <div style={{
      position: 'relative',
      zIndex: 10,
      marginTop: '-3rem',
      marginBottom: '3rem'
    }}>
      <div className="container">
        <div className="glass-panel" style={{
          background: 'rgba(12, 19, 14, 0.88)',
          borderColor: 'rgba(0, 230, 118, 0.25)',
          padding: '2rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
        }}>
          {STATS.map((stat, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              padding: '0.5rem',
              borderRight: index < STATS.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
            }} className="stat-card">
              <div style={{
                background: 'rgba(0, 230, 118, 0.08)',
                padding: '0.85rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(0, 230, 118, 0.2)'
              }}>
                {getIcon(index)}
              </div>

              <div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  color: '#ffffff',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.82rem',
                  color: '#9eb5a3',
                  fontWeight: 500,
                  marginTop: '0.2rem'
                }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stat-card {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding-bottom: 1.2rem;
          }
          .stat-card:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </div>
  );
}
