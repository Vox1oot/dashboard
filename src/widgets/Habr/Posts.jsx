import React from 'react';

const Posts = ({ posts }) => (
	<div className="habr-posts">
		{ posts.map((item, index) => (
			// eslint-disable-next-line react/no-array-index-key
			<div className="posts-item post-item_hover" key={index}>
				<div className="posts-item__title">
					{item.title}
				</div>
				<div className="posts-item__link">
					<a
						href={item.url}
						target="_blank"
						rel="noreferrer"
					>
						Читать далее
					</a>
				</div>
				<div className="posts-item__main">
					<div className="posts-item__description">
						{item.description
							.replaceAll(/<[^>]*>/g, '')
							.replace('Читать далее', '')}
					</div>
				</div>
			</div>
		)) }
	</div>
);

export default Posts;
