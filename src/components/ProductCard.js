import style from "../css/ProductCard.module.css";
import { useContext } from "react";
import { CarContext } from "../components/contexts/CarContext";

const ProductCard = () => {
  const { cars } = useContext(CarContext);

  const product = cars.map((car) => {
    return (
      <div className={style.product_card} key={car.vin}>
        <div className={style.img_wrapper}>
          <img
            src={`/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}
            alt="product-image"
          />
        </div>
        <p className={style.card_information}>
          <span>Make: {car.make}</span> <br />
          <span>Model: {car.model} </span> <br />
          <span>Year: {car.year}</span>
          <br />
          <span>VIN: {car.vin}</span>
          <br />
          <span>City: {car.city}</span>
          <br />
          <span>Price: {car.price}</span> <br />
          <span>Distance: {car.miles} miles</span>
          <br />
        </p>
        <p className={style.card_description}>
          <span className={style.car_description_title}>Car description:</span>
          <br />
          <span>{car.descShort}</span>
          <br />
        </p>
        <div className={style.button_wrapper}>
          <button className={style.button_add}>Add to cart</button>
          <button className={style.button_read}>Read more</button>
        </div>
      </div>
    );
  });
  return <div className={style.product_card_wrapper}>{product}</div>;
};

export default ProductCard;
