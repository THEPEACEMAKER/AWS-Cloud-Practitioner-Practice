import "./App.css";
import Quiz from "./Quiz";
import questions from "./questions";

function App() {
  return (
    <div className="App">
      <h1>AWS Practitioner Questions</h1>
      <Quiz questions={questions} />
    </div>
  );
}

export default App;
