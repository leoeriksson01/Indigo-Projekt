import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
	const [user, setUser] = useState();
	const [isLoggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("user")) ?? null);
	}, []);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);

{	/* function isLoggedIn() {
		return Boolean(user);
	}*/}

		// Login/Out handler 

	const loginHandler = () => {
		setLoggedIn(login => !login);
		setShowModal(show => !show);
	}

	const logOutHandler = () => {
		setLoggedIn(login => !login);
	}

	// Login Modal
	const [showModal, setShowModal] = useState(false); 
	const toggleModal = () => {
		setShowModal(show => !show);
	};


	return (
		<UserContext.Provider value={{ isLoggedIn, user, setUser, toggleModal, showModal, setShowModal, loginHandler, logOutHandler }}>
			{children}
		</UserContext.Provider>
	);
}
