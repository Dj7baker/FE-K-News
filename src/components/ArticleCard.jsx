import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
	return (
		<Link key={article.article_id} to={`/articles/${article.article_id}`}>
			<div className="Article">
				<h3>{article.title}</h3>
				<p>Topic: {article.topic}</p>
				<p>Author: {article.author}</p>
				<p>Date: {article.created_at}</p>
				<p>Comments: {article.comment_count}</p>
			</div>
		</Link>
	);
};

export default ArticleCard;
