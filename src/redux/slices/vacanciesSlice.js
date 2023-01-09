/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchVacancies = createAsyncThunk(
	'vacancies/fetchVacancies',
	async () => {
		const response = await axios.get('https://api.hh.ru/vacancies?area=104&text=javascript');
		return response.data;
	},
);

const vacanciesSlice = createSlice({
	name: 'vacancies',
	initialState: { items: [], status: '' },
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(fetchVacancies.pending, (state) => {
			state.status = 'pending';
		});
		builder.addCase(fetchVacancies.fulfilled, (state, { payload }) => {
			state.items = payload.items;
			state.status = 'fulfilled';
		});
		builder.addCase(fetchVacancies.rejected, (state) => {
			state.status = 'rejected';
		});
	},
});

export const vacancySelector = (state) => state.vacancies;
export default vacanciesSlice.reducer;
