import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, CheckCircle, FileText } from 'lucide-react';

export default function SchemeCard({ scheme }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 2px 12px rgba(13,27,42,0.08)',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(13,27,42,0.06)',
      transform: 'translateY(0)',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(13,27,42,0.14)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(13,27,42,0.08)';
      }}
    >
      {/* Card top accent */}
      <div style={{ height: '5px', background: `linear-gradient(to right, ${scheme.color}, ${scheme.color}88)` }} />

      <div style={{ padding: '20px' }}>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{
                background: scheme.color + '18', color: scheme.color,
                fontSize: '11px', fontWeight: '600', padding: '2px 10px',
                borderRadius: '20px', letterSpacing: '0.3px',
              }}>{scheme.tag}</span>
            </div>
            <h3 style={{
              fontSize: '16px', fontWeight: '700', color: '#0D1B2A',
              lineHeight: 1.3, marginBottom: '2px',
              fontFamily: "'Tiro Devanagari Hindi', serif",
            }}>{scheme.name}</h3>
            <div style={{ fontSize: '12px', color: '#9A9A8A' }}>{scheme.nameEn}</div>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #FF6B00, #FF8C38)',
            color: 'white', padding: '6px 12px', borderRadius: '10px',
            fontSize: '13px', fontWeight: '700', whiteSpace: 'nowrap',
            marginLeft: '12px', boxShadow: '0 4px 10px rgba(255,107,0,0.3)',
          }}>{scheme.benefit}</div>
        </div>

        <p style={{ fontSize: '13px', color: '#5A5A4A', lineHeight: 1.6, marginBottom: '14px' }}>
          {scheme.description}
        </p>

        {/* Ministry tag */}
        <div style={{ fontSize: '11px', color: '#9A9A8A', marginBottom: '14px' }}>
          🏛️ {scheme.ministry}
        </div>

        {/* Expand section */}
        {expanded && (
          <div style={{ borderTop: '1px solid #F0F0E8', paddingTop: '14px', marginBottom: '14px' }}>
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontWeight: '600', fontSize: '13px', color: '#0D1B2A', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={14} color="#1A7A4A" /> पात्रता (Eligibility)
              </div>
              {scheme.eligibility.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '4px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1A7A4A', marginTop: '6px', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: '#5A5A4A' }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: '600', fontSize: '13px', color: '#0D1B2A', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileText size={14} color="#FF6B00" /> जरूरी दस्तावेज (Documents)
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {scheme.documents.map((doc, i) => (
                  <span key={i} style={{
                    background: '#FFF3E8', color: '#FF6B00', fontSize: '12px',
                    padding: '3px 10px', borderRadius: '20px', fontWeight: '500',
                  }}>{doc}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              flex: 1, padding: '9px 14px', borderRadius: '10px',
              border: `1.5px solid ${scheme.color}40`, background: scheme.color + '10',
              color: scheme.color, fontWeight: '600', fontSize: '13px',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = scheme.color + '20'; }}
            onMouseLeave={e => { e.target.style.background = scheme.color + '10'; }}
          >
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            {expanded ? 'कम दिखाएं' : 'विवरण देखें'}
          </button>
          <a
            href={scheme.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '9px 16px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #0D1B2A, #1C2E42)',
              color: 'white', fontWeight: '600', fontSize: '13px',
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #1C2E42, #2C4060)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #0D1B2A, #1C2E42)'; }}
          >
            <ExternalLink size={13} /> आवेदन
          </a>
        </div>
      </div>
    </div>
  );
}
