import { createContext, useState, useContext } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu] = useState([
    { id: 1, name: "아메리카노", price: 4000 },
    { id: 2, name: "카페라떼", price: 4500 },
    { id: 3, name: "카푸치노", price: 4500 },
    { id: 4, name: "바닐라라떼", price: 5000 },
  ]);

  return <MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>;
};

export const useMenu = () => useContext(MenuContext);