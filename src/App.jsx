import React from 'react';
import Todo from './widgets/Todo/Todo';
import Vacancy from './widgets/Vacancy/Vacancy';

const App = () => (
	<div className="App">
		<div className="main-container grid">
			<Todo />
			<Vacancy />
		</div>
	</div>
);

export default App;
