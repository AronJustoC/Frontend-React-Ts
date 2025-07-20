import { useDispatch } from "react-redux";
import { login } from "../../store/slices/auth.slice";
import { useLogin } from "../../services/auth.service";
import { Link } from "react-router";
import { Button, Box, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validators/login.schema";

export default function Login() {
  const dispatch = useDispatch();
  const { mutate } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const doLogin = async (data: { email: string; password: string }) => {
    mutate(data, {
      onSuccess: (res) => {
        dispatch(login({ token: res?.data?.token }));
      },
    });
  };

  return (
    <Box
      sx={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        height: "90vh",
        textAlign: "center",
      }}
      component="form"
      onSubmit={handleSubmit(doLogin)}
    >
      <Typography variant="h4">Iniciar sesión</Typography>
      <TextField
        {...register("email")}
        type="email"
        label="Email"
        variant="outlined"
      />
      {errors.email && (
        <Typography color="error">{errors.email.message}</Typography>
      )}
      <TextField
        {...register("password")}
        type="password"
        label="Contraseña"
        variant="outlined"
      />
      {errors.password && (
        <Typography color="error">{errors.password.message}</Typography>
      )}
      <Button variant="contained" type="submit">
        Iniciar sesión
      </Button>

      <Link to="/register">
        <Button variant="outlined" color="primary" sx={{ width: "100%" }}>
          Registrarse
        </Button>
      </Link>
    </Box>
  );
}
