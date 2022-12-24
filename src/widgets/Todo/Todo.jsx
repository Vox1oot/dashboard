import React from 'react';
import Header from './components/Header.jsx';
import Tasks from './components/Tasks.jsx';
import Input from './components/Input.jsx';

const Todo = () => (
	<section className="todo">
		<div className="todo-container">
			<Header />
			<Tasks />
			<Input />
		</div>
	</section>
);

export default Todo;
