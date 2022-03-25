import { useState } from "react";

export default function CreateTask({ setTasks }) {
  const [note, setNote] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    // alert("form submitted");
    setTasks((state) =>
      state.concat({ id: Date.now(), note, complete: false, status: "active" })
    );
    setNote("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        minLength="1"
        value={note || ""}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a new task"
      />
      <button>Add Task</button>
    </form>
  );
}
