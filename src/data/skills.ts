export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', items: ['React', 'Next.js', 'Angular', 'Ionic / Capacitor', 'TypeScript'] },
  { title: 'State Management', items: ['NgRx', 'SignalStore', 'Redux', 'Signals'] },
  { title: 'UI / Styling', items: ['Tailwind CSS', 'PrimeNG', 'PrimeFlex', 'Storybook', 'Responsive Design'] },
  { title: 'Architecture', items: ['Micro Frontends', 'Module Federation', 'Standalone Components', 'Feature-based architecture', 'Performance optimization'] },
  { title: 'Testing', items: ['Karma', 'Jasmine', 'Jest', 'React Testing Library'] },
  { title: 'Cloud / Backend as a Service', items: ['Firebase', 'Supabase', 'Google Cloud Services'] },
  { title: 'Tools', items: ['Git', 'Docker', 'Jira', 'Scrum', 'Claude Code', 'Cursor', 'Windsurf', 'OpenAI Codex'] },
];
