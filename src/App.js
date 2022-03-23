import "./App.css";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState([
  ]);

  useEffect(() => {
    console.log("setting state test");
  }, []);

  function CreateTask(props) {
    function handleSubmit(e) {
      e.preventDefault();
      // alert("form submitted");
      props.setTask(newtask => newtask.concat(<div id="created-task">Test Task</div>))
    }

    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Create New Task</legend>
          <input onChange={e => setTask(e.target.value)}placeholder="Add a new task" />
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
      <div id="">{task}</div>
      <div id="status-buttons">
        <button>All</button>
        <button>Pending</button>
        <button>Completed</button>
      </div>
    </div>
  );
}

export default App;
