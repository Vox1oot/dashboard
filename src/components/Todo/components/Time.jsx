import React, { useState, useEffect } from 'react';

const getDate = () => {
	const date = new Date();

	const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
	const optionsTime = { hour: 'numeric', minute: 'numeric' };

	return {
		currentDate: date.toLocaleDateString('ru', optionsDate),
		currentTime: date.toLocaleDateString('ru', optionsTime).split(',')[1],
	};
};

console.log(getDate());

const Time = () => {
	const [state, setState] = useState(getDate());

	useEffect(() => {
		const interval = setInterval(() => {
			setState(getDate());
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="today pt-pb-5">Сегодня</div>
			<div className="today-date pt-pb-5">{state.currentDate}</div>
			<div className="today-time pt-pb-5">
				Текущее время:
				<span>{state.currentTime}</span>
			</div>
		</>
	);
};

export default Time;
