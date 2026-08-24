import { useState } from 'react';
import drishtiLogo from '../assets/Drishtilabs_logo.png';

export default function SignIn() {
  // 1. Create state to hold the user's input and API status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 2. Create the function that talks to your backend
  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setError('');
    setIsLoading(true);

    try {
      // NOTE: Replace this URL with your actual backend API endpoint
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // 3. Save the authentication token and redirect!
        localStorage.setItem('drishti_token', data.token); 
        window.location.href = '/dashboard'; 
      } else {
        // Show error from the backend (e.g., "Invalid password")
        setError(data.message || 'Login failed. Please check your credentials.');
      }
    } catch {
      setError('Could not connect to the server. Is the backend running?');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin-page">
      {/* Ambient Backgrounds for the Auth Pages */}
      <div className="ambient-blob" style={{ position: 'absolute', top: '-10%', left: '-10%', zIndex: '0' }}></div>
      <div className="ambient-blob--2" style={{ position: 'absolute', bottom: '-10%', right: '-10%', zIndex: '0' }}></div>

      <div className="signin-card">
        <a href="/" className="back-link mono">← BACK TO HOME</a>
        <img src={drishtiLogo} alt="Drishti Labs" className="signin-logo" />
        <h2>Welcome Back</h2>
        <p className="mono" style={{ color: '#888', marginBottom: '15px', fontSize: '12px' }}>LOG IN TO YOUR DASHBOARD</p>

        {/* 4. Connect the form to our state and submit function */}
        <form className="signin-form" onSubmit={handleSignIn}>
          
          {/* Display error messages if they exist */}
          {error && <div style={{ color: '#ff4444', marginBottom: '15px', fontSize: '13px' }}>{error}</div>}

          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <div className="forgot-password">
            <a href="#forgot">Forgot password?</a>
          </div>

          <button type="submit" className="btn primary full-width" disabled={isLoading} style={{ marginTop: '10px' }}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="divider">
          <span className="mono">OR</span>
        </div>

        <button className="btn secondary full-width social-btn">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="social-icon" />
          Sign in with Google
        </button>

        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '12px', color: '#888' }}>
          Don't have an account? <a href="/signup" style={{ color: '#ff641f', textDecoration: 'none' }}>Sign Up here</a>
        </p>
      </div>
    </div>
  );
}