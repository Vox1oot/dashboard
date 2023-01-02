import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, weatherSelector } from '../../redux/slices/weatherSlice.js';

const Weather = () => {
	const weather = useSelector(weatherSelector);

	console.log('🚀 ~ file: Weather.jsx:8 ~ Weather ~ weather', weather);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWeather());
	}, [dispatch]);

	return (
		<section className="weather">
			Погода
		</section>
	);
};

export default Weather;
