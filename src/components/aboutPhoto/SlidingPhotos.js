import React, { useState, useEffect, useRef } from 'react';
import styles from './SlidingPhotos.module.css';
import Constants from '../../Constants';

const SlidingPhotos = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const images = Constants.aboutYouImages;
  const n = images.length

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * n);
        setCurrentImageIndex(randomIndex);
      }, 300); 
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className={styles.slidingPhotos}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {images.map((image, index) => (
        <div 
          key={index}
          className={`${styles.photo} ${index === currentImageIndex ? styles.active : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default SlidingPhotos;