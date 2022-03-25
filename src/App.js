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

  // function deleteAll () {
  //   // setTasks to an empty array ([])
  // }

  // SETTING "tasks" TO NEW VARIABLE SO IT CAN BE FILTERED IN THE RETURN STATEMENT
  let filterTasks = tasks;

  if (filter === "pending") {
    filterTasks = tasks.filter((task) => !task.complete);
  } else if (filter === "completed") {
    filterTasks = tasks.filter((task) => task.complete);
  }

  // function handleComplete() {
  //   // newTask creates a new object that you can modify and push
  //   let newTask = [...props.tasks];
  //   let completed = newTask.find((status) => status.id === props.id);
  //   if (completed.complete === true) {
  //     completed.complete = false;
  //   } else {
  //     completed.complete = true;
  //   }
  //   // true ? false : true
  //   props.setTasks(newTask);
  // }

  function completeAll () {
    let newTask = [...tasks]
    newTask.filter(status => status.complete = true);
    setTasks(newTask)
  }

  // function completeAll () {
  //   let completed = tasks.filter(status => status.complete = true);
  //   setTasks(completed)
  // }

  // loop over each item in tasks
  // if complete status is equal to false
  // then change it to true 


  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <CreateTask setTasks={setTasks} />
      <h3>{tasks.filter((task) => !task.complete).length} tasks left</h3>

      <div>
        {filterTasks.map((task) => (
          <Task
            tasks={tasks}
            setTasks={setTasks}
            id={task.id}
            key={task.id}
            note={task.note}
            complete={task.complete}
          />
        ))}
      </div>

      <div id="status-buttons">
        <button id="all-btn" onClick={() => setFilter("all")}>All</button>
        <button id="pending-btn" onClick={() => setFilter("pending")}>Pending</button>
        <button id="completed-btn" onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={completeAll}>Complete All</button>
      </div>
    </div>
  );
}

export default App;
