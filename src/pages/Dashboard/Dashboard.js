import React from "react";
import { useNavigate } from "react-router-dom";
import { logOutAnUser } from "../../common functions/Auth";
import Header from "./Header";

const Dashboard = () => {
	const navigate = useNavigate();
	const logOut = () => {
		logOutAnUser();
		navigate("/");
	};
	return (
		<div>
			<Header />
			Dashboard<button onClick={logOut}>logout</button>
		</div>
	);
};

export default Dashboard;
