import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="container section-padding border-top" id="about">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--grid-gap)', alignItems: 'start' }}>
        <h2 style={{ fontSize: '1.5rem' }}>/// 01<br/>THE HUMAN<br/>ELEMENT</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', gridColumn: 'span 2' }}>
          <motion.h3 
            className="text-large"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ textTransform: 'none', lineHeight: '1.2' }}
          >
            Fueled by <span style={{ backgroundColor: 'var(--accent-yellow)', padding: '0 10px' }}>curiosity</span>, synthetic retrowave beats, and 100% Arabica.
          </motion.h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                I'm <strong style={{color: 'var(--accent-blue)'}}>Swarnim Tripathi</strong>, a Computer Science student at VIT Chennai. I am deeply passionate about Machine Learning and turning abstract math into real-world applications. When I am not fine-tuning models or optimizing dispatch layers, I am immersed in Linux—crafting perfectly optimized bespoke desktop environments from the ground up.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['Python', 'C++', 'Rust', 'PyTorch', 'FastAPI', 'Docker', 'Linux'].map((tech, i) => (
                  <motion.span 
                    key={i} 
                    className="mono" 
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}
                    style={{ 
                      border: '1px solid var(--text-color)', 
                      padding: '0.4rem 0.8rem',
                      borderRadius: '20px',
                      cursor: 'default',
                      transition: 'background-color 0.2s'
                    }}>
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              style={{ borderLeft: '4px solid var(--accent-red)', paddingLeft: '2rem' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>MACHINE LEARNING ENGINEER INTERN</h4>
              <p className="mono" style={{ marginBottom: '1.5rem', color: '#666', fontWeight: 'bold' }}>MIRAI (FASHION TECH) • HYBRID • DEC 2025 – FEB 2026</p>
              <ul style={{ listStyleType: 'square', marginLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.1rem' }}>
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
