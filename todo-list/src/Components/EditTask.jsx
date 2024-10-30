import React, { useState, useEffect } from 'react';
import './EditTask.css';

const EditTask = ({ setIsEditiong, task, editId, updateTask }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const taskToEdit = task.find((t) => t.id === editId);
    if (taskToEdit) {
      setText(taskToEdit.desc);
    }
  }, [editId, task]);

  function handleSave() {
    updateTask(editId, text);
  }

  return (
    <div className="edit-task-container">
      <button className="close-button" onClick={() => setIsEditiong(false)}>
        ✕
      </button>
      <h1>Edit the Task</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="edit-task-input"
      />
      <button onClick={handleSave} className="edit-task-button">
        Save
      </button>
    </div>
  );
};

export default EditTask;
