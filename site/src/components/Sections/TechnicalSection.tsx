import type { SiteContent } from '../../content/types';
import ProjectGrid from '../../components/ProjectGrid';

interface Props { content: SiteContent }

const TechnicalSection: React.FC<Props> = ({ content }) => {
  const { proficiencies, projects, research } = content.technical;
  return (
    <section id="technical" className="container-content py-16 md:py-24">
      <h2 className="text-2xl font-serif mb-6">Technical</h2>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-semibold mb-3">Proficiencies</h3>
          <div className="flex flex-wrap gap-2">
            {proficiencies.map((p) => (
              <span key={p} className="text-sm bg-white/70 border border-black/5 rounded-full px-3 py-1">{p}</span>
            ))}
          </div>
          <h3 className="font-semibold mt-6 mb-3">Projects</h3>
          <ProjectGrid items={projects} />
        </div>
        <div>
          <h3 className="font-semibold mb-3">Research</h3>
          <ProjectGrid items={research} />
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;

