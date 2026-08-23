/**
 * ProblemSection — Statistics that communicate the infrastructure crisis.
 */
export default function ProblemSection() {
  return (
    <section id="problem">
      <div className="container reveal">
        <div className="section-kicker mono">01 / THE PROBLEM</div>
        <h2 className="section-title">
          You can&rsquo;t fix what
          <br />
          you can&rsquo;t <span className="orange">measure.</span>
        </h2>
        <div className="stats">
          <div className="stat">
            <div className="number">1,644</div>
            <p>Structural-collapse deaths in a single year.</p>
          </div>
          <div className="stat">
            <div className="number">147</div>
            <p>Bridges flagged critically distressed in the IBMS inventory.</p>
          </div>
          <div className="stat">
            <div className="number">1.7 L</div>
            <p>Highway structures reported with no condition record.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
