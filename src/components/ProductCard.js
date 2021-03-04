import style from "../css/ProductCard.module.css";
import { useContext } from "react";
import { CarContext } from "../components/contexts/CarContext";
import { ShopCartContext } from "../components/contexts/ShopCartContext";
import { useHistory } from "react-router-dom";

const ProductCard = () => {
  const history = useHistory();
  const { cars } = useContext(CarContext);
  const { addToCart } = useContext(ShopCartContext);

  const handleButtonAdd = (car) => {
    addToCart(car);
  };

  const handleButtonRead = (car) => {
    // redirects customer to "Detaljsidan"
    history.push(`/car/${car.vin}`);
  };

  const product = cars.map((car) => {
    return (
      <div className={style.product_card} key={car.vin}>
        <div className={style.img_wrapper}>
          <img
            src={`/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}
            alt="product"
          />
        </div>
        {/* /.img_wrapper */}
        <div className={style.card_text_wrapper}>
          <h2>
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
            {car.price}
            <br />
          </p>
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
            className={style.button_add}
          >
            Add to cart
          </button>
          <button
            onClick={() => {
              handleButtonRead(car);
            }}
            className={style.button_read}
          >
            Read more
          </button>
        </div>
        {/* /.button_wrapper */}
      </div>
    );
  });
  return <div className={style.product_card_wrapper}>{product}</div>;
};

export default ProductCard;
