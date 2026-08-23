/**
 * ProductSection — Five-step pipeline from capture to tracking.
 */
export default function ProductSection() {
  const steps = [
    {
      
      title: 'Capture',
      desc: 'Drone, ground robot or handheld imagery becomes the input.',
    },
    {
      
      title: 'Quantify',
      desc: 'FracNet V1.0 measures 3D defects with distortion-aware analysis.',
    },
    {
      
      title: 'Diagnose',
      desc: 'Thermal, electrochemical and durability testing reveal the mechanism.',
    },
    {
      
      title: 'Prescribe',
      desc: 'Repair scope is built against root cause and cost.',
    },
    {
      
      title: 'Track',
      desc: 'Every return visit extends the asset\u2019s condition record.',
    },
  ]

  return (
    <section id="product" className="product">
      <div className="container reveal">
        {/* <div className="section-kicker mono">03 / PRODUCT</div> */}
        <h2 className="section-title">
          From crack <span className="soft">to</span>{' '}
          <span className="orange">cure.</span>
        </h2>
        <div className="steps">
          {steps.map((step, i) => (
            <div className="step" key={i}>
              <div className="step-num mono">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
