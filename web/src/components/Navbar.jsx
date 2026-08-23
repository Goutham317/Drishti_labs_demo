export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark"></span>
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
