import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeatherInform from './WeatherInform';
import { fetchWeather, weatherSelector } from '../../redux/slices/weatherSlice.js';

const Weather = () => {
	const { data, status } = useSelector(weatherSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWeather());
	}, [dispatch]);

	switch (status) {
		case 'pending':
			return <div className="downloading">Загрузка...</div>;
		case 'rejected':
			return <div className="rejected">Ошибка загрузка данных...</div>;
		default:
			break;
	}

	return (
		<section className="weather">
			<div className="weather-container">
				{ status === 'fulfilled' && <WeatherInform data={data} /> }
			</div>
		</section>
	);
};

export default Weather;
