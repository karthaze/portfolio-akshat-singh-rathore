import React, { useEffect, useState } from 'react';
import styles from './Contact.module.css';
import Constants from '../../Constants';

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.9 && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const recheck = setTimeout(handleScroll, 500);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(recheck);
    };
  }, [isVisible]);
  

  const socialLinks = Constants.socialLinks;

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              <p className={styles.infoText}>
                Feel free to reach out for collaborations, job opportunities, or just to say hello!
              </p>

              <div className={styles.contactDetails}>
                {[`${Constants.location.BANGALORE}/${Constants.location.NOIDA}/${Constants.location.PUNE}`, Constants.email, Constants.phone].map((info, i) => (
                  <div
                    key={i}
                    className={`${styles.contactItem} ${isVisible ? styles.visible : ''}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <span className={styles.contactIcon}>{info.split(' ')[0]}</span>
                    <span>{info.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>

              <div className={styles.socialLinks}>
                <h4 className={styles.socialTitle}>Find Me On</h4>
                <div className={styles.socialIcons}>
                  {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.socialIcon} ${isVisible ? styles.visible : ''}`}
                          style={{ transitionDelay: `${index * 100}ms` }}
                          aria-label={social.name}
                        >
                          <social.icon size={20} />
                        </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.spotlight}></div>
    </section>
  );
};
