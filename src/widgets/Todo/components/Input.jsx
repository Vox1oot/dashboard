import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, addToDo } from '../../../redux/slices/todosSlice.js';
import { ReactComponent as AddIcon } from '../../../img/icons/add-icon.svg';

const Input = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const Ids = useSelector(selectors.selectIds);

	const inputElem = useRef(null);

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newTask = { id: (Ids.at(-1) + 1), text: value, active: true };
		dispatch(addToDo(newTask));
		setValue('');
	};

	useEffect(() => {
		inputElem.current.focus();
	}, []);

	return (
		<form className="form" onSubmit={handleSubmit}>
			<div className="input-group footer flex">
				<input
					value={value}
					ref={inputElem}
					className="footer__input"
					type="text"
					placeholder="Новая задача..."
					maxLength="30"
					onChange={handleChange}
					required
				/>
				<button className="footer__btn btn-footer flex" type="submit" onSubmit={handleSubmit}>
					<AddIcon className="btn-footer__icon" />
				</button>
			</div>
		</form>
	);
};

export default Input;
