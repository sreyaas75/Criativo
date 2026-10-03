import { motion } from 'motion/react'
import { STATS } from '../data/content'
import { useCountUp } from '../hooks/useCountUp'
import { Reveal } from './ui/Reveal'

function Stat({ value, suffix, label, accent }: { value: number; suffix: string; label: string; accent: boolean }) {
  const { ref, value: n } = useCountUp(value)
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`flex min-h-[200px] flex-col justify-between rounded-3xl p-7 sm:min-h-[240px] sm:p-9 ${
        accent ? 'bg-flame text-ink' : 'border border-line bg-panel'
      }`}
    >
      <p className="font-display text-[clamp(3.25rem,8vw,5.75rem)] font-medium leading-none tracking-[-0.05em]">
        <span ref={ref} aria-label={`${value}${suffix}`}>{n}</span>
        <span aria-hidden="true">{suffix}</span>
      </p>
      <p className={`max-w-[14rem] text-[15px] font-medium ${accent ? 'text-ink/80' : 'text-mute'}`}>{label}</p>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section aria-label="Criativo in numbers" className="relative pb-6 pt-20 sm:pt-24">
      <div className="container-x grid gap-4 md:grid-cols-3">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Reveal delay={0}>
              <Stat {...s} accent={i === 1} />
            </Reveal>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
