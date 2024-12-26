import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./pages/Authentication/Login";
import PrivateRoutes from "./pages/Authentication/PrivateRoutes";
import Register from "./pages/Authentication/Register";
import Bookings from "./pages/Bookings/Bookings";
import CheckOut from "./pages/CheckOut/CheckOut";
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path={`/checkout/:id`}
          element={
            <PrivateRoutes>
              <CheckOut />
            </PrivateRoutes>
          }
        />
        <Route
          path={`/bookings`}
          element={
            <PrivateRoutes>
              <Bookings />
            </PrivateRoutes>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
