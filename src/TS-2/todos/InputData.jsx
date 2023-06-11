import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDO, addTodo } from "../slices/ToDoSlice";

function InputData() {
  const [newToDo, setNewToDo] = useState({
    id: Math.floor(Math.random() * 1000),
    title: "",
    completed: false,
  });
  const dispatch = useDispatch();

  const addNewToDo = () => {
    dispatch(addTodo(newToDo));
    setNewToDo({
      id: Math.floor(Math.random() * 1000),
      title: "",
      completed: false,
    });
  };

  const handleInputChange = (e) => {
    setNewToDo({
      ...newToDo,
      title: e.target.value,
    });
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      addNewToDo();
      e.target.value = ""; 
    }
  };

  return (
    <form>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={newToDo.title}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
      />
    </form>
  );
}

export default Form;
