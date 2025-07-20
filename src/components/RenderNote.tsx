import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";
import { useRemoveTodo, useUpdateTodo } from "../services/todo.service";
import { Note } from "../views/app/Notes";
import { useQueryClient } from "@tanstack/react-query";

export default function RenderNote({ note }: { note: Note }) {
  const queryClient = useQueryClient();
  const { mutate } = useRemoveTodo();
  const { mutate: updateTodo } = useUpdateTodo();

  const DoRemoveTodo = () => {
    if (!note._id) {
      alert("Id de la nota no definido");
      return;
    }
    mutate(note._id, {
      onSuccess: () => {
        queryClient.refetchQueries({ queryKey: ["getAllTodosScroll"] });
        alert("La nota ha sido eliminada");
      },
      onError: () => {
        alert("Ha ocurrido un error al eliminar");
      },
    });
  };

  const DoUpdateTodo = () => {
    if (!note._id) return;
    updateTodo(
      { ...note, done: !note.done },
      {
        onSuccess: () => {
          queryClient.refetchQueries({ queryKey: ["getAllTodosScroll"] });
        },
        onError: () => {
          alert("Ha ocurrido un error al actualizar");
        },
      },
    );
  };

  return (
    <Card sx={{ width: "100%", maxWidth: 345 }}>
      <CardActionArea onClick={DoUpdateTodo}>
        <CardContent>
          <Typography
            className={note.done ? "line-through" : ""}
            gutterBottom
            variant="h5"
            component="div"
          >
            {note.title}
          </Typography>
          <Typography
            className={note.done ? "line-through" : ""}
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            {note.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={DoRemoveTodo}>
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
}
