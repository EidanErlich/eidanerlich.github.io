import type { SiteContent } from '../../content/types';

interface Props { content: SiteContent }

const ContactSection: React.FC<Props> = ({ content }) => {
  const { profile, contact } = content;
  return (
    <section id="contact" className="container-content py-16 md:py-24">
      <h2 className="text-2xl font-serif mb-6">Contact</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <ul className="space-y-2 text-black/80">
            <li>
              <a className="text-accent" href={profile.email}>Email</a>
            </li>
            {profile.social.linkedin && (
              <li><a href={profile.social.linkedin} className="text-accent">LinkedIn</a></li>
            )}
            {profile.social.github && (
              <li><a href={profile.social.github} className="text-accent">GitHub</a></li>
            )}
            {profile.social.googleScholar && (
              <li><a href={profile.social.googleScholar} className="text-accent">Google Scholar</a></li>
            )}
          </ul>
        </div>
        <div className="self-start">
          <a
            className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-accent text-white px-4 py-2 text-sm hover:opacity-90"
            href={contact.resumeUrl}
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

