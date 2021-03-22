import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

export const UsersContext = createContext();

export default function UsersContextProvider({ children }) {
	const [users, setUsers] = useState([]);
	const { user } = useContext(UserContext);
 
	useEffect(() => {
		setUsers(JSON.parse(localStorage.getItem("users")) ?? []);
	}, []);

	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(users));
	}, [users]);

	function findUser(property = "email", value = "") {
		return users.find(user => user[property] === value);
	}

	useEffect(() => {
		if (user) {
			const existingUser = findUser("email", user?.email);
			if (existingUser) {
				updateUser(existingUser);
			} else {
				createUser(user);
			}
		}
	}, [user]);

	function updateUser(user = {}) {
		setUsers(users =>
			users.map(element =>
				element.email === user.email ? { ...element, ...user } : element
			)
		);
	}

	function createUser(user = {}) {
		if (findUser("email", user.email)) {
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
				updateUser,
			}}
		>
			{children}
		</UsersContext.Provider>
	);
}
