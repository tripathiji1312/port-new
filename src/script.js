// 1. Smooth Scroll
const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true });
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

// 2. Magnetic Buttons
const magneticAreas = document.querySelectorAll('.magnetic-area');
magneticAreas.forEach(area => {
  area.addEventListener('mousemove', (e) => {
    const rect = area.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(area, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });
  });
  area.addEventListener('mouseleave', () => {
    gsap.to(area, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
  });
});

// 3. Cursor & Holographic Effect
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', (e) => {
  if (cursor) cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  if (follower) gsap.to(follower, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.15 });

  document.querySelectorAll('.module-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  });
});

// 4. Text Glitch & Typewriter
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelectorAll(".glitch-text").forEach(el => {
  el.onmouseover = event => {
    let iterations = 0;
    const original = event.target.dataset.text;
    const interval = setInterval(() => {
      event.target.innerText = original.split("").map((l, i) => {
        if (i < iterations) return original[i];
        return letters[Math.floor(Math.random() * 26)];
      }).join("");
      if (iterations >= original.length) clearInterval(interval);
      iterations += 1 / 2;
    }, 30);
  }
});

// Typewriter Effect
const typeWriterElement = document.querySelector('.typewriter');

function startTypewriter() {
  if (typeWriterElement) {
    const text = typeWriterElement.dataset.text;
    let i = 0;
    function type() {
      if (i < text.length) {
        typeWriterElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 30); // Typing speed
      } else {
        // Typing finished, reveal button and arrow
        gsap.to('.magnetic-area', { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
        gsap.to('.magnetic-area .hand-note', { opacity: 1, duration: 0.8, delay: 0.4, ease: "power2.out" });
      }
    }
    type();
  }
}

// Start typewriter after name reveal (approx 1.5s delay)
setTimeout(startTypewriter, 1500);

// 5. ANIMATIONS (FIXED VISIBILITY)
gsap.registerPlugin(ScrollTrigger);

// Hero Fade In
gsap.from(".reveal", { y: 50, opacity: 0, duration: 1.2, stagger: 0.1, ease: "power3.out" });

// Manifesto Highlight (OLD - REMOVED)
// gsap.utils.toArray('.reveal-text').forEach(el => { ... });

// NEW: Line-by-Line Smooth Reveal
const manifestoEl = document.querySelector('.manifesto');
if (manifestoEl) {
  // Initialize SplitType
  const text = new SplitType('.manifesto', { types: 'lines' });

  // Animate Lines
  gsap.from(text.lines, {
    scrollTrigger: {
      trigger: manifestoEl,
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "power3.out"
  });
}

// Modules - Triggered by grid
gsap.from(".reveal-module", {
  scrollTrigger: { trigger: ".modules-grid", start: "top 85%" },
  y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: "power2.out"
});

// Open Source Contributions - INDIVIDUAL TRIGGERS
gsap.utils.toArray('.reveal-oss').forEach(card => {
  gsap.from(card, {
    scrollTrigger: { trigger: card, start: "top 90%" },
    y: 50, opacity: 0, duration: 0.8, ease: "power2.out"
  });
});

// Projects - INDIVIDUAL TRIGGERS (Fixes visibility bug)
gsap.utils.toArray('.reveal-project').forEach(card => {
  gsap.from(card, {
    scrollTrigger: { trigger: card, start: "top 90%" },
    y: 50, opacity: 0, duration: 0.8, ease: "power2.out"
  });
});

// Human & Pitch Reveal
gsap.utils.toArray('.reveal-human').forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: "top 90%" },
    y: 30, opacity: 0, duration: 0.8, delay: i * 0.1
  });
});
gsap.utils.toArray('.reveal-pitch').forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: "top 85%" },
    x: -30, opacity: 0, duration: 0.8, delay: i * 0.15
  });
});

// Marquee
gsap.to(".track", { xPercent: -20, ease: "none", scrollTrigger: { trigger: ".marquee-section", scrub: 1 } });
gsap.fromTo(".track-rev", { xPercent: -20 }, { xPercent: 0, ease: "none", scrollTrigger: { trigger: ".marquee-section", scrub: 1 } });

// HUD Logic
const hudLoc = document.getElementById('hud-loc');
const hudScroll = document.getElementById('hud-scroll');

ScrollTrigger.create({
  start: 0, end: "max",
  onUpdate: (self) => {
    hudScroll.innerText = Math.round(self.progress * 100) + "%";
  }
});

// Section Tracking for HUD
document.querySelectorAll('section').forEach(sec => {
  ScrollTrigger.create({
    trigger: sec, start: "top center", end: "bottom center",
    onEnter: () => hudLoc.innerText = getSecName(sec),
    onEnterBack: () => hudLoc.innerText = getSecName(sec)
  });
});

function getSecName(sec) {
  if (sec.classList.contains('hero')) return "HERO";
  if (sec.querySelector('.modules-grid')) return "SYSTEMS";
  if (sec.querySelector('.oss-grid')) return "OSS";
  if (sec.querySelector('.project-card')) return "OPERATIONS";
  if (sec.querySelector('.human-grid-3d')) return "HUMAN";
  if (sec.classList.contains('footer')) return "TERMINAL";
  return "UNKNOWN";
}

// Handwritten Notes Reveal (General)
gsap.utils.toArray('.reveal-note').forEach(note => {
  // Skip the hero note as it's handled by the sequence
  if (note.closest('.magnetic-area')) return;

  gsap.fromTo(note,
    { opacity: 0, y: 10, scale: 0.9 },
    {
      opacity: 1, y: 0, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)",
      scrollTrigger: { trigger: note, start: "top 85%" }
    }
  );
});

// Mission Section Flashlight
const missionSection = document.querySelector('.mission-section');
if (missionSection) {
  missionSection.addEventListener('mousemove', (e) => {
    const rect = missionSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    missionSection.style.setProperty('--x', `${x}px`);
    missionSection.style.setProperty('--y', `${y}px`);
  });
}

// --- CINEMATIC AUDIO SYSTEM ---
class SoundManager {
  constructor() {
    this.ctx = null;
    this.isMuted = true;
    this.initialized = false;
    this.droneOsc = null;
    this.droneGain = null;
    this.droneFilter = null;
    this.masterGain = null;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.3; // Master volume
      this.masterGain.connect(this.ctx.destination);

      this.initialized = true;
      this.isMuted = false;
      this.updateToggleUI();

      // Start Ambient Drone
      this.startDrone();
      // Play Power Up
      this.playPowerUp();

      // Start Scroll Listener for Drone Modulation
      this.initScrollModulation();

    } catch (e) {
      console.error("AudioContext failed:", e);
    }
  }

  startDrone() {
    if (!this.ctx) return;
    // Dual Oscillator Drone for texture
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    this.droneFilter = this.ctx.createBiquadFilter();
    this.droneGain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc1.frequency.value = 55; // Low A
    osc2.type = 'sine';
    osc2.frequency.value = 55.5; // Slight detune for beating

    this.droneFilter.type = 'lowpass';
    this.droneFilter.frequency.value = 120; // Start muffled
    this.droneFilter.Q.value = 1;

    this.droneGain.gain.value = 0.15;

    osc1.connect(this.droneFilter);
    osc2.connect(this.droneFilter);
    this.droneFilter.connect(this.droneGain);
    this.droneGain.connect(this.masterGain);

    osc1.start();
    osc2.start();
    this.droneOsc = { osc1, osc2 };
  }

  initScrollModulation() {
    window.addEventListener('scroll', () => {
      if (this.isMuted || !this.ctx || !this.droneFilter) return;

      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPct = window.scrollY / maxScroll;

      // Modulate Filter: Opens up as you scroll down (120Hz -> 600Hz)
      const targetFreq = 120 + (scrollPct * 480);
      this.droneFilter.frequency.setTargetAtTime(targetFreq, this.ctx.currentTime, 0.1);

      // Modulate Volume: Slightly louder deeper in
      // this.droneGain.gain.setTargetAtTime(0.15 + (scrollPct * 0.05), this.ctx.currentTime, 0.1);
    });
  }

  toggleMute() {
    if (!this.initialized) {
      this.init();
      return;
    }
    this.isMuted = !this.isMuted;

    if (this.ctx) {
      if (this.isMuted) {
        this.ctx.suspend();
      } else {
        this.ctx.resume();
      }
    }
    this.updateToggleUI();
  }

  updateToggleUI() {
    const btn = document.getElementById('audio-toggle');
    if (btn) {
      btn.textContent = this.isMuted ? '[AUDIO: OFF]' : '[AUDIO: ON]';
      btn.classList.toggle('active', !this.isMuted);
    }
  }

  playPowerUp() {
    if (this.isMuted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(110, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 1.5);

    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.3, this.ctx.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.5);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 1.5);
  }

  playHover() {
    if (this.isMuted || !this.ctx) return;
    // FM Synthesis Chirp
    const carrier = this.ctx.createOscillator();
    const modulator = this.ctx.createOscillator();
    const modGain = this.ctx.createGain();
    const master = this.ctx.createGain();

    carrier.type = 'sine';
    carrier.frequency.setValueAtTime(800, this.ctx.currentTime);

    modulator.type = 'square';
    modulator.frequency.setValueAtTime(40, this.ctx.currentTime);

    modGain.gain.setValueAtTime(200, this.ctx.currentTime); // Modulation depth

    modulator.connect(modGain);
    modGain.connect(carrier.frequency);

    master.gain.setValueAtTime(0.05, this.ctx.currentTime);
    master.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);

    carrier.connect(master);
    master.connect(this.masterGain);

    carrier.start();
    modulator.start();
    carrier.stop(this.ctx.currentTime + 0.1);
    modulator.stop(this.ctx.currentTime + 0.1);
  }

  playClick() {
    if (this.isMuted || !this.ctx) return;
    // Mechanical Thud + High Click
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Low Thud
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);

    // Noise Burst (simulated with high freq random-ish waves for simplicity without buffer)
    // Or just a high sine blip
    const click = this.ctx.createOscillator();
    const clickGain = this.ctx.createGain();
    click.type = 'square';
    click.frequency.setValueAtTime(2000, this.ctx.currentTime);
    click.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.05);
    clickGain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    clickGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    click.connect(clickGain);
    clickGain.connect(this.masterGain);
    click.start();
    click.stop(this.ctx.currentTime + 0.05);
  }

  playReveal() {
    if (this.isMuted || !this.ctx) return;
    // Ethereal Swell
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime); // A3

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, this.ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(2000, this.ctx.currentTime + 1.0);

    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.05, this.ctx.currentTime + 0.5);
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 2.0);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 2.0);
  }

  playGlitch() {
    if (this.isMuted || !this.ctx) return;

    // 1. Noise Burst (Digital Crunch)
    const bufferSize = this.ctx.sampleRate * 0.1; // 0.1 seconds
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      // White noise with some "bitcrush" feel by stepping
      data[i] = (Math.random() * 2 - 1) * (Math.random() > 0.5 ? 1 : 0);
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);

    noise.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start();

    // 2. Sawtooth Glitch (Tonal Artifact)
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();

    osc.type = 'sawtooth';
    // Random high frequency for "error" tone
    osc.frequency.setValueAtTime(100 + Math.random() * 500, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(2000 + Math.random() * 1000, this.ctx.currentTime + 0.05);

    oscGain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(oscGain);
    oscGain.connect(this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }
}

const audioSys = new SoundManager();
const audioBtn = document.getElementById('audio-toggle');

if (audioBtn) {
  audioBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    audioSys.toggleMute();
  });
}

// Initialize on first interaction (click anywhere)
const initAudio = () => {
  if (!audioSys.initialized) {
    // We don't auto-init on click anymore to respect "OFF" state, 
    // BUT for the "Cinematic" experience, usually you want to start it.
    // Let's stick to: User must click the toggle OR we init silently but keep muted?
    // No, let's keep the toggle as the main entry point for "ON", 
    // but if they click the toggle, it calls init().
    // The global click listener is just to ensure AudioContext is created in a user gesture if needed later.
    // Actually, let's just rely on the toggle button for the full experience.
  }
  document.removeEventListener('click', initAudio);
};
document.addEventListener('click', initAudio);

// Attach sounds
const interactives = document.querySelectorAll('a, button, .module-card, .project-card, .human-card, .view-btn');
interactives.forEach(el => {
  el.addEventListener('mouseenter', () => audioSys.playHover());
  el.addEventListener('click', () => audioSys.playClick());
});

// Hero Text Glitch Sound
const heroTitles = document.querySelectorAll('.hero-title');
heroTitles.forEach(title => {
  title.addEventListener('mouseenter', () => audioSys.playGlitch());
});

// Scroll Reveal Sounds
// We can hook into the existing GSAP ScrollTriggers or just add a simple observer
// Let's use a simple IntersectionObserver for major sections to trigger "Reveal" sound
const sections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Play reveal sound with a slight debounce/limit
      audioSys.playReveal();
    }
  });
}, { threshold: 0.3 });

sections.forEach(sec => revealObserver.observe(sec));

// Digital Signature Canvas
const sigCanvas = document.getElementById('signature-canvas');
if (sigCanvas) {
  const ctx = sigCanvas.getContext('2d');
  let width, height;

  const resize = () => {
    width = sigCanvas.width = sigCanvas.offsetWidth;
    height = sigCanvas.height = sigCanvas.offsetHeight;
  };
  window.addEventListener('resize', resize);
  resize();

  const points = [];
  let isDrawing = false;

  const addPoint = (x, y) => {
    points.push({ x, y, age: 0 });
  };

  sigCanvas.addEventListener('mousedown', e => { isDrawing = true; addPoint(e.offsetX, e.offsetY); });
  sigCanvas.addEventListener('mousemove', e => { if (isDrawing) addPoint(e.offsetX, e.offsetY); });
  window.addEventListener('mouseup', () => isDrawing = false);

  function animateSig() {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = '#b8f249';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      p.age++;
      if (p.age > 100) { points.splice(i, 1); i--; continue; }

      const alpha = 1 - p.age / 100;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      if (i > 0 && points[i - 1].age < 100) {
        ctx.moveTo(points[i - 1].x, points[i - 1].y);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }
    }
    requestAnimationFrame(animateSig);
  }
  animateSig();
}

// 6. Three.js Particles
try {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);

  const geometry = new THREE.PlaneGeometry(100, 100, 60, 60);
  const material = new THREE.PointsMaterial({
    size: 0.08,
    color: 0xccff00,
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending
  });
  const mesh = new THREE.Points(geometry, material);

  // Create a wave effect
  const originalPositions = geometry.attributes.position.array.slice();

  mesh.rotation.x = -Math.PI / 2.5;
  mesh.position.y = -10;
  scene.add(mesh);
  camera.position.z = 20;

  let mx = 0, my = 0;
  document.addEventListener('mousemove', (e) => {
    mx = (e.clientX / window.innerWidth) * 2 - 1;
    my = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  const clock = new THREE.Clock();
  function animate() {
    const t = clock.getElapsedTime();

    const positions = geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      // Wave calculation
      const x = originalPositions[i];
      const y = originalPositions[i + 1]; // This is actually Z in our rotated plane

      // Perlin-ish noise simulation using sin/cos
      const z = Math.sin(x * 0.5 + t * 0.5) * 2 + Math.cos(y * 0.3 + t * 0.3) * 2;

      positions[i + 2] = z;
    }
    geometry.attributes.position.needsUpdate = true;

    mesh.rotation.z = t * 0.05;

    // Subtle camera movement based on mouse
    camera.position.x += (mx * 2 - camera.position.x) * 0.05;
    camera.position.y += (my * 2 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
} catch (e) { console.log(e); }

// 10. Clone Repo Button Functionality
const cloneButtons = document.querySelectorAll('.copy-clone-btn');

cloneButtons.forEach(btn => {
  btn.addEventListener('click', async (e) => {
    e.preventDefault(); // Prevent default button behavior
    const repoUrl = btn.getAttribute('data-repo');

    if (repoUrl) {
      try {
        await navigator.clipboard.writeText(repoUrl);

        // Visual Feedback
        const originalText = btn.innerText;
        btn.innerText = ":: Copied!";
        btn.classList.add('copied'); // Optional: Add a class for styling if needed

        setTimeout(() => {
          btn.innerText = originalText;
          btn.classList.remove('copied');
        }, 2000);

      } catch (err) {
        console.error('Failed to copy: ', err);
        btn.innerText = ":: Error!";
        setTimeout(() => {
          btn.innerText = ":: Clone Repo";
        }, 2000);
      }
    }
  });
});