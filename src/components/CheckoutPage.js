import style from '../css/CheckoutPage.module.css'
import CheckoutContainer from './CheckoutContainer';

const CheckoutPage = () => {
  return (
    <div className={style.checkoutPage}>
      <div className={style.checkoutWrapper}>
        <h2>Checkout</h2>
        <CheckoutContainer />
      </div>
    </div>
  );
}

export default CheckoutPage;