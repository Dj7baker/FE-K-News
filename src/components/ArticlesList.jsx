import { useEffect } from "react";
import { fetchArticles } from "../utils/api";
import { useState } from "react";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";

function ArticlesList({ topic = "", topicDescription }) {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const callApi = async () => {
			setIsLoading(true);
			await fetchArticles(topic.toLowerCase()).then((articlesData) => {
				setArticles(articlesData);
			});
			setTimeout(() => {
				console.log("Test");
				setIsLoading(false);
			}, 100);
		};
		callApi();
	}, [topic]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="Articles">
			<h1 className="h1">{topicDescription ? topic : "Articles"}</h1>
			{topicDescription ? <h2>{topicDescription}</h2> : null}
			<div className="articlesWrapper">
				{articles.map((article) => (
					<ArticleCard
						className="Article"
						key={article.article_id}
						article={article}
					/>
				))}
			</div>
		</div>
	);
}

export default ArticlesList;
