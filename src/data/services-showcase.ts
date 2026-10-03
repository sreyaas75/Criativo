export interface ShowcaseService {
  title: string
  category: string
  description: string
  url: string
  image: string
}

export const SERVICE_PROJECTS: ShowcaseService[] = [
  {
    title: 'Binfarash',
    category: 'E-COMMERCE',
    description:
      'A premium fragrance e-commerce platform built for product discovery and conversion. Features curated scent collections, advanced filtering, and a seamless shopping experience that turns browsers into buyers.',
    url: 'https://binfarash.com/collections/all-fragrances',
    image: '/services/binfarash.png',
  },
  {
    title: 'Aarush Studio',
    category: 'CREATIVE PORTFOLIO',
    description:
      'A high-end photography portfolio website showcasing wedding and portrait work. Built to tell visual stories, build trust, and convert visitors into clients with immersive galleries and easy booking.',
    url: 'https://testimonial2.crescoverse.space/',
    image: '/services/photography.png',
  },
  {
    title: 'Lumea Chocolates',
    category: 'PREMIUM GIFTING',
    description:
      'A luxury chocolate and gifting brand website. Designed to showcase premium products, collections, and customization options while maintaining a polished, high-end visual identity that reflects the brand.',
    url: 'https://lumeachocolates.com/products.php',
    image: '/services/lumea.png',
  },
  {
    title: 'Smile Care Dental Studio',
    category: 'HEALTHCARE',
    description:
      'A professional dental clinic website built to build trust and simplify patient interactions. Features doctor profiles, service explanations, testimonials, and seamless WhatsApp/appointment booking integration.',
    url: 'https://clinic.saiganeshams.in/',
    image: '/services/dental.png',
  },
  {
    title: 'Beach Ville Coffee',
    category: 'COFFEE & CAFE',
    description:
      'A premium specialty coffee cafe website showcasing menu offerings, cafe ambiance, and coffee culture. Designed to attract coffee enthusiasts, enable online ordering, and build a loyal community around the brand.',
    url: 'https://beachvillecoffee.com/',
    image: '/services/coffee.png',
  },
  {
    title: 'Business Showcase',
    category: 'B2B SERVICES',
    description:
      'A professional services website built to showcase expertise, case studies, and client testimonials. Designed to build credibility, demonstrate value, and convert prospects into long-term clients.',
    url: 'https://testimonial4.crescoverse.space/',
    image: '/services/testimonial4.png',
  },
] as const
