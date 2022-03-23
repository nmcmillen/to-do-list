import react from 'react'
import { useState, useEffect } from "react";
import App from './App';

export default function CreateTask({setTasks}) {
    const [note, setNote] = useState()
  
    function handleSubmit(e) {
      e.preventDefault();
      // alert("form submitted");
      setTasks(state => state.concat({id: Date.now(), note, complete: false}))
      setNote("")
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Create New Task</legend>
          <input value={note || ''} onChange={e => setNote(e.target.value)} placeholder="Add a new task" />
          <button>Add Task</button>
        </fieldset>
      </form>
    );
}

  