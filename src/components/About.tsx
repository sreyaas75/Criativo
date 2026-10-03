import { Fingerprint, Megaphone, Quote, ShieldCheck, TrendingUp } from 'lucide-react'
import { SITE } from '../config/site'
import MagneticButton from './ui/MagneticButton'
import { Reveal, SectionLabel, TextReveal } from './ui/Reveal'

const valueTiles = [
  { label: 'Years building', value: '3+' },
  { label: 'Websites built', value: '15+' },
] as const

const principles = [
  { icon: Fingerprint, label: 'Represent your brand' },
  { icon: ShieldCheck, label: 'Build trust' },
  { icon: Megaphone, label: 'Communicate your value' },
  { icon: TrendingUp, label: 'Turn visitors into opportunities' },
] as const

export default function About() {
  return (
    <section id="about" className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionLabel>About</SectionLabel>
        </Reveal>

        <TextReveal text={"Building Digital Experiences,\nNot Just Websites."} className="h-section mt-4 max-w-4xl sm:mt-6" />

        <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-5">
            <Reveal delay={0.1}>
              <figure className="group relative">
                <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-flame/50 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
                <div className="panel relative overflow-hidden rounded-3xl border border-line bg-panel p-6 sm:p-7">
                  <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.10)_1px,_transparent_1px)] [background-size:12px_12px] opacity-60" />
                  <div className="relative">
                    <div className="mb-7 flex items-center gap-4">
                      {SITE.founderPhoto ? (
                        <img src={SITE.founderPhoto} alt={SITE.founder} className="h-16 w-16 rounded-full object-cover ring-1 ring-line" />
                      ) : (
                        <div className="grid h-16 w-16 place-items-center rounded-full bg-flame font-display text-2xl font-semibold text-ink" aria-hidden="true">
                          S
                        </div>
                      )}
                      <div>
                        <div className="font-display text-2xl font-semibold text-bone">{SITE.founder}</div>
                        <div className="text-sm text-mute">Founder — Criativo</div>
                      </div>
                    </div>

                    <blockquote className="border-l-2 border-flame pl-4 font-display text-[clamp(1.2rem,2.5vw,1.75rem)] font-medium leading-snug tracking-[-0.02em] text-bone">
                      Criativo was founded with a simple idea — technology shouldn't just work; it should create an experience.
                    </blockquote>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                      {valueTiles.map((item) => (
                        <div key={item.label} className="rounded-2xl border border-line bg-panel/80 p-4">
                          <div className="font-display text-3xl font-semibold text-flame">{item.value}</div>
                          <div className="mt-1 text-sm text-mute">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </figure>
            </Reveal>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <Reveal delay={0.15}>
              <p className="font-display text-[clamp(2rem,2.8vw,3rem)] leading-none tracking-[-0.04em] text-bone">
                I'm Sreyaas, the founder of Criativo.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-mute">
                For the past 3+ years, I've been exploring, designing, and building for the digital world. What started as a passion for technology and creativity has grown into real work with businesses and clients from around the world.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute">
                So far, I've built 15+ websites and worked with clients across different industries and locations, each project teaching me something new about design, development, and what makes a website actually work for a business.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute">
                I believe a good website should do more than simply exist online. It should:
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {principles.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-2xl border border-line bg-panel p-4 transition-colors duration-300 hover:border-flame">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-flame/15 text-flame">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium text-bone">{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute">
                I'm still building, learning, and pushing myself to create better digital experiences with every project — and this is only the beginning.
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <div className="mt-8 rounded-3xl bg-flame p-6 text-ink sm:p-7">
                <p className="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] leading-tight tracking-[-0.03em]">
                  If you're building something worth talking about, I'd love to help build the digital experience behind it.
                </p>
                <div className="mt-6">
                  <MagneticButton variant="light" href="#contact">
                    Start a Project
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
