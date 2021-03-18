import { useContext } from 'react';
import { ShopCartContext } from './contexts/ShopCartContext';
import style from '../css/CheckoutPage.module.css';

const SelectedItems = () => {
  const { shoppingCart, removeProduct } = useContext(ShopCartContext);
    
  const cartProduct = shoppingCart.map((cartProduct) => {
    return (
      <div className={style.selectedItem}>
        <div className={style.cartImg}>
          <img
            src={`/assets/car-pictures/${cartProduct.make}-${cartProduct.model}-${cartProduct.year}.jpg`}
            alt="product"
          />
        </div>
        <div className={style.cartProductText}>
          <div className={style.cartProductTextWrapper}>
            <p><strong>{cartProduct.make}</strong></p>
            <p>{cartProduct.model}</p>
            <p>{cartProduct.year}</p>
            <p>{cartProduct.descShort}</p>
            <p><strong>Price:</strong> ${Number(cartProduct.price).toLocaleString()}</p>
          </div>
            <button 
              onClick={() => removeProduct(cartProduct)}
              className={style.removeCartProduct}
            >
              Remove Car
            </button>
        </div>
      </div>
    );
  })

  return <div>{cartProduct}</div>
}

export default SelectedItems;
