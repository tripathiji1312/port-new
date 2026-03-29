import React from 'react';
import { motion } from 'framer-motion';
import useIsMobile from '../hooks/useIsMobile';

export default function About() {
  const isMobile = useIsMobile(768);

  return (
    <section className="container section-padding border-top" id="about">
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--grid-gap)', alignItems: 'start' }}>
        <h2 style={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>/// 01<br/>THE HUMAN<br/>ELEMENT</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '2rem' : '4rem', gridColumn: isMobile ? '1' : 'span 2' }}>
          <motion.h3 
            className="text-large"
            initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 30 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{
              textTransform: 'none',
              lineHeight: '1.2',
              ...(isMobile ? { fontSize: '1.5rem' } : {})
            }}
          >
            Fueled by <span style={{ backgroundColor: 'var(--accent-yellow)', padding: isMobile ? '0 5px' : '0 10px' }}>curiosity</span>, synthetic retrowave beats, and 100% Arabica.
          </motion.h3>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: isMobile ? '2rem' : '3rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p style={{ fontSize: isMobile ? '0.95rem' : '1.2rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                I'm <strong style={{color: 'var(--accent-blue)'}}>Swarnim Tripathi</strong>, a Computer Science student at VIT Chennai. I am deeply passionate about Machine Learning and turning abstract math into real-world applications. When I am not fine-tuning models or optimizing dispatch layers, I am immersed in Linux—crafting perfectly optimized bespoke desktop environments from the ground up.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '6px' : '10px' }}>
                {['Python', 'C++', 'Rust', 'PyTorch', 'FastAPI', 'Docker', 'Linux'].map((tech, i) => (
                  <motion.span 
                    key={i} 
                    className="mono" 
                    whileHover={{ scale: isMobile ? 1 : 1.1, backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}
                    style={{ 
                      border: '1px solid var(--text-color)', 
                      padding: isMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                      borderRadius: '20px',
                      cursor: 'default',
                      transition: 'background-color 0.2s',
                      fontSize: isMobile ? '0.8rem' : '0.9rem'
                    }}>
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              style={{ borderLeft: '3px solid var(--accent-red)', paddingLeft: isMobile ? '1rem' : '2rem' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', marginBottom: '0.5rem' }}>MACHINE LEARNING ENGINEER INTERN</h4>
              <p className="mono" style={{ marginBottom: '1rem', color: '#666', fontWeight: 'bold', fontSize: isMobile ? '0.85rem' : '1rem' }}>MIRAI (FASHION TECH) • HYBRID • DEC 2025 – FEB 2026</p>
              <ul style={{ listStyleType: 'square', marginLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: isMobile ? '0.75rem' : '1rem', fontSize: isMobile ? '0.95rem' : '1.1rem', lineHeight: '1.5' }}>
                <li>Architected a sub-100ms recommendation pipeline using <strong>CLIP embeddings and FAISS</strong>, optimizing vector similarity search for 16,000+ items under high-throughput concurrent loads.</li>
                <li>Engineered context-aware user representations to solve the cold-start problem, driving measurable improvements in recommendation relevance and downstream user engagement.</li>
                <li>Deployed optimized ML inference models directly into production environments.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
