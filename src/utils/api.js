import axios from "axios";
const myApi = axios.create({
  baseURL: "https://k-nc-news.cyclic.app/api",
});

export const fetchArticles = (topic) => {
  return myApi.get(`/articles`, { params: { topic } }).then((res) => {
    return res.data.articles;
  });
};

export const fetchTopics = () => {
    return myApi.get(`/topics`).then((res) => {
      return res.data.topics;
    });
  };
  export const fetchTopicBySlug = (topic_slug) => {
    return myApi.get(`/topics/${topic_slug}`).then((res) => {
      return res.data.topic;
    });
  };

  export const fetchSingleArticle = (article_id) => {
    return myApi.get(`/articles/${article_id}`).then((res) => {
      return res.data.article;
    });
  };

  export const fetchCommentsSection = (article_id) => {
    return myApi.get(`/articles/${article_id}/comments`).then((res) => {
      return res.data.comments;
    });
  };
  