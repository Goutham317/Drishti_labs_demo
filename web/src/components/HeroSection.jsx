import { useMemo, useState, useEffect } from 'react'

export default function HeroSection() {
  const [scanActive, setScanActive] = useState(false)
  const [detectPhase, setDetectPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setScanActive(true), 800)
    const cycle = setInterval(() => {
      setDetectPhase(p => (p + 1) % 4)
    }, 2800)
    return () => { clearTimeout(t1); clearInterval(cycle) }
  }, [])

  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      top: `${10 + Math.random() * 80}%`,
      delay: `${Math.random() * 5}s`,
      dur: `${3 + Math.random() * 4}s`,
      size: 1 + Math.random() * 2,
    })), [])

  return (
    <section className="hero">
      <div className="hero-atmos">
        <div className="hero-atmos-core" />
        <div className="hero-atmos-ring" />
        <div className="hero-atmos-flare" />
      </div>

      <div className="container hero-grid">
        <div className="reveal">
          <div className="eyebrow mono">NIRMAAN · IIT MADRAS / INFRASTRUCTURE INTELLIGENCE</div>
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

        <div className="hero-visual reveal" id="scan-card">
          <div className="inspect-scene">
            <div className="inspect-sweep" />

            {/* ═══ Realistic Cable-Stayed Bridge ═══ */}
            <div className="inspect-bridge">
              <svg viewBox="0 0 700 400" fill="none" className="bridge-3d-svg" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <filter id="wg"><feGaussianBlur stdDeviation="1" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  <filter id="sg"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  <linearGradient id="waterG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0a1520" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#050a10" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>

                {/* Perspective ground grid */}
                <g opacity="0.12" stroke="#ff641f" strokeWidth="0.4">
                  {Array.from({length: 16}, (_, i) => (
                    <line key={`h${i}`} x1="0" y1={260 + i * 9} x2="700" y2={260 + i * 9}/>
                  ))}
                  {Array.from({length: 18}, (_, i) => {
                    const x = (i - 9) * 45 + 350
                    return <line key={`v${i}`} x1={350 + (x - 350) * 0.25} y1="260" x2={x} y2="400"/>
                  })}
                </g>

                {/* Water surface */}
                <rect x="0" y="280" width="700" height="120" fill="url(#waterG)"/>
                <path d="M0 285 Q80 282,160 285 T320 285 T480 285 T640 285 L700 285" stroke="#1a3040" strokeWidth="0.4" fill="none" opacity="0.4">
                  <animate attributeName="d" values="M0 285 Q80 282,160 285 T320 285 T480 285 T640 285 L700 285;M0 285 Q80 288,160 285 T320 285 T480 285 T640 285 L700 285;M0 285 Q80 282,160 285 T320 285 T480 285 T640 285 L700 285" dur="5s" repeatCount="indefinite"/>
                </path>

                {/* ── Left Approach ── */}
                <g filter="url(#wg)">
                  <line x1="0" y1="242" x2="140" y2="235" stroke="#ff641f" strokeWidth="1" opacity="0.6"/>
                  <line x1="0" y1="250" x2="145" y2="243" stroke="#ff641f" strokeWidth="0.7" opacity="0.4"/>
                  {Array.from({length: 5}, (_, i) => (
                    <line key={`la${i}`} x1={20 + i * 28} y1="242" x2={22 + i * 28} y2="250" stroke="#ff641f" strokeWidth="0.3" opacity="0.3"/>
                  ))}
                </g>

                {/* ── Right Approach ── */}
                <g filter="url(#wg)">
                  <line x1="560" y1="235" x2="700" y2="242" stroke="#ff641f" strokeWidth="1" opacity="0.6"/>
                  <line x1="555" y1="243" x2="700" y2="250" stroke="#ff641f" strokeWidth="0.7" opacity="0.4"/>
                  {Array.from({length: 5}, (_, i) => (
                    <line key={`ra${i}`} x1={570 + i * 28} y1="235" x2={572 + i * 28} y2="243" stroke="#ff641f" strokeWidth="0.3" opacity="0.3"/>
                  ))}
                </g>

                {/* ── Main Deck (3D depth) ── */}
                <g filter="url(#wg)">
                  {/* Top edge */}
                  <line x1="100" y1="233" x2="600" y2="233" stroke="#ff641f" strokeWidth="1.4" opacity="0.85"/>
                  {/* Bottom edge (perspective depth) */}
                  <line x1="105" y1="243" x2="595" y2="243" stroke="#ff641f" strokeWidth="0.9" opacity="0.5"/>
                  {/* Near edge */}
                  <line x1="100" y1="233" x2="105" y2="243" stroke="#ff641f" strokeWidth="0.7" opacity="0.5"/>
                  <line x1="600" y1="233" x2="595" y2="243" stroke="#ff641f" strokeWidth="0.7" opacity="0.5"/>
                  {/* Deck cross-beams / ribs */}
                  {Array.from({length: 26}, (_, i) => {
                    const x = 115 + i * 19
                    return <line key={`dr${i}`} x1={x} y1="233" x2={x + 0.5} y2="243" stroke="#ff641f" strokeWidth="0.3" opacity="0.25"/>
                  })}
                  {/* Road center line */}
                  {Array.from({length: 20}, (_, i) => (
                    <rect key={`cl${i}`} x={120 + i * 25} y="237" width="12" height="1" fill="#ff641f" opacity="0.2" rx="0.5"/>
                  ))}
                  {/* Railings */}
                  <line x1="100" y1="231" x2="600" y2="231" stroke="#ff641f" strokeWidth="0.5" opacity="0.4"/>
                  <line x1="100" y1="245" x2="600" y2="245" stroke="#ff641f" strokeWidth="0.4" opacity="0.3"/>
                  {/* Railing posts */}
                  {Array.from({length: 35}, (_, i) => (
                    <line key={`rp${i}`} x1={110 + i * 14} y1="231" x2={110 + i * 14} y2="233" stroke="#ff641f" strokeWidth="0.3" opacity="0.3"/>
                  ))}
                </g>

                {/* ── Left Tower (A-frame shape) ── */}
                <g filter="url(#wg)">
                  {/* Tower legs */}
                  <line x1="225" y1="233" x2="235" y2="70" stroke="#ff641f" strokeWidth="2" opacity="0.95"/>
                  <line x1="255" y1="233" x2="245" y2="70" stroke="#ff641f" strokeWidth="2" opacity="0.95"/>
                  {/* Tower cap beam */}
                  <line x1="235" y1="70" x2="245" y2="70" stroke="#ff641f" strokeWidth="1.5" opacity="0.9"/>
                  {/* Tower finial */}
                  <line x1="239" y1="70" x2="240" y2="52" stroke="#ff641f" strokeWidth="1.2" opacity="0.8"/>
                  {/* Cross-bracing */}
                  <line x1="228" y1="110" x2="252" y2="110" stroke="#ff641f" strokeWidth="0.8" opacity="0.6"/>
                  <line x1="227" y1="145" x2="253" y2="145" stroke="#ff641f" strokeWidth="0.8" opacity="0.6"/>
                  <line x1="226" y1="175" x2="254" y2="175" stroke="#ff641f" strokeWidth="0.8" opacity="0.6"/>
                  <line x1="225" y1="205" x2="255" y2="205" stroke="#ff641f" strokeWidth="0.8" opacity="0.6"/>
                  {/* X-braces between horizontals */}
                  <line x1="228" y1="110" x2="253" y2="145" stroke="#ff641f" strokeWidth="0.3" opacity="0.2"/>
                  <line x1="252" y1="110" x2="227" y2="145" stroke="#ff641f" strokeWidth="0.3" opacity="0.2"/>
                  <line x1="227" y1="145" x2="254" y2="175" stroke="#ff641f" strokeWidth="0.3" opacity="0.2"/>
                  <line x1="253" y1="145" x2="226" y2="175" stroke="#ff641f" strokeWidth="0.3" opacity="0.2"/>
                  {/* Pier below deck */}
                  <line x1="235" y1="243" x2="235" y2="290" stroke="#ff641f" strokeWidth="1.2" opacity="0.5"/>
                  <line x1="245" y1="243" x2="245" y2="290" stroke="#ff641f" strokeWidth="1.2" opacity="0.5"/>
                  <line x1="233" y1="290" x2="247" y2="290" stroke="#ff641f" strokeWidth="0.8" opacity="0.4"/>
                  {/* Pier cross brace */}
                  <line x1="235" y1="265" x2="245" y2="265" stroke="#ff641f" strokeWidth="0.5" opacity="0.3"/>
                </g>

                {/* ── Right Tower ── */}
                <g filter="url(#wg)">
                  <line x1="445" y1="233" x2="455" y2="70" stroke="#ff641f" strokeWidth="2" opacity="0.95"/>
                  <line x1="475" y1="233" x2="465" y2="70" stroke="#ff641f" strokeWidth="2" opacity="0.95"/>
                  <line x1="455" y1="70" x2="465" y2="70" stroke="#ff641f" strokeWidth="1.5" opacity="0.9"/>
                  <line x1="459" y1="70" x2="460" y2="52" stroke="#ff641f" strokeWidth="1.2" opacity="0.8"/>
                  <line x1="448" y1="110" x2="472" y2="110" stroke="#ff641f" strokeWidth="0.8" opacity="0.6"/>
                  <line x1="447" y1="145" x2="473" y2="145" stroke="#ff641f" strokeWidth="0.8" opacity="0.6"/>
                  <line x1="446" y1="175" x2="474" y2="175" stroke="#ff641f" strokeWidth="0.8" opacity="0.6"/>
                  <line x1="445" y1="205" x2="475" y2="205" stroke="#ff641f" strokeWidth="0.8" opacity="0.6"/>
                  <line x1="448" y1="110" x2="473" y2="145" stroke="#ff641f" strokeWidth="0.3" opacity="0.2"/>
                  <line x1="472" y1="110" x2="447" y2="145" stroke="#ff641f" strokeWidth="0.3" opacity="0.2"/>
                  <line x1="447" y1="145" x2="474" y2="175" stroke="#ff641f" strokeWidth="0.3" opacity="0.2"/>
                  <line x1="473" y1="145" x2="446" y2="175" stroke="#ff641f" strokeWidth="0.3" opacity="0.2"/>
                  <line x1="455" y1="243" x2="455" y2="290" stroke="#ff641f" strokeWidth="1.2" opacity="0.5"/>
                  <line x1="465" y1="243" x2="465" y2="290" stroke="#ff641f" strokeWidth="1.2" opacity="0.5"/>
                  <line x1="453" y1="290" x2="467" y2="290" stroke="#ff641f" strokeWidth="0.8" opacity="0.4"/>
                  <line x1="455" y1="265" x2="465" y2="265" stroke="#ff641f" strokeWidth="0.5" opacity="0.3"/>
                </g>

                {/* ── Left Tower Cables (fan pattern) ── */}
                <g opacity="0.5" stroke="#ff641f" strokeWidth="0.5" filter="url(#wg)">
                  {/* Back-span cables */}
                  <line x1="240" y1="55" x2="115" y2="233"/>
                  <line x1="240" y1="62" x2="135" y2="233"/>
                  <line x1="240" y1="70" x2="155" y2="233"/>
                  <line x1="240" y1="80" x2="175" y2="233"/>
                  <line x1="240" y1="92" x2="195" y2="233"/>
                  <line x1="240" y1="105" x2="210" y2="233"/>
                  {/* Main-span cables */}
                  <line x1="240" y1="55" x2="340" y2="233"/>
                  <line x1="240" y1="62" x2="325" y2="233"/>
                  <line x1="240" y1="70" x2="310" y2="233"/>
                  <line x1="240" y1="80" x2="295" y2="233"/>
                  <line x1="240" y1="92" x2="280" y2="233"/>
                  <line x1="240" y1="105" x2="265" y2="233"/>
                </g>

                {/* ── Right Tower Cables ── */}
                <g opacity="0.5" stroke="#ff641f" strokeWidth="0.5" filter="url(#wg)">
                  <line x1="460" y1="55" x2="585" y2="233"/>
                  <line x1="460" y1="62" x2="565" y2="233"/>
                  <line x1="460" y1="70" x2="545" y2="233"/>
                  <line x1="460" y1="80" x2="525" y2="233"/>
                  <line x1="460" y1="92" x2="505" y2="233"/>
                  <line x1="460" y1="105" x2="490" y2="233"/>
                  <line x1="460" y1="55" x2="360" y2="233"/>
                  <line x1="460" y1="62" x2="375" y2="233"/>
                  <line x1="460" y1="70" x2="390" y2="233"/>
                  <line x1="460" y1="80" x2="405" y2="233"/>
                  <line x1="460" y1="92" x2="420" y2="233"/>
                  <line x1="460" y1="105" x2="435" y2="233"/>
                </g>

                {/* Pier reflections in water */}
                <g opacity="0.08">
                  <rect x="234" y="290" width="12" height="40" fill="#ff641f"/>
                  <rect x="454" y="290" width="12" height="40" fill="#ff641f"/>
                </g>

                {/* Structural depth shadow under deck */}
                <line x1="105" y1="247" x2="595" y2="247" stroke="#ff641f" strokeWidth="0.3" opacity="0.15"/>
              </svg>
            </div>

            {/* ═══ Drone ═══ */}
            <div className="inspect-drone">
              <svg viewBox="0 0 100 70" fill="none" className="drone-3d-svg">
                <defs>
                  <filter id="dGlow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                <line x1="40" y1="30" x2="15" y2="18" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="60" y1="30" x2="85" y2="18" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="42" y1="34" x2="20" y2="42" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="58" y1="34" x2="80" y2="42" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
                <ellipse cx="15" cy="18" rx="12" ry="3" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
                  <animateTransform attributeName="transform" type="rotate" from="0 15 18" to="360 15 18" dur="0.1s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="85" cy="18" rx="12" ry="3" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
                  <animateTransform attributeName="transform" type="rotate" from="0 85 18" to="-360 85 18" dur="0.08s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="20" cy="42" rx="10" ry="2.5" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5">
                  <animateTransform attributeName="transform" type="rotate" from="0 20 42" to="360 20 42" dur="0.09s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="80" cy="42" rx="10" ry="2.5" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5">
                  <animateTransform attributeName="transform" type="rotate" from="0 80 42" to="-360 80 42" dur="0.11s" repeatCount="indefinite"/>
                </ellipse>
                <circle cx="15" cy="18" r="3.5" fill="#555" stroke="#777" strokeWidth="0.5"/>
                <circle cx="85" cy="18" r="3.5" fill="#555" stroke="#777" strokeWidth="0.5"/>
                <circle cx="20" cy="42" r="3" fill="#555" stroke="#777" strokeWidth="0.5"/>
                <circle cx="80" cy="42" r="3" fill="#555" stroke="#777" strokeWidth="0.5"/>
                <rect x="35" y="26" width="30" height="16" rx="5" fill="#444" stroke="#888" strokeWidth="0.8"/>
                <rect x="43" y="42" width="14" height="7" rx="3" fill="#333" stroke="#666" strokeWidth="0.5"/>
                <circle cx="50" cy="45.5" r="2" fill="#111" stroke="#ff641f" strokeWidth="0.8"/>
                <circle cx="50" cy="45.5" r="0.8" fill="#ff641f" filter="url(#dGlow)">
                  <animate attributeName="opacity" values="1;0.3;1" dur="0.8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="50" cy="29" r="1.2" fill="#ff641f" filter="url(#dGlow)">
                  <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite"/>
                </circle>
                <line x1="38" y1="49" x2="32" y2="53" stroke="#777" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="62" y1="49" x2="68" y2="53" stroke="#777" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="29" y1="53" x2="38" y2="53" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="62" y1="53" x2="71" y2="53" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="drone-label mono">● AUTONOMOUS INSPECTION DRONE</div>
              <div className="drone-beam" />
              <div className="drone-beam-ground" />
            </div>

            {/* ═══ Animated Live Inspection Feed Panel ═══ */}
            <div className={`data-panel panel-feed ${scanActive ? 'panel-active' : ''}`}>
              <div className="data-panel-header mono">
                <span className="feed-dot" />
                LIVE INSPECTION FEED
              </div>

              {/* Dot matrix with scanning line */}
              <div className="dot-matrix-wrap">
                <div className="dot-matrix">
                  {Array.from({length: 12 * 16}, (_, i) => {
                    const row = Math.floor(i / 16)
                    const col = i % 16
                    const isHighlight = (row >= 3 && row <= 5 && col >= 2 && col <= 6) ||
                                       (row >= 4 && row <= 7 && col >= 10 && col <= 14)
                    return (
                      <div key={i}
                        className={`dot-cell ${isHighlight ? 'dot-hot' : ''}`}
                        style={{ animationDelay: `${row * 0.06 + col * 0.04}s` }}
                      />
                    )
                  })}
                </div>
                {/* Scanning line inside dot matrix */}
                <div className="feed-scan-line" />

                {/* Detection boxes that pulse */}
                <div className={`feed-box fb1 ${detectPhase >= 1 ? 'fb-visible' : ''}`}>
                  <span className="fb-label mono">D-01</span>
                </div>
                <div className={`feed-box fb2 ${detectPhase >= 2 ? 'fb-visible' : ''}`}>
                  <span className="fb-label mono">D-02</span>
                </div>
              </div>

              {/* Detection readout */}
              <div className={`feed-detect ${detectPhase >= 1 ? 'detect-visible' : ''}`}>
                <div className="detect-type">
                  <span className="detect-icon">⬡</span>
                  <span className="orange" style={{fontWeight: 700, fontSize: 12}}>CORROSION DETECTED</span>
                </div>
                <div className="detect-bar">
                  <div className="detect-fill" key={detectPhase} />
                </div>
                <div className="detect-meta mono">
                  <span>CONFIDENCE</span>
                  <span className="orange">96.7%</span>
                </div>
              </div>

              {/* Mini stats */}
              <div className="feed-stats mono">
                <div><b className="orange">03</b><span>DEFECTS</span></div>
                <div><b>mm</b><span>SCALE</span></div>
                <div><b>95%</b><span>mIoU</span></div>
              </div>
            </div>

            {/* Particles */}
            {particles.map(p => (
              <div key={p.id} className="scene-particle" style={{
                left: p.left, top: p.top,
                animationDelay: p.delay, animationDuration: p.dur,
                width: p.size, height: p.size,
              }}/>
            ))}
          </div>
        </div>
      </div>
      <div className="scroll-note mono">SCROLL TO INSPECT ↓</div>
    </section>
  )
}
