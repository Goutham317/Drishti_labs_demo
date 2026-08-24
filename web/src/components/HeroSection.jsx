export default function HeroSection() {
  return (
    <section className="hero-section centered-hero" id="top">
      <div className="container hero-inner-centered">
        
        {/* Clean, perfectly centered title */}
        <div className="title-container" style={{ marginBottom: '30px' }}>
          <h1 className="hero-title">
            An MRI for ageing<br/>
            <span className="highlight">infrastructure.</span>
          </h1>
        </div>

        <p className="hero-subtitle centered-subtitle">
          We measure what the industry estimates. Drishti Labs turns inspection
          into quantified, repeatable infrastructure intelligence — from capture
          and defect measurement to diagnosis and repair scope.
        </p>

        <div className="hero-actions centered-actions">
          <button className="btn-primary" style={{ backgroundColor: '#ff641f', color: 'white', padding: '15px 30px', borderRadius: '30px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
            Explore the technology ↗
          </button>
          <button className="btn-secondary" style={{ backgroundColor: 'transparent', color: 'white', padding: '15px 30px', borderRadius: '30px', border: '1px solid #333', fontWeight: 'bold', cursor: 'pointer', marginLeft: '15px' }}>
            Talk to Drishti
          </button>
        </div>

      </div>
    </section>
  );
}