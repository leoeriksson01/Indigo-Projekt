import style from '../css/MyOrders.module.css';

const Order = () => {

  const orders = JSON.parse(localStorage.getItem("orders"));
  
  const oneOrder = orders.map((oneOrder, i) => {
    return (
      <div key={i}>
        <div className={style.oneOrderContainer}>
          <div className={style.orderImg}>
            <img 
              src={`/assets/car-pictures/${oneOrder.make}-${oneOrder.model}-${oneOrder.year}.jpg`}
              alt="Car from order"
            />
            <div className={style.orderText}>
              <p>{oneOrder.make}</p>
              <p>{oneOrder.model}</p>
              <p>{oneOrder.year}</p>
              <p>${Number(oneOrder.price).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    )
  })
  
  return <div>{oneOrder}</div>
}

export default Order;
