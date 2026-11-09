import type { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'video-editing',
    number: '01',
    title: 'VIDEO EDITING',
    tagline: 'Cinematic storytelling with surgical rhythm.',
    description: 'Engaging, cinematic, and dynamic video editing that transforms raw footage into compelling visual stories.',
    extendedDescription: 'We craft high-retention video narratives for ambitious creators, production houses, and visionary brands. From surgical match cuts to Hollywood-caliber color science and multidimensional sound design, every frame is sculpted to hold human gaze and evoke visceral emotion.',
    deliverables: [
      'Narrative & Commercial Long-form Editing',
      'Short-form Viral Editing (Reels, Shorts, TikTok)',
      'ACES / DaVinci Resolve Color Grading',
      'Full Multi-Track Foley & Sound Design',
      'Dynamic Pacing & Retention Architecture'
    ],
    software: ['DaVinci Resolve Studio', 'Adobe Premiere Pro', 'Adobe Audition', 'Dehancer Pro'],
    visualizerType: 'waveform'
  },
  {
    id: 'motion-graphics',
    number: '02',
    title: 'MOTION GRAPHICS',
    tagline: 'Expressive movement that gives ideas weight and soul.',
    description: 'Expressive motion design, kinetic typography, transitions, and visual effects.',
    extendedDescription: 'Motion is not an ornament; it is the language of modern digital communication. We engineer bespoke kinetic typography systems, logo reveals, 3D abstract simulations, and interface motion graphics that turn abstract concepts into tangible visual momentum.',
    deliverables: [
      'Kinetic Typography & Title Sequences',
      '3D Logo Identity Reveals & Morphisms',
      'Broadcast & YouTube Motion Packages',
      'Abstract 3D Visual Effects & Simulations',
      'Lottie & Web-Ready Vector Animations'
    ],
    software: ['After Effects', 'Cinema 4D', 'Blender', 'Red Giant Universe'],
    visualizerType: 'kinetic'
  },
  {
    id: 'thumbnail-design',
    number: '03',
    title: 'THUMBNAIL DESIGN',
    tagline: 'The psychology of the first 50 milliseconds.',
    description: 'Attention-grabbing YouTube thumbnail designs with strong composition, visual hierarchy, and creative storytelling.',
    extendedDescription: 'A thumbnail is the billboard of digital culture. We merge artistic composition with behavioral click psychology: dramatic three-point rim lighting, 3D subject displacement, emotive facial grading, and uncluttered storytelling designed to dominate crowded algorithm feeds.',
    deliverables: [
      'Custom 3D / 2D High-CTR Concept Art',
      'Photorealistic Subject Isolation & Airbrushing',
      'Cinematic Rim Lighting & Volumetric Glows',
      'A/B Concept Testing Variations',
      'Mobile Feed Contrast Optimization'
    ],
    software: ['Adobe Photoshop', 'Blender 3D', 'Lightroom Classic', 'Topaz Photo AI'],
    visualizerType: 'grid'
  },
  {
    id: 'graphic-design',
    number: '04',
    title: 'GRAPHIC DESIGN',
    tagline: 'Bold visual communication built to stand apart.',
    description: 'Modern visual communication, social media graphics, promotional creatives, and brand assets.',
    extendedDescription: 'From high-impact marketing collateral to complete typographic identity guidelines, our graphic design work balances experimental brutalism with Swiss layout discipline. We create visual assets that demand attention both in physical print and across dense digital ecosystems.',
    deliverables: [
      'Comprehensive Brand Identity Systems',
      'Editorial Print & Digital Lookbooks',
      'Key Visual Campaign Assets',
      'Custom Typographic Lockups',
      'Packaging & Merch Graphics'
    ],
    software: ['Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Photoshop'],
    visualizerType: 'geometry'
  },
  {
    id: 'web-design-dev',
    number: '05',
    title: 'WEB DESIGN & DEVELOPMENT',
    tagline: 'Digital experiences that blur the boundary between art and code.',
    description: 'Modern, responsive digital experiences combining beautiful interfaces, creative interactions, and smooth animations.',
    extendedDescription: 'We architect next-generation digital flagship websites. Marrying Apple-inspired Liquid Glass aesthetics, responsive micro-interactions, silky smooth 60 FPS scrolling, and modern web frameworks into interactive digital art pieces that elevate brands into an unmatched tier.',
    deliverables: [
      'Custom Spatial UI / UX Design in Figma',
      'Production React & TypeScript Engineering',
      'Tailwind CSS & Liquid Glass Styling',
      'GSAP / Framer Motion Choreography',
      'Interactive WebGL & Canvas Simulations'
    ],
    software: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    visualizerType: 'code'
  }
];
