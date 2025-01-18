import React from "react";
import styles from './Options.module.css';


const Options = ({ options, onLeaveFeedback, onResetFeedback }) => {
  return (
    <div className="options">
      {/* Кнопки для відгуків */}
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          className="options-button"
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}

      {/* Кнопка Reset */}
      <button
        type="button"
        onClick={onResetFeedback}
        className="options-button reset-button"
      >
        Reset
      </button>
    </div>
  );
};

export default Options;





