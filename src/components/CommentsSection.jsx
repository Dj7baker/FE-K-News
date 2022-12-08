import { useState } from "react";
import { fetchCommentsSection } from "../utils/api";
import { useEffect } from "react";
import { BsHandThumbsUp } from "react-icons/bs";

function CommentsSection({ article_id }) {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetchCommentsSection(article_id).then((commentData) => {
			setComments(commentData);
		});
	}, [article_id]);

	console.log(comments);
	return (
		<div className="each-comment">
			{comments.map((comment) => {
				return (
					<ul className="comment" key={comment.comment_id}>
						<h4>
							@{comment.author} ·{" "}
							{comment.created_at &&
								new Date(comment.created_at.slice(0, 10)).toLocaleDateString()}
						</h4>
						<h3>{comment.body}</h3>
                        <h4><BsHandThumbsUp/> {comment.votes}</h4>
					</ul>
				);
			})}
		</div>
	);
}

export default CommentsSection;
