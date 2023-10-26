import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <div>
        <FaEdit className="edit-icon" onClick={() => editTodo(task.id)} />
        <FaTrash className="delete-icon" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};