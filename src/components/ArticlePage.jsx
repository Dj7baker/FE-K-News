import { fetchSingleArticle } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./articlePage.css";
import CommentsSection from "./CommentsSection";
import Loading from "./Loading";
import { BsHandThumbsUp } from "react-icons/bs";

function ArticlePage() {
	const [singleArticle, setSingleArticle] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const { article_id } = useParams();
	const [likes, setLikes] = useState(0);
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		const callApi = async () => {
			setIsLoading(true);
			await fetchSingleArticle(article_id).then((articleData) => {
				setSingleArticle(articleData);
				setLikes(articleData.votes);
			});
			setIsLoading(false);
		};
		callApi();
	}, [article_id]);

	if (isLoading) {
		return <Loading />;
	}

	const handleClick = () => {
		if (isClicked) {
			setLikes(likes - 1);
		} else {
			setLikes(likes + 1);
		}
		setIsClicked(!isClicked);
	};

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
				<button className={`like-button-${isClicked}`} onClick={handleClick}>
					<BsHandThumbsUp />
					<span className="likes-counter">{` Votes | ${likes}`}</span>
				</button>
				<h4 className="count">Comments | {singleArticle.comment_count}</h4>
			</section>
			<section>
				<h3 className="comments">Comments</h3>
				<CommentsSection article_id={article_id} />
			</section>
		</div>
	);
}

export default ArticlePage;
