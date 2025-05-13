import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Constants from '../../Constants';

export const Header = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>
          <span className={styles.nameText}>{Constants.name}</span>
          <span className={styles.directorText}>SOFTWARE ENGINEER</span>
        </h1>
      </div>

      <button className={styles.menuToggle} onClick={toggleNav}>
        <span className={styles.menuBar}></span>
        <span className={styles.menuBar}></span>
        <span className={styles.menuBar}></span>
      </button>

      <nav className={`${styles.nav} ${navVisible ? styles.visible : ''}`}>
        <ul className={styles.navList}>
          <li><a href="#hero" onClick={() => setNavVisible(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setNavVisible(false)}>About</a></li>
          <li><a href="#experience" onClick={() => setNavVisible(false)}>Experience</a></li>
          <li><a href="#skills" onClick={() => setNavVisible(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setNavVisible(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setNavVisible(false)}>Contact</a></li>
          <li><a href={Constants.resume} target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>Resume</a></li>
        </ul>
      </nav>
    </header>
  );
};