
import React from 'react';
import type { Career } from '../types';

// --- ICONS ---
const GraduationCapIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
    </svg>
);
const UserGroupIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);
const CodeBracketIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
);
const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6.343 6.343l-2.828 2.828M17.657 17.657l2.828 2.828M18 5h-4M21 3v4M12 3v4M12 21v-4M4.222 16.222l2.828-2.828M16.222 4.222l2.828 2.828M12 18a6 6 0 100-12 6 6 0 000 12z" />
    </svg>
);
const MapIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13v-6m0 6l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m0 10v-6m0 6l-6-3" />
    </svg>
);
const BeakerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-.547-1.806z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m12 0a2 2 0 100-4m0 4a2 2 0 110-4" />
    </svg>
);


// --- CAREER DATA ---
const academicOfferings = [
    {
        sede: "Oferta General",
        careers: [
            {
                title: 'Profesorado de Educación Inicial',
                description: 'Formamos docentes para acompañar el desarrollo y aprendizaje en la primera infancia.',
                icon: GraduationCapIcon,
            },
            {
                title: 'Profesorado Secundario Técnico en Producción Agropecuaria',
                description: 'Capacitamos a futuros docentes para la enseñanza técnica en el sector agropecuario.',
                icon: BeakerIcon,
            },
            {
                title: 'Profesorado de Educación Primaria',
                description: 'Formamos docentes comprometidos con la educación y el desarrollo integral de los niños.',
                icon: GraduationCapIcon,
            },
            {
                title: 'Tecnicatura Superior en Enfermería',
                description: 'Preparamos profesionales de la salud con una sólida formación científica y humana.',
                icon: HeartIcon,
            },
            {
                title: 'Tecnicatura Superior en Trabajo Social',
                description: 'Formamos técnicos para intervenir en la realidad social y promover el cambio.',
                icon: UserGroupIcon,
            },
            {
                title: 'Certificación en Enfermería en Urgencias, Emergencias y Catástrofes',
                description: 'Especialización para profesionales de enfermería en la atención crítica y de emergencia.',
                icon: HeartIcon,
            },
        ],
    },
    {
        sede: "Sede calle Lamadrid",
        careers: [
            {
                title: 'Tecnicatura Superior en Turismo',
                description: 'Formamos profesionales para la gestión y desarrollo de la actividad turística.',
                icon: MapIcon,
            },
            {
                title: 'Tecnicatura Superior en Guía de Turismo',
                description: 'Preparamos guías capaces de interpretar y comunicar el patrimonio cultural y natural.',
                icon: MapIcon,
            },
            {
                title: 'Tecnicatura Superior en Desarrollo de Software',
                description: 'Capacitamos programadores con las habilidades para crear las aplicaciones del futuro.',
                icon: CodeBracketIcon,
            },
            {
                title: 'Tecnicatura Superior en Diseño y Producción de Indumentaria',
                description: 'Formación integral en el proceso de diseño, moldería y confección de indumentaria.',
                icon: SparklesIcon,
            },
            {
                title: 'Tecnicatura Superior en Diseño, Imagen y Sonido',
                description: 'Preparamos técnicos para la producción y realización de contenidos audiovisuales.',
                icon: SparklesIcon,
            },
        ],
    },
    {
        sede: "Sede calle Mendiola",
        careers: [
            {
                title: 'Tecnicatura Superior en Servicios Gastronómicos',
                description: 'Formamos profesionales en el arte culinario y la gestión de servicios gastronómicos.',
                icon: BeakerIcon,
            },
            {
                title: 'Profesorado de Educación Especial (Orientación Intelectual)',
                description: 'Preparamos docentes para garantizar la inclusión y el aprendizaje de todos los estudiantes.',
                icon: GraduationCapIcon,
            },
            {
                title: 'Tecnicatura Superior en Acompañante Terapéutico',
                description: 'Capacitamos a profesionales para el acompañamiento de personas en tratamiento.',
                icon: UserGroupIcon,
            },
        ],
    },
    {
        sede: "Sede Unidad Penitenciaria N° 6",
        careers: [
             {
                title: 'Tecnicatura Superior en Servicios Gastronómicos',
                description: 'Formamos profesionales en el arte culinario y la gestión de servicios gastronómicos.',
                icon: BeakerIcon,
            },
            {
                title: 'Tecnicatura Superior en Tiempo Libre y Recreación',
                description: 'Formamos técnicos para el diseño y gestión de proyectos recreativos y de tiempo libre.',
                icon: UserGroupIcon,
            },
        ]
    }
];

const CareerCard: React.FC<{ career: Career }> = ({ career }) => (
  <div className="bg-light-theme-card dark:bg-dark-blue-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col border border-light-theme-border dark:border-transparent">
    <div className="mb-6 text-accent">
      <career.icon />
    </div>
    <h3 className="text-2xl font-bold text-light-theme-text dark:text-light-text-heading mb-3">{career.title}</h3>
    <p className="text-light-theme-text-secondary dark:text-light-text mb-6 flex-grow">{career.description}</p>
    <a href="#" className="font-bold text-accent hover:text-accent-dark transition-colors duration-300 self-start mt-auto">
      Ver más detalles &rarr;
    </a>
  </div>
);

const AcademicOffer: React.FC = () => {
  return (
    <section id="oferta" className="py-20 bg-light-theme-bg dark:bg-dark-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-light-theme-text dark:text-light-text-heading">Nuestra Oferta Académica</h2>
          <p className="mt-4 text-lg text-light-theme-text-secondary dark:text-light-text-secondary max-w-3xl mx-auto">
            Explorá nuestra amplia variedad de profesorados y tecnicaturas diseñados para inspirar y capacitar a la próxima generación de profesionales.
          </p>
        </div>
        
        <div className="space-y-16">
          {academicOfferings.map((sede) => (
            <div key={sede.sede}>
              <h3 className="text-3xl font-bold text-light-theme-text dark:text-light-text-heading mb-8 border-l-4 border-accent pl-4">{sede.sede}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sede.careers.map((career) => (
                  <CareerCard key={career.title} career={career} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AcademicOffer;