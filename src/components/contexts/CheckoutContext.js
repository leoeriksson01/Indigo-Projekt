import { useState, createContext } from 'react';

export const CheckoutContext = createContext();

const CheckoutContextProvider = (props) => {
  const [checkoutData, setCheckoutData] = useState({});

  const addCheckoutData = (data) => {
    setCheckoutData(data);
  };
  
  return (
    <CheckoutContext.Provider 
    value={{
      checkoutData,
      addCheckoutData
      }}>
      {props.children}
    </CheckoutContext.Provider>
  );
}

export default CheckoutContextProvider;