
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AcademicOffer from './components/AcademicOffer';
import News from './components/News';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-neutral-100 font-sans text-neutral-800">
      <Header />
      <main>
        <Hero />
        <AcademicOffer />
        <News />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
