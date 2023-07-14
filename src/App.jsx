import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import { UserDataProvider } from "./context/UserDataContext"
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"


export default function App() {

  return (
    <>
      <UserDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </UserDataProvider>
    </>
  )
}

