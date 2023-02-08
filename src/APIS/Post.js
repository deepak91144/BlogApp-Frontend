import axios from "axios";

const addAPost = async (post, token) => {
	return await axios({
		method: "post",
		url: "http://localhost:8000/api/v1/post/add",

		headers: { Authorization: `Bearer ${token}` },
		data: post,
	});
};
const getAllPost = async (token) => {
	return await axios({
		method: "get",
		url: "http://localhost:8000/api/v1/post",
	});
};
const deleteAPost = async (postId, token) => {
	return await axios({
		method: "delete",
		url: `http://localhost:8000/api/v1/post/delete/${postId}`,

		headers: { Authorization: `Bearer ${token}` },
	});
};
const getSinglePost = async (postId) => {
	return await axios({
		method: "get",
		url: `http://localhost:8000/api/v1/post/${postId}`,
	});
};
export default addAPost;
export { getAllPost, deleteAPost, getSinglePost };
