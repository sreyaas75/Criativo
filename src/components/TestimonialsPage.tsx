import { Reveal, SectionLabel, TextReveal } from './ui/Reveal'
import { PAGE_TESTIMONIALS } from '../data/testimonials-page'

export default function TestimonialsPage() {
  return (
    <section id="testimonials-page" className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionLabel>Testimonials</SectionLabel>
        </Reveal>

        <TextReveal
          text="What Our Clients Say About Working With Us"
          className="mt-6 max-w-5xl text-[clamp(2.4rem,5vw,4.4rem)] font-medium leading-[0.96] tracking-[-0.06em] text-bone"
        />

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mute sm:text-xl">
          Real feedback from real projects — here's what clients experienced working with Criativo.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PAGE_TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={`${testimonial.name}-${index}`} delay={0.08 * index} className="h-full">
              <article className="group h-full rounded-[1.75rem] border border-line bg-panel p-6 shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-flame/60 hover:shadow-[0_24px_60px_rgba(255,125,73,0.12)]">
                <div className="h-1.5 w-16 rounded-full bg-flame/80" />
                <p className="mt-6 font-display text-[clamp(1.4rem,2vw,2rem)] leading-relaxed tracking-[-0.03em] text-bone">
                  “{testimonial.quote}”
                </p>

                <div className="mt-8 border-t border-line pt-5">
                  <p className="text-base font-semibold text-bone">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-mute">{testimonial.company}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
