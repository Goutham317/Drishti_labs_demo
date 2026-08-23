import drishtiLogo from '../assets/drishtilogo.png';

export default function SignIn() {
  return (
    <div className="signin-page">
      <div className="signin-card">
        <a href="/" className="back-link mono">← BACK TO HOME</a>
        <img src={drishtiLogo} alt="Drishti Labs" className="signin-logo" />
        <h2>Welcome Back</h2>
        <p className="mono" style={{ color: '#888', marginBottom: '20px' }}>LOG IN TO YOUR DASHBOARD</p>

        <form className="signin-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="name@company.com" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <div className="forgot-password">
            <a href="#forgot">Forgot password?</a>
          </div>

          <button type="submit" className="btn primary full-width">Sign In</button>
        </form>

        <div className="divider">
          <span className="mono">OR</span>
        </div>

        <button className="btn secondary full-width social-btn">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="social-icon" />
          Sign in with Google
        </button>

        {/* Properly nested inside the card */}
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#888' }}>
          Don't have an account? <a href="/signup" style={{ color: '#ff641f', textDecoration: 'none' }}>Sign Up here</a>
        </p>
      </div>
    </div>
  );
}