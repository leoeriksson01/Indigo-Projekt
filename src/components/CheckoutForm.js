import { useState, useContext } from 'react';
import style from '../css/CheckoutPage.module.css'
import { CheckoutContext } from './contexts/CheckoutContext';

const CheckoutForm = () => {
  const { 
    addCheckoutData 
  } = useContext(CheckoutContext);

  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [adress, setAdress] = useState([]);
  const [county, setCounty] = useState([]);
  const [zip, setZip] = useState([]);
  const [select, setSelect] = useState('');

  const submitValue = () => {
    const formdets = {
      'Name' : name,
      'Email' : email, 
      'County' : county,
      'Zip' : zip,
    }
    addCheckoutData(formdets);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleSelect = (e) => {
    setSelect(e.target.value);
  }

  return (
    <div className={style.checkoutForm}>
      <h3>Billing and Shipping Details</h3>
      <form onSubmit={handleSubmit}>
        <fieldset className={style.fieldset}>
          <label htmlFor="name">First and last name</label>
          <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} />

          <label htmlFor="email">Email adress</label>
          <input type="text" name="email" id="email" onChange={e => setEmail(e.target.value)} />

          <label htmlFor="adress">Adress</label>
          <input type="text" name="adress" id="adress" onChange={e => setEmail(e.target.value)} />

          <div className={style.inputContainer}>
            <div className={`${style.smallInput} ${style.leftInput}`}>
              <label htmlFor="county">County</label>
              <input type="text" name="county" id="county" onChange={e => setCounty(e.target.value)} />
            </div>
            
            <div className={style.smallInput}>
              <label htmlFor="zip">Zip Code</label>
              <input type="text" name="zip" id="zip" maxLength="5" onChange={e => setZip(e.target.value)} />
            </div>
          </div>
        </fieldset>

        <fieldset className={style.fieldset}>
          <legend>Shipping</legend>
          <select onChange={handleSelect} className={style.selectShip}>
            <option value="" disabled selected>Select your option</option>
            <option value="Delivered to adress">Delivered to adress</option>
            <option value="Pick up at Auto Dealership">Pick up at Auto Dealership</option>
          </select>
        </fieldset>

        <fieldset className={style.fieldset}>  
          <legend>Payment Details</legend>
          <label htmlFor="card">Name on Card</label>
          <input type="text" name="card" id="card" />

          <label htmlFor="ccn">Credit Card Number</label>
          <input id="ccn" type="text" name="ccn" maxLength="19" />
          
          <div className={style.inputContainer}>
            <div className={`${style.smallInput} ${style.leftInput}`}>
              <label htmlFor="valid">Valid through</label>
              <input type="text" name="valid" id="valid" maxLength="5" />
            </div>

            <div className={style.smallInput}>
              <label htmlFor="cvc">CVC code</label>
              <input type="text" name="cvc" id="cvc" maxLength="3" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <button type="submit" onClick={submitValue}>Proceed to Checkout</button>
        </fieldset>
      </form>
    </div>
  );
}

export default CheckoutForm;
