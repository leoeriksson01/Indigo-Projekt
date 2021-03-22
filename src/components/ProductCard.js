import style from "../css/ProductCard.module.css";
import { useContext, useState } from "react";
import { CarContext } from "../components/contexts/CarContext";
import { ShopCartContext } from "../components/contexts/ShopCartContext";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ProductCard = () => {
	const { products } = useContext(CarContext);
	const { addToCart, itemExists } = useContext(ShopCartContext);
	const [loadProducts, setLoadProducts] = useState(6);

	const handleButtonAdd = car => {
		addToCart(car);
	};

	const handleButtonLoad = () => {
		// adds + 6 to loadProducts (useState) - which renders additional 6 products/cars
		setLoadProducts(loadProducts + 6);
	};

	const handleButtonTop = () => {
		// scrolls to top position of page
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	const loadButton = (
		<div className={style.button_load_wrapper}>
			<button className={style.button_load} onClick={() => handleButtonLoad()}>
				Load more
			</button>
		</div>
	);

	const backTopButton = (
		<div className={style.button_back_top_wrapper}>
			<button onClick={handleButtonTop} className={style.button_back_top}>
				<FontAwesomeIcon icon={faArrowUp} />
			</button>
		</div>
	);

	const product = products.map((car, index) => {
		if (index === loadProducts) {
			return null;
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
								disabled={itemExists(car)}
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

			<div className={style.bottom_buttons_wrapper}>
				{loadProducts < products.length ? loadButton : ""}
				{backTopButton}
			</div>
		</div>
	);
};

export default ProductCard;
