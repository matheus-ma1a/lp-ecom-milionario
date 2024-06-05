import React from 'react';
import styles from '../../../styles/ProgressBar.module.css';

const ProgressBar = ({ percentage }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progressBarFill}
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
