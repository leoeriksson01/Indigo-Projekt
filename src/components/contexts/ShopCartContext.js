import { createContext, useState, useEffect } from "react";

export const ShopCartContext = createContext();

export default function ShopCartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  
   const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => [shoppingCart]);

  // Adds product to shopping cart
  function addToCart(car) {
 
    // Checks if shoppingCart already contains car/product
    if (shoppingCart.some((product) => product.vin === car.vin)) {
      return;
    } else {
      // if shoppingCart does not already contains car/product, new product/car will be pushed into the shoppingCart
      setShoppingCart((p) => [...p, car]);

      setTotalPrice(totalPrice+car.price)
    }
    
  }

  function removeProduct(car) {
    const newList = shoppingCart.filter(product => product.vin !== car.vin)
    setShoppingCart(newList)
    setTotalPrice(totalPrice-car.price)
  }

/*   const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')))

  const [isProductsChanged, setProductsChanged] = useState(false)

  useEffect(() => {
    // If isStudentsChanged === true, we save our 'students' list to local storage
    if(isProductsChanged){
      localStorage.setItem('products', JSON.stringify(products))
    }

    // Also, set isStudentsChanged back to false.
    setProductsChanged(false)
    
    // useEffect hook runs only if we isStudentsChanged variable is set to true.
  }, [isProductsChanged])

  // This function is used in "Programming.js" component
  const removeProduct = (productToRemove) =>{
    const updatedProducts = products.filter(product => product.vin !== productToRemove.vin)
    setProducts(updatedProducts)

    // SetStudentsChanged is equal to true, since we want the new list to be saved in localStorage
    // This runs useEffect hook
    setProductsChanged(true)
    
  } */



  return (
    <ShopCartContext.Provider
      value={{ addToCart, shoppingCart, setShoppingCart, removeProduct, totalPrice }}
    >
      {children}
    </ShopCartContext.Provider>
  );
}
