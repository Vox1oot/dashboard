import React from 'react';
import Posts from './Posts.jsx';

const Feed = ({ description, posts }) => (
	<div className="habr-feed">
		<div className="habr-feed__description">
			{ description }
		</div>
		<Posts posts={posts} />
	</div>
);

export default Feed;
