import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todosSlice.js';
import vacanciesReducer from './slices/vacanciesSlice.js';
import weatherReducer from './slices/weatherSlice.js';

const store = configureStore({
	reducer: {
		todos: todoReducer,
		vacancies: vacanciesReducer,
		weather: weatherReducer,
	},
});

export default store;
