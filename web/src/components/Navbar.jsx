// 1. Import your new logo file at the very top (make sure the filename matches yours!)
import myLogo from '../assets/drishtilogo.png'; 

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          
          {/* 2. Replace the 'brand-mark' span with your image tag */}
          <img src={myLogo} alt="Drishti Labs Logo" className="logo-img" style={{ height: '40px', width: 'auto' }} />
          
          {/* Keep or remove this text depending on if your image already has text in it */}
          <span>DRISHTI LABS</span>
          
        </a>
        <div className="nav-links">
          <a href="#problem">Problem</a>
          <a href="#solution">Solution</a>
          <a href="#product">Product</a>
          <a href="#team">Team</a>
        </div>
        <a className="nav-cta mono" href="mailto:infosdrishtilabs@gmail.com">
          Request a demo
        </a>
      </div>
    </nav>
  )
}