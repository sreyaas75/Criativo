import { motion, useInView, useScroll } from 'motion/react'
import { useRef } from 'react'
import { PROCESS } from '../data/content'
import { Reveal, SectionLabel, TextReveal } from './ui/Reveal'

function Step({ index, title, description }: { index: number; title: string; description: string }) {
  const ref = useRef<HTMLLIElement>(null)
  const reached = useInView(ref, { once: true, margin: '0px 0px -50% 0px' })

  return (
    <li ref={ref} className="relative pb-14 pl-16 last:pb-0 sm:pl-24">
      <span
        className={`absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full border font-display text-sm font-medium transition-all duration-500 sm:h-14 sm:w-14 sm:text-base ${
          reached ? 'border-flame bg-flame text-ink' : 'border-line bg-ink text-mute'
        }`}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className={`transition-opacity duration-500 ${reached ? 'opacity-100' : 'opacity-35'}`}>
        <h3 className="font-display text-2xl font-medium tracking-[-0.03em] sm:text-3xl">{title}</h3>
        <p className="mt-2 max-w-md text-[15px] leading-relaxed text-mute sm:text-base">{description}</p>
      </div>
    </li>
  )
}

export default function Process() {
  const listRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 60%', 'end 55%'] })

  return (
    <section id="process" className="section-y">
      <div className="container-x grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="self-start lg:sticky lg:top-32 lg:col-span-5">
          <Reveal><SectionLabel>Process</SectionLabel></Reveal>
          <TextReveal text={"From Idea\nto Impact."} className="h-section mt-4 sm:mt-6" />
        </div>

        <div className="relative lg:col-span-7">
          <div aria-hidden="true" className="absolute bottom-6 left-[21px] top-6 w-px bg-line sm:left-[27px]">
            <motion.div className="h-full origin-top bg-flame" style={{ scaleY: scrollYProgress }} />
          </div>
          <ol ref={listRef} className="relative">
            {PROCESS.map((s, i) => <Step key={s.title} index={i} {...s} />)}
          </ol>
        </div>
      </div>
    </section>
  )
}
