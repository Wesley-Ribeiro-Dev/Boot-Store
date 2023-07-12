import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import { UserDataProvider } from "./context/UserDataContext"


export default function App() {

  return (
    <>
      <UserDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/register" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </UserDataProvider>
    </>
  )
}

