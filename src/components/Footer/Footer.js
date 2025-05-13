import React from 'react';
import styles from './Footer.module.css';
import Constants from '../../Constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <span className={styles.nameText}>{Constants.name}</span>
            <span className={styles.directorText}>SOFTWARE ENGINEER</span>
          </div>
          
          <div className={styles.footerNav}>
            <ul className={styles.navList}>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.creditsContainer}>
            <div className={styles.creditsTitle}>DIRECTED BY</div>
            <div className={styles.creditsName}>{Constants.name}</div>
          </div>
          
          <div className={styles.copyright}>
            © {currentYear} | All Rights Reserved
          </div>
          
          <div className={styles.footerQuote}>
            "Code is like poetry; every line matters."
          </div>
        </div>
      </div>
      
      <div className={styles.filmReel}></div>
    </footer>
  );
};