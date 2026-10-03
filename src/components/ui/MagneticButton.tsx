import { motion, useMotionValue, useSpring } from 'motion/react'
import type { PointerEvent, ReactNode } from 'react'
import { useRef } from 'react'

type Variant = 'primary' | 'ghost' | 'light'

interface Props {
  children: ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: Variant
  external?: boolean
  disabled?: boolean
  className?: string
  title?: string
}

const base =
  'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300'
const variants: Record<Variant, string> = {
  primary: 'bg-flame text-ink hover:bg-bone',
  light: 'bg-bone text-ink hover:bg-flame',
  ghost: 'border border-line text-bone hover:border-bone',
}

export default function MagneticButton({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  external,
  disabled,
  className = '',
  title,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.3 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.3 })

  const onMove = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse' || !ref.current || disabled) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.28)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const cls = `${base} ${disabled ? 'cursor-not-allowed border border-line text-mute' : variants[variant]} ${className}`

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      whileHover={disabled ? undefined : { y: -2, scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block max-w-full"
    >
      {href && !disabled ? (
        <a
          href={href}
          className={cls}
          title={title}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      ) : (
        <button type={type} onClick={onClick} disabled={disabled} className={cls} title={title}>
          {children}
        </button>
      )}
    </motion.div>
  )
}
