import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'What I Do', href: '#what-i-do' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>      <div className="navbar-inner">
        <a
          href="#hero"
          className="navbar-brand"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); handleNavClick('#hero'); }}
        >
          Blake Stewart
        </a>

        {/* Desktop nav */}
        <nav className="navbar-links" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="navbar-hamburger"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o: boolean) => !o)}
        >
          <span className={`hamburger-line${menuOpen ? ' open' : ''}`} />
          <span className={`hamburger-line${menuOpen ? ' open' : ''}`} />
          <span className={`hamburger-line${menuOpen ? ' open' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="navbar-mobile-menu" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-mobile-link"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
