import "./App.css";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import CreateTask from "./CreateTask";
import trash from "./images/trash.png";
import Task from "./Task";

function App(props) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // console logging tasks array for status updates
  console.log(tasks);

  // only run when first rendered to pull local storage if it exists
  // pulls from the stringified data so have to parse to put in array again
  // using "keytasklist" as the KEY argument which I understand as key or reference to the data to fetch
  useEffect(() => {
    if (localStorage.getItem("keytasklist")) {
      setTasks(JSON.parse(localStorage.getItem("keytasklist")));
    }
  }, []);

  // local storage setup for when "tasks" changes it will save to local storage
  // can't store "tasks" array so have to stringify since local storage only accepts strings of text
  useEffect(() => {
    localStorage.setItem("keytasklist", JSON.stringify(tasks));
  }, [tasks]);

  // SETTING "tasks" TO NEW VARIABLE SO IT CAN BE FILTERED IN THE RETURN STATEMENT
  let filterTasks = tasks.filter(item => item.status !== "deleted");

  if (filter === "pending") {
    filterTasks = filterTasks.filter((task) => !task.complete);
  } else if (filter === "completed") {
    filterTasks = filterTasks.filter((task) => task.complete);
  }

  function completeAll() {
    let checkall = [...tasks];
    checkall.forEach((status) => (status.complete = true));
    setTasks(checkall);
    // let completed = tasks.forEach(status => status.complete = true);
    // setTasks(completed)
  }

  function deselectAll() {
    let deselect = [...tasks];
    deselect.forEach((status) => {
      status.complete = false
    })
    setTasks(deselect);
  }

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <CreateTask setTasks={setTasks} />
      <h3>{tasks.filter((task) => !task.complete && task.status !=="deleted").length} tasks left</h3>

      <div>
        {filterTasks.map((task) => (
          <Task
            tasks={tasks}
            setTasks={setTasks}
            id={task.id}
            key={task.id}
            note={task.note}
            complete={task.complete}
            status={task.status}
          />
        ))}
      </div>

      <div id="status-buttons">
        <button id="all-btn" onClick={() => setFilter("all")}>
          All
        </button>
        <button id="pending-btn" onClick={() => setFilter("pending")}>
          Pending
        </button>
        <button id="completed-btn" onClick={() => setFilter("completed")}>
          Completed
        </button>
        <button id="complete-all-btn" onClick={completeAll}>
          Complete All
        </button>
        <button id="deselect-btn" onClick={deselectAll}>
          Deselect All
        </button>
      </div>
    </div>
  );
}

export default App;