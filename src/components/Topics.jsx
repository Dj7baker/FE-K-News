import { useParams } from "react-router-dom";
import ArticlesList from "./ArticlesList";

const Topics = ({ topics }) => {
	const { topic } = useParams();
	const topicDescription = topics.filter((singleTopic) => {
		return singleTopic.slug === topic;
	})[0]?.description;

	return <ArticlesList topic={topic} topicDescription={topicDescription} />;
};

export default Topics;
