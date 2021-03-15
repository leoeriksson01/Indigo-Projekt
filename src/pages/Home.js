import style from "../css/Home.module.css";
import ProductListing from "../components/ProductListing";
import Form from "../components/SearchForm";
import Carousel from "../components/carouselComponents/CarouselSlider";
import array from "../json/cars.json";

const Home = () => {
  return (
    // <p>Home</p>
  <div>
    <div id={style.carouselContainer}>
        <Carousel cars={array} />
    </div>
    <div className={style.wrapper}>
      <div id={style.search_field_container}>
        <Form/>
      </div>
      <div id={style.product_listing_container}>
        <ProductListing />
    </div>
    </div>
  </div>  
  );
};

export default Home;
