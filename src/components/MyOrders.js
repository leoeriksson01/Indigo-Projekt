import Order from "./Order";
import style from "../css/MyOrders.module.css";
import ProfileSidebar from "../components/ProfileSidebar";

const MyOrders = () => {
	const orders = JSON.parse(localStorage.getItem("orders"));

	return (
    <div className={style.myOrdersContainer}>
      <div className={style.ordersContent}>
        <div className={style.orderGreetingText}>
          <h2>My orders</h2>
          <p>Here on "My Orders" you can view your Order History</p>
        </div>
        <hr className={style.orderHr} />
				<div className={style.orderInfoWrap}>
					{orders.map((order, i) => {
						return (
							<div className={style.orderContainer} key={i}>
								<div className={style.orderWrapper}>
									<Order order={order} />
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
