import React from 'react';

const TasksLists = ({ tasks }) => (
	<div className="tasks__container p-30">
		<ul className="tasks__list">
			{tasks}
		</ul>
	</div>
);

export default TasksLists;
