import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHabr, habrSelector } from '../../redux/slices/habrSlice';
import Feed from './Feed.jsx';

const Habr = () => {
	const { data, status } = useSelector(habrSelector);

	console.log('🚀 ~ file: Habr.jsx:16 ~ Habr ~ status', status);

	console.log('🚀 ~ file: Habr.jsx:16 ~ Habr ~ data', data);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchHabr());
	}, [dispatch]);

	return (
		<section className="habr">
			<div className="habr-container">
				{ status === 'fulfilled'
					? <Feed description={data.feed.description} posts={data.posts} />
					: 'Идёт загрузка...'}
			</div>
		</section>
	);
};

export default Habr;
