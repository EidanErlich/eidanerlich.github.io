import type { SiteContent, SectionOrder } from './types';

export const sectionOrder: SectionOrder = [
  'about',
  'experience',
  'technical',
  'publications',
  'contact',
];

export const content: SiteContent = {
  profile: {
    name: 'Eidan Erlich',
    headline: 'Engineer • Researcher • Quant Developer',
    summary:
      'Published robotics researcher and R&D lead with experience across computer graphics, vision, SLAM, and ML. Leads an autonomous Indy car research team. Background in Mechatronics Engineering at University of Waterloo with minors in AI and Statistics.',
    email: 'mailto:eidanerlich@uwaterloo.ca',
    location: 'Waterloo, ON',
    social: {
      linkedin: 'https://www.linkedin.com/in/eidanerlich',
      github: 'https://github.com/eidanerlich',
      googleScholar: 'https://scholar.google.com',
    },
  },
  stats: [
    { label: 'GPA', value: '3.75/4.0' },
    { label: 'Publications', value: 3 },
    { label: 'Internships', value: 3 },
  ],
  interests: [
    'Computer Graphics',
    'SLAM',
    'Autonomous Robotics',
    'Machine Learning',
    'Computer Vision',
    'Motorsports',
    'Speech Recognition',
    'Natural Language Processing',
    'Large Language Models',
  ],
  experiences: [
    {
      title: 'Quantitative Developer Intern',
      organization: 'RBC Capital Markets',
      start: '2024',
      end: 'Present',
      highlights: [
        'Built tooling for systematic strategies and risk analysis',
      ],
      tags: ['Finance', 'Python', 'C++'],
    },
    {
      title: 'Researcher/Engineer',
      organization: 'Symphonic Labs',
      start: '2023',
      end: '2024',
      highlights: [
        'Developed ML systems and data pipelines',
      ],
      tags: ['ML', 'Data'],
    },
    {
      title: 'Research Engineer Intern',
      organization: 'Airbus',
      start: '2023',
      end: '2023',
      highlights: [
        'Computer vision and robotics research contributions',
      ],
      tags: ['CV', 'Robotics'],
    },
    {
      title: 'TDK / R&D Intern',
      organization: 'MARZ',
      start: '2022',
      end: '2022',
      highlights: ['VFX pipeline and graphics tooling'],
      tags: ['Graphics', 'C++'],
    },
    {
      title: 'Research Assistant',
      organization: 'CAMJ',
      start: '2021',
      end: '2022',
      highlights: ['CIRP papers; welding project'],
      tags: ['Research'],
    },
  ],
  technical: {
    proficiencies: [
      'C++',
      'Python',
      'CUDA',
      'PyTorch',
      'OpenCV',
      'SLAM',
      'React',
      'Tailwind',
    ],
    projects: [
      {
        name: 'Jane Street GPU Hackathon',
        description: 'High-performance GPU optimization challenges.',
        tags: ['CUDA', 'Optimization'],
      },
      {
        name: 'Autonomous Racing',
        description: 'MIT-PITT-RW racing team at >250 kph on global tracks.',
        tags: ['Control', 'Robotics'],
      },
    ],
    research: [
      {
        name: 'BETTY Dataset',
        description: 'Dataset and benchmarks for welding and robotics tasks.',
        tags: ['Dataset', 'Robotics'],
      },
    ],
  },
  publications: [
    {
      citation:
        'Author, E. et al. "Title." CIRP, 2023. ',
      links: [{ label: 'PDF', url: '#' }],
    },
  ],
  contact: {
    resumeUrl: '/Eidan_Resume.pdf',
  },
};

