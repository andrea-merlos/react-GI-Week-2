import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const TaskDetail = ({ todos, setTodos }) => {
  const { taskId } = useParams();
  const task = todos.find((t) => t.id === taskId);

  const [details, setDetails] = useState(task ? task.details : "");

  const navigate = useNavigate();

  const handleSaveDetails = () => {
    if (task) {
      setTodos(
        todos.map((todo) => (todo.id === taskId ? { ...todo, details } : todo))
      );
    }
  };

  const handleGoBack = () => {
    navigate("/");
  };

  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <div className="task-detail">
      <h2>Task Details</h2>
      <p>
        <strong>Task:</strong> {task.task}
      </p>
      <p>
        <strong>Status:</strong> {task.completed ? "Completed" : "Pending"}
      </p>

      <div className="task-details-section">
        <strong>Details:</strong>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Add details here..."
        />

        {task.details && (
          <div className="saved-details">
            <p>
              <strong>Saved Details:</strong> {task.details}
            </p>
          </div>
        )}
        <button onClick={handleSaveDetails} className="save-details-btn">
          Save Details
        </button>
      </div>

      <button onClick={handleGoBack} className="go-back-btn">
        Go Back to To-Do List
      </button>
    </div>
  );
};
