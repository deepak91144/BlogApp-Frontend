const authenticate = (data) => {
	localStorage.setItem("blogapp", JSON.stringify(data));
};
const isAuthenticated = () => {
	if (localStorage.getItem("blogapp")) {
		return JSON.parse(localStorage.getItem("blogapp"));
	} else {
		return false;
	}
};
const logOutAnUser = () => {
	localStorage.removeItem("blogapp");
};
export default authenticate;
export { isAuthenticated, logOutAnUser };
