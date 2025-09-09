import Navbar from './components/Navbar';
import AboutSection from './components/Sections/AboutSection';
import ExperienceSection from './components/Sections/ExperienceSection';
import TechnicalSection from './components/Sections/TechnicalSection';
import PublicationsSection from './components/Sections/PublicationsSection';
import ContactSection from './components/Sections/ContactSection';
import { content, sectionOrder } from './content/siteContent';

function App() {
  const navItems = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'technical', label: 'Technical', href: '#technical' },
    { id: 'publications', label: 'Publications', href: '#publications' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <div id="top">
      <Navbar items={navItems} />
      <main>
        {sectionOrder.map((section) => {
          switch (section) {
            case 'about':
              return <AboutSection key={section} content={content} />;
            case 'experience':
              return <ExperienceSection key={section} content={content} />;
            case 'technical':
              return <TechnicalSection key={section} content={content} />;
            case 'publications':
              return <PublicationsSection key={section} content={content} />;
            case 'contact':
              return <ContactSection key={section} content={content} />;
            default:
              return null;
          }
        })}
      </main>
      <footer className="container-content py-12 text-sm text-black/60">
        © {new Date().getFullYear()} Eidan Erlich
      </footer>
    </div>
  );
}

export default App;
