import React, { useEffect, useState } from 'react';
import styles from './Skills.module.css';
import Constants from '../../Constants';

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('skills');
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight * 0.9 && !isVisible) {
      setIsVisible(true);

      const skillBars = document.querySelectorAll(`.${styles.progressBar}`);
      skillBars.forEach((bar, index) => {
        setTimeout(() => {
          bar.style.width = bar.getAttribute('data-percentage');
        }, 300 + index * 100);
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    const recheck = setTimeout(handleScroll, 500);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(recheck);
    };
  }, [isVisible]);

  const programmingTags = Constants.skills.programming
  const devToolsTags = Constants.skills.tools
  const frontendTags = Constants.skills.frontend
  const backendTags = Constants.skills.backend
  const mlTags = Constants.skills.machineLearning

  const tagsContainer = (tags, title) =>{
    return(
      <div className={styles.technicalInfo}>
              <h4 className={styles.infoHeading}>{title}</h4>
              <div className={styles.tagCloud}>
                {tags.map((tag, index) => (
                  <span
                    key={tag}
                    className={`${styles.tag} ${isVisible ? styles.visible : ''}`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
    )
  }

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={`${styles.heading} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.directorSlate}>EXPERTISE</span>
          <span className={styles.mainHeading}>Technical Skills</span>
        </h2>

        <div className={`${styles.skillsContainer} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.skillsColumn}>
            {tagsContainer(frontendTags, "Frontend")}
            {tagsContainer(programmingTags, "Programming")}
            {tagsContainer(mlTags, "ML&AI")}
          </div>

          <div className={styles.skillsColumn}>
            {tagsContainer(backendTags, "Backend")}
            {tagsContainer(devToolsTags, "Tools and Methodologies")}            
          </div>
          
        </div>
      </div>

      <div className={styles.filmReel}></div>
    </section>
  );
};
