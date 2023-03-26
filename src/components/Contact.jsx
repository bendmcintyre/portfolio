import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
      <div
        className={`${styles['container']} ${
          isLoaded ? styles.visible : ''
        }`}
      >
        <h1 className={styles['header']}>
          Contact
        </h1>
      </div>
  );
};

export default Contact;