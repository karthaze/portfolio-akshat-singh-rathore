import React, { useEffect, useState } from 'react';
import styles from './Projects.module.css';
import Constants from '../../Constants';

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const projects = Constants.projects;

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('projects');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.9 && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const delayed = setTimeout(handleScroll, 600);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(delayed);
    };
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={`${styles.heading} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.directorSlate}>PORTFOLIO</span>
          <span className={styles.mainHeading}>Featured Projects</span>
        </h2>

        <div className={`${styles.projectsContainer} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.projectsSlider} style={{ transform: `translateX(-${activeProject * 100}%)` }}>
            {projects.map((project, index) => (
              <div
                className={`${styles.projectCard} ${isVisible ? styles.visible : ''}`}
                key={index}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.categoryBadge}>{project.category}</div>
                  <p className={styles.projectDescription}>{project.description}</p>

                  <div className={styles.techStack}>
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`${styles.techTag} ${isVisible ? styles.visible : ''}`}
                        style={{ transitionDelay: `${i * 60}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={styles.projectLinks}>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      <span className={styles.linkIcon}>🔗</span> GitHub
                    </a>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      <span className={styles.linkIcon}>🌐</span> Live Demo
                    </a>
                  </div>
                </div>

                <div className={styles.projectImageContainer}>
                  <div className={styles.filmFrameTop}></div>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                  <div className={styles.filmFrameBottom}></div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.projectIndicators}>
            {projects.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${activeProject === index ? styles.active : ''}`}
                onClick={() => setActiveProject(index)}
                aria-label={`View project ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className={styles.sliderControls}>
            <button
              className={styles.sliderBtn}
              onClick={() => setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)}
              aria-label="Previous project"
            >
              <span className={styles.arrowIcon}>←</span>
            </button>
            <button
              className={styles.sliderBtn}
              onClick={() => setActiveProject((prev) => (prev + 1) % projects.length)}
              aria-label="Next project"
            >
              <span className={styles.arrowIcon}>→</span>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.clapperboard}></div>
    </section>
  );
};
