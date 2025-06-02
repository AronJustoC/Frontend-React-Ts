import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/auth.slice";

export default function Home() {
  const dispatch = useDispatch();

  const doLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <h1>Bienvenido</h1>
      <button onClick={doLogout}>Logout</button>
    </>
  );
}
