import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeatherInform from './WeatherInform';
import { fetchWeather, weatherSelector } from '../../redux/slices/weatherSlice.js';

const Weather = () => {
	const { data, status } = useSelector(weatherSelector);

	console.log('🚀 ~ file: Weather.jsx:9 ~ Weather ~ status', status);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWeather());
	}, [dispatch]);

	console.log(data);

	return (
		<section className="weather">
			<div className="weather-container">
				{ /* Object.keys(data).length */ status === 'fulfilled' && <WeatherInform data={data} />}
			</div>
		</section>
	);
};

export default Weather;
