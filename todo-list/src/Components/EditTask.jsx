import React from 'react';
import './EditTask.css';

const EditTask = ({ setIsEditiong}) => {
    function handleSave (){
        setIsEditiong(false) ;
    }
  return (
    <div className="edit-task-container">
      <button className="close-button" onClick={()=> setIsEditiong(false)}>✕</button>
      <h1>Edit the Task</h1>
      <input type="text" value={'from the task id'} placeholder="Edit the task" className="edit-task-input" />
      <button onClick={handleSave} className="edit-task-button">Save</button>
    </div>
  );
};

export default EditTask;
