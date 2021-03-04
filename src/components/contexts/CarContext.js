import { createContext, useState, useEffect } from "react";
import defaultCars from "../../json/cars.json";

export const CarContext = createContext();

export default function CarContextProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    setCars(defaultCars);
  }, []);

  useEffect(() => {}, [shoppingCart]);

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

  //--- FILTER ---
  const [products, setProducts] = useState(cars);
  const [make, setMake] = useState("all");
  const [fromYear, setFromYear] = useState("");
  const [toYear, setToYear] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [maxMiles, setMaxMiles] = useState("");

  const handleFilterChange = (e, filterType) => {
    //Change state
    switch (filterType) {
      case "make":
        setMake(e.target.value);
        break;

      case "fromYear":
        setFromYear(e.target.value);
        break;

      case "toYear":
        setToYear(e.target.value);
        break;

      case "maxPrice":
        setMaxPrice(e.target.value);
        break;

      case "maxMiles":
        setMaxMiles(e.target.value);
        break;

      //Fortsätt med de andra filter typerna här
      default:
        break;
    }
  };

  useEffect(() => {
    let filteredProducts = cars;
    if (make !== "all") {
      filteredProducts = filteredProducts.filter((car) => car.make === make);
    }

    if (fromYear !== "") {
      filteredProducts = filteredProducts.filter((car) => car.year >= fromYear);
    }

    if (toYear !== "") {
      filteredProducts = filteredProducts.filter((car) => car.year < toYear);
    }

    if (maxPrice !== "") {
      filteredProducts = filteredProducts.filter(
        (car) => car.price <= maxPrice
      );
    }

    if (maxMiles !== "") {
      filteredProducts = filteredProducts.filter(
        (car) => car.miles <= maxMiles
      );
    }

    //Fortsätt if med  filter typerna här
    setProducts(filteredProducts);
  }, [make, fromYear, toYear, maxPrice, maxMiles]);

  return (
    <CarContext.Provider
      value={{
        addToCart,
        cars,
        find,
        findOne,
        remove,
        handleFilterChange,
        products,
        maxPrice,
        maxMiles,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}
