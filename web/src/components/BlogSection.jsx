export default function BlogSection() {
  const blogPosts = [
    { id: 1, category: 'Product Updates', title: 'Introducing the next generation of infrastructure scanning.', date: 'Aug 12, 2026', readTime: '4 min read' },
    { id: 2, category: 'Engineering', title: 'How we built a millimeter-accurate measurement drone model.', date: 'Jul 28, 2026', readTime: '6 min read' },
    { id: 3, category: 'Industry', title: 'The true cost of reactive maintenance in aging bridge networks.', date: 'Jul 15, 2026', readTime: '5 min read' },
    { id: 4, category: 'Case Study', title: 'Reducing inspection times by 40% on the central highway project.', date: 'Jun 30, 2026', readTime: '8 min read' },
    { id: 5, category: 'Engineering', title: 'The physics behind our new concrete defect detection algorithm.', date: 'Jun 14, 2026', readTime: '7 min read' },
    { id: 6, category: 'News', title: 'Drishti Labs partners with national safety regulators.', date: 'May 22, 2026', readTime: '3 min read' }
  ];

  return (
    <section id="blog" style={{ padding: '100px 0' }}>
      
      {/* 👇 Fix: Removed the "reveal" class so it doesn't get stuck at opacity: 0 */}
      <div className="container">
        
        <div className="blog-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <h2 className="section-title" style={{ marginBottom: '10px' }}>
              Latest from <span className="orange">Drishti.</span>
            </h2>
            <p className="blog-subtitle">News, engineering updates, and industry insights.</p>
          </div>
        </div>

        <div className="marquee-container reveal">
          <div className="marquee-track">
            {/* Double the posts to create a seamless infinite loop */}
            {[...blogPosts, ...blogPosts].map((post, i) => (
              <div className="blog-card slider-card" key={i}>
                <span className="blog-category">{post.category}</span>
                <h3 className="blog-title">{post.title}</h3>
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span className="meta-dot">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="blog-actions reveal reveal-delay-2" style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
          <a href="/blog" className="btn-secondary" style={{ backgroundColor: 'transparent', color: 'white', padding: '12px 24px', borderRadius: '30px', border: '1px solid #333', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'none' }}>
            Visit Full Blog & Contribute →
          </a>
        </div>

      </div>
    </section>
  );
}