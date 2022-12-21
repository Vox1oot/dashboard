import React from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, updateTodo } from '../../../redux/slices/todosSlice.js';

const Task = ({ propertys }) => {
	const currentTask = useSelector((state) => selectors.selectById(state, propertys.id));
	const dispatch = useDispatch();

	const handleChange = (e) => {
		console.log(e);
		dispatch(updateTodo({ id: propertys.id, changes: { active: !currentTask.active } }));
	};

	const messageClasses = cn('item-tasks__message ml-15 flex', {
		inactive: !currentTask.active,
	});

	return (
		<li className="tasks__item item-tasks flex">
			<div className="checkbox-wrapper">
				<div className="round">
					<input type="checkbox" id={`checkbox-${propertys.id}`} onChange={handleChange} />
					<label htmlFor={`checkbox-${propertys.id}`} />
				</div>
			</div>
			<div className={messageClasses}>{propertys.text}</div>
		</li>
	);
};

export default Task;
