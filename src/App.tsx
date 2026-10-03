import { AnimatePresence, MotionConfig } from 'motion/react'
import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Services from './components/Services'
import ServicesShowcase from './components/ServicesShowcase'
import Stats from './components/Stats'
import Cursor from './components/ui/Cursor'
import Loader from './components/ui/Loader'

// Below-the-fold sections are split into their own chunks.
const Process = lazy(() => import('./components/Process'))
const WhyCriativo = lazy(() => import('./components/WhyCriativo'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Founder = lazy(() => import('./components/Founder'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  const [loading, setLoading] = useState(true)
  const done = useCallback(() => setLoading(false), [])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
  }, [loading])

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-flame focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <Cursor />
      <AnimatePresence>{loading && <Loader onDone={done} />}</AnimatePresence>
      <Navbar ready={!loading} />
      <main id="main">
        <Hero ready={!loading} />
        <Stats />
        <Marquee />
        <About />
        <Services />
        <Suspense fallback={null}>
          <ServicesShowcase />
          <Process />
          <WhyCriativo />
          <Testimonials />
          <Founder />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </MotionConfig>
  )
}
