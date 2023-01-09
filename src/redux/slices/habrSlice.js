/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import parse from '../../utils/parse.js';

const proxify = (url) => {
	const proxyURL = new URL(`https://api.allorigins.win/get?url=${encodeURIComponent(`${url}`)}`);
	return proxyURL.toString();
};

const fetchHabr = createAsyncThunk(
	'habr/fetchHabr',
	async () => {
		const url = proxify('https://habr.com/ru/rss/flows/develop/');
		const repsonse = await axios.get(url);
		return repsonse.data;
	},
);

const habrSlice = createSlice({
	name: 'habr',
	initialState: {
		data: {},
		status: '',
	},
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(fetchHabr.pending, (state) => {
			state.status = 'pending';
		});
		builder.addCase(fetchHabr.fulfilled, (state, { payload }) => {
			state.data = parse(payload);
			state.status = 'fulfilled';
		});
		builder.addCase(fetchHabr.rejected, (state) => {
			state.status = 'rejected';
		});
	},
});

const habrSelector = (state) => state.habr;

export { fetchHabr, habrSelector };
export default habrSlice.reducer;
