import type { SiteContent } from '../../content/types';
import Timeline from '../../components/Timeline';

interface Props { content: SiteContent }

const ExperienceSection: React.FC<Props> = ({ content }) => {
  return (
    <section id="experience" className="container-content py-16 md:py-24">
      <h2 className="text-2xl font-serif mb-8">Experience</h2>
      <Timeline items={content.experiences} />
    </section>
  );
};

export default ExperienceSection;

