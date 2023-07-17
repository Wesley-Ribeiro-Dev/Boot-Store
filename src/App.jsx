import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { UserDataProvider } from "./contexts/UserDataContext";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import { OrderDataProvider } from "./contexts/OrderDataContext";
import CheckoutPage from "./pages/CheckoutPage";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <UserDataProvider>
        <OrderDataProvider>
          <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<SignInPage />} />
              <Route path="/register" element={<SignUpPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </BrowserRouter>
        </OrderDataProvider>
      </UserDataProvider>
    </>
  );
}
