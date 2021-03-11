import { useContext } from 'react';
import { ShopCartContext } from './contexts/ShopCartContext';
import style from '../css/CheckoutPage.module.css'

import SelectedItems from './SelectedItems'

const ItemsCard = () => {
  const { totalPrice } = useContext(ShopCartContext);
  return (
    <div>
      <div className={style.itemsCard}>
        <h3>Cart Summary</h3>
        <SelectedItems />
      </div>
      <div className={style.totalPriceText}>
        <p><strong>Total Price:</strong> ${totalPrice}</p>
      </div>
    </div>
  );
}

export default ItemsCard;

// Importera varje item från selected items (där inne ska lägga till & ta bort bil logiken vara), denna fil är container + pris logiken.
// Som ShoppingCartList.js