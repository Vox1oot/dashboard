import React from 'react';
import Todo from './widgets/Todo/Todo';
import Vacancy from './widgets/Vacancy/Vacancy';
import Weather from './widgets/Weather/Weather';
import Habr from './widgets/Habr/Habr';

const App = () => (
	<div className="App">
		<div className="main-container grid">
			<Todo />
			<Vacancy />
			<Weather />
			<Habr />
		</div>
	</div>
);

export default App;
