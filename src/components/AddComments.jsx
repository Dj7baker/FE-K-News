import React from "react";
import { useState } from "react";
import { postComment } from "../utils/api";

function AddComments({ article_id, comments, setComments }) {
	const [comment, setComment] = useState("");
	const handleSubmit = async () => {
		const newComment = await postComment(article_id, { body: comment, username: "grumpy19" });
		console.log('new comment!!!!', newComment)
        setComment("");
		setComments([newComment, ...comments]);
	};

	console.log(comment);
	return (
		<div>
			<input
            className="input"
            placeholder="Add a comment..."
				type="text"
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>
			<button className="submit" onClick={() => handleSubmit()}>Comment</button>
		</div>
	);
}

export default AddComments;
