import { useContext } from "react";
import { OrderDataContext } from "../contexts/OrderDataContext";

export default function useOrder() {
  return useContext(OrderDataContext);
}