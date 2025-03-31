// src/data/websiteData.js

/**
 * Website data for WebCraftPro portfolio site
 * Contains all data used across the site including projects,
 * testimonials, services, and development process
 */

// Services data with icons to be imported in components
export const servicesData = [
  { 
    id: 1,
    icon: 'WebIcon', 
    title: 'Web Design', 
    description: 'Custom designs that align with your brand and engage your visitors.'
  },
  { 
    id: 2,
    icon: 'CodeIcon', 
    title: 'Web Development', 
    description: 'High-performing websites built with modern technologies like React and Next.js.'
  },
  { 
    id: 3,
    icon: 'DevicesIcon', 
    title: 'Responsive Design', 
    description: 'Websites that look and function perfectly on any device or screen size.'
  },
  { 
    id: 4,
    icon: 'SpeedIcon', 
    title: 'Performance Optimization', 
    description: 'Fast-loading websites optimized for search engines and conversions.'
  }
];

// Featured projects portfolio data
export const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with secure payment processing',
    image: '/api/placeholder/400/300',
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Corporate Website',
    description: 'Responsive corporate website with custom animations and content management',
    image: '/api/placeholder/400/300',
    tech: ['React', 'MUI', 'Framer Motion', 'Strapi CMS']
  },
  {
    id: 3,
    title: 'Real Estate Application',
    description: 'Interactive property listing and search application with map integration',
    image: '/api/placeholder/400/300',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google Maps API']
  },
];

// Client testimonials data
export const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    comment: 'Working with this developer was a game-changer for our business. Our new website has increased conversions by 40%!',
    avatar: '/api/placeholder/60/60'
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Innovative Solutions',
    comment: 'Exceptional work quality and attention to detail. The website exceeded our expectations in both design and functionality.',
    avatar: '/api/placeholder/60/60'
  },
  {
    id: 3,
    name: 'Emma Roberts',
    company: 'GreenGrow Startup',
    comment: 'Not only is the website beautiful, but it loads incredibly fast and works perfectly on all devices. Highly recommended!',
    avatar: '/api/placeholder/60/60'
  },
];

// Development process steps
export const processStepsData = [
  { 
    step: 1, 
    title: 'Discovery', 
    description: 'Understanding your business goals, target audience, and requirements.'
  },
  { 
    step: 2, 
    title: 'Planning', 
    description: 'Creating wireframes, sitemaps, and project roadmap.'
  },
  { 
    step: 3, 
    title: 'Design', 
    description: 'Crafting beautiful UI designs that align with your brand identity.'
  },
  { 
    step: 4, 
    title: 'Development', 
    description: 'Building your website using modern technologies and best practices.'
  },
  { 
    step: 5, 
    title: 'Testing', 
    description: 'Rigorous quality assurance across devices and browsers.'
  },
  { 
    step: 6, 
    title: 'Launch', 
    description: 'Deploying your website and providing training on content management.'
  }
];

// Hero section data
export const heroData = {
  title: "Crafting Digital Experiences",
  subtitle: "I build fast, responsive, and beautiful websites that help businesses grow. Using modern technologies for outstanding digital experiences."
};

// Call to action section data
export const ctaData = {
  title: "Ready to Start Your Project?",
  subtitle: "Let's work together to bring your vision to life. Get in touch for a free consultation."
};
