import React from 'react';
import { motion } from 'framer-motion';

export default function Ricing() {
  return (
    <section className="container section-padding border-top" id="ricing">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>/// 03<br/>SYSTEM<br/>CUSTOMIZATION</h2>
          <h3 className="text-large" style={{ color: 'var(--accent-blue)', marginBottom: '1.5rem' }}>HYPRLAND &<br/>QUICKSHELL</h3>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
            I don't just write code, I craft my environment. My custom Linux builds leverage Hyprland for incredibly smooth, dynamic tiling and Quickshell for bespoke, performant UI components built entirely from scratch.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/tripathiji1312" target="_blank" rel="noreferrer" className="btn">
              :: VIEW_DOTFILES
            </a>
          </div>
        </div>
        
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', backgroundColor: 'var(--text-color)', border: '2px solid var(--text-color)', overflow: 'hidden' }}>
          {/* Placeholder for the user's config screenshot */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--bg-color)' }}>
             <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem', opacity: 0.5 }}>
               <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
               <circle cx="8.5" cy="8.5" r="1.5"></circle>
               <polyline points="21 15 16 10 5 21"></polyline>
             </svg>
             <p className="mono" style={{ opacity: 0.5 }}>[ USER_SCREENSHOT_PLACEHOLDER.PNG ]</p>
             <p style={{ fontSize: '0.8rem', opacity: 0.4, marginTop: '0.5rem' }}>Upload your hyprland/quickshell screenshot here</p>
          </div>
        </div>
      </div>
    </section>
  );
}
