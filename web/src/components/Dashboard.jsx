export default function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem('drishti_token');
    window.location.href = '/signin';
  };

  return (
    <div style={{ padding: '50px', color: 'white', textAlign: 'center' }}>
      <h1>Welcome to the Drishti Intelligence Dashboard</h1>
      <p>Authentication was successful!</p>
      <button onClick={handleLogout} className="btn primary" style={{ marginTop: '20px' }}>
        Log Out
      </button>
    </div>
  );
}