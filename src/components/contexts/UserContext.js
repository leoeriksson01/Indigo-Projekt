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

{	/*function isLoggedIn() {
		return Boolean(user);
	}
	}
*/}

function isLoggedIn(){
	 setUser(true);

}

function handleLogout(){
	setUser(false);
}
	//show/hide sign up modal
	const [showSignUp, setShowSignUp] = useState(false)
	const openSignUp = () => {
		setShowSignUp(prev => !prev)
	}

	// Login Modal
	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => {
		setShowModal(show => !show);
	};

	return (
		<UserContext.Provider
			value={{
				isLoggedIn,
				handleLogout,
				user,
				setUser,
				toggleModal,
				showModal,
				setShowModal,
				openSignUp,
				setShowSignUp,
				showSignUp
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
