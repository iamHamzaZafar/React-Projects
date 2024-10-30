import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import DisplayTask from "./Components/DisplayTask";

function App() {
  const [task, setTask] = useState([]);
  const[isEditing , setIsEditiong] = useState(false) ;

  function addTask(inputText) {
    const newTask = {
      id: Date.now(),
      desc: inputText,
      isCompleted: false,
    };

    console.log(newTask);
    setTask([...task, newTask]);
    console.log(task);
  }

  function deleteTask(task_id) {
    console.log("task id is:", task_id);
    const filterTask = task.filter((task) => task.id != task_id);
    setTask(filterTask);
  }

  function completeTask(task_id) {
    const updatedTasks = task.map((t) =>
      t.id === task_id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTask(updatedTasks);
  }

  return (
    <div className="app">
      <Input addTask={addTask} />
      <div className="full-width">
        <DisplayTask
          isEditing={isEditing}
          setIsEditiong={setIsEditiong}
          completeTask={completeTask}
          deleteTask={deleteTask}
          task={task}
        />
      </div>
    </div>
  );
}

export default App;
