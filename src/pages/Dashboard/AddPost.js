import React, { useState } from "react";
import addAPost from "../../APIS/Post";

import { isAuthenticated } from "../../common functions/Auth";

const AddPost = () => {
	const [postDetails, setPostDetails] = useState({
		title: "",
		description: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setPostDetails((preVal) => {
			return { ...preVal, [name]: value };
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await addAPost(postDetails, isAuthenticated());
		console.log(res);
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						onChange={handleChange}
						name="title"
						placeholder="enter title"
					/>
				</div>
				<div>
					<input
						type="text"
						onChange={handleChange}
						name="description"
						placeholder="enter description"
					/>
				</div>

				<button type="submit">Sign Up</button>
			</form>
		</>
	);
};

export default AddPost;
