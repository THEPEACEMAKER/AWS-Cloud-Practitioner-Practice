import React, { Fragment, useState } from "react";
import Question from "./Question";

function Quiz(props) {
  const { questions } = props;
  const [showAnswers, setShowAnswers] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleAnswers = () => {
    setShowAnswers((prevShowAnswers) => !prevShowAnswers);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Search..."
      />
      <button onClick={handleToggleAnswers}>
        {showAnswers ? "Hide Answers" : "Show Answers"}
      </button>
      {questions
        .filter((question) => {
          const searchRegex = new RegExp(searchQuery, "i");
          return (
            searchRegex.test(question.question) ||
            searchRegex.test(question.tags.join(" ")) ||
            question.options.some((option) => searchRegex.test(option.value))
          );
        })
        .map((question, index) => (
          <Fragment key={question.id}>
            <div className="question-container">
              <Question
                question={question}
                index={index}
                showAnswers={showAnswers}
              />
            </div>
          </Fragment>
        ))}
    </div>
  );
}

export default Quiz;
