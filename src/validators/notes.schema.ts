import { object, string } from "yup";

export const todoSchema = object({
  title: string().required("Titulo es requerido"),
  description: string().required("Ingrese la description"),
});
