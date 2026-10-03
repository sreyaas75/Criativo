/**
 * Central place for brand details and links.
 * Replace the empty values below when you have them.
 */
export interface SiteConfig {
  name: string
  legalName: string
  tagline: string
  founder: string
  /** International format, digits only. 91 = India country code. */
  whatsappNumber: string
  whatsappDisplay: string
  /** TODO: add your Instagram profile URL, e.g. https://instagram.com/yourhandle */
  instagramUrl: string
  /** Optional: path/URL to a founder photo (put the file in /public). Leave empty to show the placeholder. */
  founderPhoto: string
}

export const SITE: SiteConfig = {
  name: 'Criativo',
  legalName: 'Criativo Agency',
  tagline: 'Ideas Into Impact.',
  founder: 'Sreyaas',
  whatsappNumber: '918148440665',
  whatsappDisplay: '8148440665',
  instagramUrl: 'https://www.instagram.com/sreyaas_locked/',
  founderPhoto: '/myphoto.jpeg',
}

export const DEFAULT_WA_MESSAGE =
  "Hi Criativo, I'd like to discuss a website project. Could we set up a quick conversation?"

export const waLink = (message: string = DEFAULT_WA_MESSAGE) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`

export interface Enquiry {
  name: string
  email: string
  business: string
  message: string
  budget: string
}

export const enquiryMessage = (f: Enquiry) =>
  [
    "Hi Criativo, I'd like to start a project.",
    '',
    `Name: ${f.name}`,
    `Email: ${f.email}`,
    f.business && `Business / Brand: ${f.business}`,
    `What I want to build: ${f.message}`,
    f.budget && `Budget: ${f.budget}`,
  ]
    .filter(Boolean)
    .join('\n')
