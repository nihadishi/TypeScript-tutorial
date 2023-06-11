import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCompleted } from "../slices/ToDoSlice";

function Footer({handleFilter}) {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className="selected" onClick={() => handleFilter("all")}>
            All
          </a>
        </li>
        <li>
          <a href="#/" onClick={() => handleFilter("active")}>Active</a>
        </li>
        <li>
          <a href="#/" onClick={() => handleFilter("completed")}>Completed</a>
        </li>
      </ul>

      <button onClick={() => dispatch(clearCompleted())} className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
