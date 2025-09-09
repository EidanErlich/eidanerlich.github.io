import type { SiteContent } from '../../content/types';

interface Props { content: SiteContent }

const PublicationsSection: React.FC<Props> = ({ content }) => {
  return (
    <section id="publications" className="container-content py-16 md:py-24">
      <h2 className="text-2xl font-serif mb-6">Publications</h2>
      <ol className="space-y-4">
        {content.publications.map((pub, idx) => (
          <li key={idx} className="rounded-lg border border-black/10 bg-white/60 p-4">
            <p className="text-sm md:text-base text-black/80">{pub.citation}</p>
            {pub.links && (
              <div className="mt-2 flex gap-3 text-sm">
                {pub.links.map((l) => (
                  <a key={l.url} className="text-accent hover:opacity-80" href={l.url}>{l.label}</a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default PublicationsSection;

