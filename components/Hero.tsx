
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white" 
      style={{ backgroundImage: "url('https://storage.googleapis.com/aistudio-hub-generative-ai/user-assets/2024-07-26/11b33bb5-2e65-4299-8806-03c625345719.png')" }}
      aria-labelledby="hero-title"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
      
      <div className="relative container mx-auto px-6 py-32 md:py-40 text-center z-10">
        <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Formando el Futuro de la Educación
        </h1>
        <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
          Inscripciones abiertas para el ciclo lectivo 2025. Sumate a una comunidad que crece.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#oferta" 
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Ver Carreras
          </a>
          <a 
            href="#contacto" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
