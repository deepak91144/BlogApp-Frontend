import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signinAnUser } from "../../APIS/Auth";
import authenticate, { isAuthenticated } from "../../common functions/Auth";

const Signin = () => {
	const [userDetails, setUserDetails] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserDetails((preVal) => {
			return { ...preVal, [name]: value };
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await signinAnUser(userDetails);
		console.log(res);
		if (res.data.status === true) {
			authenticate(res.data.token);
			navigate("/dashboard");
		} else {
			console.log("something went wrong");
		}
	};
	useEffect(() => {
		if (isAuthenticated()) {
			navigate("/dashboard");
		}
	}, []);

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						onChange={handleChange}
						name="email"
						placeholder="enter email"
					/>
				</div>
				<div>
					<input
						type="text"
						onChange={handleChange}
						name="password"
						placeholder="enter password"
					/>
				</div>
				<button type="submit">Sign Up</button>
			</form>
		</>
	);
};

export default Signin;
