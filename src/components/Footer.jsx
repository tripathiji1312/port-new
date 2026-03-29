import React from 'react';
import { motion } from 'framer-motion';
import useIsMobile from '../hooks/useIsMobile';

export default function Footer() {
  const isMobile = useIsMobile(768);

  return (
    <footer className="container section-padding border-top" id="contact" style={{ minHeight: isMobile ? '60vh' : '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h2 className="mono" style={{ marginBottom: '1.5rem', fontSize: isMobile ? '1.15rem' : '1.25rem' }}>/// TERMINATE SESSION</h2>

        <motion.a
          href="mailto:swarnim.tr@gmail.com"
          className="text-huge"
          style={{
            display: 'block',
            textTransform: 'uppercase',
            color: 'var(--accent-red)',
            ...(isMobile
              ? { fontSize: 'clamp(2.85rem, 14vw, 5.5rem)', lineHeight: '0.95' }
              : {})
          }}
          whileHover={{ x: isMobile ? 0 : 20, color: isMobile ? 'var(--text-color)' : 'var(--accent-red)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          LET'S TALK <span style={{ fontFamily: 'var(--font-mono)', fontSize: isMobile ? 'clamp(2rem, 10vw, 4.6rem)' : 'clamp(2rem, 5vw, 5rem)' }}>()</span>
        </motion.a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: isMobile ? '2rem' : '4rem', flexWrap: 'wrap', gap: isMobile ? '1.5rem' : '2rem', flexDirection: isMobile ? 'column' : 'row' }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: isMobile ? '1.5rem' : '2rem', fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight: 600, flexWrap: 'wrap' }}>
          <li>
            <a href="https://github.com/tripathiji1312" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>GITHUB</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/swarnim-trip" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>LINKEDIN</a>
          </li>
          <li>
            <a href="https://huggingface.co/tripathiji1312" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>HUGGINGFACE</a>
          </li>
        </ul>

        <div className="mono" style={{ textAlign: isMobile ? 'left' : 'right', fontSize: isMobile ? '0.9rem' : '1rem' }}>
          <p>© 2026 SWARNIM TRIPATHI</p>
          <p>SYSTEM OPERATIONAL</p>
        </div>
      </div>
    </footer>
  );
}
