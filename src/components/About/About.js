import React, { useEffect, useState } from 'react';
import styles from './About.module.css';
import Constants from '../../Constants';
import SlidingPhotos from '../aboutPhoto/SlidingPhotos';

export const About = () => {
  const [showHeading, setShowHeading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.9) {
        setShowHeading(true);
        setShowContent(true);
        setShowPhoto(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={`${styles.heading} ${showHeading ? styles.visible : ''}`}>
            <span className={styles.directorSlate}>ABOUT</span>
            <span className={styles.mainHeading}>Who Am I</span>
          </h2>

          <div className={`${styles.aboutContent} ${showContent ? styles.visible : ''}`}>
            <p>
              Hello! I'm <strong>Akshat</strong>
            </p>
            <pre style={{ whiteSpace: 'pre-wrap' }}>
              {Constants.summary}
            </pre>


            <div className={styles.personalDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Name:</span>
                <span className={styles.detailValue}>{Constants.name}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Email:</span>
                <span className={styles.detailValue}>getakshatrathore@gmail.com</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Location:</span>
                <span className={styles.detailValue}> Bangalore / Mumbai / Pune / Noida</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Availability:</span>
                <span className={styles.detailValue}>Immediate</span>
              </div>
            </div>

            <div className={styles.cta}>
              <a
                href={Constants.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resumeBtn}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.photoContainer} ${showPhoto ? styles.visible : ''}`}>
          <div className={styles.photoFrame}>
            <SlidingPhotos/>
            <div className={`${styles.frameCorner} ${styles.topLeft}`}></div>
            <div className={`${styles.frameCorner} ${styles.topRight}`}></div>
            <div className={`${styles.frameCorner} ${styles.bottomLeft}`}></div>
            <div className={`${styles.frameCorner} ${styles.bottomRight}`}></div>
          </div>
        </div>
      </div>

      <div className={styles.filmStrip}></div>
    </section>
  );
};

