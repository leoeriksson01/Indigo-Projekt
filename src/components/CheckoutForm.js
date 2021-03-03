import style from '../css/CheckoutPage.module.css'


const CheckoutForm = () => {
  return (
    <div className={style.checkoutForm}>
      <h3>Billing and Shipping Details</h3>
      <form>
        <fieldset className={style.fieldset}>
          <label for="name">First and last name:</label>
          <input type="text" name="name" id="name" />

          <label for="email">Email adress</label>
          <input type="text" name="email" id="email" />

          <label for="county">County</label>
          <input type="text" name="county" id="county" />

          <label for="zip">Zip Code</label>
          <input type="text" name="zip" id="zip" maxLength="5" />
        </fieldset>
        <br/>
        <div className={style.radioButtons}>
          <h5>Shipping</h5>
          <hr/>
          <div className={style.radio}>
            <input type="radio" id="radio1" name="sex" value="male" />
            <label class="search-radio-text" for="radio1">Delivered to adress</label>
          </div>
          <div>
            <input type="radio" id="radio2" name="sex" value="female" />
            <label class="search-radio-text" for="radio2">Pick up</label>
          </div>
        </div>
        <br/>
        <h5>Payment Details</h5>
        <br/>
        <fieldset className={style.fieldset}>
          <label for="card">Name on Card</label>
          <input type="text" name="card" id="card" />

          <label for="ccn">Credit Card Number</label>
          <input 
            id="ccn" 
            type="text" 
            maxlength="19"
          />

          <label for="valid">Valid through</label>
          <input type="text" name="valid" id="valid" />

          <label for="cvc">CVC code</label>
          <input type="text" name="cvc" id="cvc" />
        </fieldset>
      </form>
    </div>
  );
}

//https://stackoverflow.com/questions/41296668/reactjs-form-input-validation

export default CheckoutForm;