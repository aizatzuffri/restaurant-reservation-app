import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ReservationsPage from "./pages/ReservationsPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}