import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <section className="container" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      paddingTop: '10vh'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '40px', height: '40px', backgroundColor: 'var(--accent-red)', borderRadius: '50%' }}
        />
        <h2 className="mono" style={{ margin: 0, fontSize: '1.2rem' }}>/// ARCHITECT OF INTELLIGENCE</h2>
      </div>
      
      <motion.div style={{ y }}>
        <motion.h1 
          className="text-huge" 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          SWARNIM<br/>TRIPATHI
        </motion.h1>
      </motion.div>

      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          marginTop: '6rem', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem',
          borderTop: '2px solid var(--text-color)',
          paddingTop: '3rem'
        }}
      >
        <div>
          <p style={{ fontSize: '1.5rem', fontWeight: 500, maxWidth: '450px' }}>
            Code is easy. <span style={{ color: 'var(--accent-red)', fontWeight: 700 }}>Reliability is hard.</span> I build safety-first agents, adaptive learning engines, and backends that handle chaos with mathematical precision.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
          <a href="#projects" className="btn">
            <span style={{ width: '10px', height: '10px', backgroundColor: 'var(--accent-blue)', display: 'inline-block' }}></span>
            :: view_operations
          </a>
          <a href="#contact" className="btn" style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}>
            :: init_comms
          </a>
        </div>
      </motion.div>
    </section>
  );
}
