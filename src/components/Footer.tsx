import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { useRef } from 'react'
import { NAV_LINKS } from '../data/content'
import { SITE, waLink } from '../config/site'
import Logo from './ui/Logo'

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const y = useTransform(scrollYProgress, [0, 1], ['40%', '0%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0.2, 1])

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-line pt-16 sm:pt-24">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Logo />
            <p className="mt-6 font-display text-2xl font-medium tracking-[-0.03em] sm:text-3xl">Ideas Into Impact.</p>
            <p className="mt-3 text-sm text-mute">Web Development • Design • Digital Experiences</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="text-sm text-mute">Navigation</p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.id}><a href={`#${l.id}`} className="link-u">{l.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-sm text-mute">Social</p>
            <ul className="mt-4 space-y-3">
              <li>
                {SITE.instagramUrl ? (
                  <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="link-u">Instagram</a>
                ) : (
                  <span className="text-mute" title="Add your Instagram link in src/config/site.ts">Instagram</span>
                )}
              </li>
              <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="link-u">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-5 border-t border-line py-6 text-sm text-mute sm:flex-row sm:items-center">
          <p>© 2026 Criativo Agency. All rights reserved.</p>
          <a href="#home" className="inline-flex min-h-[44px] items-center gap-2 hover:text-bone">
            Back to top <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <motion.div style={{ y, opacity }} aria-hidden="true" className="select-none overflow-hidden px-5 text-center sm:px-8">
        <span
          className="block font-display text-[clamp(2.4rem,11.5vw,10.5rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-transparent"
          style={{ WebkitTextStroke: '1px rgba(243,239,233,.28)' }}
        >
          CRIATIVO
        </span>
      </motion.div>
    </footer>
  )
}
