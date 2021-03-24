import Order from "./Order";
import style from "../css/MyOrders.module.css";
import ProfileSidebar from "../components/ProfileSidebar";

const MyOrders = () => {
	const orders = JSON.parse(localStorage.getItem("orders"));

	return (
		<div className={style.myOrders}>
			<h2>My Orders</h2>
			<ProfileSidebar />
			{orders.map((order, i) => {
				return (
					<div className={style.orderContainer} key={i}>
						<Order order={order} />
					</div>
				);
			})}
		</div>
	);
};

export default MyOrders;
