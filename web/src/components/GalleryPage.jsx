import Navbar from './Navbar';
import Footer from './Footer';

export default function GalleryPage() {
  // 👇 Leave this array empty for now. 
  // When your manager gives you the photos, you will add them here like this:
  // { id: 1, title: 'Highway Scan', image: '/photo1.jpg' }
  const galleryItems = [];

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh' }}>
        <div className="container">
          
          <div style={{ marginBottom: '40px' }}>
            <a href="/" style={{ color: '#ff641f', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '10px', lineHeight: '1' }}>←</span> Back to Home
            </a>
          </div>

          <h1 style={{ fontSize: '3.5rem', marginBottom: '10px', color: 'white' }}>
            Project <span className="text-gradient">Gallery.</span>
          </h1>
          <p style={{ color: '#a0a0a0', marginBottom: '50px', fontSize: '1.2rem' }}>
            A visual record of our latest infrastructure scans and field updates.
          </p>
          
          {/* This logic checks if you have photos. If not, it shows a clean placeholder box. */}
          {galleryItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '100px 20px', border: '1px dashed #333', borderRadius: '12px', backgroundColor: '#0a0a0a' }}>
              <h3 style={{ color: '#888', fontWeight: '500', marginBottom: '10px' }}>Images coming soon.</h3>
              <p style={{ color: '#555' }}>Pending upload and clearance.</p>
            </div>
          ) : (
            <div className="gallery-grid">
              {galleryItems.map((item) => (
                <div className="gallery-card" key={item.id}>
                  <img src={item.image} alt={item.title} className="gallery-img" />
                  <div className="gallery-overlay">
                    <span className="gallery-title">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          
        </div>
      </main>
      <Footer />
    </>
  );
}