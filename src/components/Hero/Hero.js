import React, { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';
import Constants from '../../Constants';

export const Hero = () => {
  const parallaxRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const ctaRef = useRef(null);

  const [showHeading, setShowHeading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }

      const section = document.getElementById('hero');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.9) {
        setShowHeading(true);
        setShowContent(true);
        setShowCta(true);
      }
    };

    // Typing effect animation
    const nameElement = nameRef.current;
    const titleElement = titleRef.current;
    
    if (nameElement) {
      nameElement.classList.add(styles.animateIn);
    }
    
    if (titleElement) {
      setTimeout(() => {
        titleElement.classList.add(styles.animateIn);
      }, 800);
    }
    
    if (ctaRef.current) {
      setTimeout(() => {
        ctaRef.current.classList.add(styles.fadeIn);
      }, 1600);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.parallaxBg} ref={parallaxRef}></div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              <h1 ref={nameRef} className={`${styles.name} ${showHeading ? styles.visible : ''}`}>{Constants.name}</h1>
              <p ref={titleRef} className={`${styles.subtitle} ${showContent ? styles.visible : ''}`}>SOFTWARE ENGINEER</p>
            </div>
          </div>
          <div ref={ctaRef} className={`${styles.cta} ${showCta ? styles.visible : ''}`}>
            <a href="#projects" className={styles.primaryBtn}>VIEW PROJECTS</a>
            <a href="#contact" className={styles.secondaryBtn}>CONTACT ME</a>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.mouseScroll}>
            <div className={styles.mouse}>
              <div className={styles.wheel}></div>
            </div>
          </div>
          <p className={styles.scrollText}>SCROLL DOWN</p>
        </div>
      </div>
      <div className={styles.overlayVignette}></div>
      <div className={styles.filmStrip}></div>
    </section>
  );
};
