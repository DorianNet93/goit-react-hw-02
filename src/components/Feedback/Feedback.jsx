import React from 'react';
import Options from '../Options/Options';
import Statistics from '../Statistics/Statistics';
import styles from './Feedback.module.css';

const Feedback = ({ feedback, onLeaveFeedback, onResetFeedback, total, positivePercentage }) => {
  return (
    <div className={styles.feedback}>
      <Options
        options={Object.keys(feedback)}
        onLeaveFeedback={onLeaveFeedback}
        onResetFeedback={onResetFeedback}
        showReset={total > 0}
      />
      
      {total > 0 ? (
        <Statistics
          feedback={feedback}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <p className={styles.message}>No feedback given yet.</p>
      )}
    </div>
  );
};

export default Feedback;
