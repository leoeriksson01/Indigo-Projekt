import { useContext, useEffect } from "react";
import { ShopCartContext } from "./contexts/ShopCartContext";
import style from "../css/ShoppingCart.module.css";

const ShoppingCart = () => {
const {shoppingCart, removeProduct } = useContext(ShopCartContext);

const products = shoppingCart.map(product => {
    return (
        <div className={style.productCard} key={product.vin}>
            <div className={style.img_wrapper}>
          <img
            src={`/assets/car-pictures/${product.make}-${product.model}-${product.year}.jpg`}
            alt="product"
          />
        </div>
        <div className={style.content}> 
            <h5> {product.make} </h5> 
            
            
            Model: {product.model}
            <br/>
            Year: {product.year}
            <br/>
            Price: ${product.price}
            <button className={style.remove} onClick={() => removeProduct(product )}> Remove </button>

            </div>
        </div>
    )
})
        
  return (
    <div>

        {products}
    
    </div>
  );
}

export default ShoppingCart;