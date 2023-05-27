import './App.css';
import UserParticipation from './TASK-A/components/UserParticipation';
import Timer from './TASK-B/components/Timer';

function App() {
  let qna = {
    question: "What is your favorite programming language?",

    choices: [
      { id: 1, label: "JavaScript", votes: 0 },

      { id: 2, label: "Python", votes: 0 },

      { id: 3, label: "Java", votes: 0 },

      { id: 4, label: "C#", votes: 0 },
    ],
  };

  return (
    <div className="App">
      {/* TASK-A */}
      {/* <h1>Polling App</h1>
      <UserParticipation qna={qna} /> */}

      {/* TASK-B */}
      <Timer />
    </div>
  );
}

export default App;
