import { useState } from "react";
import { fetchCommentsSection } from "../utils/api";
import { useEffect } from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import Loading from "./Loading";
import AddComments from "./AddComments";
import "./articlePage.css";

function CommentsSection({ article_id }) {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	

	useEffect(() => {
		const callApi = async () => {
			setIsLoading(true);
			await fetchCommentsSection(article_id).then((commentData) => {
				setComments(commentData);
			});
			setIsLoading(false);
		};
		callApi();
	}, [article_id]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="each-comment">
			<AddComments article_id={article_id} comments={comments} setComments={setComments}/>
			{comments.map((comment) => {
				return (
					<div className="comment" key={comment.comment_id}>
						<h4 className="commentsID">
							@{comment.author} ·{" "}
							{comment.created_at &&
								new Date(comment.created_at.slice(0, 10)).toLocaleDateString()}
						</h4>
						<h3 className="commentsBody">{comment.body}</h3>
						<h4 className="comments">
							<BsHandThumbsUp /> {comment.votes}
						</h4>
					</div>
				);
			})}
		</div>
	);
}

export default CommentsSection;
