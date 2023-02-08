import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import signupAUser from "../../APIS/Auth";
import authenticate, { isAuthenticated } from "../../common functions/Auth";

const Signup = () => {
	const [userDetails, setUserDetails] = useState({
		name: "",
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
		const res = await signupAUser(userDetails);
		if (res === true) {
			authenticate(res.data.token);
			navigate("/dashboard");
		} else {
			console.log("ffjj");
		}
	};
	useEffect(() => {
		if (isAuthenticated()) {
			navigate("/dashboard");
		}
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input
					type="text"
					onChange={handleChange}
					name="name"
					placeholder="enter name"
				/>
			</div>
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
	);
};

export default Signup;
