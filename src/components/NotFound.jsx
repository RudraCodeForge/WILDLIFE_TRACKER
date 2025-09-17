import React from 'react';
import styles from '../styles/NotFound.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFound = () => {
  return (
    <div className={`d-flex align-items-center justify-content-center text-center ${styles.notFoundContainer}`}>
      <div>
        <div className={styles.sadFace}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.285 11.294a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 13.5a3.498 3.498 0 0 0 3.032-1.892.5.5 0 0 1 .866.5A4.498 4.498 0 0 1 8 14.5a4.498 4.498 0 0 1-3.898-2.296.5.5 0 0 1 .183-.684zM7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </div>
        <h1 className={`${styles.heading} mb-3`}>Oops, Page Not Found</h1>
        <p className={`${styles.subheading} mb-4`}>It seems you've wandered off the beaten path. Let's get you back on track.</p>
        <a href="/" className={`btn ${styles.homeButton}`}>
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
