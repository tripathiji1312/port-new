import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="container section-padding border-top" id="contact" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h2 className="mono" style={{ marginBottom: '2rem' }}>/// TERMINATE SESSION</h2>
        
        <motion.a 
          href="mailto:swarnim.tr@gmail.com" 
          className="text-huge" 
          style={{ display: 'block', textTransform: 'uppercase', color: 'var(--accent-red)' }}
          whileHover={{ x: 20, color: 'var(--text-color)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          LET'S TALK <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(2rem, 5vw, 5rem)' }}>()</span>
        </motion.a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', fontSize: '1.5rem', fontWeight: 600 }}>
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

        <div className="mono" style={{ textAlign: 'right' }}>
          <p>© 2026 SWARNIM TRIPATHI</p>
          <p>SYSTEM OPERATIONAL</p>
        </div>
      </div>
    </footer>
  );
}
