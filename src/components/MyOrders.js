import Order from './Order';
import style from '../css/MyOrders.module.css';

const MyOrders = () => {
  const orders = JSON.parse(localStorage.getItem("orders"));

  return (
    <div className={style.myOrders}>
      <h2>My Orders</h2>
      {orders.map((order, i) => {
        return (
          <div className={style.orderContainer} key={i}>
            <Order order={order} />
          </div>
        )
      })}
    </div>
  )
}

export default MyOrders;
