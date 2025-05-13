import React, { useEffect, useState } from 'react';
import styles from './Experience.module.css';
import Constants from '../../Constants';

export const Experience = () => {
  const [showHeading, setShowHeading] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const experiences = Constants.experiences;

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('experience');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Make the trigger point higher to ensure elements become visible earlier
      if (rect.top <= windowHeight * 0.75) {
        setShowHeading(true);
        setTimeout(() => setShowTimeline(true), 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call handleScroll immediately after mounting to check initial position
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={`${styles.heading} ${showHeading ? styles.visible : ''}`}>
          <span className={styles.directorSlate}>EXPERIENCE</span>
          <span className={styles.mainHeading}>My Journey</span>
        </h2>

        <div className={`${styles.timeline} ${showTimeline ? styles.visible : ''}`}>
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.timelineContent}>
                <div className={styles.filmReel}>
                  <div className={styles.reelCenter}></div>
                  <div className={styles.sprocket}></div>
                  <div className={styles.sprocket}></div>
                  <div className={styles.sprocket}></div>
                  <div className={styles.sprocket}></div>
                </div>
                <div className={styles.timelineDate}>{exp.period}</div>
                <div className={styles.card}>
                  <h3 className={styles.jobTitle}>{exp.title}</h3>
                  <div className={styles.company}>{exp.company}</div>
                  <p className={styles.description}>{exp.description}</p>
                  <div className={styles.techTags}>
                    {exp.highlights.map((tech, i) => (
                      <span key={i} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.timelineLine}></div>
        </div>
      </div>
      <div className={styles.filmStrip}></div>
    </section>
  );
};