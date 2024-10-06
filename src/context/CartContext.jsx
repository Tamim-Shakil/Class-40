import React, { createContext, useContext } from "react";
import { useState } from "react";

const Cart = createContext();

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  return <Cart.Provider value={{ cart, setCart }}>{children}</Cart.Provider>;
}

export const CartState = () => {
  return useContext(Cart);
};
