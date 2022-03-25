import react from 'react'
import { useState, useEffect } from "react";
import App from './App';
import trash from "./images/trash.png";

// Creates the actual div/area and buttons for the actions on each task/note
export default function Task (props) {
    // function deletes task
    function handleDelete() {
      // Changes (setTasks) state to create new array. Filter runs on each item and if the task.id is not equal
      // to the clicked ID, it will return true and will go to new array. If value false it will be skipped
      // and deleted
      props.setTasks((state) => state.filter((task) => task.id !== props.id));
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

    // function completeAll () {
        

    // }
  
    return (
      <div id="created-task">
        {props.note}
        <div id="task-buttons">
          <input
            className="check-btn"
            id={props.id}
            type="checkbox"
            onChange={() => handleComplete(props.id)}
            defaultChecked={props.complete}
          ></input>
          <button id="delete-btn" onClick={handleDelete}>
            <img id="trash-btn" src={trash} />
          </button>
        </div>
        {/* create a complete all button function here??? */}
      </div>
    );
  }