
import React, { useState } from 'react';
import type { NavLink } from '../types';

const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#' },
  { 
    label: 'Institucional', 
    href: '#',
    subLinks: [
        { label: 'Nuestra Historia', href: '#' },
        { label: 'Autoridades', href: '#' },
        { label: 'Normativa', href: '#' },
    ]
  },
  { label: 'Carreras', href: '#oferta' },
  { label: 'Comunidad', href: '#', 
    subLinks: [
        { label: 'Ingresantes', href: '#' },
        { label: 'Estudiantes', href: '#' },
        { label: 'Docentes', href: '#' },
    ]
  },
  { label: 'Contacto', href: '#contacto' },
];

const Logo: React.FC = () => (
    <div className="flex items-center space-x-3">
        <div className="bg-primary p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" />
                 <path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M19.494 12c0 4.142-3.352 7.494-7.494 7.494S4.506 16.142 4.506 12 7.858 4.506 12 4.506s7.494 3.352 7.494 7.494z" />
            </svg>
        </div>
        <span className="text-xl font-bold text-primary-dark">ISFD N°26</span>
    </div>
);

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLineCap="round" strokeLineJoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  // Close mobile menu when a link is clicked for better UX.
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.subLinks ? (
                <div key={link.label} className="relative group">
                  <button className="text-neutral-800 font-medium hover:text-primary transition-colors duration-300 flex items-center gap-1 py-2">
                    {link.label}
                    <ChevronDownIcon className="transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-10 py-2">
                    {link.subLinks.map(subLink => (
                      <a key={subLink.label} href={subLink.href} className="block w-full text-left px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-100 hover:text-primary transition-colors duration-200">
                        {subLink.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={link.label} href={link.href} className="text-neutral-800 font-medium hover:text-primary transition-colors duration-300 py-2">
                  {link.label}
                </a>
              )
            ))}
             <a href="#" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                Campus Virtual
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Abrir menú" aria-expanded={isMobileMenuOpen}>
              <svg className="w-8 h-8 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel - Simpler Dropdown */}
      {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40 border-t border-neutral-200">
              <div className="p-4">
                  <nav className="flex flex-col space-y-1">
                      {navLinks.map((link) => (
                          <div key={link.label}>
                              {link.subLinks ? (
                                  <>
                                      <button
                                          onClick={() => setOpenSubMenu(openSubMenu === link.label ? null : link.label)}
                                          className="w-full flex justify-between items-center text-lg text-neutral-800 font-semibold p-3 rounded-md hover:bg-neutral-100 hover:text-primary transition-colors duration-200 text-left"
                                          aria-expanded={openSubMenu === link.label}
                                          aria-controls={`submenu-${link.label}`}
                                      >
                                          <span>{link.label}</span>
                                          <ChevronDownIcon className={`transition-transform duration-300 ${openSubMenu === link.label ? 'rotate-180' : ''}`} />
                                      </button>
                                      <div
                                          id={`submenu-${link.label}`}
                                          className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${openSubMenu === link.label ? 'max-h-96' : 'max-h-0'}`}
                                      >
                                          <div className="py-2 flex flex-col space-y-1">
                                              {link.subLinks.map(subLink => (
                                                  <a key={subLink.label} href={subLink.href} onClick={handleMobileLinkClick} className="block text-base text-neutral-600 font-medium p-3 rounded-md hover:bg-neutral-100 hover:text-primary transition-colors duration-200">
                                                      {subLink.label}
                                                  </a>
                                              ))}
                                          </div>
                                      </div>
                                  </>
                              ) : (
                                  <a href={link.href} onClick={handleMobileLinkClick} className="block text-lg text-neutral-800 font-semibold p-3 rounded-md hover:bg-neutral-100 hover:text-primary transition-colors duration-200">
                                      {link.label}
                                  </a>
                              )}
                          </div>
                      ))}
                  </nav>
                  <a href="#" className="mt-4 inline-block w-full text-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                      Campus Virtual
                  </a>
              </div>
          </div>
      )}
    </header>
  );
};

export default Header;
