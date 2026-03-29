import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="container section-padding border-top" id="about">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 'var(--grid-gap)', alignItems: 'start' }}>
        <h2 style={{ fontSize: '2rem' }}>/// 01<br/>THE HUMAN<br/>ELEMENT</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <motion.h3 
            className="text-large"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ textTransform: 'none' }}
          >
            Fueled by <span style={{ backgroundColor: 'var(--accent-yellow)', padding: '0 10px' }}>curiosity</span> and 100% Arabica.
          </motion.h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                I am <strong style={{color: 'var(--accent-blue)'}}>Swarnim Tripathi</strong> from VIT Chennai. I am deeply passionate about Machine Learning and turning abstract math into real-world applications. When I'm not training models, I'm deep into Linux—ricing my Hyprland and Quickshell configs to absolute perfection.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['Python', 'Rust', 'PyTorch', 'FastAPI', 'Linux', 'Docker'].map((tech, i) => (
                  <span key={i} className="mono" style={{ 
                    border: '1px solid var(--text-color)', 
                    padding: '0.4rem 0.8rem',
                    borderRadius: '20px'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ borderLeft: '2px solid var(--text-color)', paddingLeft: '2rem' }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>MIRAI / MLE INTERN</h4>
              <p className="mono" style={{ marginBottom: '1rem', color: '#666' }}>DEC 2025 — PRESENT</p>
              <ul style={{ listStyleType: 'square', marginLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '1.1rem' }}>
                <li>Architected hybrid ranking engine using CLIP & FAISS for 16,000+ garments.</li>
                <li>Solved cold-start user vector generation logic.</li>
                <li>Achieved sub-100ms inference latency on FastAPI.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
