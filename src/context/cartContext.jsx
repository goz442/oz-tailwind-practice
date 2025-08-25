import { createContext, useState, useContext } from "react";

// 1. Context 생성
const CartContext = createContext();

// 2. Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart((prev) => [...prev, item]);

  const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Context 훅
export const useCart = () => useContext(CartContext);