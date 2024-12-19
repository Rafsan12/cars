import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Home />
      <Outlet />
      <Footer />
    </>
  );
}
