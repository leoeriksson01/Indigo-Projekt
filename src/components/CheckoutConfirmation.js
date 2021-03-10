import { useLocation } from 'react-router-dom';
import style from '../css/CheckoutConfirmation.module.css';

export default function CheckoutConfirmation() {
    // Don't forget to use cart context in here
    const { state } = useLocation();
    return (
        <div className={style.confirmationPage}>
            <div className={style.confirmationContainer}>
                <div className={style.carData}>
                    
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
                        </div>
                        <div className={style.seller}>
                            <h2><strong>Seller</strong></h2>
                            <p><strong>Name:</strong> Bilgagnat AB</p>
                            <p><strong>Adress:</strong> Something somewhere</p>
                        </div>
                    </div>
                </div>
                <div className={style.buttonContainer}>
                    <button>Print Confirmation</button>
                    <button>Send to Email</button>
                </div>
            </div>
        </div>
    );
}
