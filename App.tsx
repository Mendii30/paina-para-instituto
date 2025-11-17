
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AcademicOffer from './components/AcademicOffer';
import News from './components/News';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="bg-light-theme-bg font-sans text-light-theme-text dark:bg-dark-blue-900 dark:text-light-text transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <AcademicOffer />
          <News />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
