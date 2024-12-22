import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
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
        <Route path={`/checkout/:id`} element={<CheckOut />} />
      </Routes>
      <Footer />
    </>
  );
}
