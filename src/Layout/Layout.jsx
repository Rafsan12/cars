import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";

export default function Layout() {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
}
