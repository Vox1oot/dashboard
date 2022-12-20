import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todosSlice.js';

const store = configureStore({
	reducer: {
		todos: todoReducer,
	},
});

export default store;