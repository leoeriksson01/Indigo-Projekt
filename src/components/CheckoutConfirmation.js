import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ShopCartContext } from './contexts/ShopCartContext';
import style from '../css/Confirmation.module.css';

export default function CheckoutConfirmation() {
    const { shoppingCart, totalPrice } = useContext(ShopCartContext);
    const { state } = useLocation();

    const confirmationCars = shoppingCart.map((confirmationCars, i) => {
        return (
            <div className={style.boughtItem} key={i}>
                <div className={style.confirmImg}>
                    <img
                        src={`/assets/car-pictures/${confirmationCars.make}-${confirmationCars.model}-${confirmationCars.year}.jpg`}
                        alt="product"
                    />
                </div>
                <div className={style.carInfoText}>
                    <div className={style.carInfoTextWrapper}>
                        <div className={style.pElOneTwo}>
                            <p><strong>{confirmationCars.make}</strong></p>
                            <p> {confirmationCars.model}</p>
                            <p> {confirmationCars.year}</p>
                        </div>
                        <p>{confirmationCars.descShort}</p>
                        <div className={style.carPrice}>
                            <p><strong>Price:</strong> ${Number(confirmationCars.price).toLocaleString()}</p>
                        </div>
                    </div>
            </div>
        </div>
        );
    })

    return (
        <div className={style.confirmationPage} id="order">
            <div className={style.confirmText}>
                <h2>THANK YOU</h2>
                <h3>YOUR ORDER IS NOW PLACED</h3>
            </div>
            <div className={style.confirmationContainer}>
                <div className={style.carData}>
                    {confirmationCars}
                </div>
                <div className={style.buyerSellerContainer}>
                    <div className={style.buyerSellerWrapper}>
                        <div className={style.buyer}>
                            <h2><strong>Buyer</strong></h2>
                            <p><strong>Full Name:</strong> {state.name}</p>
                            <p><strong>Email:</strong> {state.email}</p>
                            <p><strong>Adress:</strong> {state.address}</p>
                            <p><strong>County:</strong> {state.county}</p>
                            <p><strong>Zip Code:</strong> {state.zip}</p>
                            <p><strong>Delivery Option: </strong>{state.select}</p>
                        </div>
                        <div className={style.seller}>
                            <h2><strong>Seller</strong></h2>
                            <p><strong>Name:</strong> Bilgagnat AB</p>
                            <p><strong>Adress:</strong> Something somewhere</p>
                        </div>
                    </div>
                    <div className={style.totalPriceText}>
                        <p><strong>Total Price:</strong> ${totalPrice}</p>
                    </div>
                </div>
                <div className={style.buttonContainer}>
                    <button onClick={window.print}>Print Confirmation</button>
                    <button>Send to Email</button>
                </div>
            </div>
        </div>
    );
}
