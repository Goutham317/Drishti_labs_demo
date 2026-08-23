/**
 * SolutionSection — Comparison table showing Drishti's approach vs traditional.
 */
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
          <h2 className="section-title">
            We measure what others{' '}
            <span className="orange">estimate.</span>
          </h2>
          <p className="solution-copy">
            Traditional inspection often ends as a qualitative opinion and a
            static PDF. Drishti is designed to create a quantified record that
            compounds with every inspection.
          </p>
        </div>
        <div className="compare reveal">
          {comparisons.map((item, i) => (
            <div className="compare-row" key={i}>
              <div>{item.label}</div>
              <div className={item.highlight ? 'orange' : ''}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
