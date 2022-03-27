import trash from "./images/trash.png";

// Creates the actual div/area and buttons for the actions on each task/note
export default function Task(props) {
  // function deletes task

  // function handleDelete() {
  //   // Changes (setTasks) state to create new array. Filter runs on each item and if the task.id is not equal
  //   // to the clicked ID, it will return true and will go to new array. If value false it will be skipped
  //   // and deleted
  //   props.setTasks((state) => state.filter((task) => task.id !== props.id));
  // }

  function handleDelete() {
    let deleteTask = [...props.tasks];
    let deleted = deleteTask.find((change) => change.id === props.id);
    if (deleted.status === "active") {
      deleted.status = "deleted";
    }
    props.setTasks(deleteTask);
  }

  function handleComplete() {
    // newTask creates a new object that you can modify and push
    let newTask = [...props.tasks];
    let completed = newTask.find((status) => status.id === props.id);
    if (completed.complete === true) {
      completed.complete = false;
    } else {
      completed.complete = true;
    }
    // true ? false : true
    props.setTasks(newTask);
  }

  return (
    <div id="created-task">
      {props.note}
      <div id="task-buttons">
        <input
          className="check-btn"
          id={props.id}
          type="checkbox"
          onChange={() => handleComplete(props.id)}
          checked={props.complete}
        >
        </input>
        <button id="delete-btn" onClick={handleDelete}>
          <img id="trash-btn" alt="trash" src={trash} />
        </button>
      </div>
    </div>
  );
}
