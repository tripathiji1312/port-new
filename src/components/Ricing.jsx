import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useIsMobile from '../hooks/useIsMobile';
import { SectionReveal, RevealItem } from './SectionReveal';

export default function Ricing() {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const isMobile = useIsMobile(768);

  return (
    <section className="container section-padding border-top" id="ricing" style={{ overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))', gap: isMobile ? '2rem' : '4rem', alignItems: 'center' }}>
        <SectionReveal>
          <RevealItem>
            <h2 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', marginBottom: '1.5rem' }}>/// 04<br/>SYSTEM<br/>CUSTOMIZATION</h2>
          </RevealItem>
          <RevealItem>
            <h3
              className="text-large"
              style={{
                color: 'var(--accent-blue)',
                marginBottom: '1.5rem',
                lineHeight: '1',
                ...(isMobile ? { fontSize: 'clamp(2.25rem, 10vw, 3.1rem)' } : {})
              }}
            >
              HYPRLAND &<br/>QUICKSHELL
            </h3>
          </RevealItem>
          <RevealItem>
            <p style={{ fontSize: isMobile ? '1rem' : '1.3rem', marginBottom: '2rem' }}>
              I don't just write code, I craft my environment. My custom Linux builds leverage Hyprland for incredibly smooth, dynamic tiling and Quickshell for bespoke, performant UI components built entirely from scratch.
            </p>
          </RevealItem>
          <RevealItem>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <motion.a
                href="https://github.com/tripathiji1312/hypr"
                className="btn"
                target="_blank" rel="noreferrer"
                whileHover={isMobile ? {} : { scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                style={{ fontSize: isMobile ? '0.8rem' : '1rem', padding: isMobile ? '0.7rem 1rem' : '1rem 1.5rem' }}
              >
                :: HYPRLAND_DOTS
              </motion.a>
              <motion.a
                href="https://github.com/tripathiji1312/quickshell"
                className="btn"
                target="_blank" rel="noreferrer"
                whileHover={isMobile ? {} : { scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', fontSize: isMobile ? '0.8rem' : '1rem', padding: isMobile ? '0.7rem 1rem' : '1rem 1.5rem' }}
              >
                :: QUICKSHELL_DOTS
              </motion.a>
            </div>
          </RevealItem>
        </SectionReveal>

        <SectionReveal>
          <RevealItem>
            <motion.div
              style={{ position: 'relative', width: '100%', aspectRatio: '16/9', border: isMobile ? '3px solid var(--text-color)' : '4px solid var(--text-color)', overflow: 'hidden', backgroundColor: '#000' }}
            >
              <motion.img
                src="https://github.com/tripathiji1312/quickshell/raw/main/image_quick/main_config.png"
                alt="Quickshell Main Config - Custom Linux Desktop Environment"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                whileHover={isMobile ? {} : { scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            </motion.div>
          </RevealItem>
        </SectionReveal>
      </div>
    </section>
  );
}
