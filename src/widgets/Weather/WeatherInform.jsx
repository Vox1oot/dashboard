import React from 'react';

const getIconURL = (icon) => `http://openweathermap.org/img/w/${icon}.png`;

// eslint-disable-next-line no-unused-vars
const WeatherInform = ({ data: { main, weather } }) => {
	console.log('🚀 ~ file: WeatherInform.jsx:8 ~ WeatherInform ~ weather', weather[0].icon);

	return (
		<div className="weather__header weather-header flex">
			<img className="weather-header__icon" src={getIconURL(weather[0].icon)} alt="icon" />
			<span className="weather-header__temperature" style={{ color: '#fff' }}>{`${main.temp} °C`}</span>
		</div>
	);
};

export default WeatherInform;
