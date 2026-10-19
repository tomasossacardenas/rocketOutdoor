// Central place for business info and copy, so content edits don't touch layout code.

export const business = {
  name: 'Rocket Outdoor Co',
  phone: '(656) 235-9435',
  phoneHref: 'tel:+16562359435',
  email: 'RocketOutdoorCo@gmail.com',
  address: '30740 SR 54 STE 105, Wesley Chapel, FL 33543',
  addressLines: ['30740 SR 54 STE 105,', 'Wesley Chapel, FL 33543'],
  mapsQuery: '30740+SR+54+STE+105,+Wesley+Chapel,+FL+33543',
  facebook: 'https://www.facebook.com/rocketoutdoorco',
  instagram: 'https://www.instagram.com/rocketoutdoorco',
  hours: [
    { days: 'Mon - Fri', time: '8:00 am – 5:00 pm' },
    { days: 'Saturday', time: '9:00 am – 1:00 pm' },
  ],
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export const serviceCards = [
  { title: 'Vinyl Fencing', image: '/images/service-vinyl.webp', alt: 'White vinyl privacy fence with palm trees' },
  { title: 'Chain-link Fencing', image: '/images/service-chainlink.webp', alt: 'Close-up of a chain-link fence' },
  { title: 'Wood Fencing', image: '/images/service-wood.webp', alt: 'Wood picket fence under a blue sky' },
  { title: 'Aluminum Fencing', image: '/images/service-aluminum.webp', alt: 'Black aluminum pool fence with shrubs' },
]

export const whyChooseUs = [
  {
    title: 'Quality',
    subtitle: 'Superior Materials',
    text: 'We use high-quality fencing materials designed for durability, low maintenance, and long-lasting performance. From vinyl and aluminum to wood and chain-link, we offer options to fit your property and needs.',
  },
  {
    title: 'Expertise',
    subtitle: 'Skilled Professionals',
    text: 'Our team focuses on proper installation, attention to detail, and quality workmanship on every project. We take pride in delivering a clean, durable fence that looks great and performs as intended.',
  },
  {
    title: 'Customization',
    subtitle: 'Tailored Solutions',
    text: 'Every property is different. We help you choose the right material, style, height, and configuration to meet your needs, complement your property, and fit your budget.',
  },
  {
    title: 'Support',
    subtitle: 'Ongoing Service',
    text: 'As a locally and family-owned company, we’re committed to providing responsive service from your initial estimate through installation and beyond. We’re here to answer your questions and help make the process simple.',
  },
]

export const fencingTypes = [
  {
    title: 'Wood',
    subtitle: 'Classic Appeal',
    text: 'Our wood fencing options provide a timeless and natural look. Ideal for residential properties, these fences offer privacy while blending seamlessly with outdoor landscapes, ensuring your home remains beautifully enclosed.',
  },
  {
    title: 'Vinyl',
    subtitle: 'Low Maintenance',
    text: 'Vinyl fencing is the perfect choice for homeowners seeking durability without sacrificing aesthetics. It resists fading, warping, and insects, providing a secure environment with minimal upkeep throughout the years.',
  },
  {
    title: 'Chain Link',
    subtitle: 'Cost-Effective',
    text: 'Chain link fences offer an economical solution for securing larger areas. With their versatility and strength, they are often used for commercial properties, playgrounds, and parks, making them a popular choice for many applications.',
  },
  {
    title: 'Aluminum',
    subtitle: 'Stylish Security',
    text: 'Aluminum fencing combines elegance with strength, providing a sophisticated look for residential and commercial properties. Its resistance to rust and corrosion ensures a long-lasting solution that enhances your outdoor space.',
  },
  {
    title: 'Custom Fences',
    subtitle: 'Stylish Security',
    text: 'Transform your outdoor space with our custom fencing services. If you can dream it, we can build it! Let us help you create the perfect boundary for your property while enhancing its beauty and security.',
  },
]

// Order and grouping mirror the original gallery layout (rows of 2, 3, 3, ...).
export const galleryRows = [
  ['01', '02'],
  ['03', '04', '05'],
  ['06', '16', '07'],
  ['08', '09', '10'],
  ['11', '12', '13'],
  ['14', '15'],
].map((row) => row.map((id) => ({ src: `/images/gallery/${id}.webp`, alt: 'Fence installation project by Rocket Outdoor Co' })))
