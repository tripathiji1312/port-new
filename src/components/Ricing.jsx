import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Ricing() {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section className="container section-padding border-top" id="ricing" style={{ overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))', gap: isMobile ? '2rem' : '4rem', alignItems: 'center' }}>
        <motion.div
           initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 50 : 0 }}
           whileInView={{ opacity: 1, x: 0, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: isMobile ? '1rem' : '1.5rem', marginBottom: '1.5rem' }}>/// 04<br/>SYSTEM<br/>CUSTOMIZATION</h2>
          <h3 className="text-large" style={{ color: 'var(--accent-blue)', marginBottom: '1.5rem', lineHeight: '1', fontSize: isMobile ? '1.75rem' : 'inherit' }}>HYPRLAND &<br/>QUICKSHELL</h3>
          <p style={{ fontSize: isMobile ? '1rem' : '1.3rem', marginBottom: '2rem' }}>
            I don't just write code, I craft my environment. My custom Linux builds leverage Hyprland for incredibly smooth, dynamic tiling and Quickshell for bespoke, performant UI components built entirely from scratch.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <motion.a 
              href="https://github.com/tripathiji1312/hypr" 
              className="btn"
              target="_blank" rel="noreferrer"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontSize: isMobile ? '0.8rem' : '1rem', padding: isMobile ? '0.7rem 1rem' : '1rem 1.5rem' }}
            >
              :: HYPRLAND_DOTS
            </motion.a>
            <motion.a 
              href="https://github.com/tripathiji1312/quickshell" 
              className="btn"
              target="_blank" rel="noreferrer"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', fontSize: isMobile ? '0.8rem' : '1rem', padding: isMobile ? '0.7rem 1rem' : '1rem 1.5rem' }}
            >
              :: QUICKSHELL_DOTS
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          style={{ position: 'relative', width: '100%', aspectRatio: '16/9', border: isMobile ? '3px' : '4px' + ' solid var(--text-color)', overflow: 'hidden', backgroundColor: '#000' }}
          initial={{ opacity: 0, scale: isMobile ? 1 : 0.9, y: isMobile ? 50 : 0 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img 
            src="https://github.com/tripathiji1312/quickshell/raw/main/image_quick/main_config.png" 
            alt="Quickshell Main Config - Custom Linux Desktop Environment"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            whileHover={isMobile ? {} : { scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
