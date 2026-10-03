import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import type { PointerEvent } from 'react'
import { useMemo, useRef, useState } from 'react'
import { PROJECTS, type Project } from '../data/content'
import BrowserMock from './ui/BrowserMock'
import { Reveal, SectionLabel, TextReveal } from './ui/Reveal'

function ProjectCard({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null)
  const spring = { stiffness: 140, damping: 18 }
  const rx = useSpring(useMotionValue(0), spring)
  const ry = useSpring(useMotionValue(0), spring)
  const px = useSpring(useMotionValue(0), spring)
  const py = useSpring(useMotionValue(0), spring)

  const onMove = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const nx = (e.clientX - r.left) / r.width - 0.5
    const ny = (e.clientY - r.top) / r.height - 0.5
    ry.set(nx * 9)
    rx.set(-ny * 9)
    px.set(nx * -26)
    py.set(ny * -26)
  }
  const reset = () => { rx.set(0); ry.set(0); px.set(0); py.set(0) }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      >
        <a
          href={p.url ?? '#contact'}
          data-cursor="View"
          aria-label={`View project: ${p.title}`}
          {...(p.url ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="group relative block aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-panel"
        >
          <div aria-hidden="true" className="bg-dots absolute inset-0 opacity-70" />
          <motion.div style={{ x: px, y: py, scale: 1.1 }} className="absolute inset-0 flex items-center justify-center p-7 sm:p-10">
            <BrowserMock variant={p.variant} image={p.image} alt={`${p.title} website preview`} className="w-full transition-transform duration-700 group-hover:scale-[1.04]" />
          </motion.div>
          {p.placeholder && (
            <span className="absolute left-4 top-4 rounded-full border border-line bg-ink/80 px-3 py-1 text-xs text-mute backdrop-blur">
              Placeholder
            </span>
          )}
        </a>
      </motion.div>

      <div className="mt-5 flex items-start justify-between gap-4 px-1">
        <div className="min-w-0">
          <span className="rounded-full border border-line px-3 py-1 text-xs text-mute">{p.category}</span>
          <h3 className="mt-3 font-display text-xl font-medium tracking-[-0.02em]">{p.title}</h3>
          <p className="mt-2 max-w-md text-[15px] leading-relaxed text-mute">{p.description}</p>
        </div>
        <a
          href={p.url ?? '#contact'}
          {...(p.url ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="mt-1 inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-full bg-flame px-4 text-sm font-semibold text-ink transition-colors hover:bg-bone"
        >
          View Project <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  )
}

export default function Work() {
  const categories = useMemo(() => ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))], [])
  const [filter, setFilter] = useState('All')
  const shown = PROJECTS.filter((p) => filter === 'All' || p.category === filter)

  return (
    <section id="work" className="section-y">
      <div className="container-x">
        <Reveal><SectionLabel>Our work</SectionLabel></Reveal>
        <TextReveal text={"Ideas We've Turned\nInto Websites."} className="h-section mt-6" />

        <Reveal delay={0.1} className="-mx-5 mt-10 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div role="group" aria-label="Filter projects" className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
                className={`relative min-h-[44px] rounded-full px-5 text-sm font-medium transition-colors ${filter === c ? 'text-ink' : 'border border-line text-mute hover:text-bone'}`}
              >
                {filter === c && (
                  <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-flame" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                )}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 grid gap-x-6 gap-y-14 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => <ProjectCard key={p.id} p={p} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
