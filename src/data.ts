export interface Project {
  slug: string;
  order: number;
  title: string;
  tag: string;
  shortDescription: string;
  image: string;
  content: string;
  results: { label: string; value: string }[];
  steamUrl: string;
}

export interface Settings {
  email: string;
  linkedin: string;
  heroPortrait: string;
  aboutPhoto: string;
}

// Vite reads every file in content/projects/ at build time and bundles it in.
// Decap CMS writes/edits files in this folder — no server or database needed,
// a new build just picks up whatever is there.
const projectModules = import.meta.glob('../content/projects/*.json', { eager: true }) as Record<string, { default: Project }>;

export const projects: Project[] = Object.values(projectModules)
  .map((m) => m.default)
  .sort((a, b) => a.order - b.order);

const settingsModule = import.meta.glob('../content/settings.json', { eager: true }) as Record<string, { default: Settings }>;

const defaultSettings: Settings = {
  email: 'kgl.melisa@gmail.com',
  linkedin: 'https://www.linkedin.com/in/melisa-akgul/',
  heroPortrait: '/assets/melisa-portrait.webp',
  aboutPhoto: '/assets/melisa-about.webp'
};

const settingsValues = Object.values(settingsModule);
export const settings: Settings = settingsValues.length > 0 ? settingsValues[0].default : defaultSettings;
