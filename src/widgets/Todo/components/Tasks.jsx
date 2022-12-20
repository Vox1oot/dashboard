import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../../redux/slices/todosSlice.js';

import Task from './Task.jsx';

const Tasks = () => {
	const tasks = useSelector(selectors.selectAll);

	const currentTasks = tasks.map((task) => <Task key={task.id} propertys={task} />);

	return (
		<div className="tasks">
			<div className="tasks__container p-30">
				<ul className="tasks__list">
					{currentTasks}
				</ul>
			</div>
		</div>
	);
};

export default Tasks;
