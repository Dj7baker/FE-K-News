import React from "react";
import { patchVotesById } from "../utils/api";
import { BsHandThumbsUp } from "react-icons/bs";
import "./articlePage.css";



const Votes = ({ article_id, setSingleArticle, singleArticle }) => {
    const {votes} = singleArticle
	const handleVotes = () => {
		setSingleArticle({ ...singleArticle, votes: votes + 1 });
		patchVotesById(article_id, 1);
	};

	return (
		<div >
			<button className="votes" onClick={() => handleVotes()}>
                <span className="spacing"><BsHandThumbsUp /></span>
				{/* <p>{votes}</p> */}
			</button>
            <span className="likes">{`Votes | ${votes}`}</span>
		</div>
	);
};

export default Votes;
