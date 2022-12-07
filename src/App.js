import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { fetchTopics } from "./utils/api";
import Navbar from "./components/Navbar";
import ArticlesList from "./components/ArticlesList";
import Topics from "./components/Topics";
import "./App.css";

function App() {
	const [topics, setTopics] = useState([]);
	useEffect(() => {
		fetchTopics().then((topicData) => {
			const updatedTopics = topicData.map((topic) => {
				return {
					...topic,
					slug: topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1),
				};
			});
			
			setTopics(updatedTopics);
		});
	}, []);

	return (
		<div className="App">
			<Navbar topics={topics} />
			<Routes>
				<Route path="/" element={<ArticlesList />} />
				<Route path="/topic/:topic" element={<Topics topics={topics} />} />
				<Route path="/articles" element={<ArticlesList />} />
			</Routes>
		</div>
	);
}

export default App;
