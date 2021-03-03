import { useContext } from "react";
import { ShopCartContext } from "../../contexts/ShopCartContext";

const Product = () => {
  const { products } = useContext(ShopCartContext)

  return (
    <div>
      <h3>Products: </h3>
      {products.map(Product => {
        return (
          <div className="productCard" key={Product.id}>
              {product.img}
              <div className="description"> 
            <p>Name: {product.name}</p>
            <p>Age: {product.age}</p>
            <p>Price: {product.price}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Product;