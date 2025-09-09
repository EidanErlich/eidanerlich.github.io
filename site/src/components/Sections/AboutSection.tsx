import type { SiteContent } from '../../content/types';

interface Props {
  content: SiteContent;
}

const AboutSection: React.FC<Props> = ({ content }) => {
  const { profile, stats, interests } = content;
  return (
    <section id="about" className="container-content py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 items-start">
        <img
          src="/profile-img.jpg"
          alt={`Headshot of ${profile.name}`}
          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border border-black/10"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-serif mb-2">{profile.name}</h1>
          <p className="text-base md:text-lg text-black/80">{profile.headline}</p>
          <p className="mt-4 max-w-3xl text-black/70">{profile.summary}</p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-black/5 bg-white/60 p-4 text-center">
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-xs uppercase tracking-wide text-black/60">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-3">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {interests.map((i) => (
                <span key={i} className="text-sm bg-white/70 border border-black/5 rounded-full px-3 py-1">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

