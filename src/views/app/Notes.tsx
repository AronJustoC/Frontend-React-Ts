import { useNavigate } from "react-router";
import RenderNote from "../../components/RenderNote";
import { useGetAllTodosScroll } from "../../services/todo.service";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

export interface Note {
  _id?: string;
  title: string;
  description: string;
  done?: boolean;
}

const Notes = () => {
  const [currentPosition, setCurrentPosition] = useState(600);
  const navigate = useNavigate();
  const { data, isLoading, fetchNextPage } = useGetAllTodosScroll();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY, currentPosition);
      if (window.scrollY > currentPosition) {
        setCurrentPosition((prev) => prev + 600);
      }
    });
  }, [currentPosition, fetchNextPage]);

  return (
    <>
      {isLoading && <p>Cargando Elementos...</p>}
      <Button onClick={() => navigate("/notes/add")} variant="contained">
        Agregar Nota
      </Button>
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 justify-items-center">
        {data?.pages.map((el: { data: [] }) => {
          return el.data.map((el: Note) => (
            <RenderNote key={el._id} note={el} />
          ));
        })}
        {data?.pages.length === 0 && <h1>No tienes notas creada</h1>}
      </div>
    </>
  );
};

export default Notes;
