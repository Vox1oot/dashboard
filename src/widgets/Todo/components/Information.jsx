import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import getDateAndTime, { getHour } from '../../../utils/getDateAndTime.js';

import { ReactComponent as Light } from '../../../img/light.svg';

const Information = () => {
	const [state, setState] = useState(getDateAndTime());

	const classesHeader = cn('header-container', {
		morning: getHour() >= 7 && getHour() <= 18,
		evening: getHour() > 18 || getHour() < 7,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setState(getDateAndTime());
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={classesHeader}>
			<div className="header__light">
				<Light className="light shining" />
			</div>
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
