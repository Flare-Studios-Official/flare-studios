import type { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    tagline: 'Deconstructing intent to unearth the core spark.',
    description: 'We immerse ourselves in your vision, dissecting audience psychology, strategic goals, and narrative emotional targets.',
    points: [
      'Deep creative briefing and sonic/visual mood boarding',
      'Target audience resonance and demographic analysis',
      'Strategic timeline and deliverable scoping'
    ]
  },
  {
    number: '02',
    title: 'EXPLORE',
    tagline: 'Divergent visual experimentation without boundaries.',
    description: 'We generate bold visual treatments, typography styles, color sciences, and kinetic motion prototypes.',
    points: [
      'Rapid aesthetic iteration & stylistic look-dev',
      'Motion animatics & editorial rhythm testing',
      'Interactive prototype validations & lighting tests'
    ]
  },
  {
    number: '03',
    title: 'CREATE',
    tagline: 'Translating ambition into high-fidelity reality.',
    description: 'The forge of production. Precision timeline cutting, 3D element rendering, surgical sound design, and code craftsmanship.',
    points: [
      'Frame-by-frame animation & surgical video cuts',
      'Bespoke color grading & volumetric lighting passes',
      'Custom sound engineering and sensory sync'
    ]
  },
  {
    number: '04',
    title: 'DELIVER',
    tagline: 'Polished perfection engineered for real-world impact.',
    description: 'We stress-test across every format, screen size, and medium, delivering master assets with complete rollout documentation.',
    points: [
      'Multi-format optimization (4K/8K, Vertical, WebGL)',
      'Organized project archives and design tokens',
      'Post-launch rollout support and asset governance'
    ]
  }
];
