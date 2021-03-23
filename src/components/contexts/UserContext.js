import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	const [user, setUser] = useState();

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("user")) ?? null);
	}, []);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);

	function isLoggedIn() {
		return user == null ? user : Boolean(user);
	}

	function login(user = {}) {
		const users = JSON.parse(localStorage.getItem("users"));
		for (let i = 0; i < users.length; i++) {
			if (
				users[i].email === user.email &&
				users[i].password === user.password
			) {
				setUser(user);
				break;
			}
		}
		return false;
	}

	function handleLogout() {
		setUser(null);
	}

	return (
		<UserContext.Provider
			value={{
				isLoggedIn,
				handleLogout,
				user,
				setUser,
				login,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
