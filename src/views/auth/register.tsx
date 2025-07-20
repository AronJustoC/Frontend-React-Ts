import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { registerSchema } from "../../validators/login.schema";
import { useRegister } from "../../services/auth.service";

export default function Register() {
  const navigate = useNavigate();
  const { mutate } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const doRegister = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    mutate(data, {
      onSuccess: () => {
        alert("Tu cuenta ha sido creada exitosamente");
        navigate("/");
      },
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "90vh",
        alignItems: "center",

        justifyContent: "center",
        gap: 2,
      }}
      component="form"
      onSubmit={handleSubmit(doRegister)}
    >
      <Typography variant="h4">Registrarse</Typography>
      <TextField {...register("name")} label="Nombre" variant="outlined" />
      {errors.name && (
        <Typography color="error">{errors.name.message}</Typography>
      )}

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
        Registrarse
      </Button>

      <Link to="/">
        <Button variant="outlined" color="primary">
          Iniciar sesión
        </Button>
      </Link>
    </Box>
  );
}
