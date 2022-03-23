import "./App.css";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      note: "Give dog a bath",
      complete: true
    }, {
      id: 2,
      note: "Do laundry",
      complete: true
    }, {
      id: 3,
      note: "Vacuum floor",
      complete: false
    }
  ]);

  console.log(tasks)

  useEffect(() => {
    console.log("setting state test");
  }, []);

  function CreateTask(props) {
    const [note, setNote] = useState()

    function handleSubmit(e) {
      e.preventDefault();
      // alert("form submitted");
      props.setTasks(newtask => newtask.concat({id: Date.now(), note, complete: false}))
    }

    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Create New Task</legend>
          <input value={tasks.note} onChange={e => setNote(e.target.value)} placeholder="Add a new task" />
          <button>Add Task</button>
        </fieldset>
      </form>
    );
  }

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <CreateTask setTasks={setTasks}/>
      <div>
        {tasks.map(task => <Task key={task.id} note={task.note} complete={task.complete} />)}
      </div>
      {/* <div id="">{task}</div> */}
      <div id="status-buttons">
        <button>All</button>
        <button>Pending</button>
        <button>Completed</button>
      </div>
    </div>
  );
}

function Task(props) {
  return <div id="created-task">{props.note}</div>
}

export default App;
