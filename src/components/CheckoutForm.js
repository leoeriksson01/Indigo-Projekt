import style from '../css/CheckoutPage.module.css'


const CheckoutForm = () => {
  return (
    <div className={style.checkouthtmlForm}>
      <h3>Billing and Shipping Details</h3>
      <form>
        <fieldset className={style.fieldset}>
          <label htmlFor="name">First and last name:</label>
          <input type="text" name="name" id="name" />

          <label htmlFor="email">Email adress</label>
          <input type="text" name="email" id="email" />

          <label htmlFor="county">County</label>
          <input type="text" name="county" id="county" />

          <label htmlFor="zip">Zip Code</label>
          <input type="text" name="zip" id="zip" maxLength="5" />
        </fieldset>

        <fieldset className={style.fieldset}>
          <legend>Shipping</legend>
          <div className={style.radio}>
            <input type="radio" id="radio1" name="sex" value="male" />
            <label htmlFor="radio1">Delivered to adress</label>
          </div>
          <div>
            <input type="radio" id="radio2" name="sex" value="female" />
            <label htmlFor="radio2">Pick up</label>
          </div>
        </fieldset>

        <fieldset className={style.fieldset}>  
          <legend>Payment Details</legend>
          <label htmlFor="card">Name on Card</label>
          <input type="text" name="card" id="card" />

          <label htmlFor="ccn">Credit Card Number</label>
          <input id="ccn" type="text" maxLength="19" />

          <label htmlFor="valid">Valid through</label>
          <input type="text" name="valid" id="valid" />

          <label htmlFor="cvc">CVC code</label>
          <input type="text" name="cvc" id="cvc" />
        </fieldset>
      </form>
    </div>
  );
}

export default CheckoutForm;
