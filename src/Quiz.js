import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Question from "./Question";
import { toggleAnswers, setSearchQuery } from "./store/quizSlice";

function Quiz(props) {
  const { questions } = props;
  const dispatch = useDispatch();
  const { showAnswers, searchQuery } = useSelector((state) => state.quiz);

  const handleToggleAnswers = () => {
    dispatch(toggleAnswers());
  };

  const handleSearchQueryChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
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
