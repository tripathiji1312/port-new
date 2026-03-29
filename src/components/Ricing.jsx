import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Ricing() {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="container section-padding border-top" id="ricing" style={{ overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>/// 04<br/>SYSTEM<br/>CUSTOMIZATION</h2>
          <h3 className="text-large" style={{ color: 'var(--accent-blue)', marginBottom: '1.5rem', lineHeight: '1' }}>HYPRLAND &<br/>QUICKSHELL</h3>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
            I don't just write code, I craft my environment. My custom Linux builds leverage Hyprland for incredibly smooth, dynamic tiling and Quickshell for bespoke, performant UI components built entirely from scratch.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.a 
              href="https://github.com/tripathiji1312/hypr" 
              className="btn"
              target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              :: HYPRLAND_DOTS
            </motion.a>
            <motion.a 
              href="https://github.com/tripathiji1312/quickshell" 
              className="btn"
              target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}
            >
              :: QUICKSHELL_DOTS
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          style={{ position: 'relative', width: '100%', aspectRatio: '16/9', border: '4px solid var(--text-color)', overflow: 'hidden', backgroundColor: '#000' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img 
            src="https://github.com/tripathiji1312/quickshell/raw/main/image_quick/main_config.png" 
            alt="Quickshell Main Config"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
