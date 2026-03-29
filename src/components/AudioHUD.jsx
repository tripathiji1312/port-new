import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AudioHUD() {
  const [audioOn, setAudioOn] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Update mouse position for custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Interaction Sounds (Hover & Click)
  useEffect(() => {
    if (!audioOn) return;
    
    // Shared audio context for interaction sounds so it doesn't clip as much
    let intCtx;
    try { intCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e){}

    const playTick = (freq, type) => {
      if (!intCtx) return;
      try {
        if(intCtx.state === 'suspended') intCtx.resume();
        const osc = intCtx.createOscillator();
        const gain = intCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, intCtx.currentTime);
        
        // sharp, plucky envelope
        gain.gain.setValueAtTime(0.05, intCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, intCtx.currentTime + 0.1);
        
        osc.connect(gain);
        gain.connect(intCtx.destination);
        osc.start();
        osc.stop(intCtx.currentTime + 0.1);
      } catch (e) {}
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        playTick(800, 'sine'); // Soft high tick for hover
      }
    };
    
    const handleMouseDown = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        playTick(400, 'square'); // More robust tick for click
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      if (intCtx) intCtx.close();
    }
  }, [audioOn]);

  // Continuous arpeggiator modulated by SCROLL
  useEffect(() => {
    let audioCtx;
    let interval;
    if (audioOn) {
      try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        // Synthwave-style A minor pentatonic / retro notes
        const notes = [220.00, 261.63, 329.63, 392.00, 440.00, 329.63, 261.63, 164.81];
        let noteIdx = 0;

        // Base droning bass
        const bassOsc = audioCtx.createOscillator();
        const bassGain = audioCtx.createGain();
        bassOsc.type = 'sawtooth';
        bassOsc.frequency.value = 55.00; // Low A
        bassGain.gain.value = 0.05;
        bassOsc.connect(bassGain);
        bassGain.connect(audioCtx.destination);
        bassOsc.start();

        interval = setInterval(() => {
          if(audioCtx.state === 'suspended') audioCtx.resume();
          
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
          const scrollPct = Math.min(1, Math.max(0, scrollTop / maxScroll));
          
          // Modulate filter and tempo slightly based on scroll depth
          const baseFilterFreq = 200 + (scrollPct * 3000); // Opens up filter on scroll down

          const osc = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();
          const filter = audioCtx.createBiquadFilter();

          osc.type = 'square';
          // increase octave slightly if scroll is past 50%
          const octaveMult = scrollPct > 0.5 ? 2 : 1;
          osc.frequency.setValueAtTime(notes[noteIdx] * octaveMult, audioCtx.currentTime);
          
          // Filter to make it "plucky"
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(baseFilterFreq * 2, audioCtx.currentTime);
          filter.frequency.exponentialRampToValueAtTime(baseFilterFreq / 2, audioCtx.currentTime + 0.2);

          // Volume Envelope
          gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
          gainNode.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 0.02);
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
          
          osc.connect(filter);
          filter.connect(gainNode);
          gainNode.connect(audioCtx.destination);
          
          osc.start();
          osc.stop(audioCtx.currentTime + 0.2);
          
          noteIdx = (noteIdx + 1) % notes.length;
        }, 180); // roughly 16th notes
        
        // Cleanup loop
        return () => {
          clearInterval(interval);
          bassOsc.stop();
          audioCtx.close();
        };
      } catch (e) {
        console.warn("Audio playback not supported or was blocked");
      }
    }
  }, [audioOn]);

  return (
    <>
      {/* Custom Cursor Circle */}
      <motion.div
        className="custom-cursor"
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
        className="custom-cursor"
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
      <div className="audio-hud-container" style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 100, display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end', pointerEvents: 'none' }}>
        
        <div className="mono" style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', padding: '0.2rem 0.5rem', fontSize: '0.8rem', pointerEvents: 'auto' }}>
          SYS.LOC: MAIN_INDEX
        </div>

        <button 
          onClick={() => setAudioOn(!audioOn)}
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
