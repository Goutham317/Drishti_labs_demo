/**
 * IntelligenceSection — Interactive console mockup showing AI detection.
 */
export default function IntelligenceSection() {
  return (
    <section>
      <div className="container interactive">
        <div className="reveal">
          <h2 className="section-title">
            See the defect.
            <br />
            <span className="orange">Understand the cause.</span>
          </h2>
          <p className="solution-copy" style={{ marginTop: 28 }}>
            The landing experience uses a moving inspection console to
            communicate the product direction: visual capture, AI detection,
            quantified defects and an evolving digital asset record.
          </p>
        </div>
        <div className="console reveal">
          <div className="console-top">
            <span>DRISHTI / ASSET VIEW</span>
            <span className="orange">LIVE</span>
          </div>
          <div className="console-screen">
            <div className="console-grid"></div>
            <div className="console-bridge">
              <div className="line cb-deck"></div>
              <div className="line cb-t1"></div>
              <div className="line cb-t2"></div>
              <div className="arc"></div>
            </div>
          </div>
          <div className="console-bottom">
            <div className="reveal-fade reveal-delay-1">
              <b>96.8%</b>
              <small>CONFIDENCE</small>
            </div>
            <div className="reveal-fade reveal-delay-2">
              <b>17</b>
              <small>OBSERVATIONS</small>
            </div>
            <div className="reveal-fade reveal-delay-3">
              <b>01</b>
              <small>ASSET RECORD</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
