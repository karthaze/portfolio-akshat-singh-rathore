import React, { useState, useEffect } from 'react';
import styles from './Loader.module.css';
import Constants from '../../Constants';

export const Loader = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + Math.floor(Math.random() * 10) + 1;
          return newProgress > 100 ? 100 : newProgress;
        });
      }, 150);
      
      return () => clearInterval(interval);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={styles.loader}>
      <div className={styles.loaderContent}>
        <div className={styles.clapperboard}>
          <div className={styles.clapperTop}></div>
          <div className={styles.clapperBottom}></div>
        </div>
        
        <h1 className={styles.loaderTitle}>
          <span className={styles.directorText}>SOFTWARE ENGINEER</span>
          <span className={styles.nameText}>{Constants.name}</span>
        </h1>
        
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className={styles.progressText}>
          {progress < 100 ? 'Loading...' : 'Action!'}
        </div>
      </div>
      
      <div className={styles.filmCountdown}>
        <div className={styles.countdownNumber}>3</div>
        <div className={styles.countdownNumber}>2</div>
        <div className={styles.countdownNumber}>1</div>
      </div>
    </div>
  );
};