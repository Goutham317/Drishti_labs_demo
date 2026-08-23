/**
 * RealisticBridge — An SVG cable-stayed bridge rendered with depth and detail.
 * Includes structural elements: deck, towers, cables, road markings, railings, and terrain.
 */
export default function RealisticBridge() {
  return (
    <svg
      className="bridge-svg"
      viewBox="0 0 500 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Water gradient */}
        <linearGradient id="waterGrad" x1="0" y1="220" x2="0" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0a1520" />
          <stop offset="100%" stopColor="#050a10" />
        </linearGradient>

        {/* Tower gradient */}
        <linearGradient id="towerGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="35%" stopColor="#8a8a8a" />
          <stop offset="65%" stopColor="#7a7a7a" />
          <stop offset="100%" stopColor="#2a2a2a" />
        </linearGradient>

        {/* Deck gradient */}
        <linearGradient id="deckGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#666" />
          <stop offset="50%" stopColor="#555" />
          <stop offset="100%" stopColor="#333" />
        </linearGradient>

        {/* Road surface gradient */}
        <linearGradient id="roadGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="15%" stopColor="#444" />
          <stop offset="50%" stopColor="#555" />
          <stop offset="85%" stopColor="#444" />
          <stop offset="100%" stopColor="#2a2a2a" />
        </linearGradient>

        {/* Pillar gradient */}
        <linearGradient id="pillarGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="40%" stopColor="#6a6a6a" />
          <stop offset="60%" stopColor="#5a5a5a" />
          <stop offset="100%" stopColor="#222" />
        </linearGradient>

        {/* Water reflection shimmer */}
        <linearGradient id="waterShimmer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="30%" stopColor="rgba(255,100,31,0.04)" />
          <stop offset="50%" stopColor="rgba(255,100,31,0.08)" />
          <stop offset="70%" stopColor="rgba(255,100,31,0.04)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        {/* Ambient light glow */}
        <radialGradient id="ambientGlow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="rgba(255,100,31,0.06)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        {/* Cable glow filter */}
        <filter id="cableGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ambient atmosphere */}
      <rect x="0" y="0" width="500" height="300" fill="url(#ambientGlow)" />

      {/* ─── Water ─── */}
      <rect x="0" y="218" width="500" height="82" fill="url(#waterGrad)" />
      {/* Water surface line */}
      <line x1="0" y1="218" x2="500" y2="218" stroke="#1a2a3a" strokeWidth="0.5" />
      {/* Water reflections */}
      <rect x="0" y="220" width="500" height="40" fill="url(#waterShimmer)" opacity="0.6">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
      </rect>
      {/* Subtle water ripples */}
      <path d="M 0 235 Q 60 232, 120 235 T 240 235 T 360 235 T 480 235 L 500 235" stroke="#1a2a3a" strokeWidth="0.3" fill="none" opacity="0.5">
        <animate attributeName="d" 
          values="M 0 235 Q 60 232, 120 235 T 240 235 T 360 235 T 480 235 L 500 235;M 0 235 Q 60 238, 120 235 T 240 235 T 360 235 T 480 235 L 500 235;M 0 235 Q 60 232, 120 235 T 240 235 T 360 235 T 480 235 L 500 235"
          dur="5s" repeatCount="indefinite" />
      </path>
      <path d="M 0 245 Q 80 242, 160 245 T 320 245 T 500 245" stroke="#152030" strokeWidth="0.3" fill="none" opacity="0.4">
        <animate attributeName="d"
          values="M 0 245 Q 80 242, 160 245 T 320 245 T 500 245;M 0 245 Q 80 248, 160 245 T 320 245 T 500 245;M 0 245 Q 80 242, 160 245 T 320 245 T 500 245"
          dur="6s" repeatCount="indefinite" />
      </path>

      {/* ─── Bridge Approach (left) ─── */}
      <rect x="0" y="173" width="100" height="12" fill="url(#deckGrad)" rx="1" />
      <rect x="5" y="175" width="90" height="6" fill="url(#roadGrad)" />

      {/* ─── Bridge Approach (right) ─── */}
      <rect x="400" y="173" width="100" height="12" fill="url(#deckGrad)" rx="1" />
      <rect x="405" y="175" width="90" height="6" fill="url(#roadGrad)" />

      {/* ─── Left Pillar ─── */}
      <rect x="130" y="173" width="22" height="50" fill="url(#pillarGrad)" />
      <rect x="128" y="170" width="26" height="5" fill="#555" rx="1" /> {/* cap */}
      {/* Pillar detail lines */}
      <line x1="135" y1="178" x2="135" y2="220" stroke="#4a4a4a" strokeWidth="0.5" />
      <line x1="147" y1="178" x2="147" y2="220" stroke="#4a4a4a" strokeWidth="0.5" />
      {/* Pillar base in water */}
      <rect x="126" y="218" width="30" height="8" fill="#333" rx="2" />

      {/* ─── Right Pillar ─── */}
      <rect x="348" y="173" width="22" height="50" fill="url(#pillarGrad)" />
      <rect x="346" y="170" width="26" height="5" fill="#555" rx="1" /> {/* cap */}
      <line x1="353" y1="178" x2="353" y2="220" stroke="#4a4a4a" strokeWidth="0.5" />
      <line x1="365" y1="178" x2="365" y2="220" stroke="#4a4a4a" strokeWidth="0.5" />
      <rect x="344" y="218" width="30" height="8" fill="#333" rx="2" />

      {/* ─── Left Tower ─── */}
      <g>
        {/* Tower body — slightly tapered */}
        <polygon points="134,170 148,170 146,68 136,68" fill="url(#towerGrad)" />
        {/* Tower cap / finial */}
        <rect x="135" y="64" width="12" height="6" fill="#999" rx="1" />
        <rect x="138" y="58" width="6" height="8" fill="#888" rx="1" />
        {/* Tower cross-beams */}
        <rect x="134" y="100" width="14" height="2" fill="#666" />
        <rect x="134" y="130" width="14" height="2" fill="#666" />
        <rect x="134" y="155" width="14" height="2" fill="#666" />
        {/* Subtle tower shadow */}
        <polygon points="148,170 152,170 150,68 146,68" fill="rgba(0,0,0,0.3)" />
      </g>

      {/* ─── Right Tower ─── */}
      <g>
        <polygon points="352,170 366,170 364,68 354,68" fill="url(#towerGrad)" />
        <rect x="353" y="64" width="12" height="6" fill="#999" rx="1" />
        <rect x="356" y="58" width="6" height="8" fill="#888" rx="1" />
        <rect x="352" y="100" width="14" height="2" fill="#666" />
        <rect x="352" y="130" width="14" height="2" fill="#666" />
        <rect x="352" y="155" width="14" height="2" fill="#666" />
        <polygon points="366,170 370,170 368,68 364,68" fill="rgba(0,0,0,0.3)" />
      </g>

      {/* ─── Cables (Left Tower — Fan pattern) ─── */}
      <g filter="url(#cableGlow)" opacity="0.85">
        {/* Left side cables */}
        <line x1="140" y1="70" x2="70" y2="174" stroke="#888" strokeWidth="0.6" />
        <line x1="140" y1="75" x2="90" y2="174" stroke="#777" strokeWidth="0.5" />
        <line x1="140" y1="80" x2="105" y2="174" stroke="#777" strokeWidth="0.5" />
        <line x1="140" y1="88" x2="115" y2="174" stroke="#666" strokeWidth="0.4" />
        {/* Right side cables */}
        <line x1="141" y1="70" x2="210" y2="174" stroke="#888" strokeWidth="0.6" />
        <line x1="141" y1="75" x2="195" y2="174" stroke="#777" strokeWidth="0.5" />
        <line x1="141" y1="80" x2="180" y2="174" stroke="#777" strokeWidth="0.5" />
        <line x1="141" y1="88" x2="165" y2="174" stroke="#666" strokeWidth="0.4" />
      </g>

      {/* ─── Cables (Right Tower — Fan pattern) ─── */}
      <g filter="url(#cableGlow)" opacity="0.85">
        {/* Left side cables */}
        <line x1="359" y1="70" x2="290" y2="174" stroke="#888" strokeWidth="0.6" />
        <line x1="359" y1="75" x2="305" y2="174" stroke="#777" strokeWidth="0.5" />
        <line x1="359" y1="80" x2="320" y2="174" stroke="#777" strokeWidth="0.5" />
        <line x1="359" y1="88" x2="335" y2="174" stroke="#666" strokeWidth="0.4" />
        {/* Right side cables */}
        <line x1="360" y1="70" x2="430" y2="174" stroke="#888" strokeWidth="0.6" />
        <line x1="360" y1="75" x2="415" y2="174" stroke="#777" strokeWidth="0.5" />
        <line x1="360" y1="80" x2="400" y2="174" stroke="#777" strokeWidth="0.5" />
        <line x1="360" y1="88" x2="385" y2="174" stroke="#666" strokeWidth="0.4" />
      </g>

      {/* ─── Main Deck ─── */}
      <rect x="70" y="173" width="360" height="12" fill="url(#deckGrad)" rx="1" />
      {/* Deck underside shadow */}
      <rect x="70" y="183" width="360" height="3" fill="rgba(0,0,0,0.4)" />
      {/* Deck structural depth lines */}
      <line x1="70" y1="185" x2="430" y2="185" stroke="#2a2a2a" strokeWidth="0.5" />

      {/* ─── Road Surface ─── */}
      <rect x="75" y="175" width="350" height="6" fill="url(#roadGrad)" />

      {/* ─── Road Markings (Dashed center line) ─── */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(i => (
        <rect
          key={`lane-${i}`}
          x={80 + i * 20}
          y="177.5"
          width="10"
          height="1"
          fill="#ff641f"
          opacity="0.35"
          rx="0.5"
        />
      ))}

      {/* ─── Railings ─── */}
      {/* Left railing */}
      <line x1="70" y1="173" x2="430" y2="173" stroke="#5a5a5a" strokeWidth="0.8" />
      {/* Right railing */}
      <line x1="70" y1="181" x2="430" y2="181" stroke="#5a5a5a" strokeWidth="0.8" />
      {/* Railing posts */}
      {Array.from({ length: 25 }, (_, i) => (
        <line
          key={`post-${i}`}
          x1={80 + i * 14.5}
          y1="173"
          x2={80 + i * 14.5}
          y2="181"
          stroke="#4a4a4a"
          strokeWidth="0.4"
        />
      ))}

      {/* ─── Bridge support beams (underneath) ─── */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
        <g key={`beam-${i}`}>
          <line
            x1={100 + i * 38}
            y1="185"
            x2={100 + i * 38}
            y2="195"
            stroke="#3a3a3a"
            strokeWidth="1.5"
          />
          <line
            x1={100 + i * 38 - 6}
            y1="195"
            x2={100 + i * 38 + 6}
            y2="195"
            stroke="#333"
            strokeWidth="1"
          />
        </g>
      ))}

      {/* ─── Terrain / Banks ─── */}
      <path d="M 0 220 Q 30 215, 60 218 L 60 300 L 0 300 Z" fill="#111" />
      <path d="M 440 218 Q 470 215, 500 220 L 500 300 L 440 300 Z" fill="#111" />

      {/* ─── Pillar reflections in water ─── */}
      <rect x="132" y="226" width="18" height="30" fill="rgba(80,80,80,0.08)" />
      <rect x="350" y="226" width="18" height="30" fill="rgba(80,80,80,0.08)" />

      {/* ─── Small structural details / rivets ─── */}
      {[0, 1, 2, 3].map(i => (
        <circle key={`rivet-l-${i}`} cx={137 + i * 3} cy="172" r="0.7" fill="#888" />
      ))}
      {[0, 1, 2, 3].map(i => (
        <circle key={`rivet-r-${i}`} cx={355 + i * 3} cy="172" r="0.7" fill="#888" />
      ))}
    </svg>
  )
}
