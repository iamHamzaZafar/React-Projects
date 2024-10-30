import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import DisplayTask from "./Components/DisplayTask";

//  project competed.
function App() {
  const [task, setTask] = useState([]);
  const [isEditing, setIsEditiong] = useState(false);
  const [editId, setEditId] = useState(null);

  function addTask(inputText) {
    const newTask = {
      id: Date.now(),
      desc: inputText,
      isCompleted: false,
    };
    setTask([...task, newTask]);
  }

  function deleteTask(task_id) {
    const filterTask = task.filter((task) => task.id !== task_id);
    setTask(filterTask);
  }

  function editTask(task_id) {
    setIsEditiong(true);
    setEditId(task_id);
  }

  function updateTask(task_id, updatedDesc) {
    const updatedTasks = task.map((t) =>
      t.id === task_id ? { ...t, desc: updatedDesc } : t
    );
    setTask(updatedTasks);
    setIsEditiong(false); // close edit mode after updating
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
          editTask={editTask}
          isEditing={isEditing}
          setIsEditiong={setIsEditiong}
          completeTask={completeTask}
          deleteTask={deleteTask}
          task={task}
          editId={editId}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
}

export default App;
