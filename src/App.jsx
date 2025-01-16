import React, { useState, useEffect } from 'react';
import Feedback from './components/Feedback/Feedback';
import './App.css';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback 
      ? JSON.parse(savedFeedback) 
      : {
          good: 0,
          neutral: 0,
          bad: 0
        };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  const onLeaveFeedback = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };


  const onResetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem('feedback');
  };

  return (
    <div className="app">
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Feedback
        feedback={feedback}
        onLeaveFeedback={onLeaveFeedback}
        onResetFeedback={onResetFeedback}
        total={totalFeedback}
        positivePercentage={positiveFeedbackPercentage}
      />
    </div>
  );
};

export default App;
