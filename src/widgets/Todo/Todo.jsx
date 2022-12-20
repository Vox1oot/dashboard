import React from 'react';
import Header from './components/Header.jsx';
import Tasks from './components/Tasks.jsx';
import Input from './components/Input.jsx';

const Todo = () => (
	<div className="todo">
		<div className="todo-container">
			<Header />
			<Tasks />
			<Input />
		</div>
	</div>
);

export default Todo;
