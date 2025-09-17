
import React from 'react';
import styles from '../styles/NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Sad Face Icon */}
        <div className={styles.iconWrapper}>
          <svg
            className={styles.sadFaceIcon}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Circle border */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
            {/* Eyes */}
            <circle cx="35" cy="40" r="3" fill="currentColor" />
            <circle cx="65" cy="40" r="3" fill="currentColor" />
            {/* Sad mouth */}
            <path
              d="M 30 65 Q 50 55 70 65"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className={styles.heading}>
          Oops, Page Not Found
        </h1>

        {/* Description */}
        <p className={styles.description}>
          It seems you've wandered off the beaten path. Let's get you back on track.
        </p>

        {/* Back to Home Button */}
        <Link to="/" className={styles.homeButton}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
