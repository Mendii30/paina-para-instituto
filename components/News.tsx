
import React from 'react';
import type { NewsArticle } from '../types';

const articles: NewsArticle[] = [
  {
    id: 1,
    title: 'Abierta la inscripción para el ciclo lectivo 2026',
    excerpt: 'Ya podés inscribirte a nuestras carreras para el próximo año. ¡No te quedes afuera!',
    imageUrl: 'https://picsum.photos/400/250?random=1',
    date: '15 de Noviembre, 2025',
  },
  {
    id: 2,
    title: 'Jornada de Puertas Abiertas en el Instituto',
    excerpt: 'Vení a conocer nuestras instalaciones, conversar con docentes y estudiantes, y resolver todas tus dudas.',
    imageUrl: 'https://picsum.photos/400/250?random=2',
    date: '12 de Noviembre, 2025',
  },
  {
    id: 3,
    title: 'Nuevo convenio de prácticas profesionales',
    excerpt: 'Hemos firmado un acuerdo con instituciones locales para enriquecer la formación de nuestros estudiantes.',
    imageUrl: 'https://picsum.photos/400/250?random=3',
    date: '10 de Octubre, 2025',
  },
];

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <div className="bg-light-theme-card dark:bg-dark-blue-900 rounded-xl shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 hover:scale-105 border border-light-theme-border dark:border-transparent">
    <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-sm text-light-theme-text-secondary dark:text-light-text-secondary mb-2">{article.date}</p>
      <h3 className="text-xl font-bold text-light-theme-text dark:text-light-text-heading mb-3 group-hover:text-accent transition-colors duration-300">{article.title}</h3>
      <p className="text-light-theme-text-secondary dark:text-light-text flex-grow">{article.excerpt}</p>
      <a href="#" className="mt-4 font-bold text-accent hover:text-accent-dark transition-colors duration-300 self-start">
        Leer más &rarr;
      </a>
    </div>
  </div>
);

const News: React.FC = () => {
  return (
    <section className="py-20 bg-light-theme-bg-alt dark:bg-dark-blue-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-light-theme-text dark:text-light-text-heading">Últimas Novedades</h2>
          <p className="mt-4 text-lg text-light-theme-text-secondary dark:text-light-text-secondary max-w-2xl mx-auto">
            Mantenete al día con las noticias y eventos más importantes de nuestra comunidad educativa.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;