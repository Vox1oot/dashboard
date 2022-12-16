import React from 'react';
import Information from './components/Information.jsx';
import Tasks from './components/Tasks.jsx';

const Todo = () => (
	<div className="todo-container">
		<div className="todo">
			<Information />
			<Tasks />
		</div>
	</div>
);

export default Todo;
