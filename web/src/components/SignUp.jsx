import drishtiLogo from '../assets/Drishtilabs_logo.png'; // Make sure this matches your logo name!

export default function SignUp() {
  return (
    <div className="signin-page"> {/* We can reuse the signin CSS classes! */}
      {/* Ambient Backgrounds for the Auth Pages */}
      <div className="ambient-blob" style={{ position: 'absolute', top: '-10%', left: '-10%', zIndex: '0' }}></div>
      <div className="ambient-blob--2" style={{ position: 'absolute', bottom: '-10%', right: '-10%', zIndex: '0' }}></div>

      <div className="signin-card">
        <a href="/" className="back-link mono">← BACK TO HOME</a>
        <img src={drishtiLogo} alt="Drishti Labs" className="signin-logo" />
        <h2>Create an Account</h2>
        <p className="mono" style={{ color: '#888', marginBottom: '15px', fontSize: '12px' }}>JOIN DRISHTI LABS</p>

        <form className="signin-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Jane Doe" required />
          </div>
          <div className="input-group">
            <label>Company/Organization</label>
            <input type="text" placeholder="Acme Corp" required />
          </div>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="name@company.com" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a strong password" required />
          </div>

          <button type="submit" className="btn primary full-width" style={{ marginTop: '15px' }}>Create Account</button>
        </form>

        <div className="divider">
          <span className="mono">OR</span>
        </div>

        <button className="btn secondary full-width social-btn">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="social-icon" />
          Sign up with Google
        </button>

        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '12px', color: '#888' }}>
          Already have an account? <a href="/signin" style={{ color: '#ff641f', textDecoration: 'none' }}>Sign In here</a>
        </p>
      </div>
    </div>
  );
}