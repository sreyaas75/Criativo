/** Placeholder website preview. Pass `image` to show a real screenshot instead. */
const B = ({ className = '' }: { className?: string }) => <div className={`rounded-full bg-bone/15 ${className}`} />
const Block = ({ className = '' }: { className?: string }) => <div className={`rounded-lg bg-bone/10 ${className}`} />
const Btn = () => <div className="mt-2 h-4 w-14 rounded-full bg-flame" />

function Wire({ variant }: { variant: number }) {
  switch (variant % 6) {
    case 0:
      return (
        <div className="absolute inset-0 grid grid-cols-5 gap-3 p-4">
          <div className="col-span-3 flex flex-col justify-center gap-2">
            <B className="h-3 w-4/5" /><B className="h-3 w-3/5" /><B className="mt-1 h-1.5 w-full" /><B className="h-1.5 w-4/5" /><Btn />
          </div>
          <Block className="col-span-2 bg-gradient-to-br from-flame/70 to-flame/10" />
        </div>
      )
    case 1:
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
          <B className="h-4 w-1/2" /><B className="h-1.5 w-1/3" />
          <div className="mt-2 grid w-full grid-cols-3 gap-2"><Block className="aspect-square" /><Block className="aspect-square bg-flame/60" /><Block className="aspect-square" /></div>
        </div>
      )
    case 2:
      return (
        <div className="absolute inset-0 flex flex-col gap-3 p-4">
          <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-flame/60 to-flame/10"><B className="h-3 w-3/5 bg-ink/50" /><B className="h-1.5 w-2/5 bg-ink/40" /><div className="mt-1 h-4 w-14 rounded-full bg-ink" /></div>
          <div className="grid grid-cols-3 gap-2"><Block className="h-6" /><Block className="h-6" /><Block className="h-6" /></div>
        </div>
      )
    case 3:
      return (
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-2 p-4">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="flex flex-col gap-1.5"><Block className={`flex-1 ${i === 1 ? 'bg-flame/60' : ''}`} /><B className="h-1.5 w-3/4" /></div>
          ))}
        </div>
      )
    case 4:
      return (
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="space-y-2"><B className="h-5 w-4/5 bg-bone/25" /><B className="h-5 w-3/5 bg-flame/80" /></div>
          <div className="grid grid-cols-2 gap-2"><Block className="h-10" /><Block className="h-10" /></div>
        </div>
      )
    default:
      return (
        <div className="absolute inset-0 grid grid-cols-6 gap-2 p-3">
          <div className="col-span-1 flex flex-col gap-2"><B className="h-2 w-full" /><B className="h-2 w-4/5" /><B className="h-2 w-3/5" /></div>
          <div className="col-span-5 grid grid-cols-3 grid-rows-3 gap-2"><Block className="col-span-2 row-span-2 bg-flame/50" /><Block /><Block /><Block className="col-span-3" /></div>
        </div>
      )
  }
}

interface Props {
  variant?: number
  image?: string
  alt?: string
  className?: string
}

export default function BrowserMock({ variant = 0, image, alt = '', className = '' }: Props) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] ${className}`}
      {...(image ? {} : { 'aria-hidden': true })}
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-panel px-3 py-2">
        <i className="h-2 w-2 rounded-full bg-bone/20" />
        <i className="h-2 w-2 rounded-full bg-bone/20" />
        <i className="h-2 w-2 rounded-full bg-bone/20" />
        <div className="ml-2 h-3 max-w-[50%] flex-1 rounded-full bg-bone/10" />
      </div>
      <div className="relative aspect-[16/10]">
        {image ? (
          <img src={image} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
        ) : (
          <Wire variant={variant} />
        )}
      </div>
    </div>
  )
}
