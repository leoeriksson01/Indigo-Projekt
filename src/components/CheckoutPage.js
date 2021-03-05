import style from '../css/CheckoutPage.module.css'
import CheckoutContainer from './CheckoutContainer';
import CheckoutContextProvider from './contexts/CheckoutContext';


const CheckoutPage = () => {
  return (
    <div className={style.checkoutPage}>
      <div className={style.checkoutWrapper}>
        <h2>Checkout</h2>
        <CheckoutContextProvider>
          <CheckoutContainer />
        </CheckoutContextProvider>
      </div>
    </div>
  );
}

export default CheckoutPage;