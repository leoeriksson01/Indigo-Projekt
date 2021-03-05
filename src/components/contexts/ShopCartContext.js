import { createContext, useState, useEffect } from "react";

export const ShopCartContext = createContext();

export default function ShopCartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Loads data from local storage
  useEffect(() => {
    const data = localStorage.getItem("shoppingcart");

    // Checks if there are data stored in local storage
    if (data) {
      // Loads the data and pushes it to shopping cart
      setShoppingCart(JSON.parse(data));
    }
  }, []);

  // Save information to local storage whenever updates are made to shopping cart
  useEffect(() => {
    localStorage.setItem("shoppingcart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  // Adds product to shopping cart
  function addToCart(car) {
    // Checks if shoppingCart already contains car/product
    if (shoppingCart.some((product) => product.vin === car.vin)) {
      return;
    } else {
      // if shoppingCart does not already contains car/product, new product/car will be pushed into the shoppingCart
      setShoppingCart((p) => [...p, car]);

      // sets total price of shoppingCart
      setTotalPrice(totalPrice + car.price);
    }
  }

  //Removes product from shoppingCart
  function removeProduct(car) {
    const newList = shoppingCart.filter((product) => product.vin !== car.vin);
    setShoppingCart(newList);
    setTotalPrice(totalPrice - car.price);
  }

  return (
    <ShopCartContext.Provider
      value={{
        addToCart,
        shoppingCart,
        setShoppingCart,
        removeProduct,
        totalPrice,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
}
