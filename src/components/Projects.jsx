import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: '01', title: 'Aura', tags: 'LSTM • DQN • Flask', desc: 'Hybrid glucose forecasting system with personalized LSTM models and optimal DQN dosing strategies.', link: 'https://github.com/tripathiji1312/Aura' },
  { id: '02', title: 'Promptimus', tags: 'T5-220M • LoRA • RAG', desc: 'AI prompt optimizer fine-tuning a 220M parameter T5 model with LoRA, resolving intent preservation.', link: 'https://github.com/tripathiji1312/promptimus' },
  { id: '03', title: 'StudyBoard', tags: 'Next.js 15 • AI • Supabase', desc: 'AI-powered academic command center featuring predictive GPA algorithms and focus tracking.', link: 'https://github.com/tripathiji1312/study_board' },
  { id: '04', title: 'Ghost', tags: 'PyPI • Self-Healing AST', desc: 'Autonomous AI Test Agent for Python generating context-aware pytest suites via AST analysis.', link: 'https://github.com/tripathiji1312/ghost' },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
  };

  return (
    <section className="container section-padding border-top" id="projects">
      {/* MASSIVE OPEN SOURCE SECTION */}
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>/// OPEN SOURCE TRENCHES</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--grid-gap)', marginBottom: '6rem' }}>
        <motion.div 
          style={{ backgroundColor: 'var(--accent-red)', color: 'var(--bg-color)', padding: '3rem', gridColumn: '1 / -1', border: '4px solid var(--text-color)' }}
          initial={{ rotateX: 90, opacity: 0 }}
          whileInView={{ rotateX: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', damping: 20 }}
          whileHover={{ y: -5, boxShadow: '0 20px 0px var(--text-color)' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h3 className="text-large" style={{ color: 'var(--bg-color)' }}>PYTORCH</h3>
            <span className="mono" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--accent-red)', padding: '0.5rem 1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>CORE FRAMEWORK CONTRIBUTOR</span>
          </div>
          <p className="mono" style={{ fontSize: '1.2rem', marginBottom: '2rem', borderBottom: '2px solid rgba(255,255,255,0.3)', paddingBottom: '1rem' }}>C++ • ATen • Distributed Training</p>
          
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.25rem' }}>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
              <span style={{ fontSize: '1.5rem' }}>🔥</span>
              <div>
                <strong>Merged PR #174009:</strong> Ensured numerical consistency by resolving undefined behavior in C++ tensor indexing for the ATen library, impacting high-performance operations across CPU and CUDA backends.
              </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
              <span style={{ fontSize: '1.5rem' }}>🔥</span>
              <div>
                <strong>Merged PR #174312:</strong> Optimized distributed sharding primitives by implementing exact type checks in the C++ dispatch layer, ensuring DTensor subclasses maintain custom dispatch logic in multi-GPU environments.
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           style={{ border: '4px dashed var(--text-color)', padding: '2rem', backgroundColor: '#F4F4F0' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '2rem' }}>GOOGLE JAX</h4>
            <span className="mono" style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>[ MERGED PR #32046 ]</span>
          </div>
          <p style={{ fontSize: '1.2rem' }}>Aligned CUDA 13 installation instructions for improved developer experience and ecosystem compatibility.</p>
        </motion.div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', margin: 0 }}>/// 02<br/>SELECTED<br/>OPERATIONS</h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 'var(--grid-gap)', marginBottom: '4rem' }}
      >
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            whileHover={{ y: -15, scale: 1.02, rotate: i % 2 === 0 ? 1 : -1, zIndex: 10 }}
            style={{ 
              border: '2px solid var(--text-color)', 
              padding: '2.5rem', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              minHeight: '400px',
              backgroundColor: i % 3 === 0 ? 'var(--bg-color)' : i % 2 === 0 ? '#FFE0E0' : '#E0E8FF',
              boxShadow: '4px 4px 0px var(--text-color)',
              position: 'relative'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <span className="mono" style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: '1' }}>{p.id}</span>
                <span className="mono" style={{ fontSize: '0.8rem', opacity: 0.8, backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', padding: '0.2rem 0.5rem' }}>{p.tags}</span>
              </div>
              <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1' }}>{p.title}</h3>
              <p style={{ fontSize: '1.25rem', marginBottom: '3rem', fontWeight: 500 }}>{p.desc}</p>
            </div>
            
            <a href={p.link} target="_blank" rel="noreferrer" className="btn" style={{ alignSelf: 'flex-start', backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}>
              :: INIT_CONNECTION
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
