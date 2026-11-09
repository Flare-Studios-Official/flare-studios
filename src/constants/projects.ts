import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'velocity',
    number: '01',
    title: 'VELOCITY',
    category: 'Motion Graphics',
    shortDescription: 'Futuristic kinetic typography and abstract speed visuals engineered for high-energy brands.',
    visualDirection: 'Futuristic kinetic typography, chromatic aberration, optical speed streaks, and dynamic grid pacing.',
    conceptDetail: 'A benchmark exploration into aerodynamic typography and optical momentum. Built around variable type axes, velocity-driven particle fields, and responsive timing curves that react to narrative momentum.',
    deliverables: ['Custom Kinetic Type Engine', '4K Broadcast Package', 'Motion Design Guidelines', 'Social Teaser Suite'],
    tools: ['After Effects', 'Cinema 4D', 'Red Giant Trapcode', 'Illustrator'],
    accentColor: '#FF5722',
    secondaryColor: '#FF9B45',
    year: '2026',
    clientType: 'Studio Demonstration Concept',
    creativeProcess: [
      { step: '01', title: 'Kinetic Grammar', description: 'Defined the acceleration curves and typographic anatomy for high-velocity readability.' },
      { step: '02', title: 'Optical R&D', description: 'Engineered custom chromatic fringing and motion blur vectors to simulate supersonic passage.' },
      { step: '03', title: 'Audio-Visual Sync', description: 'Calibrated every frame cut against transient audio stems for visceral sensory impact.' }
    ],
    metrics: [
      { label: 'Frame Target', value: '60 FPS' },
      { label: 'Render Fidelity', value: '3840 x 2160' },
      { label: 'Dynamic Range', value: '10-bit Rec.709' }
    ]
  },
  {
    id: 'nexus',
    number: '02',
    title: 'NEXUS',
    category: 'Brand Identity',
    shortDescription: 'Modern technology brand identity featuring modular graphic architecture and brutalist elegance.',
    visualDirection: 'Modern technology brand identity, bold typography, monolithic grids, and high-contrast graphic systems.',
    conceptDetail: 'A complete identity architecture for an avant-garde computing platform. Combines bespoke geometric logomarks, mathematical layout grids, and tactile physical collateral mockups.',
    deliverables: ['Complete Visual Identity', 'Modular Design System', 'Packaging Concept', 'Interactive Web Guidelines'],
    tools: ['Figma', 'Illustrator', 'Photoshop', 'Blender'],
    accentColor: '#FF7043',
    secondaryColor: '#FFA726',
    year: '2026',
    clientType: 'Studio Demonstration Concept',
    creativeProcess: [
      { step: '01', title: 'Core Archetype', description: 'Extracted fundamental topological shapes to build a timeless, future-proof mark.' },
      { step: '02', title: 'Design System', description: 'Formulated responsive typography scales and spacing mathematics across 12 viewports.' },
      { step: '03', title: 'Brand Guidelines', description: 'Codified color governance, sub-branding rules, and digital motion language.' }
    ],
    metrics: [
      { label: 'Grid Modules', value: '16-Col Swiss' },
      { label: 'Type Variants', value: '9 Weights' },
      { label: 'System Coverage', value: 'Digital & Print' }
    ]
  },
  {
    id: 'afterglow',
    number: '03',
    title: 'AFTERGLOW',
    category: 'Video Editing',
    shortDescription: 'Cinematic narrative editing featuring anamorphic flares, mood grading, and rhythmic pacing.',
    visualDirection: 'Cinematic colour grading, dramatic chiaroscuro lighting, seamless match cuts, and atmospheric soundscapes.',
    conceptDetail: 'An immersive cinematic edit exploring nocturnal metropolitan environments. Features handcrafted grain textures, custom LUT development, and surgical pacing that transforms raw footage into hypnotic poetry.',
    deliverables: ['Master Cinematic Cut', 'Custom Film LUT Pack', 'Director of Photography Moodboard', 'Sound Design Pass'],
    tools: ['Premiere Pro', 'DaVinci Resolve Studio', 'Audition', 'Dehancer Pro'],
    accentColor: '#FF5722',
    secondaryColor: '#FF3D00',
    year: '2026',
    clientType: 'Studio Demonstration Concept',
    creativeProcess: [
      { step: '01', title: 'Rhythm Mapping', description: 'Mapped the dramatic beats of the narrative onto non-linear pacing arcs.' },
      { step: '02', title: 'Color Science', description: 'Crafted dual-tone cinematic split-toning with filmic halation and soft roll-offs.' },
      { step: '03', title: 'Atmospheric Mix', description: 'Layered Foley sound design, sub-bass rumbles, and delicate sonic details.' }
    ],
    metrics: [
      { label: 'Color Space', value: 'ACEScc' },
      { label: 'Pacing Density', value: 'Variable Tempo' },
      { label: 'Audio Stems', value: '24 Tracks' }
    ]
  },
  {
    id: 'pixel-rush',
    number: '04',
    title: 'PIXEL RUSH',
    category: 'Thumbnail Design',
    shortDescription: 'Hyper-saturated gaming and tech thumbnails with pinpoint focal hierarchy and click psychology.',
    visualDirection: 'Bold gaming-inspired composition, dramatic rim lighting, powerful visual hierarchy, and 3D depth separation.',
    conceptDetail: 'Engineering maximum viewer interest through scientific composition. Utilizes three-point lighting cutouts, custom 3D element rendering, expressive eye-line direction, and psychological color framing that excels on mobile feeds.',
    deliverables: ['High-CTR Master Templates', 'Subject Isolation Pipeline', 'Custom 3D Prop Library', 'A/B Testing Variants'],
    tools: ['Photoshop', 'Blender', 'Topaz Gigapixel', 'Lightroom'],
    accentColor: '#FF9100',
    secondaryColor: '#FF5722',
    year: '2026',
    clientType: 'Studio Demonstration Concept',
    creativeProcess: [
      { step: '01', title: 'Focal Hierarchy', description: 'Tested 1-second eye gaze maps to guarantee the subject commands immediate focus.' },
      { step: '02', title: 'Lighting & Depth', description: 'Painted custom rim glows and atmospheric smoke to pop subjects from dense backgrounds.' },
      { step: '03', title: 'Mobile Stress Test', description: 'Previewed at 120px scale on smartphone feeds to ensure zero readability loss.' }
    ],
    metrics: [
      { label: 'View Retention Focus', value: 'Top 1%' },
      { label: 'Resolution', value: '2560 x 1440' },
      { label: 'Lighting Passes', value: '7 Individual' }
    ]
  },
  {
    id: 'orbit',
    number: '05',
    title: 'ORBIT',
    category: 'Digital Experience',
    shortDescription: 'Futuristic interactive 3D web experience with real-time physics and tactile fluid shaders.',
    visualDirection: 'Futuristic interactive visual storytelling, Liquid Glass interface elements, and camera parallax.',
    conceptDetail: 'A browser-based spatial journey that blurs the line between website and interactive installation. Features smooth physics, custom GLSL shaders, and responsive sound feedback that reacts to user curiosity.',
    deliverables: ['WebGL Experience Architecture', 'Interactive 3D Assets', 'Sound Engine Integration', 'Mobile Optimized Fallback'],
    tools: ['Three.js', 'React', 'GLSL Shaders', 'Tailwind CSS', 'Framer Motion'],
    accentColor: '#FF6E40',
    secondaryColor: '#FFAB91',
    year: '2026',
    clientType: 'Studio Demonstration Concept',
    creativeProcess: [
      { step: '01', title: 'Shader Prototyping', description: 'Authored custom fragment shaders simulating refractive glass and thermal refraction.' },
      { step: '02', title: 'Physics & Motion', description: 'Tuned inertia and spring constants for a tactile, weight-bearing digital feel.' },
      { step: '03', title: 'Optimization Pass', description: 'Achieved locked 60 FPS across standard mobile GPUs via draw call batching.' }
    ],
    metrics: [
      { label: 'Target Frame Rate', value: '60 FPS' },
      { label: 'Shader Modules', value: 'Custom GLSL' },
      { label: 'Bundle Footprint', value: 'Zero Bloat' }
    ]
  },
  {
    id: 'frequency',
    number: '06',
    title: 'FREQUENCY',
    category: 'Promotional Design',
    shortDescription: 'High-energy campaign rollouts, digital billboards, and motion posters that command physical attention.',
    visualDirection: 'High-energy promotional campaign, tactile mixed media, distorted scanning typography, and neon glows.',
    conceptDetail: 'A cross-channel promotional takeover designed to launch a global music festival and cultural summit. Unifies kinetic digital screens, large-format wheatpaste posters, and dynamic social teasers into an unmistakable visual storm.',
    deliverables: ['Out-Of-Home Digital Billboards', 'Kinetic Social Motion Kit', 'Print Poster Series', 'Merchandise Graphics'],
    tools: ['After Effects', 'Photoshop', 'Illustrator', 'TouchDesigner'],
    accentColor: '#FF5722',
    secondaryColor: '#FF9B45',
    year: '2026',
    clientType: 'Studio Demonstration Concept',
    creativeProcess: [
      { step: '01', title: 'Visual Disruption', description: 'Engineered high-frequency analog distortions and scanner dragging for organic grit.' },
      { step: '02', title: 'Scale Adaptability', description: 'Built an asset system that scales from Apple Watch widgets to Times Square screens.' },
      { step: '03', title: 'Motion Rhythm', description: 'Constructed synchronized 15-second loops calibrated for maximum replay value.' }
    ],
    metrics: [
      { label: 'Format Adaptations', value: '14 Ratios' },
      { label: 'Display Resolution', value: 'Up to 8K' },
      { label: 'Audio Reactive', value: 'BPM Matched' }
    ]
  }
];
