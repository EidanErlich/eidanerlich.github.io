import type { ProjectItem } from '../content/types';

interface ProjectGridProps {
  items: ProjectItem[];
}

const ProjectGrid = ({ items }: ProjectGridProps) => (
  <ul className="grid gap-4 sm:grid-cols-2">
    {items.map((pr) => (
      <li key={pr.name} className="rounded-lg border border-black/10 bg-white/60 p-4">
        <div className="font-medium">{pr.name}</div>
        <div className="text-sm text-black/70">{pr.description}</div>
      </li>
    ))}
  </ul>
);

export default ProjectGrid;

