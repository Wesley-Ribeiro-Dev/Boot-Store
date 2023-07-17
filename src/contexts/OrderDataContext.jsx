import { useState, createContext } from "react";

export const OrderDataContext = createContext();

export const OrderDataProvider = ({ children }) => {
  const [itemList, setItemList] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalQuantity, setTotalQuantity] = useState(0);

  return (
    <OrderDataContext.Provider value={{ itemList, setItemList, totalPrice, setTotalPrice, totalQuantity, setTotalQuantity }}>
      {children}
    </OrderDataContext.Provider>
  )
}
