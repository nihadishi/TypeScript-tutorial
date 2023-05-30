import React, { useState } from 'react'

const Todo = () => {
    // const [Datas, setDatas] = useState(['Have a Life', 'Have not a Life', 'You must it'])
    const Datas = {
        todos: [{
            name: 'Have a Life',
            complected: false,
        },
        {
            name: 'Have not a Life',
            complected: false,
        },
        {
            name: 'You must it',
            complected: false,
        }]
    }
    return (
        <>
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <form>
                        <input className="new-todo" placeholder="What needs to be done?" autoFocus />
                    </form>
                </header>

                <section className="main">
                    <input className="toggle-all" type="checkbox" />
                    <label >
                        Mark all as complete
                    </label>

                    <ul className="todo-list">
                        {Datas.todos.map(e =>
                            <li>
                                <div className="view">
                                    <input className="toggle" type="checkbox" />
                                    <label>{e.name}</label>
                                    <button className="destroy" onClick={() => { e.complected = true }}></button>
                                </div>
                            </li>
                        )}
                    </ul>
                </section>

                <footer className="footer">
                    <span className="todo-count">
                        <strong>2</strong>
                        items left
                    </span>

                    <ul className="filters">
                        <li>
                            <a href="#/" className="selected">All</a>
                        </li>
                        <li>
                            <a href="#/">Active</a>
                        </li>
                        <li>
                            <a href="#/">Completed</a>
                        </li>
                    </ul>

                    <button className="clear-completed">
                        Clear completed
                    </button>
                </footer>
            </section>

            <footer className="info">
                <p>Click to edit a todo</p>
                <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
        </>
    )
}

export default Todo