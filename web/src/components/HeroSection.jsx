export default function HeroSection() {
  return (
    <section className="hero-section centered-hero" id="top">
      <div className="container hero-inner-centered">
        
        {/* Clean, perfectly centered title */}
        <div className="title-container reveal" style={{ marginBottom: '30px' }}>
          <h1 className="hero-title">
            An MRI for ageing<br/>
            <span className="highlight-gradient">infrastructure.</span>
          </h1>
        </div>

        <p className="hero-subtitle centered-subtitle reveal reveal-delay-1">
          We measure what the industry estimates. Drishti Labs turns inspection
          into quantified, repeatable infrastructure intelligence — from capture
          and defect measurement to diagnosis and repair scope.
        </p>

        <div className="hero-actions centered-actions reveal reveal-delay-2">
          <button className="btn-primary" style={{ background: 'linear-gradient(135deg, #ff641f, #b026ff)', color: 'white', padding: '15px 30px', borderRadius: '30px', border: 'none', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 15px rgba(176, 38, 255, 0.3)' }}>
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