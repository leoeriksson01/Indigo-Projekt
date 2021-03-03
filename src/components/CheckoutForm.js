import React, { useState } from 'react';
import style from '../css/CheckoutPage.module.css'

const CheckoutForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [county, setCounty] = useState('');
  const [zip, setZip] = useState('');
  const [cardName, setCardName] = useState('');
  const [ccn, setCcn] = useState('');
  const [valid, setValid] = useState('');
  const [cvc, setCvc] = useState('');

  const submitValue = () => {
    const formdets = {
      'Name' : name,
      'Email' : email, 
      'County' : county,
      'Zip' : zip,
      'Card Name' : cardName,
      'CCN' : ccn,
      'Valid' : valid,
      'CVC' : cvc
    }
    console.log(formdets);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={style.checkoutForm}>
      <h3>Billing and Shipping Details</h3>
      <form onSubmit={handleSubmit}>
        <fieldset className={style.fieldset}>
          <label htmlFor="name">First and last name:</label>
          <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} />

          <label htmlFor="email">Email adress</label>
          <input type="text" name="email" id="email" onChange={e => setEmail(e.target.value)} />

          <label htmlFor="county">County</label>
          <input type="text" name="county" id="county" onChange={e => setCounty(e.target.value)} />

          <label htmlFor="zip">Zip Code</label>
          <input type="text" name="zip" id="zip" maxLength="5" onChange={e => setZip(e.target.value)} />
        </fieldset>

        <fieldset className={style.fieldset}>
          <legend>Shipping</legend>
          <div className={style.radio}>
            <input type="radio" id="radio1" name="btn" value="del" />
            <label htmlFor="radio1">Delivered to adress</label>
          </div>
          <div>
            <input type="radio" id="radio2" name="btn" value="pick" />
            <label htmlFor="radio2">Pick up</label>
          </div>
        </fieldset>

        <fieldset className={style.fieldset}>  
          <legend>Payment Details</legend>
          <label htmlFor="card">Name on Card</label>
          <input type="text" name="card" id="card" onChange={e => setCardName(e.target.value)} />

          <label htmlFor="ccn">Credit Card Number</label>
          <input id="ccn" type="text" name="ccn" maxLength="19" onChange={e => setCcn(e.target.value)} />

          <label htmlFor="valid">Valid through</label>
          <input type="text" name="valid" id="valid" maxLength="5" onChange={e => setValid(e.target.value)} />

          <label htmlFor="cvc">CVC code</label>
          <input type="text" name="cvc" id="cvc" maxLength="3" onChange={e => setCvc(e.target.value)} />
        </fieldset>
        <fieldset>
          <button type="submit" onClick={submitValue}>Proceed to Checkout</button>
        </fieldset>
      </form>
    </div>
  );
}

export default CheckoutForm;
