import React, { useState, useEffect } from "react";

function Question({ question, showAnswers }) {
  const [isShowingAnswers, setIsShowingAnswers] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const isOptionCorrect = (optionIndex) => {
    return (
      (showAnswers || isShowingAnswers) && question.options[optionIndex].answer
    );
  };

  const handleToggleAnswers = () => {
    setIsShowingAnswers((prevIsShowingAnswers) => !prevIsShowingAnswers);
    setSelectedOptions([]);
  };

  const handleOptionSelect = (optionIndex) => {
    const isCorrect = question.options[optionIndex].answer;
    const newSelectedOptions = [
      ...selectedOptions,
      {
        index: optionIndex,
        showAnswer: true && !showAnswers,
        correct: isCorrect,
      },
    ];
    setSelectedOptions(newSelectedOptions);

    if (!isCorrect && !showAnswers) {
      setTimeout(() => {
        setSelectedOptions((prevSelectedOptions) =>
          prevSelectedOptions.filter(
            (selectedOption) => selectedOption.index !== optionIndex
          )
        );
      }, 500);
    }
  };

  useEffect(() => {
    setSelectedOptions([]);
    setIsShowingAnswers(false);
  }, [showAnswers]);

  return (
    <div key={`question-${question.id}`}>
      <h2>{question.question}</h2>
      <ol className="options">
        {question.options.map((option, key) => (
          <li
            key={`question-${question.id}-option-${key}`}
            className={[
              isOptionCorrect(key) ? "correct" : "",
              selectedOptions.some(
                (option) => option.index === key && option.showAnswer
              )
                ? selectedOptions.find(
                    (option) => option.index === key && option.showAnswer
                  ).correct
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
