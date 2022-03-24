import "./App.css";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import CreateTask from "./CreateTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      note: "Give dog a bath",
      complete: true,
    },
    {
      id: 2,
      note: "Do laundry",
      complete: true,
    },
    {
      id: 3,
      note: "Vacuum floor",
      complete: false,
    },
  ]);
  // console logging tasks array for status updates
  console.log(tasks);

  useEffect(() => {
    console.log("setting state test");
  }, []);

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <CreateTask setTasks={setTasks} />
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
        <button>Pending</button>
        <button>Completed</button>
      </div>
    </div>
  );
}

// function CreateTask({setTasks}) {
//   const [note, setNote] = useState()

//   function handleSubmit(e) {
//     e.preventDefault();
//     // alert("form submitted");
//     setTasks(newtask => newtask.concat({id: Date.now(), note, complete: false}))
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <fieldset>
//         <legend>Create New Task</legend>
//         <input value={note} onChange={e => setNote(e.target.value)} placeholder="Add a new task" />
//         <button>Add Task</button>
//       </fieldset>
//     </form>
//   );
// }

// Creates the actual div/area and buttons for the actions on each task/note
function Task(props) {
  // function deletes task
  function handleDelete() {
    // Changes (setTasks) state to create new array. Filter runs on each item and if the task.id is not equal
    // to the clicked ID, it will return true and will go to new array. If value false it will be skipped
    // and deleted 
    props.setTasks((state) => state.filter(task => task.id !== props.id));
  }

  // function updates the task status to complete true or false
  function handleComplete(id) {
    const updatedTasks = props.tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, complete: !task.complete };
      }
      return task;
    });
    props.setTasks(updatedTasks);
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
