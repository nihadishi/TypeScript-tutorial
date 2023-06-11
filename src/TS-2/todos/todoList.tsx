import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import Footer from "./Foot";
import "../index.css";
import { getTodos, handleCompleted, removeToDo } from "./TodoSlice";

function ToDoList() {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("dispatched");

        const newTodos = getTodos();
        dispatch(newTodos);
    }, [dispatch]);

    const { data, error, loading } = useSelector((state) => state);
    console.log(data);
    const [filter, setfilter] = useState < string > ("all");
    const handleFilter = (selectedFilter) => {
        setfilter(selectedFilter);
    };

    const filteredTodos = data.filter((todo) => {
        if (filter === "active") {
            return !todo.completed;
        } else if (filter === "completed") {
            return todo.completed;
        } else {
            return true;
        }
    });
    console.log(data);
    const handle = (todo) => {
        dispatch(handleCompleted(todo));
    };
    return (
        <>
            <ul className="todo-list">
                {filteredTodos &&
                    filteredTodos.map((todo) =>
                        todo.completed ? (
                            <li key={todo.id} className="completed">
                                <div className="view">
                                    <input
                                        onChange={() => handle(todo)}
                                        className="toggle"
                                        checked={todo.completed}
                                        type="checkbox"
                                    />
                                    <label>{todo.title}</label>
                                    <button
                                        onClick={() => dispatch(removeToDo(todo))}
                                        className="destroy"
                                    ></button>
                                </div>
                            </li>
                        ) : (
                            <li key={todo.id}>
                                <div className="view">
                                    <input
                                        className="toggle"
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => handle(todo)}
                                    />
                                    <label>{todo.title}</label>
                                    <button
                                        onClick={() => dispatch(removeToDo(todo))}
                                        className="destroy"
                                    ></button>
                                </div>
                            </li>
                        )
                    )}
            </ul>
            <Footer handleFilter={handleFilter} />
        </>
    );
}

export default ToDoList;