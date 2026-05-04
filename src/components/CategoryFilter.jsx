import React from 'react';
import { categories } from '../data/schemes';

export default function CategoryFilter({ active, setActive }) {
  return (
    <div style={{
      display: 'flex', gap: '10px', overflowX: 'auto',
      paddingBottom: '4px', scrollbarWidth: 'none',
    }}>
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => setActive(cat.id)}
          style={{
            padding: '8px 18px', borderRadius: '50px', fontWeight: '600',
            fontSize: '13px', cursor: 'pointer', whiteSpace: 'nowrap',
            display: 'flex', alignItems: 'center', gap: '6px',
            transition: 'all 0.2s',
            background: active === cat.id
              ? 'linear-gradient(135deg, #FF6B00, #FF8C38)'
              : 'white',
            color: active === cat.id ? 'white' : '#5A5A4A',
            border: active === cat.id ? '1.5px solid transparent' : '1.5px solid #E8E8E0',
            boxShadow: active === cat.id
              ? '0 4px 14px rgba(255,107,0,0.35)'
              : '0 2px 6px rgba(13,27,42,0.06)',
          }}
        >
          <span>{cat.icon}</span>
          <span style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
