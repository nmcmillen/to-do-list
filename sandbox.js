function completeAll () {

  let newTask = [...tasks]
  let completed = newTask.filter(status => status.complete === false);
  console.log(completed)
  if (completed.complete === false) {
    completed.complete = true
  }
  setTasks(newTask)
}




Josh example complete with sandwishes
  // function Button(props){
    //   function handleClick(e) {
      //     props.setSandwiches((state) => {
        //       console.log(state)
        //       let targetSW = sandwiches.find(sw => sw.id === props.sandwhichId)
        //       targetSW.bread = 'lettuce wrap';
        
        //       console.log(targetSW)
        //       return sandwiches
        //     })
        //   } 
    // }

Todo complete item code
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

Another todo complete item example
  // ***FIND HOW TO DO THIS OTHER WAY***
  // const handleComplete = (id) => {
  //   let mapped = props.tasks.map(task => {
  //     return task.id == id ? { ...task, complete: !task.complete } : { ...task};
  //   });
  //   props.setTasks(mapped);
  // }

This is the original Create Task code before moved to own component
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

  // function showCompleted () {
  //   let newCompleted = [...tasks]
  //   let completed = newCompleted.filter(task => task.complete)
  //   if (completed.complete === true) {
  //     // console.log(completed)
  //     setTasks(newCompleted)
  //   }
  // }

  
  // ***THESE WORK BUT DELETE ITEMS*** FIND ARRAY METHOD THAT SORT BUT DOESN'T CREATE NEW ARRAY
  // function showCompleted () {
  //   let completed = tasks.filter(task => task.complete)
  //   setTasks(completed)
  // }

  // function showPending () {
  //   let pending = tasks.filter(task => !task.complete)
  //   setTasks(pending)
  // }