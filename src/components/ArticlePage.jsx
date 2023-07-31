import { fetchSingleArticle } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./articlePage.css";
import CommentsSection from "./CommentsSection";
import Loading from "./Loading";

import Votes from "./Votes";
import AddComments from "./AddComments";


function ArticlePage() {
	const [singleArticle, setSingleArticle] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { article_id } = useParams();
	

	useEffect(() => {
		const callApi = () => {
			setIsLoading(true);
			fetchSingleArticle(article_id).then((articleData) => {
				setSingleArticle(articleData);

				
			});
			setIsLoading(false);
		};
		callApi();
	}, [article_id]);

	if (isLoading) {
		return <Loading />;
	}



	return (
		<div className="articlePage">
			<h1 className="h1">{singleArticle.title}</h1>
			<h3 className="h3"> <span className="italics"> written by </span> <span className="bold">{singleArticle.author} </span> <span className="divider">|</span></h3>
			<h3 className="h3"><span className="bold">{singleArticle.topic}</span><span className="divider">|</span> </h3>
			<h4 className="h3">
				<span className="bold">{" "}
				{singleArticle.created_at &&
					new Date(singleArticle.created_at.slice(0, 10)).toLocaleDateString()}</span>
			</h4>
			<hr></hr>
			
			<p className="body">{singleArticle.body}</p>
			<hr></hr>
			<section className="voteAndC">
				<Votes
					article_id={article_id}
					// votes={singleArticle.votes}
					setSingleArticle={setSingleArticle}
					singleArticle={singleArticle}
				/>
				{/* <span className="likes-counter">{` Votes | ${singleArticle.votes}`}</span> */}
				<span className="dot">•</span>
				<h4 className="count">Comments | {singleArticle.comment_count}</h4>
			</section>
			<section>
				{/* <h3 className="comments">Comments</h3> */}
				{/* <AddComments article_id={article_id}/> */}
				<CommentsSection article_id={article_id} />
			</section>
		</div>
	);
}

export default ArticlePage;
