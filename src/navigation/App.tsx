import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "../views/app/home";

export default function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
