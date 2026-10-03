import { motion } from 'motion/react'
import { SERVICES } from '../data/content'
import { Reveal, SectionLabel, TextReveal } from './ui/Reveal'

export default function Services() {
  return (
    <section id="services" className="section-y pt-8 sm:pt-12">
      <div className="container-x">
        <Reveal><SectionLabel>Services</SectionLabel></Reveal>
        <TextReveal text="What We Build" className="h-section mt-6" />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, description, icon: Icon }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.01 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex min-h-[290px] flex-col justify-between overflow-hidden rounded-[1.7rem] border border-line bg-panel p-7 shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-flame/60 hover:shadow-[0_24px_60px_rgba(255,107,26,0.08)] focus-within:border-flame sm:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-bottom scale-y-0 bg-[linear-gradient(180deg,rgba(255,107,26,0.96),rgba(255,107,26,0.88))] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-focus-within:scale-y-100 group-hover:scale-y-100"
              />
              <div className="relative z-10 flex items-start justify-between transition-colors duration-300 group-hover:text-ink">
                <span className="font-display text-sm font-medium tracking-[0.08em] text-mute transition-colors group-hover:text-ink/75">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-line bg-ink/20 transition-all duration-500 group-hover:rotate-[360deg] group-hover:border-ink/30 group-hover:bg-bone/10">
                  <Icon size={20} aria-hidden="true" />
                </span>
              </div>
              <div className="relative z-10 transition-colors duration-300 group-hover:text-ink">
                <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-bone sm:text-[1.75rem]">
                  {title}
                </h3>
                <p className="mt-4 max-w-[18rem] text-[15px] leading-relaxed text-mute transition-colors duration-300 group-hover:text-ink/80">{description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
