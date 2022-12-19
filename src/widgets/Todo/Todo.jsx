import React from 'react';
import Header from './components/Header.jsx';
import Tasks from './components/Tasks.jsx';

const Todo = () => (
	<div className="todo">
		<div className="todo-container">
			<Header />
			<Tasks />
		</div>
	</div>
);

export default Todo;
