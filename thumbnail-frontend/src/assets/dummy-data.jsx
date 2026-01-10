// import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

// export const featuresData = [
//     {
//         icon: <UploadIcon className="w-6 h-6" />,
//         title: 'Discovery & Planning',
//         desc: 'We understand your goals, audience and challenges to craft a clear, actionable strategy.'
//     },
//     {
//         icon: <ZapIcon className="w-6 h-6" />,
//         title: 'Design & Development',
//         desc: 'High-quality design and scalable development focused on performance and usability.'
//     },
//     {
//         icon: <VideoIcon className="w-6 h-6" />,
//         title: 'Launch & Growth',
//         desc: 'We launch, optimize and continuously improve to drive measurable business growth.'
//     }
// ];

// export const plansData = [
//     {
//         id: 'starter',
//         name: 'Starter',
//         price: '$499',
//         desc: 'Best for early-stage startups.',
//         credits: 'One-time',
//         features: [
//             'Project discovery & planning',
//             'UI/UX design',
//             'Basic website development',
//             '1 revision round',
//             'Email support'
//         ]
//     },
//     {
//         id: 'pro',
//         name: 'Growth',
//         price: '$1,499',
//         desc: 'Growing teams and businesses.',
//         credits: 'Monthly',
//         features: [
//             'Everything in Starter',
//             'Advanced UI/UX design',
//             'Custom development',
//             'Performance optimization',
//             'Priority support'
//         ],
//         popular: true
//     },
//     {
//         id: 'ultra',
//         name: 'Scale',
//         price: '$3,999',
//         desc: 'For brands ready to scale fast.',
//         credits: 'Custom',
//         features: [
//             'Everything in Growth',
//             'Dedicated project manager',
//             'Ongoing optimization',
//             'Marketing & growth support',
//             'Chat + Email support'
//         ]
//     }
// ];

// export const faqData = [
//     {
//         question: 'What services does your agency provide?',
//         answer: 'We offer end-to-end digital services including brand strategy, UI/UX design, web and app development and growth-focused marketing solutions.'
//     },
//     {
//         question: 'Do you work with startups or only large companies?',
//         answer: 'We work with startups, growing businesses and established brands. Our process is flexible and tailored to match your goals and scale.'
//     },
//     {
//         question: 'How long does a typical project take?',
//         answer: 'Project timelines vary by scope, but most projects take between 2–6 weeks. We provide a clear timeline after the discovery phase.'
//     },
//     {
//         question: 'Do you offer ongoing support after launch?',
//         answer: 'Yes. We offer maintenance, optimization and growth support packages to ensure your product continues to perform and evolve.'
//     }
// ];

// export const footerLinks = [
//     {
//         title: "Company",
//         links: [
//             { name: "Home", url: "#" },
//             { name: "Services", url: "#" },
//             { name: "Work", url: "#" },
//             { name: "Contact", url: "#" }
//         ]
//     },
//     {
//         title: "Legal",
//         links: [
//             { name: "Privacy Policy", url: "#" },
//             { name: "Terms of Service", url: "#" }
//         ]
//     },
//     {
//         title: "Connect",
//         links: [
//             { name: "Twitter", url: "#" },
//             { name: "LinkedIn", url: "#" },
//             { name: "GitHub", url: "#" }
//         ]
//     }
// ];




import {
  UploadIcon,
  VideoIcon,
  ZapIcon,
  ImageIcon,
  SparklesIcon
} from 'lucide-react'

/* =========================
   FEATURES (How it works)
========================= */
export const featuresData = [
  {
    icon: <UploadIcon className="w-6 h-6" />,
    title: 'Upload Your Idea',
    desc: 'Enter your video title or upload an image to get started with AI thumbnail creation.'
  },
  {
    icon: <SparklesIcon className="w-6 h-6" />,
    title: 'AI Generates Designs',
    desc: 'Our AI analyzes trends and creates eye-catching thumbnail designs instantly.'
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: 'Customize & Download',
    desc: 'Edit text, colors, and styles — then download a high-quality YouTube-ready thumbnail.'
  }
]

/* =========================
   PRICING PLANS
========================= */
/* =========================
   PRICING PLANS (CREDITS)
========================= */
export const plansData = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹99',
    credits: '100 credits',
    desc: 'Best for starters',
    popular: false,
    features: [
      '10 Premium AI thumbnails',
      'Access to all AI models',
      'No watermark on downloads',
      'High-quality thumbnails',
      'Commercial usage allowed',
      'Credits never expire'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '₹299',
    credits: '400 credits',
    desc: 'Best for intermediate creators',
    popular: true,
    features: [
      '40 Premium AI thumbnails',
      'Access to all AI models',
      'No watermark on downloads',
      'High-quality thumbnails',
      'Commercial usage allowed',
      'Credits never expire'
    ]
  },
  {
    id: 'ultra',
    name: 'Ultra',
    price: '₹999',
    credits: '1500 credits',
    desc: 'Best for professionals',
    popular: false,
    features: [
      '150 Premium AI thumbnails',
      'Access to all AI models',
      'No watermark on downloads',
      'High-quality thumbnails',
      'Commercial usage allowed',
      'Credits never expire'
    ]
  }
]

/* =========================
   FAQ SECTION
========================= */
export const faqData = [
  {
    question: 'What is ThumbnailAI?',
    answer:
      'ThumbnailAI is an AI-powered tool that helps creators generate high-click YouTube thumbnails in seconds.'
  },
  {
    question: 'Do I need design skills to use this?',
    answer:
      'No. ThumbnailAI is built for everyone — just enter your idea and let AI do the work.'
  },
  {
    question: 'Are thumbnails optimized for YouTube?',
    answer:
      'Yes. All thumbnails are generated in YouTube-recommended sizes and optimized for clarity and clicks.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes. You can upgrade, downgrade, or cancel your plan anytime with no hidden fees.'
  }
]

/* =========================
   FOOTER LINKS
========================= */
export const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', url: '#features' },
      { name: 'Pricing', url: '#pricing' },
      { name: 'How it Works', url: '#features' },
      { name: 'FAQs', url: '#faqs' }
    ]
  },
  {
    title: 'Creators',
    links: [
      { name: 'YouTubers', url: '#' },
      { name: 'Content Creators', url: '#' },
      { name: 'Marketers', url: '#' },
      { name: 'Agencies', url: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About', url: '#' },
      { name: 'Contact', url: '#' },
      { name: 'Privacy Policy', url: '#' },
      { name: 'Terms of Service', url: '#' }
    ]
  }
]
