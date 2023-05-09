import React, { useState } from "react";

function Question({ question, showAnswers }) {
  const [isShowingAnswers, setIsShowingAnswers] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const isOptionCorrect = (optionIndex) => {
    return (
      (showAnswers || isShowingAnswers) && question.options[optionIndex].answer
    );
  };

  const handleToggleAnswers = () => {
    setIsShowingAnswers((prevIsShowingAnswers) => !prevIsShowingAnswers);
    setSelectedOption(null);
  };

  const handleOptionSelect = (optionIndex) => {
    const isCorrect = question.options[optionIndex].answer;
    setSelectedOption({
      index: optionIndex,
      showAnswer: true && !showAnswers,
      correct: isCorrect,
    });

    if (!isCorrect && !showAnswers) {
      setTimeout(() => {
        setSelectedOption((prevSelectedOption) => ({
          ...prevSelectedOption,
          showAnswer: false,
        }));
      }, 500);
    }
  };

  return (
    <div key={`question-${question.id}`}>
      <h2>{question.question}</h2>
      <ol className="options">
        {question.options.map((option, key) => (
          <li
            key={`question-${question.id}-option-${key}`}
            className={[
              isOptionCorrect(key) ? "correct" : "",
              selectedOption?.index === key && selectedOption?.showAnswer
                ? selectedOption?.correct
                  ? "correct"
                  : "incorrect"
                : "",
            ].join(" ")}
            onClick={() => handleOptionSelect(key)}
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
