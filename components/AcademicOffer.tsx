
import React from 'react';
import type { Career } from '../types';

const GraduationCapIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
    </svg>
);
const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" />
        <path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M4 6h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
    </svg>
);
const UserGroupIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLineCap="round" strokeLineJoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const careers: Career[] = [
  {
    title: 'Profesorado de Educación Primaria',
    description: 'Formamos docentes comprometidos con la educación inicial y el desarrollo integral de los niños.',
    icon: GraduationCapIcon,
  },
  {
    title: 'Profesorado de Historia',
    description: 'Capacitamos a futuros profesores para enseñar historia con una perspectiva crítica y reflexiva.',
    icon: BookOpenIcon,
  },
  {
    title: 'Profesorado de Geografía',
    description: 'Preparamos a profesionales para la enseñanza de la geografía y la comprensión del espacio.',
    icon: UserGroupIcon,
  },
];

const CareerCard: React.FC<{ career: Career }> = ({ career }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="mb-6 text-primary">
      <career.icon />
    </div>
    <h3 className="text-2xl font-bold text-neutral-900 mb-3">{career.title}</h3>
    <p className="text-neutral-500 mb-6">{career.description}</p>
    <a href="#" className="font-bold text-primary-light hover:text-primary transition-colors duration-300">
      Ver más detalles &rarr;
    </a>
  </div>
);

const AcademicOffer: React.FC = () => {
  return (
    <section id="oferta" className="py-20 bg-neutral-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primary-dark">Nuestra Oferta Académica</h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            Programas de estudio diseñados para inspirar y capacitar a la próxima generación de educadores.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careers.map((career) => (
            <CareerCard key={career.title} career={career} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicOffer;
