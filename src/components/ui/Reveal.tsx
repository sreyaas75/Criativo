import { motion } from 'motion/react'
import type { ReactNode } from 'react'

const ease = [0.16, 1, 0.3, 1] as const

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

interface TextRevealProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  delay?: number
}

/** Masked word-by-word reveal. Use "\n" in `text` for line breaks. */
export function TextReveal({ text, as: Tag = 'h2', className = '', delay = 0 }: TextRevealProps) {
  let n = 0

  return (
    <Tag className={className} aria-label={text.replace('\n', ' ')}>
      {text.split('\n').map((line, li) => {
        const words = line.split(' ')

        return (
          <motion.span
            key={li}
            aria-hidden="true"
            className="block"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              show: { transition: { delayChildren: delay, staggerChildren: 0.045 } },
            }}
          >
            {words.map((word, wi) => (
              <span
                key={`${li}-${word}-${wi}-${n++}`}
                className={`${wi === words.length - 1 ? '' : 'mr-[0.25em]'} -mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom`}
              >
                <motion.span
                  className="inline-block"
                  variants={{
                    hidden: { y: '115%' },
                    show: { y: 0, transition: { duration: 0.9, ease } },
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.span>
        )
      })}
    </Tag>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 text-xs font-medium text-mute">
      <span className="h-1.5 w-1.5 rounded-full bg-flame" />
      {children}
    </span>
  )
}
