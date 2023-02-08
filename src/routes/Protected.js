import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../common functions/Auth";
const Protected = (props) => {
	const navigate = useNavigate();
	const { Component } = props;
	useEffect(() => {
		if (isAuthenticated() === false) {
			navigate("/");
		}
	}, []);

	return (
		<>
			<Component />
		</>
	);
};

export default Protected;
