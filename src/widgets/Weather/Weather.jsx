import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeatherInform from './WeatherInform';
import { fetchWeather, weatherSelector } from '../../redux/slices/weatherSlice.js';

const Weather = () => {
	const { data, status } = useSelector(weatherSelector);

	console.log('🚀 ~ file: Weather.jsx:9 ~ Weather ~ data', data);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWeather());
	}, [dispatch]);

	return (
		<section className="weather">
			<div className="weather-container">
				{ status === 'fulfilled' && <WeatherInform data={data} />}
			</div>
		</section>
	);
};

export default Weather;
