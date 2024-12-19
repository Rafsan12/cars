import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";

export default function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
