import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AudioHUD() {
  const [audioOn, setAudioOn] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleAudio = () => {
    setAudioOn(!audioOn);
    // Real implementation would play synth or audio here.
    if (!audioOn) {
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // A4
        oscillator.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.5);
      } catch (e) {
        // no-op if blocked
      }
    }
  };

  return (
    <>
      {/* Custom Cursor Circle */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 30,
          height: 30,
          borderRadius: '50%',
          border: '2px solid var(--accent-red)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference'
        }}
        animate={{
          x: mousePos.x - 15,
          y: mousePos.y - 15,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          backgroundColor: 'var(--accent-blue)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Floating HUD */}
      <div style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 100, display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end', pointerEvents: 'none' }}>
        
        <div className="mono" style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', padding: '0.2rem 0.5rem', fontSize: '0.8rem', pointerEvents: 'auto' }}>
          SYS.LOC: MAIN_INDEX
        </div>

        <button 
          onClick={toggleAudio}
          className="mono" 
          style={{ 
            pointerEvents: 'auto',
            backgroundColor: audioOn ? 'var(--accent-yellow)' : 'var(--bg-color)', 
            color: 'var(--text-color)', 
            border: '2px solid var(--text-color)',
            padding: '0.2rem 0.5rem', 
            fontSize: '0.8rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
            outline: 'none'
          }}
        >
          [ AUDIO: {audioOn ? 'ON' : 'OFF'} ]
        </button>

      </div>
    </>
  );
}
