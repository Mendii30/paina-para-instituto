
import React, { useState } from 'react';
import type { NavLink } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import LoginModal from './LoginModal';

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
  { label: 'Galería', href: '#galeria' },
  { label: 'Comunidad', href: '#', 
    subLinks: [
        { label: 'Ingresantes', href: '#' },
        { label: 'Estudiantes', href: '#' },
        { label: 'Docentes', href: '#' },
    ]
  },
  { label: 'Contacto', href: '#contacto' },
];

const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);


const Logo: React.FC = () => (
    <a href="#" className="flex items-center space-x-3" aria-label="Página de inicio de ISFD&T N°26">
        <img src="https://i.imgur.com/V3tBXSv.png" alt="Escudo ISFD&T N°26" className="h-12 w-auto object-contain" />
        <div>
            <span className="block text-2xl font-extrabold text-light-theme-text dark:text-light-text-heading tracking-tight">ISFD&T N°26</span>
            <span className="hidden md:block text-xs font-bold text-light-theme-text-secondary dark:text-light-text-secondary">Instituto Superior de Formación Docente & Técnica</span>
        </div>
    </a>
);

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLineCap="round" strokeLineJoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const ThemeToggleButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-light-theme-text-secondary dark:text-light-text-secondary hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        >
            {theme === 'dark' ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </button>
    );
};

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  }
  
  const openLoginModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <header className="bg-light-theme-bg/80 dark:bg-dark-blue-900/80 backdrop-blur-sm shadow-sm z-50 sticky top-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Logo />
            
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                link.subLinks ? (
                  <div key={link.label} className="relative group">
                    <button className="text-light-theme-text dark:text-light-text font-medium uppercase text-sm tracking-wider hover:text-light-theme-text/80 dark:hover:text-white transition-colors duration-300 flex items-center gap-1 py-2">
                      {link.label}
                      <ChevronDownIcon className="transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-light-theme-card dark:bg-dark-blue-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-10 py-2 border border-light-theme-border dark:border-dark-blue-700">
                      {link.subLinks.map(subLink => (
                        <a key={subLink.label} href={subLink.href} className="block w-full text-left px-4 py-2 text-sm text-light-theme-text dark:text-light-text hover:bg-light-theme-bg dark:hover:bg-dark-blue-700 hover:text-light-theme-text dark:hover:text-white transition-colors duration-200">
                          {subLink.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a key={link.label} href={link.href} className="text-light-theme-text dark:text-light-text font-medium uppercase text-sm tracking-wider hover:text-light-theme-text/80 dark:hover:text-white transition-colors duration-300 py-2">
                    {link.label}
                  </a>
                )
              ))}
              <ThemeToggleButton />
               <button onClick={openLoginModal} className="border border-accent text-accent font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-accent hover:text-white text-sm uppercase tracking-wider">
                  Campus Virtual
              </button>
            </nav>
            
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggleButton />
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Abrir menú" aria-expanded={isMobileMenuOpen}>
                <svg className="w-8 h-8 text-light-theme-text dark:text-light-text-heading" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLineCap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-light-theme-bg dark:bg-dark-blue-900 shadow-lg z-40 border-t border-light-theme-border dark:border-dark-blue-700">
                <div className="p-4">
                    <nav className="flex flex-col space-y-1">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                                {link.subLinks ? (
                                    <>
                                        <button
                                            onClick={() => setOpenSubMenu(openSubMenu === link.label ? null : link.label)}
                                            className="w-full flex justify-between items-center text-lg text-light-theme-text dark:text-light-text font-semibold p-3 rounded-md hover:bg-light-theme-bg-alt dark:hover:bg-dark-blue-800 hover:text-light-theme-text dark:hover:text-white transition-colors duration-200 text-left"
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
                                                    <a key={subLink.label} href={subLink.href} onClick={handleMobileLinkClick} className="block text-base text-light-theme-text-secondary dark:text-light-text-secondary font-medium p-3 rounded-md hover:bg-light-theme-bg-alt dark:hover:bg-dark-blue-800 hover:text-light-theme-text dark:hover:text-white transition-colors duration-200">
                                                        {subLink.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <a href={link.href} onClick={handleMobileLinkClick} className="block text-lg text-light-theme-text dark:text-light-text font-semibold p-3 rounded-md hover:bg-light-theme-bg-alt dark:hover:bg-dark-blue-800 hover:text-light-theme-text dark:hover:text-white transition-colors duration-200">
                                        {link.label}
                                    </a>
                                )}
                            </div>
                        ))}
                    </nav>
                    <button onClick={(e) => { openLoginModal(e); handleMobileLinkClick(); }} className="mt-4 w-full text-center border border-accent text-accent font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-accent hover:text-white">
                        Campus Virtual
                    </button>
                </div>
            </div>
        )}
      </header>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};

export default Header;
