import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import SchemeCard from './components/SchemeCard';
import StatsBanner from './components/StatsBanner';
import { schemes } from './data/schemes';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    return schemes.filter(s => {
      const matchCat = activeCategory === 'all' || s.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch = !q ||
        s.name.includes(q) || s.nameEn.toLowerCase().includes(q) ||
        s.description.includes(q) || s.tag.includes(q);
      return matchCat && matchSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '28px 20px' }}>
        {/* Hero text */}
        <div style={{ marginBottom: '24px' }}>
          <h1 style={{
            fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: '800',
            color: '#0D1B2A', lineHeight: 1.2, marginBottom: '6px',
          }}>
            सरकारी योजनाएं{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FF6B00, #FF8C38)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>आपके लिए</span>
          </h1>
          <p style={{ color: '#5A5A4A', fontSize: '15px' }}>
            Government schemes finder — Find, understand, and apply easily
          </p>
        </div>

        <StatsBanner />

        {/* Category filter */}
        <div style={{ marginBottom: '24px' }}>
          <CategoryFilter active={activeCategory} setActive={setActiveCategory} />
        </div>

        {/* Results count */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: '16px',
        }}>
          <div style={{ fontSize: '14px', color: '#5A5A4A', fontWeight: '500' }}>
            <span style={{ color: '#FF6B00', fontWeight: '700' }}>{filtered.length}</span> योजनाएं मिलीं
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                background: 'none', border: '1px solid #E8E8E0', borderRadius: '8px',
                padding: '4px 12px', fontSize: '12px', color: '#5A5A4A', cursor: 'pointer',
              }}
            >✕ Clear</button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
          }}>
            {filtered.map(scheme => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center', padding: '60px 20px',
            background: 'white', borderRadius: '20px',
            border: '1px dashed #E8E8E0',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔍</div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#0D1B2A', marginBottom: '6px' }}>
              कोई योजना नहीं मिली
            </div>
            <div style={{ fontSize: '14px', color: '#9A9A8A' }}>
              Please try different search terms
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{
          textAlign: 'center', marginTop: '48px', paddingTop: '24px',
          borderTop: '1px solid var(--gray-200)',
          color: '#9A9A8A', fontSize: '13px',
        }}>
          <div style={{ marginBottom: '4px' }}>🇮🇳 Wise Citizen Helper — जन सेवा</div>
          <div>सरकारी वेबसाइट: <a href="https://india.gov.in" target="_blank" rel="noreferrer" style={{ color: '#FF6B00' }}>india.gov.in</a></div>
        </div>
      </main>
    </div>
  );
}
