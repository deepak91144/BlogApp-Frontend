import React, { useState, useEffect } from "react";
import { deleteAPost, getAllPost } from "../../APIS/Post";
import { isAuthenticated } from "../../common functions/Auth";
import Header from "./Header";

const Post = () => {
	const [post, setPost] = useState([]);
	const getPost = async () => {
		const res = await getAllPost(isAuthenticated());
		console.log(res);
		setPost(res.data.post);
	};
	useEffect(() => {
		getPost();
	}, []);
	const deletePost = async (postId) => {
		const res = await deleteAPost(postId, isAuthenticated());
		if (res.status === 204) {
			alert("delete a post");
		}
		getPost();
	};
	return (
		<>
			<Header />
			<table border="2px">
				<thead>
					<th>Title</th>
					<th>Description</th>
					<th>actions</th>
				</thead>

				<tbody>
					{post.map((p, e) => {
						return (
							<>
								<tr>
									<td>{p.title}</td>
									<td>{p.description}</td>
									<td>
										<button
											onClick={() => {
												deletePost(p._id);
											}}
										>
											Delete
										</button>
									</td>
								</tr>
							</>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default Post;
