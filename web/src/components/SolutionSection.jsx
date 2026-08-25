export default function SolutionSection() {
  const comparisons = [
    { label: 'Inspection today', value: 'An opinion, not a number', highlight: false },
    { label: 'Scope', value: 'Defects quantified at mm scale', highlight: true },
    { label: 'Cost planning', value: 'Scope measured and costed', highlight: false },
    { label: 'History', value: 'A record that compounds', highlight: false },
    { label: 'Output', value: 'An interactive asset twin', highlight: true },
  ]

  return (
    <section id="solution">
      <div className="container solution">
        <div className="reveal">
          
          <div className="solution-scan-container">
            <div className="solution-drone">
              <svg width="70" height="30" viewBox="0 0 70 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="25" y="12" width="20" height="10" rx="3" fill="#222" stroke="#444" strokeWidth="2"/>
                <circle cx="35" cy="17" r="3" fill="#ff641f" />
                <path d="M25 14L10 8M45 14L60 8" stroke="#444" strokeWidth="3" strokeLinecap="round" />
                <line x1="2" y1="6" x2="18" y2="6" stroke="#888" strokeWidth="2" strokeLinecap="round" />
                <line x1="52" y1="6" x2="68" y2="6" stroke="#888" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className="solution-beam"></div>
            </div>

            <h2 className="section-title" style={{ marginTop: 0 }}>
              We measure what others{' '}
              <span className="orange">estimate.</span>
            </h2>
          </div>
          
          <p className="solution-copy">
            Traditional inspection often ends as a qualitative opinion and a
            static PDF. Drishti is designed to create a quantified record that
            compounds with every inspection.
          </p>
        </div>
        
        <div className="compare">
          {comparisons.map((item, i) => (
            <div className={`compare-row reveal-fade reveal-delay-${i + 1}`} key={i}>
              <div>{item.label}</div>
              <div className={item.highlight ? 'orange-solid' : ''}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}