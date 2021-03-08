import Sidebar from "../components/sidebar.js";
import style from "../css/Home.module.css";
import ProductListing from "../components/ProductListing";
import Carousel from "../components/carouselComponents/CarouselSlider";
import SliderData from "../components/carouselComponents/PlaceholderImages.js";

const Home = () => {
  return (
    <div>
      <div id={style.carouselContainer}>
        <Carousel slides={SliderData} />
      </div>
      <div className={style.wrapper}>
        <div id={style.search_field_container}>
          <Sidebar />
        </div>
        <div id={style.product_listing_container}>
          <ProductListing />
        </div>
      </div>
    </div>
  );
};

export default Home;
