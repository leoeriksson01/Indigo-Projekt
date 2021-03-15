import { useContext } from 'react';
import { ShopCartContext } from './contexts/ShopCartContext';
import SelectedItems from './SelectedItems'
import style from '../css/CheckoutPage.module.css'

const ItemsCard = () => {
  const { totalPrice } = useContext(ShopCartContext);
  return (
    <div>
      <div className={style.itemsCard}>
        <div className={style.cartSummary}>
          <h3>Cart Summary</h3>
        </div>
        <div className={style.selectedItems}>
          <SelectedItems />
        </div>
      </div>
      <div className={style.totalPriceText}>
        <p><strong>Total Price:</strong> ${totalPrice}</p>
      </div>
    </div>
  );
}

export default ItemsCard;
