// Central place for business info and copy, so content edits don't touch layout code.

export const business = {
  name: 'Rocket Outdoor Co',
  phone: '(656) 235-9435',
  phoneHref: 'tel:+16562359435',
  smsHref: 'sms:+16562359435',
  email: 'RocketOutdoorCo@gmail.com',
  address: '30740 SR 54 STE 105, Wesley Chapel, FL 33543',
  addressLines: ['30740 SR 54 STE 105', 'Wesley Chapel, FL 33543'],
  mapsQuery: '30740+SR+54+STE+105,+Wesley+Chapel,+FL+33543',
  facebook: 'https://www.facebook.com/rocketoutdoorco',
  instagram: 'https://www.instagram.com/rocketoutdoorco',
  reviewsUrl: 'https://www.google.com/search?q=Rocket+Outdoor+Co+Wesley+Chapel+reviews',
  rating: '5.0',
  reviewCount: 13,
  hours: [
    { days: 'Mon – Fri', time: '8:00 am – 5:00 pm' },
    { days: 'Saturday', time: '9:00 am – 1:00 pm' },
  ],
}

export const serviceAreas = ['Wesley Chapel', 'San Antonio', 'Zephyrhills', 'Dade City', 'Pasco County', 'Hillsborough County', 'Polk County']

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Our Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const fencingTypes = [
  {
    id: 'vinyl',
    title: 'Vinyl',
    tagline: 'Low maintenance',
    image: '/images/service-vinyl.webp',
    alt: 'White vinyl privacy fence with palm trees behind it',
    text: 'Durable PVC that resists fading, warping and insects. It keeps its clean look for years with little more than an occasional rinse.',
    bestFor: ['Backyard privacy', 'Pool enclosures', 'HOA communities'],
  },
  {
    id: 'aluminum',
    title: 'Aluminum',
    tagline: 'Stylish security',
    image: '/images/service-aluminum.webp',
    alt: 'Black aluminum fence around a pool with tall shrubs',
    text: 'Elegant and strong, with rust and corrosion resistance that holds up to Florida humidity. Keeps views open while defining your space.',
    bestFor: ['Pools and lanais', 'Front yards', 'Commercial frontage'],
  },
  {
    id: 'wood',
    title: 'Wood',
    tagline: 'Classic appeal',
    image: '/images/service-wood.webp',
    alt: 'Natural wood picket fence against a blue sky',
    text: 'A timeless, natural look that blends into the landscape. A great way to get full privacy around your home.',
    bestFor: ['Full privacy', 'Natural landscapes', 'Residential yards'],
  },
  {
    id: 'chain-link',
    title: 'Chain link',
    tagline: 'Cost-effective',
    image: '/images/service-chainlink.webp',
    alt: 'Close-up of galvanized chain-link fence',
    text: 'An economical, strong way to secure larger areas. A popular choice for commercial properties, playgrounds, parks and pets.',
    bestFor: ['Large properties', 'Pets', 'Commercial sites'],
  },
  {
    id: 'custom',
    title: 'Custom & gates',
    tagline: 'Built to your plan',
    image: '/images/gallery/04.webp',
    alt: 'Long wood-tone privacy fence installed along a property line',
    text: 'Custom layouts, heights, colors and gates designed around your property. If you can picture it, we can build it.',
    bestFor: ['Custom gates', 'Mixed materials', 'Unusual lot lines'],
  },
]

export const reasons = [
  {
    title: 'Quality materials',
    text: 'Fencing chosen for durability, low maintenance and long-lasting performance in the Florida climate.',
  },
  {
    title: 'Careful installation',
    text: 'Straight lines, solid posts and a clean job site. We do the details right so your fence performs as intended.',
  },
  {
    title: 'Options that fit',
    text: 'We help you pick the material, style, height and layout that suit your property and your budget.',
  },
  {
    title: 'Local & family-owned',
    text: 'Responsive service from the first estimate through installation and beyond, from people who live here too.',
  },
]

export const steps = [
  { title: 'Free estimate', text: 'Call, text or send the form. We visit, measure and talk through materials and layout.' },
  { title: 'Plan & approvals', text: 'You get a clear quote. Need HOA approval? We help put the paperwork together.' },
  { title: 'Installation', text: 'Our crew installs your fence and gates and leaves the site clean.' },
  { title: 'Final walkthrough', text: 'We walk the line with you to make sure everything is exactly right.' },
]

export const faqs = [
  {
    q: 'Are estimates really free?',
    a: 'Yes. We come out, measure your property, go over options and give you a quote with no obligation.',
  },
  {
    q: 'Can you help with HOA approval?',
    a: 'Yes. We help you put together what your HOA typically asks for, such as the fence style, height, material and a layout of where it goes.',
  },
  {
    q: 'Which fence material should I choose?',
    a: 'It depends on what matters most. Vinyl is the low-maintenance privacy pick, aluminum suits pools and open views, wood gives a natural look, and chain link is the most economical for large areas. We’ll recommend options during your estimate.',
  },
  {
    q: 'Do you build gates and custom designs?',
    a: 'Yes. We build custom gates and custom fence layouts, and can combine materials to fit your property.',
  },
  {
    q: 'What areas do you serve?',
    a: 'Wesley Chapel, San Antonio, Zephyrhills, Dade City and surrounding communities across Pasco, Hillsborough and Polk counties.',
  },
  {
    q: '¿Hablan español?',
    a: 'Sí. Hablamos español. Llámenos o envíenos un mensaje de texto al (656) 235-9435.',
  },
]

const galleryIds = ['01', '02', '03', '04', '05', '06', '16', '07', '08', '09', '10', '11', '12', '13', '14', '15']

export const gallery = galleryIds.map((id) => ({
  src: `/images/gallery/${id}.webp`,
  alt: 'Fence installation project by Rocket Outdoor Co',
}))
