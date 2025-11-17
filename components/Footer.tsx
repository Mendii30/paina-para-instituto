import React from 'react';

// Social Media Icons - NEW COLORFUL VERSIONS
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path fill="#25D366" d="M19.6 4.4A10.2 10.2 0 0012 2a10 10 0 00-10 10c0 2 .6 3.8 1.6 5.4l-1.6 5.6 5.8-1.5c1.6 1 3.4 1.5 5.2 1.5h.1a10 10 0 0010-10c0-5.5-4.5-10-10-10z"/>
        <path fill="#FFF" d="M16.5 13.9c-.2-.1-1.2-.6-1.4-.7s-.4-.1-.5.1c-.2.2-.5.7-.7.8s-.3.2-.5.1c-.2-.1-1-.4-1.9-1.2s-1.4-1.7-1.5-2c-.1-.2 0-.4.1-.5s.2-.2.4-.4.1-.2.2-.4.1-.3 0-.4c-.1-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3s-.8.8-.8 2c0 1.2.8 2.3 1 2.5s1.6 2.5 4 3.5c.6.2 1 .4 1.3.5.6.2 1.1.1 1.5-.1s1.2-.5 1.4-1c.2-.5.2-1 .1-1.1s-.2-.2-.4-.3z"/>
    </svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
        <defs>
            <radialGradient id="insta-gradient" cx="0.3" cy="1" r="1">
                <stop offset="0" stopColor="#FFD977" />
                <stop offset="0.25" stopColor="#F58529" />
                <stop offset="0.5" stopColor="#D92E7F" />
                <stop offset="1" stopColor="#9B36B7" />
            </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#insta-gradient)" />
        <path fill="#fff" d="M12 7.2c-2.65 0-4.8 2.15-4.8 4.8s2.15 4.8 4.8 4.8 4.8-2.15 4.8-4.8-2.15-4.8-4.8-4.8zm0 7.9c-1.71 0-3.1-1.39-3.1-3.1s1.39-3.1 3.1-3.1 3.1 1.39 3.1 3.1-1.39 3.1-3.1 3.1z" />
        <circle cx="16.9" cy="7.1" r="1.1" fill="#fff" />
    </svg>
);
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="#1877F2" d="M12,2C6.477,2,2,6.477,2,12c0,4.991,3.657,9.128,8.438,9.878V14.89h-2.54V12h2.54V9.797 c0-2.506,1.492-3.89,3.777-3.89c1.094,0,2.238,0.195,2.238,0.195v2.46h-1.26c-1.24,0-1.628,0.772-1.628,1.562V12h2.773l-0.443,2.89 h-2.33V21.878C18.343,21.128,22,16.991,22,12C22,6.477,17.523,2,12,2z" />
    </svg>
);
const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path fill="#FF0000" d="M21.582,6.186c-0.23-0.835-0.897-1.502-1.732-1.732C18.25,4,12,4,12,4S5.75,4,4.15,4.454 c-0.835,0.23-1.502,0.897-1.732,1.732C2,7.75,2,12,2,12s0,4.25,0.418,5.814c0.23,0.835,0.897,1.502,1.732,1.732 C5.75,20,12,20,12,20s6.25,0,7.85-0.454c0.835-0.23,1.502,0.897,1.732-1.732C22,16.25,22,12,22,12S22,7.75,21.582,6.186z"/>
        <path fill="#FFFFFF" d="M10,15.5l5.5-3.5L10,8.5V15.5z"/>
    </svg>
);
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path fill="#0A66C2" d="M20,0H4C1.8,0,0,1.8,0,4v16c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V4C24,1.8,22.2,0,20,0z M8,19H5V8h3V19z M6.5,6.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7s1.7,0.8,1.7,1.7C8.2,5.9,7.4,6.7,6.5,6.7z M19,19h-3v-5.4 c0-1.3-0-2.9-1.8-2.9c-1.8,0-2,1.4-2,2.8V19h-3V8h3v1.4h0c0.4-0.8,1.5-1.6,3.1-1.6c3.3,0,3.9,2.2,3.9,5V19z"/>
    </svg>
);


const Footer: React.FC = () => {
    const linkClasses = "text-light-theme-text-secondary dark:text-gray-400 hover:text-light-theme-text dark:hover:text-white transition-colors duration-200";
    const titleClasses = "text-light-theme-text dark:text-white font-bold uppercase tracking-wider mb-4 text-sm";
  
    const areasInstitucionales = [
        "Académica", 
        "Administrativa", 
        "Asuntos Estudiantiles", 
        "Ciencia y Tecnología",
    ];

    const sitiosDeInteres = [
        { label: "Ministerio de Capital Humano", href: "https://www.argentina.gob.ar/capital-humano", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Logo_del_mch.png/250px-Logo_del_mch.png" },
        { label: "Secretaría de Educación", href: "https://www.argentina.gob.ar/educacion", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_de_la_secretaria_de_educacion_argentina.png" },
        { label: "INFoD", href: "https://infod.educacion.gob.ar/cursos", logoUrl: "https://ifdcvm-slu.infd.edu.ar/sitio/wp-content/uploads/2019/06/20190603_infod_logo.jpg" },
    ];

    const enlacesExternos = [
        { label: "Argentina (Estado)", href: "https://www.argentina.gob.ar/" },
        { label: "CEDOC", href: "https://cedoc.infd.edu.ar/" },
        { label: "RED INFoD", href: "https://red.infd.edu.ar/" },
        { label: "Mapa", href: "https://mapa.infd.edu.ar/" },
        { label: "Biblioteca", href: "https://red.infd.edu.ar/biblioteca-nuestra-escuela/" },
        { label: "Videotutoriales", href: "https://red.infd.edu.ar/video-tutoriales-del-campus/" },
    ];

    return (
      <footer className="bg-light-theme-bg-alt dark:bg-dark-blue-900 text-light-theme-text-secondary dark:text-gray-300">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Column 1: Institute Info */}
            <div>
              <a href="#" className="flex items-center space-x-3 mb-4" aria-label="Página de inicio de ISFD&T N°26">
                  <img src="https://i.imgur.com/V3tBXSv.png" alt="Escudo ISFD&T N°26" className="h-12 w-auto object-contain bg-light-theme-card dark:bg-white rounded-full p-1" />
                  <span className="block text-xl font-bold text-light-theme-text dark:text-white tracking-tight">ISFD&T N°26</span>
              </a>
              <div className="text-sm space-y-2 text-light-theme-text-secondary dark:text-gray-400">
                  <p>Márquez 51, Dolores, Buenos Aires</p>
                  <p>+54 (2245) 44-2222</p>
                  <p>consultasinstituto26@gmail.com</p>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" aria-label="WhatsApp" className="transition-transform hover:scale-110 duration-200"><WhatsAppIcon className="h-8 w-8"/></a>
                <a href="#" aria-label="Instagram" className="transition-transform hover:scale-110 duration-200"><InstagramIcon className="h-8 w-8"/></a>
                <a href="#" aria-label="Facebook" className="transition-transform hover:scale-110 duration-200"><FacebookIcon className="h-8 w-8"/></a>
                <a href="#" aria-label="YouTube" className="transition-transform hover:scale-110 duration-200"><YouTubeIcon className="h-8 w-8"/></a>
                <a href="#" aria-label="LinkedIn" className="transition-transform hover:scale-110 duration-200"><LinkedInIcon className="h-8 w-8"/></a>
              </div>
            </div>
  
            {/* Column 2: Áreas Institucionales */}
            <div>
              <h3 className={titleClasses}>Áreas Institucionales</h3>
              <ul className="space-y-2 text-sm">
                {areasInstitucionales.map(link => <li key={link}><a href="#" className={linkClasses}>{link}</a></li>)}
              </ul>
            </div>

            {/* Column 3: Sitios de Interés */}
            <div>
              <h3 className={titleClasses}>Sitios de Interés</h3>
              <ul className="space-y-2 text-sm">
                {sitiosDeInteres.map(link => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Enlaces Externos */}
            <div>
              <h3 className={titleClasses}>Enlaces Externos</h3>
              <ul className="space-y-2 text-sm">
                {enlacesExternos.map(link => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-light-theme-border/20 dark:border-gray-700">
            {/* Logos Section */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 gap-x-12 lg:gap-x-16">
              {sitiosDeInteres.map(site => (
                <a 
                  key={site.label}
                  href={site.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={site.label}
                  className="block transition-opacity hover:opacity-80"
                >
                  <img 
                    src={site.logoUrl} 
                    alt={`Logo de ${site.label}`}
                    className="h-16 md:h-20 object-contain bg-white p-3 rounded-lg"
                  />
                </a>
              ))}
            </div>

            {/* Copyright Section */}
            <div className="mt-12 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} ISFD&T N°26. Todos los derechos reservados.</p>
              <p className="mt-1">Prototipo de sitio web.</p>
            </div>
          </div>
        </div>
      </footer>
    );
};
  
export default Footer;