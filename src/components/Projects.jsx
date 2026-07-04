import React from 'react';
import { motion } from 'framer-motion';
import useIsMobile from '../hooks/useIsMobile';
import { SectionReveal, RevealItem } from './SectionReveal';

const projects = [
  {
    id: '01',
    title: 'DISENT-KWS',
    tags: 'PyTorch • ONNX • ECAPA-TDNN',
    desc: 'Robust keyword spotting that decouples phonetic and speaker features via GRL/CLUB, quantized to a 0.60MB INT8 ONNX runtime (26.43ms CPU latency, 4.69% EER). Samsung AX Hackathon 2026 — National Top 50.',
    link: 'https://github.com/tripathiji1312/DISENT_KWS',
    liveLink: 'https://blog.swarnim.site/posts/disent-kws/',
    liveLabel: ':: READ_BLOG'
  },
  {
    id: '02',
    title: 'Aura',
    tags: 'LSTM • DQN • Flask',
    desc: 'Hybrid glucose forecasting system with personalized LSTM models and optimal DQN dosing strategies.',
    link: 'https://github.com/tripathiji1312/Aura',
    liveLink: 'https://huggingface.co/spaces/tripathiji1312/aura-diabetes-sim',
    liveLabel: ':: LIVE_SIM'
  },
  {
    id: '03',
    title: 'Promptimus',
    tags: 'T5-220M • LoRA • RAG',
    desc: 'AI prompt optimizer fine-tuning a 220M parameter T5 model with LoRA, resolving intent preservation.',
    link: 'https://github.com/tripathiji1312/promptimus'
  },
  {
    id: '04',
    title: 'StudyBoard',
    tags: 'Next.js 15 • AI • Supabase',
    desc: 'AI-powered academic command center featuring predictive GPA algorithms and focus tracking.',
    link: 'https://github.com/tripathiji1312/study_board',
    liveLink: 'https://stubuddy.vercel.app/',
    liveLabel: ':: LIVE_APP'
  },
  {
    id: '05',
    title: 'Ghost',
    tags: 'PyPI • Self-Healing AST',
    desc: 'Autonomous AI Test Agent for Python generating context-aware pytest suites via AST analysis.',
    link: 'https://github.com/tripathiji1312/ghost',
    liveLink: 'https://pypi.org/project/ghosttest/',
    liveLabel: ':: PYPI_PACKAGE'
  },
  {
    id: '06',
    title: 'PhantomNode',
    tags: 'DSP • SECDED',
    desc: 'An air-gapped acoustic data transmission engine that streams digital payloads over inaudible, near-ultrasonic sound waves using advanced DSP.',
    link: 'https://github.com/tripathiji1312/PhantomNode',
    liveLink: 'https://phantom-node-nine.vercel.app/',
    liveLabel: ':: LIVE_DEMO'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 400, damping: 30 }
  }
};

export default function Projects() {
  const isMobile = useIsMobile(768);

  return (
    <section className="container section-padding border-top" id="projects">
      <SectionReveal>
        <RevealItem>
          <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: '2rem' }}>/// OPEN SOURCE TRENCHES</h2>
        </RevealItem>
      </SectionReveal>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--grid-gap)', marginBottom: '4rem' }}>
        <SectionReveal>
          <RevealItem>
            <motion.div
              style={{ backgroundColor: 'var(--accent-red)', color: 'var(--bg-color)', padding: isMobile ? '2rem' : '3rem', gridColumn: isMobile ? '1' : '1 / -1', border: '3px solid var(--text-color)' }}
              whileHover={isMobile ? {} : { y: -5, boxShadow: '0 20px 0px var(--text-color)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3
                  className="text-large"
                  style={{
                    color: 'var(--bg-color)',
                    ...(isMobile ? { fontSize: 'clamp(2.4rem, 10vw, 3.25rem)' } : {})
                  }}
                >
                  PYTORCH
                </h3>
              </div>
              <p className="mono" style={{ fontSize: isMobile ? '1rem' : '1.2rem', marginBottom: '1.5rem', borderBottom: '2px solid rgba(255,255,255,0.3)', paddingBottom: '1rem' }}>C++ • ATen • Distributed Training</p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: isMobile ? '1rem' : '1.5rem', fontSize: isMobile ? '1rem' : '1.25rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🔥</span>
                  <div>
                    <strong><a href="https://github.com/pytorch/pytorch/pull/174009" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Merged PR #174009</a>:</strong> Ensured numerical consistency by resolving undefined behavior in C++ tensor indexing for the ATen library, impacting high-performance operations across CPU and CUDA backends.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🔥</span>
                  <div>
                    <strong><a href="https://github.com/pytorch/pytorch/pull/174312" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Merged PR #174312</a>:</strong> Optimized distributed sharding primitives by implementing exact type checks in the C++ dispatch layer, ensuring DTensor subclasses maintain custom dispatch logic in multi-GPU environments.
                  </div>
                </li>
              </ul>
            </motion.div>
          </RevealItem>
        </SectionReveal>

        <SectionReveal>
          <RevealItem>
            <motion.div
              style={{ border: '3px dashed var(--text-color)', padding: isMobile ? '1.5rem' : '2rem', backgroundColor: '#F4F4F0' }}
              whileHover={isMobile ? {} : { y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-start' }}>
                <h4 style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>GOOGLE JAX</h4>
                <span className="mono" style={{ color: 'var(--accent-blue)', fontWeight: 'bold', fontSize: isMobile ? '0.8rem' : '1rem', textAlign: 'right' }}>[ MERGED PR #32046 ]</span>
              </div>
              <p style={{ fontSize: isMobile ? '1rem' : '1.2rem' }}>Aligned CUDA 13 installation instructions for improved developer experience and ecosystem compatibility.</p>
            </motion.div>
          </RevealItem>
        </SectionReveal>
      </div>

      <SectionReveal>
        <RevealItem>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', margin: 0 }}>/// 02<br/>SELECTED<br/>OPERATIONS</h2>
          </div>
        </RevealItem>
      </SectionReveal>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))', gap: 'var(--grid-gap)', marginBottom: '4rem' }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={isMobile ? {} : { y: -8, boxShadow: '0 16px 0px var(--text-color)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            style={{
              border: '2px solid var(--text-color)',
              padding: isMobile ? '1.5rem' : '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: isMobile ? '350px' : '400px',
              backgroundColor: i % 3 === 0 ? 'var(--bg-color)' : i % 2 === 0 ? '#FFE0E0' : '#E0E8FF',
              boxShadow: isMobile ? '2px 2px 0px var(--text-color)' : '4px 4px 0px var(--text-color)',
              position: 'relative',
              cursor: 'pointer'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: isMobile ? '1.5rem' : '2rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="mono" style={{ fontSize: isMobile ? '2rem' : '2.5rem', fontWeight: 'bold', lineHeight: '1' }}>{p.id}</span>
                <span className="mono" style={{ fontSize: isMobile ? '0.7rem' : '0.8rem', opacity: 0.8, backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', padding: '0.2rem 0.4rem', maxWidth: '100%' }}>{p.tags}</span>
              </div>
              <h3 style={{ fontSize: isMobile ? '1.75rem' : '3rem', marginBottom: '1rem', lineHeight: '1' }}>{p.title}</h3>
              <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', marginBottom: isMobile ? '2rem' : '3rem', fontWeight: 500 }}>{p.desc}</p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href={p.link} target="_blank" rel="noreferrer" className="btn" style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', fontSize: isMobile ? '0.8rem' : '1rem', padding: isMobile ? '0.7rem 1rem' : '0.8rem 1.25rem' }}>
                :: VIEW_SOURCE
              </a>
              {p.liveLink && (
                <a href={p.liveLink} target="_blank" rel="noreferrer" className="btn" style={{ backgroundColor: 'var(--accent-blue)', color: 'var(--bg-color)', borderColor: 'var(--accent-blue)', fontSize: isMobile ? '0.8rem' : '1rem', padding: isMobile ? '0.7rem 1rem' : '0.8rem 1.25rem' }}>
                  {p.liveLabel}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
