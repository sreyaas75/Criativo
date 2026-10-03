import { Asterisk } from 'lucide-react'
import { MARQUEE_WORDS } from '../data/content'

export default function Marquee() {
  const row = [...MARQUEE_WORDS, ...MARQUEE_WORDS]
  return (
    <div aria-hidden="true" className="overflow-hidden py-14 sm:py-20">
      <div className="marquee flex w-max items-center gap-8 whitespace-nowrap pr-8">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span
              className="font-display text-[clamp(2rem,6vw,4.5rem)] font-medium tracking-[-0.04em] text-transparent"
              style={{ WebkitTextStroke: '1px rgba(243,239,233,.45)' }}
            >
              {w}
            </span>
            <Asterisk className="text-flame" size={36} />
          </span>
        ))}
      </div>
    </div>
  )
}
