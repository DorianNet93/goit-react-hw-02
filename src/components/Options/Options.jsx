import React from "react";
import styles from './Options.module.css';

const Options = ({ options, onLeaveFeedback, onResetFeedback, totalFeedback }) => {
  return (
    <div className={styles.options}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          className={styles.optionsButton}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}

      {totalFeedback > 0 && (
        <button
          type="button"
          onClick={onResetFeedback}
          className={styles.resetButton}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;





