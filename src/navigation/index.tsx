import { useSelector } from "react-redux";
import { selectToken } from "../store/slices/auth.slice.ts";
import AppRoutes from "./App";
import AuthRoutes from "./Auth";

export default function Navigation() {
  const token = useSelector(selectToken);
  if (token) {
    return <AppRoutes />;
  }
  return <AuthRoutes />;
}
