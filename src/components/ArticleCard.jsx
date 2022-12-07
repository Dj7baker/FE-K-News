const ArticleCard = ({ article }) => {
	return (
		<div className="Article">
			<h3>{article.title}</h3>
			<p>Topic: {article.topic}</p>
			<p>Author: {article.author}</p>
			<p>Date: {article.created_at}</p>
			<p>Comments: {article.comment_count}</p>
		</div>
	);
};

export default ArticleCard;
