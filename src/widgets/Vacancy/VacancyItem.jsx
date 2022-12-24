import React from 'react';

const VacancyItem = ({
	props: {
		// eslint-disable-next-line no-unused-vars
		name, salary, alternate_url: url, ...rest
	},
}) => (
	<div className="vacancy__item vacancy-item">
		<div className="vacancy-item__name">
			{name}
		</div>
		<footer className="vacancy-item__footer flex">
			<div className="vacancy-item__salary flex">
				Зарплата:
				{' '}
				{ salary ? salary.from || salary.to : 'не указана' }
			</div>
			<form action={url} target="_blank">
				<button type="submit" className="vacancy-item__btn">Просмотреть</button>
			</form>
		</footer>
	</div>
);

export default VacancyItem;
