import axios from "axios";
const myApi = axios.create({
	baseURL: "https://k-nc-news.cyclic.app/api",
});

export const fetchArticles = (topic) => {
	return myApi
		.get(`/articles`, { params: { topic } })
		.then((res) => {
			return res.data.articles;
		})
		.catch((err) => console.log(err));
};

export const fetchTopics = () => {
	return myApi
		.get(`/topics`)
		.then((res) => {
			return res.data.topics;
		})
		.catch((err) => console.log(err));
};
export const fetchTopicBySlug = (topic_slug) => {
	return myApi
		.get(`/topics/${topic_slug}`)
		.then((res) => {
			return res.data.topic;
		})
		.catch((err) => console.log(err));
};

export const fetchSingleArticle = (article_id) => {
	return myApi
		.get(`/articles/${article_id}`)
		.then((res) => {
			return res.data.article;
		})
		.catch((err) => console.log(err));
};

export const fetchCommentsSection = (article_id) => {
	return myApi
		.get(`/articles/${article_id}/comments`)
		.then((res) => {
			return res.data.comments;
		})
		.catch((err) => console.log(err));
};

export const patchVotesById = (article_id, votes) => {
	return myApi
		.patch(`/articles/${article_id}`, { inc_votes: votes })
		.then((res) => {
			return res.data.article;
		})
		.catch((err) => console.log(err));
};

export const postComment = (article_id, comment) => {
	return myApi
		.post(`/articles/${article_id}/comments`, comment)
		.then((res) => res.data.comment)
		.catch((err) => console.log(err));
};
