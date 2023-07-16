import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { UserDataProvider } from "./contexts/UserDataContext";
import HomePage from "./pages/HomePage";
import DeliveryPage from "./pages/CheckoutFlow/DeliveryPage";
import PaymentPage from "./pages/CheckoutFlow/PaymentPage";

export default function App() {
  return (
    <>
      <UserDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </BrowserRouter>
      </UserDataProvider>
    </>
  );
}
