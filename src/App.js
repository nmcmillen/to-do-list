import logo from './logo.svg';
import './App.css';

function App() {
// set state

// useEffect

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <div id="input-create">
        <input type="text" />
        {/* <input ref={todoNameRef} type="text" /> */}
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
