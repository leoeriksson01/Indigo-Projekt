import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	const [user, setUser] = useState();

	// Parse users from localStorage on mount
	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("user")) ?? null);
	}, []);

	//  Every time user update, save it in localStorage
	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);

	// If user object exists, user is logged in
	function isLoggedIn() {
		return Boolean(user);
	}

	function login(user = null) {
		setUser(user);
	}

	// Get messages from logged in user, or user of argument
	function getMessages(userArg) {
		const messages = JSON.parse(localStorage.getItem("messages")) ?? [];
		return messages.filter(message => {
			if (userArg) {
				return "email" in message && message.email === userArg?.email;
			}
			return "email" in message && message.email === user?.email;
		});
	}

	// Get orders from logged in user, or user of argument
	function getOrders(userArg) {
		const orders = JSON.parse(localStorage.getItem("orders")) ?? [];
		return orders.filter(order => {
			if (userArg) {
				return "email" in order && order.email === userArg?.email;
			}
			return "email" in order && order.email === user?.email;
		});
	}

	// Logout
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
				getOrders,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
