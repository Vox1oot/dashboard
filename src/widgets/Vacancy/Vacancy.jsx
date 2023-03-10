import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchVacancies, vacancySelector } from '../../redux/slices/vacanciesSlice.js';

import VacancyItem from './VacancyItem.jsx';

const Vacancy = () => {
	const vacancies = useSelector(vacancySelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchVacancies());
	}, [dispatch]);

	switch (vacancies.status) {
		case 'pending':
			return <div className="downloading downloading-vacancy">Загрузка...</div>;
		case 'rejected':
			return <div className="rejected">Ошибка загрузка данных...</div>;
		default:
			break;
	}

	return (
		<section className="vacancy">
			<div className="vacancy-container">
				<div className="vacancy__header">
					<span>Javascript вакансии в Челябинске</span>
				</div>
				<div className="vacancy__list">
					{vacancies.items.map((item) => <VacancyItem key={item.id} props={item} />)}
				</div>
			</div>
		</section>
	);
};

export default Vacancy;
