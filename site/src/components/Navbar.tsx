
import { useState } from 'react';

type NavItem = {
  id: string;
  label: string;
  href: string;
};

interface NavbarProps {
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="container-content flex items-center justify-between py-4" aria-label="Primary">
        <a href="#top" className="font-serif text-xl font-bold text-text">Eidan Erlich</a>
        <ul className="hidden md:flex items-center gap-6">
          {items.map((item) => (
            <li key={item.id}>
              <a className="text-sm font-medium text-accent hover:opacity-80" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 text-sm border border-black/10"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </nav>
      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="md:hidden border-t border-black/5 bg-white/95"
      >
        <ul className="container-content py-3 flex flex-col gap-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                className="block py-2 text-sm text-accent"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

