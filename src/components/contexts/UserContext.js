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
		return Boolean(user);
	}

	// Login Modal

	const [showModal, setShowModal] = useState(false); 
	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<UserContext.Provider value={{ isLoggedIn, user, setUser, toggleModal, showModal }}>
			{children}
		</UserContext.Provider>
	);
}
