/**
 * InspectionDrone — An animated SVG drone with an orange spotlight beam.
 * Floats across the scan card inspecting the bridge structure.
 */
export default function InspectionDrone() {
  return (
    <div className="drone-wrapper">
      <svg
        className="drone-svg"
        viewBox="0 0 80 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="droneBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#666" />
            <stop offset="100%" stopColor="#333" />
          </linearGradient>
          <linearGradient id="droneArm" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#444" />
            <stop offset="100%" stopColor="#777" />
          </linearGradient>
          <filter id="droneGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ─── Arms ─── */}
        {/* Front-left arm */}
        <line x1="32" y1="26" x2="12" y2="16" stroke="url(#droneArm)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Front-right arm */}
        <line x1="48" y1="26" x2="68" y2="16" stroke="url(#droneArm)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Back-left arm */}
        <line x1="34" y1="30" x2="16" y2="38" stroke="url(#droneArm)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Back-right arm */}
        <line x1="46" y1="30" x2="64" y2="38" stroke="url(#droneArm)" strokeWidth="2.5" strokeLinecap="round" />

        {/* ─── Propellers (animated blur circles) ─── */}
        {/* Front-left propeller */}
        <ellipse cx="12" cy="16" rx="10" ry="3" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5">
          <animateTransform attributeName="transform" type="rotate" from="0 12 16" to="360 12 16" dur="0.15s" repeatCount="indefinite" />
        </ellipse>
        {/* Front-right propeller */}
        <ellipse cx="68" cy="16" rx="10" ry="3" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5">
          <animateTransform attributeName="transform" type="rotate" from="0 68 16" to="-360 68 16" dur="0.12s" repeatCount="indefinite" />
        </ellipse>
        {/* Back-left propeller */}
        <ellipse cx="16" cy="38" rx="9" ry="2.5" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
          <animateTransform attributeName="transform" type="rotate" from="0 16 38" to="360 16 38" dur="0.13s" repeatCount="indefinite" />
        </ellipse>
        {/* Back-right propeller */}
        <ellipse cx="64" cy="38" rx="9" ry="2.5" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
          <animateTransform attributeName="transform" type="rotate" from="0 64 38" to="-360 64 38" dur="0.14s" repeatCount="indefinite" />
        </ellipse>

        {/* ─── Motor Housings ─── */}
        <circle cx="12" cy="16" r="3" fill="#555" stroke="#777" strokeWidth="0.5" />
        <circle cx="68" cy="16" r="3" fill="#555" stroke="#777" strokeWidth="0.5" />
        <circle cx="16" cy="38" r="2.5" fill="#555" stroke="#777" strokeWidth="0.5" />
        <circle cx="64" cy="38" r="2.5" fill="#555" stroke="#777" strokeWidth="0.5" />

        {/* ─── Central Body ─── */}
        <rect x="30" y="22" width="20" height="14" rx="4" fill="url(#droneBody)" stroke="#888" strokeWidth="0.5" />
        
        {/* Body detail lines */}
        <line x1="33" y1="26" x2="47" y2="26" stroke="#555" strokeWidth="0.3" />
        <line x1="33" y1="32" x2="47" y2="32" stroke="#555" strokeWidth="0.3" />

        {/* ─── Camera / Sensor Pod ─── */}
        <rect x="36" y="36" width="8" height="5" rx="2" fill="#444" stroke="#666" strokeWidth="0.5" />
        {/* Camera lens */}
        <circle cx="40" cy="38.5" r="1.5" fill="#222" stroke="var(--orange, #ff641f)" strokeWidth="0.6" />
        {/* Orange indicator light on camera */}
        <circle cx="40" cy="38.5" r="0.6" fill="#ff641f" filter="url(#droneGlow)">
          <animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite" />
        </circle>

        {/* ─── Status LED on body ─── */}
        <circle cx="40" cy="24" r="1" fill="#ff641f" filter="url(#droneGlow)">
          <animate attributeName="opacity" values="1;0.3;1" dur="0.8s" repeatCount="indefinite" />
        </circle>

        {/* ─── Landing Skids ─── */}
        <line x1="32" y1="41" x2="28" y2="44" stroke="#666" strokeWidth="1" strokeLinecap="round" />
        <line x1="48" y1="41" x2="52" y2="44" stroke="#666" strokeWidth="1" strokeLinecap="round" />
        <line x1="26" y1="44" x2="34" y2="44" stroke="#888" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="46" y1="44" x2="54" y2="44" stroke="#888" strokeWidth="1.2" strokeLinecap="round" />
      </svg>

      {/* ─── Orange Inspection Light Beam ─── */}
      <div className="drone-light"></div>
      <div className="drone-light-glow"></div>
    </div>
  )
}
