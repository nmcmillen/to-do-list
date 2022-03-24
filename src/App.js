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
function Task (props) {
  // function deletes task
  function handleDelete() {
    // Changes (setTasks) state to create new array. Filter runs on each item and if the task.id is not equal
    // to the clicked ID, it will return true and will go to new array. If value false it will be skipped
    // and deleted 
    props.setTasks((state) => state.filter(task => task.id !== props.id));
  }

  // function updates the task status to complete true or false
  // function handleComplete(id) {
  //   const updatedTasks = props.tasks.map((task) => {
  //     // if this task has the same ID as the edited task
  //     if (id === task.id) {
  //       // use object spread to make a new object
  //       // whose `completed` prop has been inverted
  //       return { ...task, complete: !task.complete };
  //     }
  //     return task;
  //   });
  //   props.setTasks(updatedTasks);
  // }

  const handleComplete = (id) => {
    let mapped = props.tasks.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    props.setTasks(mapped);
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



    // {
    //   id: 1,
    //   note: "Give dog a bath",
    //   complete: true,
    // },
    // {
    //   id: 2,
    //   note: "Do laundry",
    //   complete: true,
    // },
    // {
    //   id: 3,
    //   note: "Vacuum floor",
    //   complete: false,
    // },