import { object, string, boolean } from "yup";

export const loginSchema = object({
  email: string().email("Formato invalido").required("Email es requerido"),
  password: string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Contraseña es requerida"),
  rememberMe: boolean().optional(),
});

export const registerSchema = object({
  email: string().email("Formato invalido").required("Email es requerido"),
  password: string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Contraseña es requerida"),
  name: string().required("Nombre es requerido"),
});
