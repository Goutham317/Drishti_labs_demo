import { useEffect, useRef } from 'react'
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
import SignIn from './components/SignIn' 
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard' // <-- Ensure this file exists!

function App() {
  const orbRef = useRef(null)

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

  // ── Routing Logic ──
  const isSignIn = window.location.pathname === '/signin';
  const isSignUp = window.location.pathname === '/signup';
  const isDashboard = window.location.pathname === '/dashboard';

  // 1. Check for Dashboard First
  if (isDashboard) {
    return (
      <>
        <div className="orb" ref={orbRef}></div>
        <Dashboard />
      </>
    )
  }

  // 2. Check for Sign In
  if (isSignIn) {
    return (
      <>
        <div className="orb" ref={orbRef}></div>
        <SignIn />
      </>
    )
  }

  // 3. Check for Sign Up
  if (isSignUp) {
    return (
      <>
        <div className="orb" ref={orbRef}></div>
        <SignUp />
      </>
    )
  }

  // ── Main Landing Page Render ──
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