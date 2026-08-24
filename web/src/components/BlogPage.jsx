import Navbar from './Navbar';
import Footer from './Footer';

export default function BlogPage() {
  const blogPosts = [
    { id: 1, category: 'Product Updates', title: 'Introducing the next generation of infrastructure scanning.', date: 'Aug 12, 2026', readTime: '4 min read' },
    { id: 2, category: 'Engineering', title: 'How we built a millimeter-accurate measurement drone model.', date: 'Jul 28, 2026', readTime: '6 min read' },
    { id: 3, category: 'Industry', title: 'The true cost of reactive maintenance in aging bridge networks.', date: 'Jul 15, 2026', readTime: '5 min read' },
    { id: 4, category: 'Case Study', title: 'Reducing inspection times by 40% on the central highway project.', date: 'Jun 30, 2026', readTime: '8 min read' },
    { id: 5, category: 'Engineering', title: 'The physics behind our new concrete defect detection algorithm.', date: 'Jun 14, 2026', readTime: '7 min read' },
    { id: 6, category: 'News', title: 'Drishti Labs partners with national safety regulators.', date: 'May 22, 2026', readTime: '3 min read' }
  ];

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '120px', paddingBottom: '100px' }}>
        
        {/* SECTION 1: All Articles */}
        <div className="container">
          
          {/* 👇 NEW: Back Arrow Link */}
          <div style={{ marginBottom: '40px' }}>
            <a href="/" style={{ color: '#ff641f', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', transition: 'opacity 0.3s' }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
              <span style={{ fontSize: '1.5rem', marginRight: '10px', lineHeight: '1' }}>←</span> Back to Home
            </a>
          </div>

          <h1 style={{ fontSize: '3.5rem', marginBottom: '10px', color: 'white' }}>Drishti <span className="orange">Knowledge Center</span></h1>
          <p style={{ color: '#a0a0a0', marginBottom: '50px', fontSize: '1.2rem' }}>All updates, insights, and industry research.</p>
          
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div className="blog-card" key={post.id}>
                <span className="blog-category">{post.category}</span>
                <h3 className="blog-title">{post.title}</h3>
                <div className="blog-meta">
                  <span>{post.date}</span><span className="meta-dot">•</span><span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: Contribute / Write a Blog Form */}
        <div className="container" style={{ marginTop: '100px', borderTop: '1px solid #222', paddingTop: '80px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'white' }}>Contribute an <span className="orange">Article.</span></h2>
          <p style={{ color: '#a0a0a0', marginBottom: '40px' }}>Share your engineering insights or infrastructure research with the Drishti community.</p>

          <form className="blog-submission-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Dr. Jane Doe" required />
              </div>
              <div className="form-group">
                <label>Company / Authorization</label>
                <input type="text" placeholder="Civil Engineering Corp." required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="jane@example.com" required />
              </div>
              <div className="form-group">
                <label>Author Photo</label>
                <input type="file" accept="image/*" />
              </div>
            </div>

            <div className="form-group">
              <label>Blog Content</label>
              <textarea rows="10" placeholder="Write your article here..." required></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ backgroundColor: '#ff641f', color: 'white', padding: '15px 30px', borderRadius: '30px', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' }}>
              Submit Article for Review
            </button>
          </form>
        </div>

      </main>
      <Footer />
    </>
  );
}