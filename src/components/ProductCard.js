import style from "../css/ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={style.product_card}>
      <div className={style.img_wrapper}>
        <img src="" alt="product-image" />
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
        <span>Distance: 39,333 miles</span>
        <br />
      </p>
      <p className={style.card_description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
        delectus eaque quasi debitis perspiciatis ratione nobis ipsum ab!
        Ratione, facilis.
      </p>
    </div>
  );
};

export default ProductCard;
