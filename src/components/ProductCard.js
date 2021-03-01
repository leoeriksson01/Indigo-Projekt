import style from "../css/ProductCard.module.css";
import { useContext } from "react";
import { CarContext } from "../components/contexts/CarContext";

const ProductCard = () => {
  const { cars } = useContext(CarContext);

  return (
    <div className={style.product_card}>
      <div className={style.img_wrapper}>
        <img
          src="https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="product-image"
        />
      </div>
      <p className={style.card_information}>
        <span>Make:</span> <br />
        <span>Model:</span> <br />
        <span>Year:</span>
        <br />
        <span>VIN:</span>
        <br />
        <span>City:</span>
        <br />
        <span>Price:</span> <br />
        <span>Distance:</span>
        <br />
      </p>
      <p className={style.card_description}>
        <span className={style.car_description_title}>Car description:</span>{" "}
        <br />
      </p>
    </div>
  );
};

export default ProductCard;
