import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/content'
import { waLink } from '../config/site'
import Logo from './ui/Logo'
import MagneticButton from './ui/MagneticButton'

export default function Navbar({ ready }: { ready: boolean }) {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    const watch = () => NAV_LINKS.forEach((l) => { const el = document.getElementById(l.id); if (el) obs.observe(el) })
    watch()
    const t = setTimeout(watch, 1500)
    return () => { obs.disconnect(); clearTimeout(t) }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4"
        initial={{ y: -80, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav
          aria-label="Primary"
          className={`flex w-full items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled || open
              ? 'max-w-[920px] border-line bg-ink/80 backdrop-blur-xl'
              : 'max-w-[1200px] border-transparent bg-transparent'
          }`}
        >
          <a href="#home" aria-label="Criativo — home" onClick={() => setOpen(false)}><Logo /></a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? 'page' : undefined}
                  className={`link-u rounded-full px-3.5 py-2 text-sm transition-colors ${active === l.id ? 'text-flame' : 'text-bone/80 hover:text-bone'}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden min-h-[40px] items-center rounded-full bg-flame px-5 text-sm font-semibold text-ink transition-colors hover:bg-bone sm:inline-flex"
            >
              Start a Project
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-line md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-ink px-6 pb-8 pt-28 md:hidden"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 36px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 36px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 36px)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="space-y-1">
              {NAV_LINKS.map((l, i) => (
                <li key={l.id} className="overflow-hidden">
                  <motion.a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-baseline justify-between border-b border-line py-4 font-display text-[clamp(1.75rem,9vw,2.5rem)] font-medium tracking-[-0.03em] ${active === l.id ? 'text-flame' : ''}`}
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {l.label}
                    <span className="text-xs font-normal text-mute">0{i + 1}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
            <motion.div
              className="mt-10 flex flex-col gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-flame font-semibold text-ink">
                Start a Project
              </a>
              <MagneticButton variant="ghost" href={waLink()} external className="w-full">Chat on WhatsApp</MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
