import { motion, useReducedMotion } from 'motion/react'
import { useEffect } from 'react'

export default function Loader({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion()

  useEffect(() => {
    const t = setTimeout(onDone, reduce ? 150 : 1900)
    return () => clearTimeout(t)
  }, [onDone, reduce])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-ink"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      role="status"
      aria-label="Loading Criativo"
    >
      <div className="flex overflow-hidden font-display text-[clamp(2rem,8vw,3.5rem)] font-semibold tracking-[-0.04em]" aria-hidden="true">
        {'CRIATIVO'.split('').map((c, i) => (
          <motion.span
            key={i}
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {c}
          </motion.span>
        ))}
      </div>
      <div className="h-px w-40 overflow-hidden bg-line">
        <motion.div
          className="h-full origin-left bg-flame"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
