export default function ProblemSection() {
  return (
    <section id="problem">
      <div className="container reveal">
        
        <div className="problem-scan-container">
          <div className="problem-drone">
            <svg width="70" height="30" viewBox="0 0 70 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="25" y="12" width="20" height="10" rx="3" fill="#222" stroke="#444" strokeWidth="2"/>
              <circle cx="35" cy="17" r="3" fill="#ff641f" />
              <path d="M25 14L10 8M45 14L60 8" stroke="#444" strokeWidth="3" strokeLinecap="round" />
              <line x1="2" y1="6" x2="18" y2="6" stroke="#888" strokeWidth="2" strokeLinecap="round" />
              <line x1="52" y1="6" x2="68" y2="6" stroke="#888" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="problem-beam"></div>
          </div>

          <h2 className="section-title">
            You can&rsquo;t fix what
            <br />
            you can&rsquo;t <span className="orange">measure.</span>
          </h2>
        </div>
        
        <div className="stats">
          <div className="stat reveal-fade reveal-delay-1">
            <div className="number">1,644</div>
            <p>Structural-collapse deaths in a single year.</p>
          </div>
          <div className="stat reveal-fade reveal-delay-2">
            <div className="number">147</div>
            <p>Bridges flagged critically distressed in the IBMS inventory.</p>
          </div>
          <div className="stat reveal-fade reveal-delay-3">
            <div className="number">1.7 L</div>
            <p>Highway structures reported with no condition record.</p>
          </div>
        </div>
      </div>
    </section>
  )
}