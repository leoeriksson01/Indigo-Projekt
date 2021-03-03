import { createContext, useState, useEffect } from "react";

export const ShopCartContext = createContext();

export default function ShopCartContextProvider({ children }) {

  return (
    <ShopCartContext.Provider value={{ }}>
      {children}
    </ShopCartContext.Provider>
  );
}
