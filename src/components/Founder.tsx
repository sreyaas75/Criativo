import { SITE, waLink } from '../config/site'
import MagneticButton from './ui/MagneticButton'
import { Reveal, SectionLabel, TextReveal } from './ui/Reveal'

export default function Founder() {
  return (
    <section id="founder" className="section-y">
      <div className="container-x grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal delay={0.05}>
            <div className="relative mx-auto w-full max-w-[28rem] lg:mx-0">
              <div className="relative overflow-hidden rounded-3xl border-[3px] border-flame bg-panel">
                {SITE.founderPhoto ? (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_55%)]" aria-hidden="true" />
                    <img
                      src={SITE.founderPhoto}
                      alt={`Portrait of ${SITE.founder}, founder of Criativo`}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/4] h-full w-full object-cover grayscale-[18%] brightness-[0.82] contrast-[1.05]"
                    />
                  </>
                ) : (
                  <div className="flex aspect-[3/4] items-center justify-center bg-panel text-center">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-3xl bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] [background-size:12px_12px] text-center">
                      <span className="font-display text-[8rem] font-semibold leading-none text-bone" aria-hidden="true">S</span>
                    </div>
                  </div>
                )}
              </div>

              <svg
                aria-hidden="true"
                viewBox="0 0 140 140"
                className="absolute -top-7 right-2 h-32 w-32 animate-[spin_20s_linear_infinite] rounded-full bg-ink sm:-right-5 sm:h-36 sm:w-36"
              >
                <defs>
                  <path id="founder-circ" d="M70 70m-48 0a48 48 0 1 1 96 0a48 48 0 1 1 -96 0" />
                </defs>
                <text fill="#f3efe9" fontSize="11" fontWeight="600" letterSpacing="3.2" fontFamily="Manrope, sans-serif">
                  <textPath href="#founder-circ">FOUNDER • CRIATIVO • SREYAAS •</textPath>
                </text>
              </svg>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <SectionLabel>Founder</SectionLabel>
          </Reveal>

          <TextReveal text="Meet Sreyaas" className="h-section mt-4 sm:mt-6" />

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-[38rem] font-display text-[clamp(1.5rem,2.2vw,1.8rem)] leading-snug tracking-[-0.03em] text-bone sm:mt-8">
              I'm Sreyaas — a Computer Science student from Chennai with a natural curiosity for technology, creativity, and building things from scratch.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-7 max-w-[38rem] text-[15px] leading-relaxed text-mute sm:text-base">
              I've always enjoyed exploring new ideas, whether that's experimenting with technology, designing something from a blank canvas, or simply learning how things work. I'm someone who likes to stay curious, keep improving, and challenge myself to do things a little better every time.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-6 max-w-[38rem] text-[15px] leading-relaxed text-mute sm:text-base">
              Outside of tech, I enjoy going to the gym, meeting new people, exploring creative ideas, and constantly learning something new. I've always been drawn to things that give me the freedom to create rather than just follow a fixed path.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-6 max-w-[38rem] text-[15px] leading-relaxed text-mute sm:text-base">
              I'm still figuring out where the journey takes me, but one thing I know for sure — I want to build something meaningful and make the most of the opportunities that come my way.
            </p>
          </Reveal>

          <Reveal delay={0.36}>
            <div className="mt-8">
              <MagneticButton href={waLink()} external variant="ghost">Talk to Sreyaas</MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
