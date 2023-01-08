import React from 'react';

const Posts = ({ posts }) => (
	<div className="habr-posts">
		{ posts.map((item, index) => (
			// eslint-disable-next-line react/no-array-index-key
			<div className="posts-item" key={index}>
				<div className="posts-item__title">
					{item.title}
				</div>
			</div>
		)) }
	</div>
);

export default Posts;
