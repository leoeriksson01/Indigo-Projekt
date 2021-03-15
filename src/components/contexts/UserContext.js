import { createContext, useState, useEffect } from "react";

export const ShopCartContext = createContext();

export default function ShopCartContextProvider({ children }) {
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

	return (
		<ShopCartContext.Provider value={{ isLoggedIn, user, setUser }}>
			{children}
		</ShopCartContext.Provider>
	);
}
