import { createContext, useState, useEffect } from "react";
import defaultCars from "../../json/cars.json";

export const CarContext = createContext();

export default function CarContextProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    setCars(defaultCars);
  }, []);

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

  // Remove car whose vin property matches the one being sent in
  function remove(carToRemove = {}) {
    setCars((p) => p.filter((car) => car.vin !== carToRemove.vin));
  }

  // Return array of matches
  function find(key = "vin", value = "") {
    return cars.filter((car) => car[key] === value);
  }

  // Return single car object on match, null if empty
  function findOne(key = "vin", value = "") {
    return cars.find((car) => car[key] === value) ?? null;
  }

  return (
    <CarContext.Provider value={{ cars, find, findOne, remove }}>
      {children}
    </CarContext.Provider>
  );
}
