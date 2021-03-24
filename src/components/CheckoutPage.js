import { useContext } from "react";
import style from "../css/CheckoutPage.module.css";
import CheckoutContainer from "./CheckoutContainer";
import { UserContext } from "./contexts/UserContext";
import Unauthorized from "./http/Unauthorized";

const CheckoutPage = () => {
	const { isLoggedIn } = useContext(UserContext);

	if (isLoggedIn() == null) {
		return null;
	}

	if (isLoggedIn() === false) {
		return <Unauthorized />;
	}

	return (
		<div className={style.checkoutPage}>
			<div className={style.checkoutWrapper}>
				<h2>Checkout</h2>
				<CheckoutContainer />
			</div>
		</div>
	);
};

export default CheckoutPage;
