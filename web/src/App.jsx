import { useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import ProductSection from './components/ProductSection'
import IntelligenceSection from './components/IntelligenceSection'
import TeamSection from './components/TeamSection'
import BlogSection from './components/BlogSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import SignIn from './components/SignIn' 
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import BlogPage from './components/BlogPage' // Ensure this is imported!
import GalleryPage from './components/GalleryPage'

function App() {
  // ── Intersection Observer ──
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .reveal-fade')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.12 })
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // ── Ambient Lights — free roam → swirl convergence ──
  useEffect(() => {
    const blob1 = document.getElementById('ambient-blob-1')
    const blob2 = document.getElementById('ambient-blob-2')
    if (!blob1 || !blob2) return

    let scrollY = 0
    let smoothY = 0

    const onScroll = () => { scrollY = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Smoothstep for organic blending
    const smoothstep = (a, b, x) => {
      const v = Math.max(0, Math.min(1, (x - a) / (b - a)))
      return v * v * (3 - 2 * v)
    }

    let raf
    const tick = () => {
      smoothY += (scrollY - smoothY) * 0.07

      const docH = document.documentElement.scrollHeight - window.innerHeight
      const t = docH > 0 ? Math.min(smoothY / docH, 1) : 0

      // Blend factor: 0 during free roam, ramps 1 for swirl (starts ~70%)
      const swirl = smoothstep(0.65, 0.95, t)

      // ═══ FREE ROAM PATHS (organic, independent) ═══
      // Blob 1: starts top-right, drifts left-downward with gentle weave
      const free1x = 75 - t * 55 + Math.sin(t * 8.5) * 15 + Math.cos(t * 5.2) * 8
      const free1y = 15 + t * 45 + Math.sin(t * 6.3) * 12 + Math.cos(t * 9.1) * 7

      // Blob 2: starts off-screen left, enters and drifts right-upward
      const enterT = Math.min(t * 4, 1) // enters by 25% scroll
      const rawFree2x = 10 + t * 50 + Math.cos(t * 7.8) * 18 + Math.sin(t * 4.5) * 10
      const free2x = -50 + (rawFree2x + 50) * enterT
      const free2y = 70 - t * 35 + Math.cos(t * 5.7) * 14 + Math.sin(t * 8.3) * 9

      // ═══ SWIRL PATHS (tightening convergence) ═══
      const cx = 50, cy = 50
      const swirlT = Math.max(0, (t - 0.65) / 0.35) // 0→1 within swirl zone
      const swirlRadius = (1 - swirlT) * 30 + 3
      const swirlSpeed = swirlT * Math.PI * 5 // accelerating rotation
      const swirl1x = cx + Math.cos(swirlSpeed) * swirlRadius
      const swirl1y = cy + Math.sin(swirlSpeed) * swirlRadius * 0.7
      const swirl2x = cx + Math.cos(swirlSpeed + Math.PI) * swirlRadius
      const swirl2y = cy + Math.sin(swirlSpeed + Math.PI) * swirlRadius * 0.7

      // ═══ BLEND free → swirl ═══
      const x1 = free1x + (swirl1x - free1x) * swirl
      const y1 = free1y + (swirl1y - free1y) * swirl
      const x2 = free2x + (swirl2x - free2x) * swirl
      const y2 = free2y + (swirl2y - free2y) * swirl

      blob1.style.transform = `translate3d(${x1}vw, ${y1}vh, 0) translate(-50%, -50%)`
      blob2.style.transform = `translate3d(${x2}vw, ${y2}vh, 0) translate(-50%, -50%)`

      // Size: large when free, compact when swirling
      blob1.style.width = blob1.style.height = `${700 - swirl * 200}px`
      blob2.style.width = blob2.style.height = `${500 - swirl * 100}px`

      // Opacity: blob2 fades in, both intensify at convergence
      blob1.style.opacity = 0.7 + swirl * 0.3
      blob2.style.opacity = 0.2 + enterT * 0.4 + swirl * 0.4

      // Parallax on Scan Card
      const card = document.getElementById('scan-card')
      if (card) {
        const capped = Math.min(scrollY, 500)
        card.style.transform = `translateY(${capped * 0.035}px) rotateX(${capped * 0.006}deg)`
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  // 👇 ADDED: The Scrolling Drone Logic 👇
  useEffect(() => {
    const handleDroneScroll = () => {
      const drone = document.getElementById('global-drone');
      const problemSection = document.getElementById('problem');
      const solutionSection = document.getElementById('solution');
      
      if (!drone || !problemSection || !solutionSection) return;

      // Find where the sections are on the page
      const probTop = problemSection.offsetTop;
      const solTop = solutionSection.offsetTop;
      const scrollY = window.scrollY;
      const middleOfScreen = scrollY + (window.innerHeight / 2);

      // 1. Fade the drone in and out
      if (scrollY < probTop - window.innerHeight * 0.5 || scrollY > solTop + 400) {
         drone.style.opacity = '0';
      } else {
         drone.style.opacity = '1';
      }

      // 2. Make it fly down when you scroll halfway between them
      if (middleOfScreen < (probTop + solTop) / 2) {
         drone.style.top = `${probTop + 100}px`; // Fly over Problem
      } else {
         drone.style.top = `${solTop + 100}px`; // Fly down to Solution
      }
    };

    window.addEventListener('scroll', handleDroneScroll, { passive: true });
    setTimeout(handleDroneScroll, 500); 
    return () => window.removeEventListener('scroll', handleDroneScroll);
  }, []);
  // 👆 END OF ADDED DRONE LOGIC 👆

  // ── Page Routing ──
  const isSignIn = window.location.pathname === '/signin';
  const isSignUp = window.location.pathname === '/signup';
  const isDashboard = window.location.pathname === '/dashboard';
  const isBlogPage = window.location.pathname === '/blog'; 
  const isGallery = window.location.pathname === '/gallery';

  // If the URL matches, return that specific page and STOP rendering the landing page
  if (isDashboard) return <Dashboard />
  if (isSignIn) return <SignIn />
  if (isSignUp) return <SignUp />
  if (isBlogPage) return <BlogPage /> 
  if (isGallery) return <GalleryPage />

  // ── Main Landing Page ──
  return (
    <>
      {/* Ambient floating orange blobs */}
      <div className="ambient-blob" id="ambient-blob-1"></div>
      <div className="ambient-blob ambient-blob--2" id="ambient-blob-2"></div>

      <Navbar />
      
      {/* 👇 ADDED: style={{ position: 'relative' }} to main 👇 */}
      <main id="top" style={{ position: 'relative' }}> 
        
        {/* 👇 ADDED: The Drone Visuals 👇 */}
        <div id="global-drone">
          <div className="global-scanner">
            <svg width="70" height="30" viewBox="0 0 70 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="25" y="12" width="20" height="10" rx="3" fill="#222" stroke="#444" strokeWidth="2"/>
              <circle cx="35" cy="17" r="3" fill="#ff641f" />
              <path d="M25 14L10 8M45 14L60 8" stroke="#444" strokeWidth="3" strokeLinecap="round" />
              <line x1="2" y1="6" x2="18" y2="6" stroke="#888" strokeWidth="2" strokeLinecap="round" />
              <line x1="52" y1="6" x2="68" y2="6" stroke="#888" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="global-beam"></div>
          </div>
        </div>
        {/* 👆 END OF ADDED DRONE VISUALS 👆 */}

        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProductSection />
        <IntelligenceSection />
        <TeamSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default App