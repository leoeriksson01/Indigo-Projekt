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
		setUser(user);
	}

	function getMessages(userArg) {
		const messages = JSON.parse(localStorage.getItem("messages")) ?? [];
		return messages.filter(message => {
			if (userArg) {
				return "email" in message && message.email === userArg?.email;
			}
			return "email" in message && message.email === user?.email;
		});
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
				getMessages,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
