import { useState, useEffect } from 'react'
import myLogo from '../assets/drishtilogo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <img
            src={myLogo}
            alt="Drishti Labs Logo"
            className="logo-img"
          />
          {!scrolled && <span className="brand-text">DRISHTI LABS</span>}
        </a>

        <div className="nav-links">
          <a href="#problem">Problem</a>
          <a href="#solution">Solution</a>
          <a href="#product">Product</a>
          <a href="#team">Team</a>
        </div>

        <div className="nav-actions">
          <a className="nav-signin" href="/signin">
            Sign In
          </a>
          <a className="nav-cta" href="mailto:infosdrishtilabs@gmail.com">
            Request a Demo
          </a>
        </div>
      </div>
    </nav>
  )
}