import Order from "./Order";
import style from "../css/MyOrders.module.css";
import ProfileSidebar from "../components/ProfileSidebar";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import Unauthorized from "./http/Unauthorized";

const MyOrders = () => {
	const { getOrders, isLoggedIn } = useContext(UserContext);

	if (isLoggedIn() === false) {
		return <Unauthorized />;
	}

	return (
		<div className={style.myOrdersContainer}>
			<div className={style.ordersContent}>
				<div className={style.orderGreetingText}>
					<h2>My orders</h2>
					<p>Here on "My Orders" you can view your Order History</p>
				</div>
				<hr className={style.orderHr} />
				<div className={style.orderInfoWrap}>
					{getOrders().map((order, i) => {
						return (
							<div className={style.orderContainer} key={i}>
								<div className={style.orderWrapper}>
									<Order order={order.items} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className={style.orderSidebar}>
				<ProfileSidebar />
			</div>
		</div>
	);
};

export default MyOrders;
