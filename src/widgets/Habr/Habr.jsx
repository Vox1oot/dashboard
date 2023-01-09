import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHabr, habrSelector } from '../../redux/slices/habrSlice';
import Feed from './Feed.jsx';

const Habr = () => {
	const { data, status } = useSelector(habrSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchHabr());
	}, [dispatch]);

	switch (status) {
		case 'pending':
			return <div className="downloading">Загрузка...</div>;
		case 'rejected':
			return <div className="rejected">Ошибка загрузка данных...</div>;
		default:
			break;
	}

	return (
		<section className="habr">
			<div className="habr-container">
				{ status === 'fulfilled' && <Feed description={data.feed.description} posts={data.posts} />}
			</div>
		</section>
	);
};

export default Habr;
