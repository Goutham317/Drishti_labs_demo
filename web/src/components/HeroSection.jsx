import { useMemo } from 'react'
import RealisticBridge from './RealisticBridge'
import InspectionDrone from './InspectionDrone'

/**
 * HeroSection — Full-viewport hero with animated scan card,
 * realistic bridge, flying drone, and floating particles.
 */
export default function HeroSection() {
  // Generate random particles for the ambient effect
  const particles = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${4 + Math.random() * 4}s`,
      bottom: `${Math.random() * 30}%`,
      size: `${1 + Math.random() * 2}px`,
    })), [])

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="reveal">
          <div className="eyebrow mono">
            NIRMAAN · IIT MADRAS / INFRASTRUCTURE INTELLIGENCE
          </div>
          <h1>
            An MRI for ageing{' '}
            <span className="orange">infrastructure.</span>
          </h1>
          <p className="hero-copy">
            We measure what the industry estimates. Drishti Labs turns
            inspection into quantified, repeatable infrastructure
            intelligence — from capture and defect measurement to diagnosis
            and repair scope.
          </p>
          <div className="actions">
            <a className="btn primary" href="#product">
              Explore the technology ↗
            </a>
            <a className="btn secondary" href="mailto:infosdrishtilabs@gmail.com">
              Talk to Drishti
            </a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="scan-card" id="scan-card">
            <div className="scan-label mono">LIVE ASSET SCAN / BRIDGE-001</div>
            <div className="scan-status mono">● ANALYSIS RUNNING</div>

            {/* Realistic Bridge */}
            <div className="bridge-container">
              <RealisticBridge />
            </div>

            {/* Animated Drone with spotlight */}
            <InspectionDrone />

            {/* Scan Line */}
            <div className="scan-line"></div>

            {/* Defect Markers */}
            <div className="defect d1"></div>
            <div className="defect d2"></div>
            <div className="defect d3"></div>

            {/* Metrics */}
            <div className="metric">
              <div>
                <b>95%+</b>
                <small>mIoU / MODEL SIGNAL</small>
              </div>
              <div>
                <b>03</b>
                <small>DEFECTS FLAGGED</small>
              </div>
              <div>
                <b>mm</b>
                <small>SCALE MEASUREMENT</small>
              </div>
            </div>

            {/* Ambient Particles */}
            <div className="particle-field">
              {particles.map(p => (
                <div
                  key={p.id}
                  className="particle"
                  style={{
                    left: p.left,
                    bottom: p.bottom,
                    width: p.size,
                    height: p.size,
                    animationDelay: p.animationDelay,
                    animationDuration: p.animationDuration,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-note mono">SCROLL TO INSPECT ↓</div>
    </section>
  )
}
