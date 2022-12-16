const getDateAndTime = () => {
	const date = new Date();

	const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
	const optionsTime = { hour: 'numeric', minute: 'numeric' };

	return {
		currentDate: date.toLocaleDateString('ru', optionsDate),
		currentTime: date.toLocaleDateString('ru', optionsTime).split(',')[1],
	};
};

export const getHour = () => {
	const { currentTime } = getDateAndTime();
	const hour = +currentTime.split(':')[0];
	return hour;
};

export default getDateAndTime;
