import React, { useState, useEffect } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import addComment, { getComments } from "../APIS/Comment";
import { getSinglePost } from "../APIS/Post";
import { isAuthenticated } from "../common functions/Auth";
import Header from "./Header";

export const SinglePage = () => {
	const [error, setError] = useState({});
	const [post, setPost] = useState({});
	const { postId } = useParams();
	const [comments, setComments] = useState([]);
	const [commentData, setCommentData] = useState({
		comment: "",
		post: postId,
	});

	const getAPost = async (postId) => {
		const res = await getSinglePost(postId);
		setPost(res.data.post);
		console.log(res);
	};
	const fetchComment = async () => {
		const res = await getComments(postId, isAuthenticated());
		setComments(res.data.comment);
		console.log(res);
	};
	useEffect(() => {
		getAPost(postId);
	}, []);
	useEffect(() => {
		fetchComment();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCommentData((preVal) => {
			return { ...preVal, [name]: value };
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await addComment(commentData, isAuthenticated());
		fetchComment();

		setCommentData((preVal) => {
			return { ...preVal, comment: "" };
		});
	};
	return (
		<>
			<Header />
			<div className="singlePageCon">
				<div className="">
					<h1>{post.title}</h1>
					<p>{post.description}</p>

					<div>Put Your Comment</div>
					<form onSubmit={handleSubmit}>
						<textarea
							name="comment"
							onChange={handleChange}
							value={commentData.comment}
						/>
						<button type="submit">Submit</button>
					</form>
					<NavLink to="/">Home</NavLink>
					<div className="commentCon">
						{comments.map((c, i) => {
							return (
								<>
									<p>
										{c.user.name}:{c.comment}
									</p>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};
