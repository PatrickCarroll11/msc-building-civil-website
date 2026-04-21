// Use Vite's import.meta.glob to dynamically import all project images
const allImages = import.meta.glob<{ default: string }>(
  '/src/assets/msc-building-civil/**/*.{jpg,jpeg,png}',
  { eager: true }
);

const folderMeta: Record<string, { title: string; category: string }> = {};

export interface Project {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  images: string[];
}

function buildProjects(): Project[] {
  const folderMap: Record<string, string[]> = {};
  for (const [path, mod] of Object.entries(allImages)) {
    const parts = path.split('/');
    const folderIndex = parts.indexOf('msc-building-civil') + 1;
    if (folderIndex > 0 && folderIndex < parts.length) {
      const folder = parts[folderIndex];
      if (!folderMap[folder]) folderMap[folder] = [];
      folderMap[folder].push(mod.default);
    }
  }
  return Object.entries(folderMap).map(([folder, images]) => {
    const meta = folderMeta[folder] || {
      title: folder.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      category: 'Work',
    };
    return { id: folder.toLowerCase(), title: meta.title, category: meta.category, coverImage: images[0], images };
  });
}

export const projects = buildProjects();
export const categories = [...new Set(projects.map((p) => p.category))];
