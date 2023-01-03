import React from 'react';

const getIconURL = (icon) => `http://openweathermap.org/img/w/${icon}.png`;
const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

// eslint-disable-next-line no-unused-vars
const WeatherInform = ({ data: { main, weather, name } }) => (
	<>
		<div className="weather__title">
			Температура в городе
			{' '}
			{name}
		</div>
		<div className="weather__description">{capitalize(weather.at(-1).description)}</div>
		<div className="weather__main weather-main">
			Сейчас
			<div className="weather-main__icon">
				<img src={getIconURL(weather.at(-1).icon)} alt="icon" />
			</div>
			<span className="weather-main__temperature">{`${main.temp} °C`}</span>
		</div>
		<div className="weather__footer">
			<span />
		</div>
	</>
);

export default WeatherInform;
