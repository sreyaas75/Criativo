import { ValidationError, useForm } from '@formspree/react'
import { Instagram, MessageCircle, Send } from 'lucide-react'
import { type ChangeEvent, useState } from 'react'
import { enquiryMessage, SITE, waLink } from '../config/site'
import MagneticButton from './ui/MagneticButton'
import { Reveal, TextReveal } from './ui/Reveal'

const FORM_ID = 'xeaobjpv'

export default function Contact() {
  const [state, handleSubmit] = useForm(FORM_ID)
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '', budget: '' })

  const openWhatsApp = () => window.open(waLink(enquiryMessage(form)), '_blank', 'noopener,noreferrer')

  const setValue = (key: keyof typeof form) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [key]: event.target.value }))
  }

  if (state.succeeded) {
    return (
      <section id="contact" className="section-y">
        <div className="container-x">
          <div className="panel flex min-h-[320px] items-center justify-center p-8 text-center text-bone">
            <p className="text-lg sm:text-xl">Thanks for reaching out. We'll get back to you soon.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-y">
      <div className="container-x">
        <Reveal><p className="font-display text-lg text-flame sm:text-xl">Have an Idea?</p></Reveal>
        <TextReveal as="h2" text={"Let's Turn It\nInto Impact."} className="h-display mt-4 text-[clamp(2.1rem,8vw,6.5rem)] tracking-[-0.045em]" />

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="lg:col-span-2">
            <p className="max-w-md text-[15px] leading-relaxed text-mute sm:text-base">
              Whether you have a complete project brief or just an idea, let's start the conversation.
            </p>
            <p className="mt-10 text-sm text-mute">WhatsApp</p>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="link-u mt-1 font-display text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
              {SITE.whatsappDisplay}
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href={waLink()} external><MessageCircle size={18} aria-hidden="true" /> WhatsApp</MagneticButton>
              <MagneticButton
                variant="ghost"
                href={SITE.instagramUrl || undefined}
                external
                disabled={!SITE.instagramUrl}
                title={SITE.instagramUrl ? undefined : 'Add your Instagram link in src/config/site.ts'}
              >
                <Instagram size={18} aria-hidden="true" /> Instagram
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <form onSubmit={handleSubmit} className="panel space-y-5 p-6 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm"><span className="mb-2 block text-mute">Name</span>
                  <input className="field focus-visible:border-flame focus-visible:shadow-[0_0_0_4px_rgba(255,107,26,0.12)] focus-visible:outline-none" name="name" autoComplete="name" value={form.name} onChange={setValue('name')} placeholder="Your name" />
                </label>
                <label className="block text-sm"><span className="mb-2 block text-mute">Email</span>
                  <input className="field focus-visible:border-flame focus-visible:shadow-[0_0_0_4px_rgba(255,107,26,0.12)] focus-visible:outline-none" type="email" name="email" autoComplete="email" required value={form.email} onChange={setValue('email')} placeholder="you@company.com" />
                </label>
              </div>
              <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 block text-sm text-flame" />

              <label className="block text-sm"><span className="mb-2 block text-mute">Business / Brand</span>
                <input className="field focus-visible:border-flame focus-visible:shadow-[0_0_0_4px_rgba(255,107,26,0.12)] focus-visible:outline-none" name="business" autoComplete="organization" value={form.business} onChange={setValue('business')} placeholder="Where do you work, or what's your brand called?" />
              </label>

              <label className="block text-sm"><span className="mb-2 block text-mute">What do you want to build?</span>
                <textarea className="field min-h-[130px] resize-y focus-visible:border-flame focus-visible:shadow-[0_0_0_4px_rgba(255,107,26,0.12)] focus-visible:outline-none" name="message" required value={form.message} onChange={setValue('message')} placeholder="A few lines about your idea or project" />
              </label>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 block text-sm text-flame" />

              <label className="block text-sm"><span className="mb-2 block text-mute">Budget — Optional</span>
                <input className="field focus-visible:border-flame focus-visible:shadow-[0_0_0_4px_rgba(255,107,26,0.12)] focus-visible:outline-none" name="budget" value={form.budget} onChange={setValue('budget')} placeholder="An approximate range" />
              </label>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <MagneticButton type="submit" disabled={state.submitting}>
                  <Send size={16} aria-hidden="true" /> {state.submitting ? 'Sending…' : 'Send Enquiry'}
                </MagneticButton>
                <p role="status" aria-live="polite" className="text-sm text-mute">
                  {state.submitting && 'Sending…'}
                  {!state.submitting && !state.succeeded && (
                    <button type="button" onClick={openWhatsApp} className="link-u text-flame">Send via WhatsApp instead</button>
                  )}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
