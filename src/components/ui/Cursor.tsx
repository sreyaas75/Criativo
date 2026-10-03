import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'

type Mode = 'idle' | 'link' | 'label'

/** Custom cursor for mouse users only. Add data-cursor="Label" to any element to show a label. */
export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 })
  const [mode, setMode] = useState<Mode>('idle')
  const [label, setLabel] = useState('')
  const [visible, setVisible] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    setEnabled(true)
    document.body.classList.add('has-cursor')

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const over = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor], a, button, [role="button"]')
      if (!el) return setMode('idle')
      const l = el.dataset.cursor
      if (l) {
        setLabel(l)
        setMode('label')
      } else setMode('link')
    }
    const leave = () => setVisible(false)

    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    document.documentElement.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('mouseover', over)
      document.documentElement.removeEventListener('mouseleave', leave)
      document.body.classList.remove('has-cursor')
    }
  }, [x, y])

  if (!enabled) return null

  const size = mode === 'label' ? 88 : mode === 'link' ? 44 : 12

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-ui pointer-events-none fixed left-0 top-0 z-[150]"
      style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full text-xs font-semibold text-ink ${
          mode === 'label' ? 'bg-flame' : mode === 'link' ? 'border border-bone bg-transparent' : 'bg-flame'
        }`}
        animate={{ width: size, height: size }}
        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
      >
        {mode === 'label' && label}
      </motion.div>
    </motion.div>
  )
}
