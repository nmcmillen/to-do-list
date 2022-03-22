import './App.css';
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react';

function App() {
const [ todo, setTodo] = useState([])

useEffect(() => {
  console.log('setting state test')
}, [])

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <div id="input-create">
        <input type="text" />
        <button>Create To-Do</button>
      </div>
      <div>New Todos Go Here</div>
      <div id="status-buttons">
        <button>All</button>
        <button>Pending</button>
        <button>Completed</button>
      </div>
    </div>
  );
}

export default App;
