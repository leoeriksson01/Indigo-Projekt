import style from '../css/CheckoutPage.module.css'
import CheckoutForm from './CheckoutForm';
import ItemsCard from './ItemsCard';
import SelectedItems from './SelectedItems';

const CheckoutContainer = () => {
  return (
    <div className={style.checkoutCon}>
      <CheckoutForm />
      <ItemsCard />
    </div>
  );
}

export default CheckoutContainer;