import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
	const BACKEND_URL = import.meta.env.VITE_DATABASE_URL;
	const [user, setUser] = useState({
		name: "",
		enr_no: "",
		dep: "",
		branch: "",
		roll_no: "",
		batch: "",
	});
	const [loggedIn, setLoggedIn] = useState(false);

	async function sendRequest() {
		try {
			const res = await axios.get(`${BACKEND_URL}/api/v1/student/getStudent`, {
				headers: {
					Authorization: `${localStorage.getItem("token")}`,
				},
			});
			if (res.data) {
				setLoggedIn(true);
				const temp = res.data.student;
				console.log("Fetched user:", temp); // Logging fetched data
				setUser(temp); // Update the state
				user.name = temp.name;
				user.enr_no = temp.enr_no;
				user.dep = temp.dep;
				user.branch = temp.branch;
				user.roll_no = temp.roll_no;
				user.batch = temp.batch;
				setUser(user);
			}
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	}

	useEffect(() => {
		if (localStorage.getItem("token")) {
			sendRequest();
		}
	}, []);

	return (
		<AppContext.Provider
			value={{
				user,
				setUser,
				loggedIn,
				setLoggedIn,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
