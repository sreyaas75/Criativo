import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { TESTIMONIALS } from '../data/content'
import { Reveal, SectionLabel, TextReveal } from './ui/Reveal'

export default function Testimonials() {
  const [[index, dir], setPage] = useState<[number, number]>([0, 0])
  const t = TESTIMONIALS[index]
  const go = (d: number) => setPage(([i]) => [(i + d + TESTIMONIALS.length) % TESTIMONIALS.length, d])

  return (
    <section id="testimonials" className="section-y">
      <div className="container-x">
        <Reveal><SectionLabel>Testimonials</SectionLabel></Reveal>
        <TextReveal text="What Our Clients Say" className="h-section mt-4 sm:mt-6" />

        <div className="panel mt-10 overflow-hidden rounded-[2rem] border border-line bg-panel p-5 sm:mt-12 sm:p-8 lg:p-10" role="region" aria-roledescription="carousel" aria-label="Client testimonials">
          <div className="relative min-h-[320px] sm:min-h-[280px] lg:min-h-[300px]" aria-live="polite">
            <AnimatePresence mode="wait" custom={dir} initial={false}>
              <motion.figure
                key={index}
                custom={dir}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => { if (Math.abs(info.offset.x) > 70) go(info.offset.x < 0 ? 1 : -1) }}
                variants={{
                  enter: (d: number) => ({ opacity: 0, x: d >= 0 ? 52 : -52, y: 16 }),
                  center: { opacity: 1, x: 0, y: 0 },
                  exit: (d: number) => ({ opacity: 0, x: d >= 0 ? -52 : 52, y: -16 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-full touch-pan-y flex-col justify-between gap-6"
              >
                {t.placeholder && (
                  <span className="mb-2 inline-block rounded-full border border-line px-3 py-1 text-xs text-mute">
                    Placeholder — replace with a real testimonial
                  </span>
                )}
                <motion.blockquote
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-4xl font-display text-[clamp(1.6rem,2.8vw,3rem)] font-medium leading-[1.08] tracking-[-0.04em] text-bone sm:text-[clamp(2rem,3vw,3.2rem)]"
                >
                  “{t.quote}”
                </motion.blockquote>

                <figcaption className="mt-2 flex items-center gap-4 pt-2">
                  {t.image ? (
                    <img src={t.image} alt={`Portrait of ${t.name}`} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-1 ring-line" />
                  ) : (
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-line bg-ink/40 font-display text-sm font-semibold text-bone" aria-hidden="true">
                      {t.name[0]}
                    </span>
                  )}
                  <span>
                    <span className="block text-base font-semibold text-bone">{t.name}</span>
                    <span className="block text-sm text-mute">{t.company}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 sm:mt-10">
            <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setPage([i, i > index ? 1 : -1])}
                  className="grid h-6 w-8 place-items-center"
                >
                  <span className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-flame' : 'w-3 bg-line'}`} />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-line bg-transparent text-bone transition-all duration-300 hover:border-flame hover:text-flame sm:h-12 sm:w-12"><ArrowLeft size={18} /></button>
              <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="grid h-11 w-11 place-items-center rounded-full bg-flame text-ink shadow-[0_10px_25px_rgba(255,120,47,0.35)] transition-all duration-300 hover:bg-[#ff8b4a] sm:h-12 sm:w-12"><ArrowRight size={18} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
