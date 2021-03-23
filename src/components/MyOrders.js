import Order from './Order';
import style from '../css/MyOrders.module.css';

const MyOrders = () => {

  return (
    <div className={style.myOrders}>
      <h2>My Orders</h2>
      <div className={style.orderContainer}>
        <Order />
      </div>
    </div>
  )
}

export default MyOrders;
