import { useMemo, useState, useEffect, useRef } from 'react'

export default function HeroSection() {
  const [scanPos, setScanPos] = useState(15) // drone X position (percentage)
  const animRef = useRef()

  // Smooth back-and-forth drone scanning
  useEffect(() => {
    let start = performance.now()
    const DURATION = 6000 // 6s per sweep direction

    const tick = (ts) => {
      const elapsed = ts - start
      const cycle = (elapsed % (DURATION * 2)) / (DURATION * 2)
      // Ease in-out sine wave from 0 to 1 to 0
      const ease = (Math.sin((cycle * Math.PI * 2) - Math.PI / 2) + 1) / 2
      // Map to 15% -> 85% range
      setScanPos(15 + ease * 70)
      
      animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  // Defect zones defined by their X position on the bridge
  const DEFECTS = [
    { id: 'D-01', x: 28, type: 'CRACK', depth: '3.2mm', conf: 96 },
    { id: 'D-02', x: 50, type: 'CORROSION', depth: 'SURFACE', conf: 98 },
    { id: 'D-03', x: 75, type: 'SPALLING', depth: '12.4mm', conf: 92 },
  ]

  // Find the active defect based on drone proximity
  const activeDefect = useMemo(() => {
    return DEFECTS.find(d => Math.abs(d.x - scanPos) < 8)
  }, [scanPos])

  // Generate background particles
  const particles = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.5 + Math.random() * 2,
      delay: Math.random() * -5,
      dur: 3 + Math.random() * 4,
    })), [])

  return (
    <section className="hero">
      {/* Immersive background glow */}
      <div className="hero-glow-bg" />

      <div className="container hero-grid">
        <div className="hero-content reveal">
          <div className="eyebrow mono">NIRMAAN · IIT MADRAS / INTELLIGENCE</div>
          <h1>An MRI for ageing <span className="orange">infrastructure.</span></h1>
          <p className="hero-copy">
            We measure what the industry estimates. Drishti Labs turns inspection into quantified,
            repeatable infrastructure intelligence — from capture and defect measurement to
            diagnosis and repair scope.
          </p>
          <div className="actions">
            <a className="btn primary" href="#product">Explore the technology ↗</a>
            <a className="btn secondary" href="mailto:infosdrishtilabs@gmail.com">Talk to Drishti</a>
          </div>
        </div>

        {/* ── Zoomed 3D Inspection Scene ── */}
        <div className="hero-visual-container reveal">
          
          <div className="inspection-viewport">
            
            {/* 1. Zoomed-in Bridge Structure */}
            <div className="bridge-zoomed">
              <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" className="bridge-svg">
                <defs>
                  <linearGradient id="concrete" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a1a1a"/>
                    <stop offset="100%" stopColor="#0a0a0a"/>
                  </linearGradient>
                  <linearGradient id="deckSide" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#222"/>
                    <stop offset="10%" stopColor="#333"/>
                    <stop offset="100%" stopColor="#111"/>
                  </linearGradient>
                  <linearGradient id="highlight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.15)"/>
                    <stop offset="100%" stopColor="transparent"/>
                  </linearGradient>
                  <filter id="orangeGlow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  <filter id="intenseGlow"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  
                  {/* Hexagon Pattern for structural mesh */}
                  <pattern id="hex" width="30" height="52" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
                    <path d="M15 0 L30 8.66 L30 25.98 L15 34.64 L0 25.98 L0 8.66 Z" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                    <path d="M15 51.96 L30 43.3 L30 25.98 L15 34.64 L0 25.98 L0 43.3 Z" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                  </pattern>
                </defs>

                {/* Massive Pillar */}
                <rect x="420" y="50" width="160" height="600" fill="url(#concrete)"/>
                <rect x="420" y="50" width="160" height="600" fill="url(#hex)"/>
                <rect x="420" y="50" width="10" height="600" fill="rgba(0,0,0,0.5)"/>
                <rect x="570" y="50" width="10" height="600" fill="rgba(255,255,255,0.05)"/>
                
                {/* Pillar details */}
                <line x1="460" y1="50" x2="460" y2="600" stroke="rgba(0,0,0,0.8)" strokeWidth="4"/>
                <line x1="540" y1="50" x2="540" y2="600" stroke="rgba(0,0,0,0.8)" strokeWidth="4"/>
                <rect x="410" y="240" width="180" height="40" fill="#151515"/>

                {/* Cables coming down */}
                <g stroke="#333" strokeWidth="4" opacity="0.8">
                  <line x1="200" y1="-100" x2="100" y2="280"/>
                  <line x1="300" y1="-100" x2="250" y2="280"/>
                  <line x1="800" y1="-100" x2="900" y2="280"/>
                  <line x1="700" y1="-100" x2="750" y2="280"/>
                </g>

                {/* Deck (Perspective slant) */}
                <path d="M-100,280 L1100,280 L1100,380 L-100,380 Z" fill="url(#deckSide)"/>
                <path d="M-100,280 L1100,280 L1100,285 L-100,285 Z" fill="url(#highlight)"/>
                <line x1="-100" y1="380" x2="1100" y2="380" stroke="#000" strokeWidth="6"/>
                
                {/* Under-deck ribs */}
                {Array.from({length: 24}, (_, i) => (
                  <rect key={i} x={i * 50 - 50} y="380" width="15" height="25" fill="#0a0a0a" stroke="#000" strokeWidth="2"/>
                ))}

                {/* ── Dynamic Cracks (Glow based on drone proximity) ── */}
                <g filter="url(#orangeGlow)">
                  {DEFECTS.map(d => {
                    const distance = Math.abs(d.x - scanPos)
                    const intensity = Math.max(0, 1 - distance / 12) // Glow intensity fades as drone moves away
                    
                    return (
                      <g key={d.id} style={{ opacity: 0.1 + intensity * 0.9 }}>
                        {d.id === 'D-01' && (
                          <path d="M260,300 L275,320 L265,340 L285,360 L280,375" fill="none" stroke="var(--orange)" strokeWidth="2"/>
                        )}
                        {d.id === 'D-02' && (
                          <>
                            <circle cx="500" cy="330" r="15" fill="none" stroke="var(--orange)" strokeWidth="1.5" strokeDasharray="4 2"/>
                            <path d="M490,320 L510,340 M510,320 L490,340" stroke="var(--orange)" strokeWidth="2"/>
                          </>
                        )}
                        {d.id === 'D-03' && (
                          <path d="M740,280 L760,310 L745,330 L770,350 L755,380" fill="none" stroke="var(--orange)" strokeWidth="2.5"/>
                        )}
                        {/* Glow nodes on the defect */}
                        {intensity > 0.5 && (
                          <circle cx={d.x * 10} cy={330} r={intensity * 8} fill="var(--orange)" filter="url(#intenseGlow)" opacity={intensity}/>
                        )}
                      </g>
                    )
                  })}
                </g>

                {/* Scanning grid overlay on bridge that follows the drone */}
                <g stroke="var(--orange)" strokeWidth="0.5" opacity="0.15">
                  {Array.from({length: 8}, (_, i) => (
                    <line key={`h${i}`} x1={scanPos * 10 - 150} y1={280 + i * 14} x2={scanPos * 10 + 150} y2={280 + i * 14}/>
                  ))}
                  {Array.from({length: 12}, (_, i) => (
                    <line key={`v${i}`} x1={scanPos * 10 - 150 + i * 27} y1="280" x2={scanPos * 10 - 150 + i * 27} y2="380"/>
                  ))}
                </g>
              </svg>
            </div>

            {/* 2. Synced Drone & Beam */}
            <div className="synced-drone-group" style={{ left: `${scanPos}%` }}>
              <div className="drone-hover-wrapper">
                {/* Light Beam (Cone) */}
                <div className="scanner-beam" />
                <div className="scanner-beam-impact" />

                {/* The Drone */}
                <div className="drone-body">
                  <svg viewBox="0 0 120 80" className="drone-svg-new">
                    <defs>
                      <filter id="dGlow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    </defs>
                    
                    {/* Props */}
                    <ellipse cx="20" cy="20" rx="18" ry="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1">
                      <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.1s" repeatCount="indefinite"/>
                    </ellipse>
                    <ellipse cx="100" cy="20" rx="18" ry="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1">
                      <animateTransform attributeName="transform" type="rotate" from="0 100 20" to="-360 100 20" dur="0.12s" repeatCount="indefinite"/>
                    </ellipse>
                    
                    {/* Arms */}
                    <line x1="60" y1="40" x2="20" y2="25" stroke="#777" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="60" y1="40" x2="100" y2="25" stroke="#777" strokeWidth="3" strokeLinecap="round"/>
                    
                    {/* Chassis */}
                    <rect x="40" y="30" width="40" height="20" rx="6" fill="#222" stroke="#555" strokeWidth="1"/>
                    <path d="M45 50 L50 65 L70 65 L75 50" fill="none" stroke="#777" strokeWidth="2" strokeLinecap="round"/>
                    
                    {/* Camera Gimbal */}
                    <circle cx="60" cy="55" r="8" fill="#111" stroke="#444" strokeWidth="1"/>
                    <circle cx="60" cy="55" r="3" fill="#000" stroke="var(--orange)" strokeWidth="1.5"/>
                    <circle cx="60" cy="55" r="1.5" fill="var(--orange)" filter="url(#dGlow)">
                      <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite"/>
                    </circle>
                    
                    {/* Drone Status Lights */}
                    <circle cx="45" cy="35" r="1.5" fill="#ff2222" filter="url(#dGlow)">
                      <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="75" cy="35" r="1.5" fill="#22ff22" filter="url(#dGlow)">
                      <animate attributeName="opacity" values="1;0.5;1" dur="0.5s" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                  <div className="drone-tag mono">
                    DRONE-01
                    <span className="drone-tag-line" />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Live HUD Feed */}
            <div className="hud-panel">
              <div className="hud-header mono">
                <div className="hud-recording-dot" /> LIVE INTELLIGENCE FEED
              </div>
              
              <div className="hud-content">
                {/* Visualizer matching scan position */}
                <div className="hud-visualizer">
                  <div className="hud-vis-track">
                    {/* Tick marks */}
                    {Array.from({length: 20}, (_, i) => (
                      <div key={i} className="hud-tick" />
                    ))}
                    {/* Moving cursor on HUD */}
                    <div className="hud-cursor" style={{ left: `${scanPos}%` }} />
                    
                    {/* Defect markers on HUD track */}
                    {DEFECTS.map(d => (
                      <div key={d.id} className={`hud-marker ${activeDefect?.id === d.id ? 'active' : ''}`} style={{ left: `${d.x}%` }}>
                        <span>{d.id}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active Analysis Readout */}
                <div className="hud-analysis">
                  {activeDefect ? (
                    <div className="hud-alert">
                      <div className="hud-alert-title orange mono">
                        ⚠ {activeDefect.type} DETECTED
                      </div>
                      <div className="hud-alert-details mono">
                        <div><span>ID</span> <b>{activeDefect.id}</b></div>
                        <div><span>DEPTH</span> <b>{activeDefect.depth}</b></div>
                        <div><span>CONFIDENCE</span> <b className="orange">{activeDefect.conf}%</b></div>
                      </div>
                      <div className="hud-bar-container">
                        <div className="hud-bar-fill" style={{ width: `${activeDefect.conf}%` }} />
                      </div>
                    </div>
                  ) : (
                    <div className="hud-scanning mono">
                      <div className="hud-scanning-text">SCANNING SURFACE...</div>
                      <div className="hud-scanning-wave">
                        {Array.from({length: 15}, (_, i) => (
                          <div key={i} className="wave-bar" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Floating ambient particles */}
            {particles.map(p => (
              <div key={p.id} className="ambient-particle" style={{
                left: `${p.x}%`, top: `${p.y}%`,
                width: p.size, height: p.size,
                animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s`
              }}/>
            ))}
          </div>
        </div>
      </div>
      
      <div className="scroll-note mono">SCROLL TO INSPECT ↓</div>
    </section>
  )
}
