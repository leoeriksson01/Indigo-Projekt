import { createContext, useState, useEffect } from "react";

export const ShopCartContext = createContext();

export default function ShopCartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    console.log(shoppingCart);
  }, [shoppingCart]);

  // Adds product to shopping cart
  function addToCart(car) {
    const newShoppingList = [...shoppingCart, car];

    // Checks if shoppingCart already contains car/product
    if (shoppingCart.some((product) => product.vin === car.vin)) {
      return;
    } else {
      // if shoppingCart does not already contains car/product, new product/car will be pushed into the shoppingCart
      setShoppingCart(newShoppingList);
    }
  }
  return (
    <ShopCartContext.Provider
      value={{ addToCart, shoppingCart, setShoppingCart }}
    >
      {children}
    </ShopCartContext.Provider>
  );
}
