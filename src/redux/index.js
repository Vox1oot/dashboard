import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todosSlice.js';
import vacanciesReducer from './slices/vacanciesSlice.js';

const store = configureStore({
	reducer: {
		todos: todoReducer,
		vacancies: vacanciesReducer,
	},
});

export default store;
