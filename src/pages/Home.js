import Sidebar from "../components/Sidebar";
import style from "../css/Home.module.css";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div id={style.search_field_container}>
        <Sidebar />
      </div>
      <div id={style.product_listing_container}>Product Listing</div>
    </div>
  );
};

export default Home;
