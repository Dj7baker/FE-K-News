import { Link } from "react-router-dom";

function Navbar({topics, setTopics}) {
 

	return (
		<div className="Navbar">
			<h1>K News</h1>
			<Link className="Link" to="/articles">Articles</Link>
      {topics.map((topic) => {
        return (
          <Link className="Link" key={topic.slug} to={`topic/${topic.slug}`}> {topic.slug}</Link> 
        )
      })}
		</div>
	);
}

export default Navbar;
