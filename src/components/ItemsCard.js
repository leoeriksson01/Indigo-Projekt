import style from '../css/CheckoutPage.module.css'

import SelectedItems from './SelectedItems'

const ItemsCard = () => {
  return (
    <div>
      <div className={style.itemsCard}>
        <h3>Cart Summary</h3>
        <SelectedItems />
      </div>
    </div>
  );
}

export default ItemsCard;