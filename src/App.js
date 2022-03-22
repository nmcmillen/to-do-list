import "./App.css";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState(["task 1", "task 2"]);

  useEffect(() => {
    console.log("setting state test");
  }, []);

  function CreateTask(props) {
    function handleSubmit(e) {
      e.preventDefault();
      alert("form submitted");
      props.setTask(prev => prev.concat("test task"))
    }

    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Create New Task</legend>
          <input placeholder="Add a new task" />
          <button>Add Task</button>
        </fieldset>
      </form>
    );
  }

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <CreateTask setTask={setTask}/>
      {/* <div id="input-create">
        <input type="text" />
        <button>Create To-Do</button>
      </div> */}
      <div>{task}</div>
      <div id="status-buttons">
        <button>All</button>
        <button>Pending</button>
        <button>Completed</button>
      </div>
    </div>
  );
}

export default App;
