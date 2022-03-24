import "./App.css";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import CreateTask from "./CreateTask";

function App() {
  const [tasks, setTasks] = useState([]);

  // console logging tasks array for status updates
  console.log(tasks);

  // only run when first rendered to pull local storage if it exists
  // pulls from the stringified data so have to parse to put in array again
  // using "keytasklist" as the KEY argument which I understand as key or reference to the data to fetch
  useEffect(() => {
    if (localStorage.getItem("keytasklist")) {
      setTasks(JSON.parse(localStorage.getItem("keytasklist")))
    }
  }, []);

  // local storage setup for when "tasks" changes it will save to local storage
  // can't store "tasks" array so have to stringify since local storage only accepts strings of text
  useEffect(() => {
    localStorage.setItem("keytasklist", JSON.stringify(tasks))
  }, [tasks]);


  // function deleteAll () {
  //   // setTasks to an empty array ([])
  // }

  
  // ***THESE WORK BUT DELETE ITEMS*** FIND ARRAY METHOD THAT SORT BUT DOESN'T CREATE NEW ARRAY
  function showCompleted () {
    let completed = tasks.filter(task => task.complete)
    setTasks(completed)
  }

  function showPending () {
    let pending = tasks.filter(task => !task.complete)
    setTasks(pending)
  }

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <CreateTask setTasks={setTasks} />
      <h3>{tasks.filter(task => !task.complete).length} tasks left</h3>
      <div>
        {tasks.map((task) => (
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
      {/* <div id="">{task}</div> */}
      <div id="status-buttons">
        <button>All</button>
        <button onClick={showPending}>Pending</button>
        <button onClick={showCompleted}>Completed</button>
      </div>
    </div>
  );
}

// Creates the actual div/area and buttons for the actions on each task/note
function Task (props) {
  // function deletes task
  function handleDelete() {
    // Changes (setTasks) state to create new array. Filter runs on each item and if the task.id is not equal
    // to the clicked ID, it will return true and will go to new array. If value false it will be skipped
    // and deleted 
    props.setTasks((state) => state.filter(task => task.id !== props.id));
  }

  function handleComplete () {
    // console.log("test complete state", state)
    // newTask creates a new object that you can modify and push
    let newTask = [...props.tasks]
    let completed = newTask.find(cmp => cmp.id === props.id)
    if (completed.complete === true) {
      completed.complete = false;
    } else {
      completed.complete = true;
    }
    // true ? false : true
    props.setTasks(newTask)
  }

  return (
    <div id="created-task">
      {props.note}
      <input
        id={props.id}
        type="checkbox"
        onChange={() => handleComplete(props.id)}
        defaultChecked={props.complete}
      ></input>
      <button onClick={handleDelete}>Delete</button>
      {/* create a delete all button function here??? */}
    </div>
  );
}

export default App;