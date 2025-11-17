
import React from 'react';

const StatItem: React.FC<{ number: string; label: string }> = ({ number, label }) => (
    <div>
        <p className="text-5xl md:text-6xl font-extrabold text-light-text-heading" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>{number}</p>
        <p className="text-lg text-light-text font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>{label}</p>
    </div>
);


const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white" 
      style={{ backgroundImage: "url('https://isfd26-bue.infd.edu.ar/sitio/wp-content/uploads/2019/11/13737649_1631391793838119_1316153328518628844_o.jpg')" }}
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-black/40 dark:bg-dark-blue-900/50"></div>
      <div className="relative container mx-auto px-6 py-24 md:py-32 z-10">
        <div className="max-w-7xl mx-auto">
            <div className="mb-12">
                <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-light-text-heading" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    ISFD&T N°26: Educación Pública de Calidad e Innovación
                </h1>
                <p className="text-lg md:text-xl text-light-text max-w-3xl" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                    Más de 20 años formando a los profesionales que la comunidad necesita.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Stats Section */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                    <StatItem number="10+" label="Profesorados y Tecnicaturas" />
                    <StatItem number="10+" label="Convenios" />
                    <StatItem number="20+" label="Años de Trayectoria" />
                    <StatItem number="500+" label="Egresados" />
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a href="#oferta" className="block text-center bg-white/20 dark:bg-dark-blue-700/30 border border-white/50 backdrop-blur-sm text-light-text-heading font-bold uppercase py-4 px-6 rounded-md transition-all hover:bg-white/30 dark:hover:bg-dark-blue-700/50">
                            Educación Inicial
                        </a>
                        <a href="#oferta" className="block text-center bg-white/20 dark:bg-dark-blue-700/30 border border-white/50 backdrop-blur-sm text-light-text-heading font-bold uppercase py-4 px-6 rounded-md transition-all hover:bg-white/30 dark:hover:bg-dark-blue-700/50">
                            Enfermería
                        </a>
                        <a href="#oferta" className="block text-center bg-white/20 dark:bg-dark-blue-700/30 border border-white/50 backdrop-blur-sm text-light-text-heading font-bold uppercase py-4 px-6 rounded-md transition-all hover:bg-white/30 dark:hover:bg-dark-blue-700/50">
                            Desarrollo de Software
                        </a>
                        <a href="#oferta" className="block text-center bg-white/20 dark:bg-dark-blue-700/30 border border-white/50 backdrop-blur-sm text-light-text-heading font-bold uppercase py-4 px-6 rounded-md transition-all hover:bg-white/30 dark:hover:bg-dark-blue-700/50">
                            Diseño, Imagen y Sonido
                        </a>
                    </div>
                     <a href="#oferta" className="block text-center bg-white/20 dark:bg-dark-blue-700/30 border border-white/50 backdrop-blur-sm text-light-text-heading font-bold uppercase py-4 px-6 rounded-md transition-all hover:bg-white/30 dark:hover:bg-dark-blue-700/50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        Ver todas las Carreras
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
