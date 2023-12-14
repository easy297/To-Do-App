import "./App.css";
import Todolist from "./Todolist";

function App() {
  let tasks1 = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JavaScript", isDone: true },
    { id: 3, title: "ReactTypeScript", isDone: false },
  ];

  let tasks2 = [
    { id: 1, title: "GodFather", isDone: true },
    { id: 2, title: "WillyWonka", isDone: false },
    { id: 3, title: "Kung-Fu Panda 4", isDone: false },
  ];

  return (
    <div className="App">
      <Todolist title="What to learn?" tasks={tasks1} />
      <Todolist title="Movies" tasks={tasks2} />
    </div>
  );
}

export default App;
