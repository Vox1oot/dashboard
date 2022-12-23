import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../../redux/slices/todosSlice.js';

import Task from './Task';
import TasksList from './TasksList';

const Tasks = () => {
	const tasks = useSelector(selectors.selectAll);

	const currentTasks = tasks.reduceRight((acc, task) => (
		[...acc, <Task key={task.id} propertys={task} />]
	), []);

	console.log(currentTasks);

	return (
		<div className="tasks">
			{ tasks.length !== 0
				? <TasksList tasks={currentTasks} />
				: <div className="tasks__empty flex">Список задач пуст...</div>}
		</div>
	);
};

export default Tasks;
