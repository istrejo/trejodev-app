export type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experienceItems: ExperienceItem[] = [
  {
    company: 'Pendie',
    role: 'Frontend Developer / Personal Product',
    dates: '2025 - Present',
    location: 'Remote',
    summary: 'Designing and building a learning-focused product with modern React patterns, typed data flow, and a maintainable UI system.',
    highlights: ['Shaped product flows from idea to working interface.', 'Built reusable UI foundations for fast iteration.', 'Used AI developer tools as part of a disciplined engineering workflow.'],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Testing', 'AI DevTools'],
  },
  {
    company: 'Rebel Quest Interactive',
    role: 'Frontend Developer',
    dates: '2024 - 2025',
    location: 'Remote',
    summary: 'Built product interfaces with React and TypeScript, focusing on component quality, state flow, and collaboration across a distributed team.',
    highlights: ['Delivered responsive feature interfaces.', 'Improved maintainability through typed component contracts.', 'Collaborated with product and engineering stakeholders.'],
    stack: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
  },
  {
    company: 'Digitalmente Studio',
    role: 'Frontend Developer',
    dates: '2023 - 2024',
    location: 'Remote',
    summary: 'Created Angular and Ionic interfaces for web and mobile use cases with a strong focus on reliable delivery and clean UI structure.',
    highlights: ['Implemented mobile-ready flows with Ionic and Capacitor.', 'Worked with Angular state and feature modules.', 'Supported interface consistency across client projects.'],
    stack: ['Angular', 'Ionic', 'Capacitor', 'NgRx', 'PrimeNG'],
  },
  {
    company: 'Beartrack',
    role: 'Frontend Developer',
    dates: '2022 - 2023',
    location: 'Remote',
    summary: 'Contributed frontend features for web applications, balancing implementation speed with readable, maintainable code.',
    highlights: ['Built reusable frontend views.', 'Worked with API-driven UI states.', 'Improved responsive behavior in existing screens.'],
    stack: ['Angular', 'TypeScript', 'PrimeFlex', 'Firebase'],
  },
  {
    company: 'CRSoporte',
    role: 'Frontend Developer',
    dates: '2021 - 2022',
    location: 'Remote',
    summary: 'Developed business interfaces and operational tools, translating requirements into usable application screens.',
    highlights: ['Created structured views for internal workflows.', 'Integrated frontend screens with backend services.', 'Maintained UI consistency across application areas.'],
    stack: ['Angular', 'TypeScript', 'Firebase', 'Google Cloud'],
  },
  {
    company: 'Repsa Logistic',
    role: 'Frontend Developer',
    dates: '2020 - 2021',
    location: 'Remote',
    summary: 'Supported logistics-focused web interfaces with practical frontend implementation and iterative product improvements.',
    highlights: ['Built data-focused screens for operational use.', 'Improved clarity in user flows.', 'Supported ongoing frontend maintenance.'],
    stack: ['Angular', 'TypeScript', 'CSS', 'REST APIs'],
  },
];
