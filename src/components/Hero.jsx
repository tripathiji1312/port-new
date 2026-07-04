import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useIsMobile from '../hooks/useIsMobile';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const blurFadeUp = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 400, damping: 30 }
  }
};

const blurFadeUpDelayed = (delay) => ({
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 400, damping: 30, delay }
  }
});

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

      {/* Background Floating Vibe */}
      <motion.div
        style={{
          position: 'absolute', right: isMobile ? '-30%' : '-10%', top: '10%',
          width: isMobile ? '80vw' : '50vw', height: isMobile ? '80vw' : '50vw', borderRadius: '50%',
          backgroundColor: 'var(--accent-yellow)', opacity: isMobile ? 0.1 : 0.15, filter: 'blur(100px)', zIndex: -1,
          y: y2
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', zIndex: 2 }}
      >
        {/* Badge row */}
        <motion.div variants={blurFadeUp} style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            style={{ width: isMobile ? '40px' : '50px', height: isMobile ? '40px' : '50px', backgroundColor: 'var(--accent-red)', border: '3px solid var(--text-color)', display: 'grid', placeItems: 'center', flexShrink: 0 }}
          >
            <div style={{ width: isMobile ? '16px' : '20px', height: isMobile ? '16px' : '20px', backgroundColor: 'var(--bg-color)', borderRadius: '50%' }} />
          </motion.div>
          <h2 className="mono" style={{ margin: 0, fontSize: isMobile ? '0.85rem' : '1.2rem', backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', padding: isMobile ? '0.15rem 0.4rem' : '0.2rem 0.5rem' }}>
            /// ARCHITECT OF INTELLIGENCE
          </h2>
        </motion.div>

        {/* Name - staggered words */}
        <motion.div style={{ y: y1 }}>
          <motion.h1
            className="text-huge"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
            }}
            style={{ margin: 0, textAlign: 'left' }}
          >
            <motion.span variants={blurFadeUp} style={{ display: 'block' }}>SWARNIM</motion.span>
            <motion.span variants={blurFadeUp} style={{ display: 'block' }}>TRIPATHI</motion.span>
          </motion.h1>

          <motion.p
            variants={blurFadeUpDelayed(0.3)}
            style={{
              fontSize: isMobile ? '0.95rem' : '1.25rem',
              color: 'var(--accent-blue)',
              fontWeight: 600,
              margin: '0.75rem 0 0 0'
            }}
          >
            ML Engineer • AI Architect • PyTorch Contributor
          </motion.p>
        </motion.div>

        {/* Description + CTAs */}
        <motion.div
          variants={blurFadeUpDelayed(0.4)}
          style={{
            marginTop: isMobile ? '2rem' : '4rem',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? '2rem' : '4rem',
            borderTop: '3px solid var(--text-color)',
            paddingTop: isMobile ? '1.5rem' : '3rem'
          }}
        >
          <div>
            <p style={{ fontSize: isMobile ? '1.1rem' : '1.5rem', fontWeight: 500, maxWidth: '500px', lineHeight: '1.4' }}>
              Part ML Engineer. Part System Ricer. <span style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>100% Chaos Handler.</span> I build safety-first agents, uncrackable inference pipelines, and backends that scale beautifully.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
            <motion.a
              href="https://blog.swarnim.site/"
              className="btn"
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: isMobile ? '0.85rem' : '1.1rem', padding: isMobile ? '0.8rem 1.3rem' : '1rem 2.2rem', border: '3px solid var(--text-color)', backgroundColor: 'var(--accent-yellow)' }}
              whileHover={{ scale: isMobile ? 1.02 : 1.05, rotate: 2, backgroundColor: 'var(--accent-blue)', color: 'var(--bg-color)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              :: BLOG
            </motion.a>
            <motion.a
              href="#projects"
              className="btn"
              style={{ fontSize: isMobile ? '0.9rem' : '1.2rem', padding: isMobile ? '0.9rem 1.5rem' : '1.2rem 2.5rem', border: '3px solid var(--text-color)' }}
              whileHover={{ scale: isMobile ? 1.02 : 1.05, rotate: -2, backgroundColor: 'var(--accent-yellow)', color: 'var(--text-color)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              :: INITIATE_EXPLORATION
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Marquee */}
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
