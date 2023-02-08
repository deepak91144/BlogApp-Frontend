import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPost from "../pages/Dashboard/AddPost";

import Dashboard from "../pages/Dashboard/Dashboard";
import Post from "../pages/Dashboard/Post";
import Home from "../pages/Home";
import { SinglePage } from "../pages/SinglePage";

import Signin from "../pages/User/Signin";
import Signup from "../pages/User/Signup";
import Protected from "./Protected";
const AllRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/signup" element={<Signup />} />
					<Route path="/signin" element={<Signin />} />
					<Route
						path="/dashboard"
						element={<Protected Component={Dashboard} />}
					/>
					<Route path="/" element={<Protected Component={Home} />} />
					<Route path="/post/add" element={<Protected Component={AddPost} />} />
					<Route path="/post" element={<Protected Component={Post} />} />
					<Route
						path="/post/:postId"
						element={<Protected Component={SinglePage} />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default AllRoutes;
