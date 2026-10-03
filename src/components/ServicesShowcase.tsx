import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { SERVICE_PROJECTS } from '../data/services-showcase'
import { Reveal, SectionLabel, TextReveal } from './ui/Reveal'

function WebsitePreview({ href, src, alt }: { href: string; src: string; alt: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${alt}`}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group relative block aspect-[1.42/1] overflow-hidden rounded-[1.75rem] border border-line bg-panel shadow-[0_20px_60px_rgba(0,0,0,0.26)] ring-1 ring-white/5 transition-all duration-300 hover:border-flame/50 hover:shadow-[0_26px_70px_rgba(255,120,47,0.12)]"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_60%)] opacity-90" />
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        whileInView={{ scale: 1.02, opacity: 1 }}
        initial={{ opacity: 0.8, scale: 1.06 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
      />
      <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-ink/75 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-bone backdrop-blur-sm">
        View site <ArrowUpRight size={12} aria-hidden="true" />
      </span>
    </motion.a>
  )
}

function ServiceItem({ service, index }: { service: (typeof SERVICE_PROJECTS)[number]; index: number }) {
  const reverse = index % 2 === 1

  return (
    <Reveal delay={0.08 * index} className="w-full">
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
        className={`grid items-center gap-8 lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}
      >
        <div className="min-w-0 lg:pr-2">
          <WebsitePreview href={service.url} src={service.image} alt={service.title} />
        </div>

        <div className="min-w-0">
          <span className="inline-flex rounded-full border border-line bg-panel px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-mute">
            {service.category}
          </span>
          <h3 className="mt-4 font-display text-[clamp(2rem,3vw,3rem)] font-medium tracking-[-0.04em] text-bone">
            {service.title}
          </h3>
          <p className="mt-4 max-w-[30rem] text-base leading-relaxed text-mute sm:text-lg">
            {service.description}
          </p>
          <motion.a
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-flame/30 bg-flame/10 px-4 py-2.5 text-sm font-medium text-flame transition-all duration-300 hover:border-flame hover:bg-flame hover:text-ink"
          >
            View Project <ArrowUpRight size={14} aria-hidden="true" />
          </motion.a>
        </div>
      </motion.article>
    </Reveal>
  )
}

export default function ServicesShowcase() {
  return (
    <section id="work" className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionLabel>Our Works</SectionLabel>
        </Reveal>

        <TextReveal
          text="Our Works"
          className="mt-6 max-w-5xl text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[0.96] tracking-[-0.06em] text-bone"
        />

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mute sm:text-xl">
          From premium e-commerce and creative portfolios to healthcare and hospitality, we design and develop tailored digital experiences for different business needs.
        </p>

        <div className="mt-14 space-y-10 lg:space-y-16">
          {SERVICE_PROJECTS.map((service, index) => (
            <ServiceItem key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
