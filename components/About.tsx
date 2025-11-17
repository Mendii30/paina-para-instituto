
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-light-theme-bg-alt dark:bg-dark-blue-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://i.imgur.com/O9yXNUT.png" 
              alt="Personal y estudiantes del Instituto ISFD&T N°26" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-light-theme-text dark:text-light-text-heading mb-4">
              ISFD&T N°26
            </h2>
            <p className="text-lg text-light-theme-text-secondary dark:text-light-text-secondary leading-relaxed">
              Comprometidos con la excelencia académica y la formación de docentes y técnicos capaces de transformar la sociedad.
            </p>
            <a href="#" className="mt-8 inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-accent-dark transition-all duration-300 transform hover:scale-105">
                Conocer nuestra historia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;