import { Link } from "react-router-dom";
import { BiTime, BiCommentDetail} from 'react-icons/bi'
import { BsHandThumbsUp } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import {CiCalendarDate} from 'react-icons/ci'

const ArticleCard = ({ article }) => {
	return (
		<Link key={article.article_id} to={`/articles/${article.article_id}`}>
			<div className="Article">
				<h3>{article.title}</h3>
				<p className="topic"> {article.topic}</p>
				<p className="card_details"><AiOutlineUser/> {article.author}</p>
				
				<p className="card_details"><BiCommentDetail/> {article.comment_count}</p>
				<p className="card_details"><BsHandThumbsUp/> {article.votes}</p>
				<p className="card_details_t"><CiCalendarDate/> {" "}
				{article.created_at &&
					new Date(article.created_at.slice(0, 10)).toLocaleDateString()}</p>
			</div>
		</Link>
	);
};

export default ArticleCard;
