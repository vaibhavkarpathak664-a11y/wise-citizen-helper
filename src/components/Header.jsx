import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

export default function Header({ searchQuery, setSearchQuery, menuOpen, setMenuOpen }) {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #0D1B2A 0%, #1C2E42 100%)',
      padding: '0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 20px rgba(13,27,42,0.3)',
    }}>
      {/* Tricolor top bar */}
      <div style={{ height: '4px', background: 'linear-gradient(to right, #FF6B00 33%, white 33%, white 66%, #1A7A4A 66%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '14px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '0 0 auto' }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '12px',
              background: 'linear-gradient(135deg, #FF6B00, #FF8C38)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '22px', boxShadow: '0 4px 12px rgba(255,107,0,0.4)',
            }}>🇮🇳</div>
            <div>
              <div style={{ color: 'white', fontWeight: '700', fontSize: '16px', lineHeight: 1.2 }}>
                Wise Citizen Helper
              </div>
              <div style={{ color: '#FF8C38', fontSize: '11px', fontFamily: "'Tiro Devanagari Hindi', serif" }}>
                जन सेवा • Jan Seva
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div style={{ flex: 1, position: 'relative', maxWidth: '500px', margin: '0 auto' }}>
            <Search size={16} style={{
              position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)',
              color: '#9A9A8A',
            }} />
            <input
              type="text"
              placeholder="योजना खोजें... (Search schemes)"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%', padding: '10px 14px 10px 40px',
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '50px', color: 'white', fontSize: '14px',
                outline: 'none', backdropFilter: 'blur(8px)',
                transition: 'all 0.2s',
              }}
              onFocus={e => { e.target.style.background = 'rgba(255,255,255,0.15)'; e.target.style.borderColor = '#FF8C38'; }}
              onBlur={e => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.borderColor = 'rgba(255,255,255,0.15)'; }}
            />
          </div>

          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', whiteSpace: 'nowrap', display: window.innerWidth < 600 ? 'none' : 'block' }}>
            🌐 हिंदी | EN
          </div>
        </div>
      </div>
    </header>
  );
}
