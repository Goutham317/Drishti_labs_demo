/**
 * Footer — Professional multi-column footer inspired by drishtilabs.in
 */
import myLogo from '../assets/drishtilogo.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top section: Brand + Columns */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#top" className="footer-logo-link">
              <img src={myLogo} alt="Drishti Labs" className="footer-logo" />
            </a>
            <p className="footer-tagline">
              Structural intelligence for ageing infrastructure. We measure
              what the industry estimates.
            </p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/drishti-labs/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:infosdrishtilabs@gmail.com" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
              <a href="https://drishtilabs.in" target="_blank" rel="noopener noreferrer" aria-label="Website">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#problem">The Problem</a></li>
              <li><a href="#solution">Our Solution</a></li>
              <li><a href="#product">Product</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#product">Bridge Inspection</a></li>
              <li><a href="#product">Defect Quantification</a></li>
              <li><a href="#product">Structural Health</a></li>
              <li><a href="#product">Asset Tracking</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul className="footer-contact">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" opacity="0.5"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <a href="mailto:infosdrishtilabs@gmail.com">infosdrishtilabs@gmail.com</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" opacity="0.5"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                <a href="tel:+916282972627">+91 62829 72627</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" opacity="0.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span>Nirmaan, IIT Madras, Chennai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Drishti Labs. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="https://drishtilabs.in" target="_blank" rel="noopener noreferrer">drishtilabs.in</a>
            <span className="footer-dot">·</span>
            <a href="mailto:infosdrishtilabs@gmail.com">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
