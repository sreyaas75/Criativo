import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { WHY } from '../data/content'
import { Reveal, SectionLabel, TextReveal } from './ui/Reveal'

const Frame = () => (
  <div className="relative h-20 w-36 border-[1.5px] border-flame">
    {['-left-[5px] -top-[5px]', '-right-[5px] -top-[5px]', '-bottom-[5px] -left-[5px]', '-bottom-[5px] -right-[5px]'].map((p) => (
      <i key={p} className={`absolute h-2.5 w-2.5 border border-flame bg-ink ${p}`} />
    ))}
  </div>
)

const visuals: ReactNode[] = [
  <div key="a" className="relative h-24 w-44" aria-hidden="true">
    <span className="absolute left-0 top-2 grid h-20 w-20 -rotate-6 place-items-center rounded-2xl bg-ink font-display text-3xl font-semibold text-bone">Aa</span>
    <span className="absolute left-20 top-0 grid h-20 w-20 rotate-6 place-items-center rounded-2xl border-2 border-ink font-display text-2xl font-semibold">{'</>'}</span>
  </div>,
  <div key="b" className="flex items-center" aria-hidden="true">
    {['bg-flame', 'bg-bone', 'bg-mute', 'border border-line bg-ink'].map((c, i) => (
      <span key={i} className={`-ml-3 h-14 w-14 rounded-full first:ml-0 ${c}`} />
    ))}
  </div>,
  <div key="c" className="w-44 space-y-2.5" aria-hidden="true">
    {[88, 64, 96].map((w, i) => (
      <div key={i} className="h-2.5 overflow-hidden rounded-full bg-ink/15">
        <motion.div className="h-full origin-left rounded-full bg-ink" style={{ width: `${w}%` }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }} />
      </div>
    ))}
  </div>,
  <div key="d" aria-hidden="true"><Frame /></div>,
]

const styles = [
  'bg-flame text-ink lg:col-span-7',
  'border border-line bg-panel lg:col-span-5',
  'bg-bone text-ink lg:col-span-5',
  'border border-dashed border-mute/40 lg:col-span-7',
]
const muted = ['text-ink/75', 'text-mute', 'text-ink/70', 'text-mute']

export default function WhyCriativo() {
  return (
    <section id="why" className="section-y">
      <div className="container-x">
        <Reveal><SectionLabel>Why Criativo</SectionLabel></Reveal>
        <TextReveal text="More Than Just Code." className="h-section mt-4 sm:mt-6" />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-12">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 0.1} className={`flex min-h-[300px] flex-col justify-between rounded-3xl p-7 sm:p-9 ${styles[i]}`}>
              <div className="flex min-h-[100px] items-start">{visuals[i]}</div>
              <div className="mt-10">
                <h3 className="font-display text-2xl font-medium tracking-[-0.03em]">{w.title}</h3>
                <p className={`mt-3 max-w-md text-[15px] leading-relaxed ${muted[i]}`}>{w.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
