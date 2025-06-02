import { Route } from "react-router";
import { Routes } from "react-router";
import Login from "../views/auth/login";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
