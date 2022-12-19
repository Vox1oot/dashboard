import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../../redux/slices/todosSlice.js';

import Task from './Task.jsx';

const Tasks = () => {
	const tasks = useSelector(selectors.selectAll);

	console.log(tasks);

	return (
		<div className="tasks">
			<div className="tasks__container p-30">
				<ul className="tasks__list">
					<Task />
				</ul>
			</div>
		</div>
	);
};

export default Tasks;
