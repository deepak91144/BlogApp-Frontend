import axios from "axios";
const addComment = async (comment, token) => {
	return await axios({
		method: "post",
		url: "http://localhost:8000/api/v1/comment/add",

		headers: { Authorization: `Bearer ${token}` },
		data: comment,
	});
};
const getComments = async (postId, token) => {
	return await axios({
		method: "get",
		url: `http://localhost:8000/api/v1/comment/${postId}`,
		headers: { Authorization: `Bearer ${token}` },
	});
};
export default addComment;
export { getComments };
