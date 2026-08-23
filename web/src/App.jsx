import { useEffect, useRef, useCallback } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import ProductSection from './components/ProductSection'
import IntelligenceSection from './components/IntelligenceSection'
import TeamSection from './components/TeamSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  const orbRef = useRef(null)

  // ── Orb Cursor Follower ──
  const handlePointerMove = useCallback((e) => {
    if (orbRef.current) {
      orbRef.current.style.left = e.clientX + 'px'
      orbRef.current.style.top = e.clientY + 'px'
    }
  }, [])

  // ── Intersection Observer for Reveal Animations ──
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // ── Parallax on Scan Card ──
  useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById('scan-card')
      const y = Math.min(window.scrollY, 500)
      if (card) {
        card.style.transform = `translateY(${y * 0.035}px) rotateX(${y * 0.006}deg)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ── Pointer move listener ──
  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [handlePointerMove])

  return (
    <>
      {/* Cursor orb */}
      <div className="orb" ref={orbRef}></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="top">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProductSection />
        <IntelligenceSection />
        <TeamSection />
        <CTASection />
      </main>

      <Footer />
    </>
  )
}

export default App
