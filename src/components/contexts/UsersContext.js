import { createContext, useState, useEffect } from "react";

export const UsersContext = createContext();

export default function UsersContextProvider({ children }) {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		setUsers(JSON.parse(localStorage.getItem("users")) ?? []);
	}, []);

	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(users));
	}, [users]);

	function findUser(property = "email", value = "") {
		return users.find(user => user[property] === value);
	}

	function createUser(user = {}) {
		if (findUser("email", user.email) || findUser("name", user.name)) {
			return;
		}
		setUsers(users => [...users, user]);
	}

	function deleteUser(property = "email", value = "") {
		setUsers(users => users.filter(user => user[property] !== value));
	}

	return (
		<UsersContext.Provider
			value={{
				users,
				setUsers,
				findUser,
				createUser,
				deleteUser,
			}}
		>
			{children}
		</UsersContext.Provider>
	);
}
