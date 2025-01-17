import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ feedback, total, positivePercentage }) => {
  return (
    <div className={styles.statistics}>
      <h2>Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;



