import React, { useState } from "react";

function Question({ question, showAnswers }) {
  const [isShowingAnswers, setIsShowingAnswers] = useState(false);

  const isOptionCorrect = (optionIndex) => {
    return (
      (showAnswers || isShowingAnswers) && question.options[optionIndex].answer
    );
  };

  const handleToggleAnswers = () => {
    setIsShowingAnswers((prevIsShowingAnswers) => !prevIsShowingAnswers);
  };

  return (
    <div key={`question-${question.id}`}>
      <h2>{question.question}</h2>
      <ol className="options">
        {question.options.map((option, key) => (
          <li
            key={`question-${question.id}-option-${key}`}
            className={isOptionCorrect(key) ? "correct" : ""}
          >
            {option.value}
          </li>
        ))}
      </ol>
      {!showAnswers && (
        <button onClick={handleToggleAnswers}>
          {isShowingAnswers ? "Hide Answers" : "Show Answers"}
        </button>
      )}
      <p>Tags: {question.tags.join(", ")}</p>
    </div>
  );
}

export default Question;
