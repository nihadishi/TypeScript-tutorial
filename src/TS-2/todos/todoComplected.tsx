import React from 'react'
import ToDoList from './todoList'

function Content() {
	return (
		<section className="main">
			<input className="toggle-all" type="checkbox" />
			<label htmlFor="toggle-all">
				Mark all as complete
			</label>
			<ToDoList />

		</section>
	)
}

export default Content