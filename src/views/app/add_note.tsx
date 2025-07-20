import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useCreateTodo } from "../../services/todo.service";
import { TextField, Typography, Button } from "@mui/material";
import { todoSchema } from "../../validators/notes.schema";
import { useNavigate } from "react-router";
import { Note } from "./Notes";

const Notes = () => {
  const navigate = useNavigate();
  const { mutate } = useCreateTodo();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(todoSchema),
  });
  const submitForm = (data: Note) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/notes");
      },
      onError: () => {
        alert("La nota no pudo ser creada");
      },
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-5">
        <TextField
          {...register("title")}
          type="text"
          label="Titulo"
          variant="outlined"
        />
        {errors.title && (
          <Typography color="error">{errors.title.message}</Typography>
        )}
        <TextField
          {...register("description")}
          type="text"
          label="Description"
          variant="outlined"
        />
        {errors.description && (
          <Typography color="error">{errors.description.message}</Typography>
        )}

        <Button type="submit" variant="contained">
          Agregar
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={() => navigate("/notes")}
        >
          Volver
        </Button>
      </form>
    </>
  );
};

export default Notes;
