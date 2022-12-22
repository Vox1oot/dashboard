import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../../redux/slices/todosSlice.js';

import Task from './Task.jsx';

const Tasks = () => {
	const tasks = useSelector(selectors.selectAll);

	console.log(tasks);

	const currentTasks = tasks.reduceRight((acc, task) => (
		[...acc, <Task key={task.id} propertys={task} />]
	), []);

	const renderTasks = () => {
		if (tasks.length === 0) {
			return (
				<div className="tasks__empty flex">Список задач пуст...</div>
			);
		}

		return (
			<div className="tasks__container p-30">
				<ul className="tasks__list">
					{currentTasks}
				</ul>
			</div>
		);
	};

	return (
		<div className="tasks">
			{ renderTasks() }
		</div>
	);
};

export default Tasks;
