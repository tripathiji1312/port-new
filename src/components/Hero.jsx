import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useIsMobile from '../hooks/useIsMobile';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const isMobile = useIsMobile(768);

  return (
    <section className="container" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      paddingTop: isMobile ? '8vh' : '15vh',
      paddingBottom: isMobile ? '8vh' : '20vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Background Floating Vibe - Subtle on mobile */}
      <motion.div 
        style={{
          position: 'absolute', right: isMobile ? '-30%' : '-10%', top: '10%',
          width: isMobile ? '80vw' : '50vw', height: isMobile ? '80vw' : '50vw', borderRadius: '50%',
          backgroundColor: 'var(--accent-yellow)', opacity: isMobile ? 0.1 : 0.2, filter: 'blur(100px)', zIndex: -1,
          y: y2
        }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1.5rem', marginBottom: '1rem', position: 'relative', zIndex: 2, flexWrap: 'wrap' }}>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ width: isMobile ? '40px' : '50px', height: isMobile ? '40px' : '50px', backgroundColor: 'var(--accent-red)', border: '3px solid var(--text-color)', display: 'grid', placeItems: 'center', flexShrink: 0 }}
        >
          <div style={{ width: isMobile ? '16px' : '20px', height: isMobile ? '16px' : '20px', backgroundColor: 'var(--bg-color)', borderRadius: '50%' }} />
        </motion.div>
        <h2 className="mono" style={{ margin: 0, fontSize: isMobile ? '0.85rem' : '1.2rem', backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', padding: isMobile ? '0.15rem 0.4rem' : '0.2rem 0.5rem' }}>
          /// ARCHITECT OF INTELLIGENCE
        </h2>
      </div>
      
      <motion.div style={{ y: y1, position: 'relative', zIndex: 2 }}>
        <motion.h1 
          className="text-huge" 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 50 }}
          style={{ margin: 0, textAlign: isMobile ? 'left' : 'left' }}
        >
          SWARNIM<br/>TRIPATHI
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ 
            fontSize: isMobile ? '0.95rem' : '1.25rem', 
            color: 'var(--accent-blue)', 
            fontWeight: 600,
            marginTop: '0.5rem',
            margin: '0.75rem 0 0 0'
          }}
        >
          ML Engineer • AI Architect • PyTorch Contributor
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 50 }}
        style={{ 
          marginTop: isMobile ? '2rem' : '4rem', 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: isMobile ? '2rem' : '4rem',
          borderTop: '3px solid var(--text-color)',
          paddingTop: isMobile ? '1.5rem' : '3rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div>
          <p style={{ fontSize: isMobile ? '1.1rem' : '1.5rem', fontWeight: 500, maxWidth: '500px', lineHeight: '1.4' }}>
            Part ML Engineer. Part System Ricer. <span style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>100% Chaos Handler.</span> I build safety-first agents, uncrackable inference pipelines, and backends that scale beautifully.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
          <motion.a 
            href="#projects" 
            className="btn"
            style={{ fontSize: isMobile ? '0.9rem' : '1.2rem', padding: isMobile ? '0.9rem 1.5rem' : '1.2rem 2.5rem', border: '3px solid var(--text-color)' }}
            whileHover={{ scale: isMobile ? 1.02 : 1.05, rotate: -2, backgroundColor: 'var(--accent-yellow)', color: 'var(--text-color)' }}
            whileTap={{ scale: 0.95 }}
          >
            :: INITIATE_EXPLORATION
          </motion.a>
        </div>
      </motion.div>

      {/* Marquee - Adjusted for mobile */}
      <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', width: '110vw', borderTop: '2px solid var(--text-color)', borderBottom: '2px solid var(--text-color)', overflow: 'hidden', padding: '0.75rem 0', display: 'flex', whiteSpace: 'nowrap', backgroundColor: 'var(--accent-blue)', color: 'var(--bg-color)', zIndex: 1, transform: 'translateX(-50%) rotate(-2deg)', transformOrigin: 'center' }}>
        <motion.div
           animate={{ x: [0, -1000] }}
           transition={{ duration: isMobile ? 30 : 20, repeat: Infinity, ease: 'linear' }}
           className="mono"
           style={{ display: 'inline-flex', gap: isMobile ? '2rem' : '4rem', fontSize: isMobile ? '0.85rem' : '1.5rem', fontWeight: 'bold' }}
        >
          <span>BUILDING DIGITAL BRAINS</span>
          <span>///</span>
          <span>LINUX RICING ENTHUSIAST</span>
          <span>///</span>
          <span>PYTORCH CONTRIBUTOR</span>
          <span>///</span>
          <span>COFFEE OVERDOSE</span>
          <span>///</span>
          <span>BUILDING DIGITAL BRAINS</span>
          <span>///</span>
          <span>LINUX RICING ENTHUSIAST</span>
          <span>///</span>
          <span>PYTORCH CONTRIBUTOR</span>
          <span>///</span>
        </motion.div>
      </div>
    </section>
  );
}
