export const profile = {
  name: 'Nishant Bhandari',
  title: 'Software Engineer & Cybersecurity Bug Hunter',
  email: 'bhandarinishant32@gmail.com',
//   phone: '+916239689030',
  github: 'https://github.com/Vigilante120',
  linkedin: 'https://www.linkedin.com/in/nishant-bhandari-33605b201/',
  instagram: 'nishantintech',
  summary:
    'Software Engineer with hands on experience in full stack development and automated data extraction. Proficient in architecting robust backends with Python, Django, and FastAPI, while implementing modern AI solutions to solve real world problems. A proactive problem solver with a track record of deploying end to end projects, from web scraping systems to spiritual and client focused web platforms.',
  skills_languages: 'Python, React, HTML, CSS, JavaScript, SQL',
  skills_frameworks: 'Django, Flask, Bootstrap, FastAPI',
  skills_tools: 'Git, GitHub, VS Code, Linux, Docker',
  experiences: [
    {
      id: 1,
      company: 'Vanna Softleo AI',
      role: 'Software Engineer (Full-Time)',
      start_date: 'August 2025',
      end_date: 'Present',
      description:
        'Engineered a conversational IVR system using Deepgram for real time speech-to-text and Twilio for programmable voice, automating customer outreach.\nOptimized a critical data generation script slashing execution time from 15s to 0.01s (99.9% improvement).\nDeveloped a high-throughput Amazon web scraper processing 2,000+ products per minute.\nImplemented CI/CD pipelines using Azure DevOps for automated deployment to IoT devices.',
    },
  ],
  education: [
    {
      id: 1,
      institution: 'Panjab University, Chandigarh',
      degree: 'Post Graduate Diploma in Computer Applications (PGDCA)',
      year: '2024-2025',
      grade: '85%',
    },
    {
      id: 2,
      institution: 'Panjab University, Chandigarh',
      degree: 'Bachelor in Information Technology (BA-IT)',
      year: '2020-2023',
      grade: '80%',
    },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'E-Naam Jaap - Spiritual Companion Web App',
    description:
      'A full-featured spiritual companion web app with mala counting, chalisa reader, verse bookmarks, analytics dashboard, and Google OAuth authentication. Built with Django, Tailwind CSS, JavaScript, and PostgreSQL.',
    tech_stack: 'Django, Tailwind CSS, JavaScript, PostgreSQL, Vercel',
    live_url: 'https://naam-jap-mu.vercel.app/',
    github_url: 'https://github.com/Vigilante120/naam_jap',
    highlights_list: [
      'Django backend with mala counts, chalisa reading progress, and verse bookmarks',
      'Interactive chalisa reader with verse highlighting, auto scroll, dark mode',
      'Google OAuth via Django Allauth for secure authentication',
      'Spiritual analytics dashboard with calendar-style activity visualization',
      'Deployed to Vercel with proper static files handling',
    ],
  },
  {
    id: 2,
    title: 'The Cosmic Aura',
    description:
      'An immersive, client-centric web platform tailored for spiritual services. Engineered from the ground up, managing both the frontend visual identity and robust backend deployment to deliver a seamless user experience.',
    tech_stack: 'Web Development, Modern UI/UX, [HTML CSS JS]',
    live_url: 'https://thecosmicaura.in/',
    highlights_list: [
      'Client-focused spiritual web platform',
      'Modern cosmic-themed design and UI/UX',
      'Fully responsive and production ready',
      'Landing Page for People seeking guidance on their fate'
    ],
  },
  {
    id: 3,
    title: 'AI Helpdesk - Support Automation Platform',
    description:
      'Enterprise grade AI powered helpdesk system with automated ticket triage, classification, and response generation. Full stack application with React 18, Node.js/Express, MongoDB, Redis, and Python FastAPI microservices.',
    tech_stack: 'React 18, Node.js, Express, MongoDB, Redis, FastAPI, OpenAI API',
    github_url: 'https://github.com/Vigilante120/ai-helpdesk',
    highlights_list: [
      'Automated ticket triage and classification with 85%+ confidence scoring',
      'Full-stack: React 18, Node.js/Express, MongoDB, Redis, FastAPI',
      'OpenAI API integration for response generation and knowledge base retrieval',
      'Microservices architecture for scalability',
    ],
  },

  {
    id: 4,
    title: 'Punjabi Jewellery Website',
    description:
      'Built and managed an ecommerce storefront for authentic Punjabi jewellery with a clean browsing experience and conversion focused product pages.',
    tech_stack: 'Shopify, HTML, CSS, JavaScript, Razorpay',
    live_url: 'https://punjabijewellery.in/',
    highlights_list: [
      'Developed and customized a Shopify-based jewellery storefront',
      'Implemented secure online checkout and payment flow with Razorpay',
      'Optimized product imagery and page structure for faster browsing',
      'Improved catalog navigation and product discovery for better conversions',
    ],
  },
  {
    id: 99,
    title: 'More Projects Coming Soon...',
    description: 'Exciting new projects are in the works. Stay tuned!',
    tech_stack: 'TBD',
    is_coming_soon: true,
  },
];