import Sidebar from "../components/sidebar.js";
import style from "../css/Home.module.css";

const Home = () => {
  return (
    <div className={style.wrapper}>
      <div id={style.search_field_container}>
        <Sidebar />
      </div>
      <div id={style.product_listing_container}>Product Listing</div>
    </div>
  );
};

export default Home;
