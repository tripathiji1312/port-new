import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: '01', title: 'Aura', tags: 'LSTM • DQN • Flask', desc: 'Hybrid glucose forecasting system with personalized LSTM models and optimal DQN dosing strategies.', link: 'https://github.com/tripathiji1312/Aura' },
  { id: '02', title: 'Promptimus', tags: 'T5-220M • LoRA • RAG', desc: 'AI prompt optimizer fine-tuning a 220M parameter T5 model with LoRA, resolving intent preservation.', link: 'https://github.com/tripathiji1312/promptimus' },
  { id: '03', title: 'StudyBoard', tags: 'Next.js 15 • AI • Supabase', desc: 'AI-powered academic command center featuring predictive GPA algorithms and focus tracking.', link: 'https://github.com/tripathiji1312/study_board' },
  { id: '04', title: 'Ghost', tags: 'PyPI • Self-Healing AST', desc: 'Autonomous AI Test Agent for Python generating context-aware pytest suites via AST analysis.', link: 'https://github.com/tripathiji1312/ghost' },
];

const oss = [
  { title: 'PyTorch', pr: '#174009 & #174312', desc: 'Merged ATen indexing fixes and DTensor C++/Python dispatch correctness.' },
  { title: 'Google JAX', pr: '#32046', desc: 'Aligned CUDA 13 installation instructions for improved DX and ecosystem compatibility.' }
];

export default function Projects() {
  return (
    <section className="container section-padding border-top" id="projects">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', margin: 0 }}>/// 02<br/>SELECTED<br/>OPERATIONS</h2>
        <span className="mono" style={{ backgroundColor: 'var(--accent-red)', color: 'var(--bg-color)', padding: '0.5rem 1rem' }}>SYSTEM.LOGS</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--grid-gap)', marginBottom: '4rem' }}>
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            style={{ 
              border: '2px solid var(--text-color)', 
              padding: '2rem', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              minHeight: '350px',
              backgroundColor: i % 3 === 0 ? 'var(--bg-color)' : i % 2 === 0 ? '#FFE0E0' : '#E0E8FF'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <span className="mono" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{p.id}</span>
                <span className="mono" style={{ fontSize: '0.8rem', opacity: 0.7 }}>[{p.tags}]</span>
              </div>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{p.title}</h3>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>{p.desc}</p>
            </div>
            
            <a href={p.link} target="_blank" rel="noreferrer" className="btn" style={{ alignSelf: 'flex-start', backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}>
              :: VIEW_SOURCE
            </a>
          </motion.div>
        ))}
      </div>

      <h3 style={{ fontSize: '2rem', marginBottom: '2rem', borderTop: '2px solid var(--text-color)', paddingTop: '2rem' }}>/// OPEN SOURCE</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--grid-gap)' }}>
        {oss.map((item, i) => (
          <div key={i} style={{ border: '2px dashed var(--text-color)', padding: '2rem' }}>
            <h4 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.title} <span style={{ color: 'var(--accent-blue)' }}>[MERGED]</span></h4>
            <p className="mono" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>PR: {item.pr}</p>
            <p style={{ fontSize: '1.1rem' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
