import style from "../css/ProductCard.module.css";
import { useContext, useState } from "react";
import { CarContext } from "../components/contexts/CarContext";
import { ShopCartContext } from "../components/contexts/ShopCartContext";
import { NavLink } from "react-router-dom";

const ProductCard = () => {
  const { cars, products } = useContext(CarContext);
  const { addToCart, itemExists } = useContext(ShopCartContext);
  const [loadProducts, setLoadProducts] = useState(6);

  const handleButtonAdd = (car) => {
    addToCart(car);
  };

  const handleButtonLoad = () => {
    // adds + 6 to loadProducts (useState) - which renders additional 6 products/cars
    setLoadProducts(loadProducts + 6);
  };

  const loadButton = (
    <div className={style.button_load_wrapper}>
      <button className={style.button_load} onClick={() => handleButtonLoad()}>
        Load more
      </button>
    </div>
  );

  const product = products.map((car, index) => {
    if (index === loadProducts) {
      return;
    } else if (index < loadProducts) {
      return (
        <div className={style.product_card} key={car.vin}>
          <div className={style.img_wrapper}>
            <img
              className={style.img}
              src={`/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}
              alt="product"
            />
          </div>
          {/* /.img_wrapper */}
          <div className={style.card_text_wrapper}>
            <h2 className={style.h2}>
              {car.make} {car.model} {car.year}
            </h2>
            <p className={style.subheading}>
              <span>{Number(car.miles).toLocaleString()} miles</span>
            </p>
            <p className={style.card_information}>
              <span className={style.information_category}>Make: </span>
              {car.make} <br />
              <span className={style.information_category}>Model:</span>
              {car.model}
              <br />
              <span className={style.information_category}>Year: </span>
              {car.year}
              <br />
              <span className={style.information_category}>City: </span>
              {car.city}
              <br />
              <span className={style.information_category}>Price: </span>
              <span>${Number(car.price).toLocaleString()}</span>
              <br />
            </p>

            <div className={style.card_description_button_wrapper}>
              <p className={style.card_description}>
                <span className={style.car_description_title}>
                  Car description:
                </span>
                <br />
                <span>{car.descShort}</span>
                <br />
              </p>
            </div>
            {/* /.card_text_wrapper */}

            <div className={style.button_wrapper}>
              <button
                onClick={() => handleButtonAdd(car)}
                className={`${style.button_add} ${
                  itemExists(car) ? style.button_already_in_cart : ""
                }`}
              >
                {itemExists(car) ? "Already in cart" : "Add to cart"}
              </button>
              <NavLink className={style.a} exact to={`/car/${car.vin}`}>
                Read more
              </NavLink>
            </div>
            {/* /.card_description_button_wrapper */}
          </div>
          {/* /.button_wrapper */}
        </div>
      );
    }
  });
  return (
    <div className={style.product_list_container}>
      <div className={style.product_card_wrapper}>{product}</div>
      {loadProducts < products.length ? loadButton : ""}
    </div>
  );
};

export default ProductCard;
