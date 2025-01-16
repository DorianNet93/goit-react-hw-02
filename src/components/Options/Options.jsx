import React from 'react';
import styles from './Options.module.css';

const Options = ({ options, onLeaveFeedback, onResetFeedback, showReset }) => {
  return (
    <div className={styles.options}>
      {options.map((option) => (
        <button
          key={option}
          className={styles.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}

      {showReset && (
        <button className={`${styles.button} ${styles.resetButton}`} onClick={onResetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;


