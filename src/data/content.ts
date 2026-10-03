import type { LucideIcon } from 'lucide-react'
import { Code2, MousePointerClick, PenTool, RefreshCw, ShoppingBag, Wrench } from 'lucide-react'

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
] as const

export const STATS = [
  { value: 15, suffix: '+', label: 'Websites Developed' },
  { value: 3, suffix: '+', label: 'Years of Creative Experience' },
  { value: 100, suffix: '%', label: 'Custom Digital Experiences' },
] as const

export interface Service {
  title: string
  description: string
  icon: LucideIcon
}

export const SERVICES: Service[] = [
  { title: 'Website Development', description: 'Modern, responsive websites designed around your brand and business goals.', icon: Code2 },
  { title: 'UI/UX Design', description: 'Clean and intuitive interfaces designed around usability, visual identity and user experience.', icon: PenTool },
  { title: 'Website Redesign', description: 'Transform outdated websites into modern, responsive digital experiences.', icon: RefreshCw },
  { title: 'Landing Pages', description: 'High-converting landing pages designed around a specific business goal.', icon: MousePointerClick },
  { title: 'E-commerce Websites', description: 'Modern online stores designed to provide a smooth shopping experience.', icon: ShoppingBag },
  { title: 'Website Maintenance', description: 'Continuous improvements, updates and maintenance after launch.', icon: Wrench },
]

export type ProjectCategory = 'Business' | 'Portfolio' | 'Landing Page' | 'E-commerce' | 'Agency'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: string
  /** Wireframe style used while there is no image (0–5). */
  variant: number
  /** Put screenshots in /public/work and set e.g. '/work/project-one.webp'. */
  image?: string
  /** Link to the live site. Falls back to the contact section. */
  url?: string
  /** Remove this flag once the card shows a real project. */
  placeholder?: boolean
}

export const PROJECTS: Project[] = [
  { id: 'p1', title: 'Project Name 01', category: 'Business', description: 'Short description: the goal of the site and what you delivered.', variant: 0, placeholder: true },
  { id: 'p2', title: 'Project Name 02', category: 'Portfolio', description: 'Short description: the goal of the site and what you delivered.', variant: 1, placeholder: true },
  { id: 'p3', title: 'Project Name 03', category: 'Landing Page', description: 'Short description: the goal of the site and what you delivered.', variant: 2, placeholder: true },
  { id: 'p4', title: 'Project Name 04', category: 'E-commerce', description: 'Short description: the goal of the site and what you delivered.', variant: 3, placeholder: true },
  { id: 'p5', title: 'Project Name 05', category: 'Agency', description: 'Short description: the goal of the site and what you delivered.', variant: 4, placeholder: true },
  { id: 'p6', title: 'Project Name 06', category: 'Business', description: 'Short description: the goal of the site and what you delivered.', variant: 5, placeholder: true },
]

export const PROCESS = [
  { title: 'Discover', description: 'We understand your business, audience and goals.' },
  { title: 'Strategize', description: 'We define the website structure, features and direction.' },
  { title: 'Design', description: 'We create a visual experience around your brand.' },
  { title: 'Develop', description: 'We turn the design into a responsive, functional website.' },
  { title: 'Refine', description: 'We test, optimize and polish every important detail.' },
  { title: 'Launch', description: 'Your website goes live and is ready to make an impact.' },
] as const

export const WHY = [
  { title: 'Design + Development', description: 'Creative thinking and technical execution under one roof.' },
  { title: 'Built Around Your Brand', description: 'Every website is designed to feel unique to the business.' },
  { title: 'Modern Technology', description: 'Modern development practices for fast and responsive experiences.' },
  { title: 'Attention to Detail', description: 'From typography and spacing to interactions and responsiveness, every detail matters.' },
] as const

export interface Testimonial {
  quote: string
  name: string
  company: string
  /** Optional profile image, e.g. '/clients/name.webp' */
  image?: string
  /** Remove this flag when you replace the entry with a real testimonial. */
  placeholder?: boolean
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'The website came out better than I expected. Clean, premium and exactly what we needed.',
    name: 'Rahul',
    company: 'E-Commerce Brand',
  },
  {
    quote: 'I had a rough idea, and Sreyaas turned it into a proper website. Really happy with the result.',
    name: 'Praveen',
    company: 'Product Business',
  },
  {
    quote: 'Loved the overall design. It feels modern, elegant and very easy to navigate.',
    name: 'Keerthana',
    company: 'Creative Agency',
  },
  {
    quote: 'Simple, professional and easy to use. Sreyaas made the whole process really smooth.',
    name: 'Krishna',
    company: 'Service Business',
  },
  {
    quote: 'Great communication and quick revisions. The final website looks really professional.',
    name: 'Vikas',
    company: 'Online Store',
  },
  {
    quote: 'The website completely upgraded our online presence. Really liked how it turned out.',
    name: 'Ujjawal',
    company: 'Tech Startup',
  },
  {
    quote: 'Exactly the kind of website we were looking for. Modern, clean and not overdone.',
    name: 'Pratyush',
    company: 'B2B Services',
  },
  {
    quote: 'Sreyaas understood what we wanted and executed it really well. Very happy with the final website.',
    name: 'Jijo Joseph',
    company: 'Business Owner',
  },
]

export const MARQUEE_WORDS = ['Websites', 'UI/UX Design', 'Landing Pages', 'Redesigns', 'E-commerce', 'Maintenance']
