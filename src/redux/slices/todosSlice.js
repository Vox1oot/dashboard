import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const todosAdapter = createEntityAdapter();
// { ids: [], entities: {} }
const initialState = todosAdapter.getInitialState({
	ids: [1], entities: { 1: { id: 1, text: 'Почистить зубы', active: true } },
});

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addToDo: todosAdapter.addOne,
		removeToDo: todosAdapter.removeOne,
		updateTodo: todosAdapter.updateOne,
	},
});

export const selectors = todosAdapter.getSelectors((state) => state.todos);
export const { addToDo, removeToDo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;
