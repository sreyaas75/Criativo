import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import type { PointerEvent } from 'react'
import { useRef } from 'react'
import BrowserMock from './ui/BrowserMock'
import MagneticButton from './ui/MagneticButton'

const ease = [0.16, 1, 0.3, 1] as const

function CursorArrow() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 3l16 7-7 2.5L10.5 20z" fill="#ff6b1a" stroke="#0c0b0a" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

const Handle = ({ pos }: { pos: string }) => (
  <i className={`absolute h-2.5 w-2.5 border border-flame bg-ink ${pos}`} />
)

export default function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const mx = useSpring(useMotionValue(0), { stiffness: 70, damping: 18 })
  const my = useSpring(useMotionValue(0), { stiffness: 70, damping: 18 })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -80])

  const onMove = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  const lx = useTransform(mx, [-0.5, 0.5], [-26, 26])
  const cx = useTransform(mx, [-0.5, 0.5], [12, -12])
  const rx = useTransform(mx, [-0.5, 0.5], [-34, 34])
  const ly = useTransform(my, [-0.5, 0.5], [-10, 10])

  const state = ready ? 'show' : 'hide'
  const item = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.9, delay, ease },
  })

  return (
    <section id="home" ref={ref} onPointerMove={onMove} className="relative flex min-h-[100svh] flex-col overflow-hidden pt-28 sm:pt-32">
      <motion.div aria-hidden="true" style={{ y: bgY }} className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000,transparent)]" />
      <motion.div
        aria-hidden="true"
        style={{ y: orbY }}
        className="pointer-events-none absolute bottom-0 left-1/2 h-[60%] w-[160%] -translate-x-1/2 opacity-60"
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="h-full w-full" style={{ background: 'radial-gradient(ellipse 50% 100% at 50% 100%, rgba(255,107,26,.6), transparent 70%)' }} />
      </motion.div>

      <div className="container-x relative z-10 flex flex-1 flex-col items-center text-center">
        <motion.span
          {...item(0.05)}
          className="rounded-full border border-line bg-panel px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-bone/80"
        >
          CRIATIVO AGENCY
        </motion.span>

        <h1 className="h-display mt-7 text-[clamp(2rem,8.4vw,7rem)] leading-[1.08] tracking-[-0.045em]">
          <span className="sr-only">Ideas Into Impact.</span>
          <span aria-hidden="true" className="block overflow-hidden pb-[0.12em]">
            <motion.span
              className="block"
              initial={{ y: '115%' }}
              animate={ready ? { y: 0 } : {}}
              transition={{ duration: 1, delay: 0.15, ease }}
            >
              Ideas Into
            </motion.span>
          </span>
          <span aria-hidden="true" className="relative mt-[0.06em] inline-block px-[0.2em] py-[0.04em]">
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span
                className="block text-flame"
                initial={{ y: '115%' }}
                animate={ready ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 0.28, ease }}
              >
                Impact.
              </motion.span>
            </span>
            <motion.span
              className="pointer-events-none absolute inset-0 border-[1.5px] border-flame"
              initial={{ opacity: 0, scale: 1.18 }}
              animate={ready ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.1, ease }}
            >
              <Handle pos="-left-[5px] -top-[5px]" />
              <Handle pos="-right-[5px] -top-[5px]" />
              <Handle pos="-bottom-[5px] -left-[5px]" />
              <Handle pos="-bottom-[5px] -right-[5px]" />
            </motion.span>
            <motion.span
              className="pointer-events-none absolute -bottom-7 -right-10 flex items-start sm:-bottom-9 sm:-right-16"
              initial={{ opacity: 0, x: 60, y: 50 }}
              animate={ready ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.35, ease }}
            >
              <span className="float-a flex items-start">
                <CursorArrow />
                <span className="-ml-0.5 mt-4 rounded-full bg-flame px-2.5 py-1 font-sans text-[11px] font-semibold tracking-normal text-ink">
                  Sreyaas
                </span>
              </span>
            </motion.span>
          </span>
        </h1>

        <motion.p {...item(0.7)} className="mt-12 max-w-[34rem] text-[15px] leading-relaxed text-mute sm:mt-14 sm:text-base">
          We design and develop modern, high-performance websites that help businesses turn their ideas into a strong digital presence.
        </motion.p>

        <motion.div {...item(0.85)} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href="#contact">Start a Project</MagneticButton>
          <MagneticButton href="#work" variant="ghost">View Our Work</MagneticButton>
        </motion.div>

        <motion.div
          data-state={state}
          className="relative mt-14 flex w-full max-w-[1000px] flex-1 items-end justify-center sm:mt-16"
          initial={{ opacity: 0, y: 80 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1, ease }}
        >
          <motion.div style={{ x: lx, y: ly, rotate: -6 }} className="float-b -mr-[9%] mb-4 w-[38%] shrink-0 translate-y-6 sm:mb-8">
            <BrowserMock variant={2} />
          </motion.div>
          <motion.div style={{ x: cx }} className="relative z-10 w-[58%] shrink-0 translate-y-8 sm:translate-y-12">
            <BrowserMock variant={0} />
          </motion.div>
          <motion.div style={{ x: rx, y: ly, rotate: 6 }} className="float-a -ml-[9%] mb-4 w-[38%] shrink-0 translate-y-6 sm:mb-8">
            <BrowserMock variant={3} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
