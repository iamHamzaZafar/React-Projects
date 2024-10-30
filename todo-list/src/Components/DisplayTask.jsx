import React, { useState } from "react";
import "./Display.css";
import EditTask from "./EditTask";

const DisplayTask = ({
  task,
  deleteTask,
  completeTask,
  isEditing,
  setIsEditiong,
}) => {
  return (
    <>
      <h1>Tasks List:</h1>
      {task.length < 1 ? (
        <p> There is no task </p>
      ) : (
        <div>
          {task.map((task) => {
            return (
              <div className="display-task" key={task.id}>
                <input onChange={() => completeTask(task.id)} type="checkbox" />
                <h2 className={task.isCompleted ? "completed" : ""}>
                  {task.desc}
                </h2>
                <div className="button-container">
                  <button disabled={task.isCompleted} onClick={() => setIsEditiong(true)}>Edit</button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {
        (task.length > 0 && isEditing) ? (<div>{isEditing && <EditTask setIsEditiong={setIsEditiong} />}</div>) : " "
      }
      
    </>
  );
};

export default DisplayTask;
