import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 180]);

  return (
    <section className="container" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      paddingTop: '15vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Background Floating Vibe */}
      <motion.div 
        style={{
          position: 'absolute', right: '-10%', top: '10%',
          width: '50vw', height: '50vw', borderRadius: '50%',
          backgroundColor: 'var(--accent-yellow)', opacity: 0.2, filter: 'blur(100px)', zIndex: -1,
          y: y2
        }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ width: '50px', height: '50px', backgroundColor: 'var(--accent-red)', border: '4px solid var(--text-color)', display: 'grid', placeItems: 'center' }}
        >
          <div style={{ width: '20px', height: '20px', backgroundColor: 'var(--bg-color)', borderRadius: '50%' }} />
        </motion.div>
        <h2 className="mono" style={{ margin: 0, fontSize: '1.2rem', backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', padding: '0.2rem 0.5rem' }}>
          /// ARCHITECT OF INTELLIGENCE
        </h2>
      </div>
      
      <motion.div style={{ y: y1, position: 'relative', zIndex: 2 }}>
        <motion.h1 
          className="text-huge" 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 50 }}
          style={{ margin: 0 }}
        >
          SWARNIM<br/>TRIPATHI
        </motion.h1>
      </motion.div>

      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 50 }}
        style={{ 
          marginTop: '4rem', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem',
          borderTop: '4px solid var(--text-color)',
          paddingTop: '3rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div>
          <p style={{ fontSize: '1.5rem', fontWeight: 500, maxWidth: '500px', lineHeight: '1.4' }}>
            Part ML Engineer. Part System Ricer. <span style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>100% Chaos Handler.</span> I build safety-first agents, uncrackable inference pipelines, and backends that scale beautifully.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
          <motion.a 
            href="#projects" 
            className="btn"
            style={{ fontSize: '1.2rem', padding: '1.2rem 2.5rem', border: '4px solid var(--text-color)' }}
            whileHover={{ scale: 1.05, rotate: -2, backgroundColor: 'var(--accent-yellow)', color: 'var(--text-color)' }}
            whileTap={{ scale: 0.95 }}
          >
            :: INITIATE_EXPLORATION
          </motion.a>
        </div>
      </motion.div>

      {/* Marquee Vibe at Bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTop: '2px solid var(--text-color)', borderBottom: '2px solid var(--text-color)', overflow: 'hidden', padding: '1rem 0', display: 'flex', whiteSpace: 'nowrap', backgroundColor: 'var(--accent-blue)', color: 'var(--bg-color)', zIndex: 1, transform: 'rotate(-2deg) scale(1.1)', transformOrigin: 'center' }}>
        <motion.div
           animate={{ x: [0, -1000] }}
           transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
           className="mono"
           style={{ display: 'inline-flex', gap: '4rem', fontSize: '1.5rem', fontWeight: 'bold' }}
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
