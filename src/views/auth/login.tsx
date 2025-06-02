import { useDispatch } from "react-redux";
import { login } from "../../store/slices/auth.slice";
import { useLogin } from "../../services/auth.service";

export default function Login() {
  const dispatch = useDispatch();
  const { mutate } = useLogin();

  const doLogin = async () => {
    mutate(
      {
        email: "aronchoque727@gmail.com",
        password: "123456",
      },
      {
        onSuccess: (data) => {
          dispatch(login({ token: data?.data?.token }));
        },
      },
    );
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={doLogin}>Iniciar sesión</button>
    </>
  );
}
