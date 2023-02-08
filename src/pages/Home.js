import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getAllPost } from "../APIS/Post";
import Header from "./Header";

const Home = () => {
	const [post, setPost] = useState([]);
	const fetchPost = async () => {
		const res = await getAllPost();
		setPost(res.data.post);
	};
	useEffect(() => {
		fetchPost();
	}, []);

	return (
		<>
			<Header />
			<div className="container">
				{post.map((p, e) => {
					return (
						<>
							<div className="prodCon">
								<h4>
									<NavLink to={`/post/${p._id}`}>{p.title}</NavLink>
								</h4>
								<p>{p.description.substr(0, 3)}...</p>
								<NavLink to={`/post/${p._id}`}>
									<button>Read More...</button>
								</NavLink>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};

export default Home;
