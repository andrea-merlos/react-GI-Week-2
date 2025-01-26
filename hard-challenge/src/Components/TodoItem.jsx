import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const TodoItem = ({ task, deleteTodo, editTodo }) => {
  return (
    <div className="TodoItem">
      <h3>{task.task}</h3>

      <Link to={`/task/${task.id}`}>
        <button className="details-btn">Details</button>
      </Link>

      <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />

      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
    </div>
  );
};
