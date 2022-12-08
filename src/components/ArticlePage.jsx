import { fetchSingleArticle } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./articlePage.css"
import CommentsSection from "./CommentsSection";


function ArticlePage() {
	const [singleArticle, setSingleArticle] = useState({});
	const { article_id } = useParams();

	useEffect(() => {
		fetchSingleArticle(article_id).then((articleData) => {
			setSingleArticle(articleData);
		});
	}, [article_id]);

	return (
		<div className="articlePage">
			<h1 className="h1">{singleArticle.title}</h1>
			<h3 className="h3">Author: {singleArticle.author}</h3>
			<h3 className="h3">{singleArticle.topic}</h3>
			<h4 className="h3">
				Date:{" "}
				{singleArticle.created_at &&
					new Date(singleArticle.created_at.slice(0, 10)).toLocaleDateString()}
			</h4>
			<p className="body">{singleArticle.body}</p>
			<section>
				<h4 className="count">Votes {singleArticle.votes}</h4>
				<h4 className="count">Comment Count {singleArticle.comment_count}</h4>
			</section>
			<section>
				<h3 className="comments">Comments</h3>
				<CommentsSection article_id={article_id}/>
			</section>
		</div>
	);
}

export default ArticlePage;
