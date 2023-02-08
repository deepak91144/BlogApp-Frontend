import axios from "axios";
const signupAUser = async (user) => {
	return await axios({
		method: "post",
		url: "http://localhost:8000/api/v1/user/signup",
		data: user,
	});
};
const signinAnUser = async (user) => {
	return await axios({
		method: "post",
		url: "http://localhost:8000/api/v1/user/signin",
		data: user,
	});
};
export default signupAUser;
export { signinAnUser };
