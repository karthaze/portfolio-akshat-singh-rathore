import React, { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Loader } from './components/Loader/Loader';
import { FilmGrain } from './components/FilmGrain/FilmGrain';
import styles from './App.module.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.app}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <FilmGrain />
          <Header />
          <main className={styles.main}>
            <Hero />
            <About />
            <Experience /> {/* Add the Experience component here, between About and Skills */}
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;