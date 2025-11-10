
import React from 'react';
import type { NewsArticle } from '../types';

const articles: NewsArticle[] = [
  {
    id: 1,
    title: 'Abierta la inscripción para el ciclo lectivo 2025',
    excerpt: 'Ya podés inscribirte a nuestras carreras para el próximo año. ¡No te quedes afuera!',
    imageUrl: 'https://picsum.photos/400/250?random=1',
    date: '15 de Octubre, 2024',
  },
  {
    id: 2,
    title: 'Jornada de Puertas Abiertas en el Instituto',
    excerpt: 'Vení a conocer nuestras instalaciones, conversar con docentes y estudiantes, y resolver todas tus dudas.',
    imageUrl: 'https://picsum.photos/400/250?random=2',
    date: '12 de Octubre, 2024',
  },
  {
    id: 3,
    title: 'Nuevo convenio de prácticas profesionales',
    excerpt: 'Hemos firmado un acuerdo con instituciones locales para enriquecer la formación de nuestros estudiantes.',
    imageUrl: 'https://picsum.photos/400/250?random=3',
    date: '10 de Octubre, 2024',
  },
];

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 hover:scale-105">
    <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-sm text-neutral-500 mb-2">{article.date}</p>
      <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors duration-300">{article.title}</h3>
      <p className="text-neutral-500 flex-grow">{article.excerpt}</p>
      <a href="#" className="mt-4 font-bold text-primary-light hover:text-primary transition-colors duration-300 self-start">
        Leer más &rarr;
      </a>
    </div>
  </div>
);

const News: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primary-dark">Últimas Novedades</h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
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
