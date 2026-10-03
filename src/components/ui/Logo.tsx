export function LogoMark({ size = 32, draw = false }: { size?: number; draw?: boolean }) {
  void draw

  return (
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center rounded-xl bg-flame font-display font-semibold text-ink"
      style={{ width: size, height: size, fontSize: `${size * 0.5}px` }}
    >
      C
    </span>
  )
}

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center font-display font-semibold uppercase tracking-[-0.03em] text-bone text-lg sm:text-xl ${className}`}
      aria-label="Criativo"
    >
      <span aria-hidden="true">Criativo</span>
    </span>
  )
}
