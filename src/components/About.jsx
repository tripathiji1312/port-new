import React from 'react';
import { motion } from 'framer-motion';
import useIsMobile from '../hooks/useIsMobile';
import { SectionReveal, RevealItem } from './SectionReveal';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const blurFadeUp = {
  hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 400, damping: 30 }
  }
};

export default function About() {
  const isMobile = useIsMobile(768);

  return (
    <section className="container section-padding border-top" id="about">
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--grid-gap)', alignItems: 'start' }}>
        <SectionReveal>
          <RevealItem>
            <h2 style={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>/// 01<br/>THE HUMAN<br/>ELEMENT</h2>
          </RevealItem>
        </SectionReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '2rem' : '4rem', gridColumn: isMobile ? '1' : 'span 2' }}>
          <SectionReveal>
            <RevealItem>
              <motion.h3
                className="text-large"
                style={{
                  textTransform: 'none',
                  lineHeight: '1.2',
                  ...(isMobile ? { fontSize: '1.5rem' } : {})
                }}
              >
                Fueled by <span style={{ backgroundColor: 'var(--accent-yellow)', padding: isMobile ? '0 5px' : '0 10px' }}>curiosity</span>, synthetic retrowave beats, and 100% Arabica.
              </motion.h3>
            </RevealItem>
          </SectionReveal>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: isMobile ? '2rem' : '3rem' }}>
            <SectionReveal>
              <RevealItem>
                <p style={{ fontSize: isMobile ? '0.95rem' : '1.2rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  I'm <strong style={{color: 'var(--accent-blue)'}}>Swarnim Tripathi</strong>, a Computer Science student at VIT Chennai. I am deeply passionate about Machine Learning and turning abstract math into real-world applications. When I am not fine-tuning models or optimizing dispatch layers, I am immersed in Linux—crafting perfectly optimized bespoke desktop environments from the ground up.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '6px' : '10px' }}>
                  {['Python', 'C++', 'Rust', 'PyTorch', 'FastAPI', 'Docker', 'Linux'].map((tech, i) => (
                    <motion.span
                      key={i}
                      className="mono"
                      whileHover={{ scale: isMobile ? 1 : 1.05, backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      style={{
                        border: '1px solid var(--text-color)',
                        padding: isMobile ? '0.3rem 0.6rem' : '0.4rem 0.8rem',
                        borderRadius: '20px',
                        cursor: 'default',
                        fontSize: isMobile ? '0.8rem' : '0.9rem'
                      }}>
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </RevealItem>
            </SectionReveal>

            <SectionReveal style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '2rem' : '2.5rem' }}>
              <RevealItem>
                <div style={{ borderLeft: '3px solid var(--accent-red)', paddingLeft: isMobile ? '1rem' : '2rem' }}>
                  <h4 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', marginBottom: '0.5rem' }}>SOFTWARE ENGINEER INTERN — MULTIMODAL BACKEND & SYSTEMS</h4>
                  <p className="mono" style={{ marginBottom: '1rem', color: '#666', fontWeight: 'bold', fontSize: isMobile ? '0.85rem' : '1rem' }}>AIR SURF CONSULTING (DOCGLASSES) • DELHI, INDIA • MAY 2026 – PRESENT</p>
                  <ul style={{ listStyleType: 'square', marginLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: isMobile ? '0.75rem' : '1rem', fontSize: isMobile ? '0.95rem' : '1.1rem', lineHeight: '1.5' }}>
                    <li>Developed an LLM distillation pipeline translating clinician-patient interactions from <strong>MedGemma-27B to Gemma-4B</strong>, curating 5,000+ clinical SFT pairs with automated safety filters validating pediatric and maternal constraints.</li>
                    <li>Engineered a FastAPI multimodal backend with real-time S3 multi-part audio streaming and structured SOAP note builders, integrating natively with <strong>OpenEMR, Epic FHIR R4, and Cerner FHIR</strong> to support US-market healthcare standards.</li>
                    <li>Coordinated on-site pilot validation across regional healthcare tiers (CHCs, CHOs, district/state hospitals), stress-testing across <strong>10,000+ patient sessions</strong> ahead of a state-wide rollout to <strong>15,000+ doctors</strong> in Uttar Pradesh.</li>
                  </ul>
                </div>
              </RevealItem>
              <RevealItem>
                <div style={{ borderLeft: '3px solid var(--accent-red)', paddingLeft: isMobile ? '1rem' : '2rem' }}>
                  <h4 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', marginBottom: '0.5rem' }}>MACHINE LEARNING ENGINEER INTERN</h4>
                  <p className="mono" style={{ marginBottom: '1rem', color: '#666', fontWeight: 'bold', fontSize: isMobile ? '0.85rem' : '1rem' }}>MIRAI (FASHION TECH) • HYBRID • DEC 2025 – FEB 2026</p>
                  <ul style={{ listStyleType: 'square', marginLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: isMobile ? '0.75rem' : '1rem', fontSize: isMobile ? '0.95rem' : '1.1rem', lineHeight: '1.5' }}>
                    <li>Enabled real-time matching for 16k+ SKUs by architecting a hybrid ranking engine using <strong>CLIP embeddings and FAISS</strong>, optimizing for high-throughput vector search and reducing search latency by 40%.</li>
                    <li>Improved recommendation relevance by ~20% over baselines by engineering a multi-query retrieval pipeline with Reciprocal Rank Fusion (RRF), combining visual styling vectors with deterministic Pandas rule-based filtering.</li>
                    <li>Optimized FastAPI inference endpoints to achieve sub-100ms latency and support 500+ concurrent requests by implementing batched FAISS vector searches and vectorized Pandas scoring operations.</li>
                  </ul>
                </div>
              </RevealItem>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
