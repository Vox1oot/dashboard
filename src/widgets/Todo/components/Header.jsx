import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import getDateAndTime, { getHour } from '../../../utils/getDateAndTime.js';

import { ReactComponent as Light } from '../../../img/icons/light-icon.svg';

const Header = () => {
	const [state, setState] = useState(getDateAndTime());

	const classesHeader = cn('todo__header', 'header-todo', 'p-30', {
		morning: getHour() >= 7 && getHour() <= 18,
		evening: getHour() > 18 || getHour() < 7,
	});

	const classesLight = cn('light', {
		shining: getHour() > 18 || getHour() < 7,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setState(getDateAndTime());
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={classesHeader}>
			<div className="header-todo__light">
				<Light className={classesLight} />
			</div>
			<div className="header-todo__information information-todo">
				<div className="information-todo__text pt-pb-5">Сегодня</div>
				<div className="information-todo__date pt-pb-5">{state.currentDate}</div>
				<div className="information-todo__time pt-pb-5">
					Текущее время:
					<span>{state.currentTime}</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
