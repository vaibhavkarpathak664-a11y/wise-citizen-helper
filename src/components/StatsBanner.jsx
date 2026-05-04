import React from 'react';

const stats = [
  { label: 'सक्रिय योजनाएं', value: '500+', icon: '📋' },
  { label: 'लाभार्थी', value: '30 करोड़+', icon: '👥' },
  { label: 'मंत्रालय', value: '40+', icon: '🏛️' },
  { label: 'राज्य', value: '28+', icon: '🗺️' },
];

export default function StatsBanner() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0D1B2A 0%, #1C2E42 100%)',
      borderRadius: '20px', padding: '28px',
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px',
      marginBottom: '28px', boxShadow: '0 8px 32px rgba(13,27,42,0.2)',
    }}>
      {stats.map((stat, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', marginBottom: '4px' }}>{stat.icon}</div>
          <div style={{
            color: '#FF8C38', fontWeight: '800', fontSize: '22px', letterSpacing: '-0.5px',
          }}>{stat.value}</div>
          <div style={{
            color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginTop: '2px',
            fontFamily: "'Tiro Devanagari Hindi', serif",
          }}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
