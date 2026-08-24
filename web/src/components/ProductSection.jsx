/**
 * ProductSection — Five-step pipeline from capture to tracking.
 */
export default function ProductSection() {
  const steps = [
    {
      num: '01',
      title: 'Capture',
      desc: 'Drone, ground robot or handheld imagery becomes the input.',
    },
    {
      num: '02',
      title: 'Quantify',
      desc: 'FracNet V1.0 measures 3D defects with distortion-aware analysis.',
    },
    {
      num: '03',
      title: 'Diagnose',
      desc: 'Thermal, electrochemical and durability testing reveal the mechanism.',
    },
    {
      num: '04',
      title: 'Prescribe',
      desc: 'Repair scope is built against root cause and cost.',
    },
    {
      num: '05',
      title: 'Track',
      desc: 'Every return visit extends the asset\u2019s condition record.',
    },
  ]

  return (
    <section id="product" className="product">
      <div className="container reveal">
        <h2 className="section-title">
          From crack <span className="soft">to</span>{' '}
          <span className="orange">cure.</span>
        </h2>
        <div className="steps">
          {steps.map((step, i) => (
            <div className={`step reveal-fade reveal-delay-${i + 1}`} key={i}>
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
