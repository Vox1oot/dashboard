/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchWeather = createAsyncThunk(
	'weather/fetchWeather',
	async () => {
		const token = process.env.REACT_APP_WEATHER_TOKEN;
		const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
			params: {
				q: 'chelyabinsk',
				appid: token,
				units: 'metric',
				lang: 'ru',
			},
		});
		return response.data;
	},
);

const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		data: {},
		status: '',
	},
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(fetchWeather.pending, (state, action) => {
			console.log('ewfewf');
			state.status = 'downloading';
		});
		builder.addCase(fetchWeather.fulfilled, (state, { payload }) => {
			state.data = payload;
			state.status = 'fulfilled';
		});
		builder.addCase(fetchWeather.rejected, (state, action) => {
			state.status = 'rejected';
		});
	},
});

const weatherSelector = (state) => state.weather;

export { fetchWeather, weatherSelector };
export default weatherSlice.reducer;
