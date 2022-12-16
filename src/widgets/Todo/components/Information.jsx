import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import getDateAndTime, { getHour } from '../../../utils/getDateAndTime.js';

const Information = () => {
	const [state, setState] = useState(getDateAndTime());
	const classes = cn('header-container', {
		morning: getHour() >= 7 && getHour() <= 18,
		evening: getHour() > 18 || getHour() < 7,
	});

	console.log(getHour());

	useEffect(() => {
		const interval = setInterval(() => {
			setState(getDateAndTime());
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={classes}>
			<div className="header-information">
				<div className="today pt-pb-5">Сегодня</div>
				<div className="today__date pt-pb-5">{state.currentDate}</div>
				<div className="today__time pt-pb-5">
					Текущее время:
					<span>{state.currentTime}</span>
				</div>
			</div>
		</div>
	);
};

export default Information;
