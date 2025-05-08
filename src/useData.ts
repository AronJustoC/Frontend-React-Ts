import { useState, useEffect } from "react";

//Create a custom hook that fetches data from a server
export default function useData() {
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function llamadaServer() {
      try {
        const result = await fetch("https://jsonplaceholder.typicode.com/todo");
        console.log({ result: result.ok });
        if (!result.ok) {
          throw new Error("Something went wrong");
        }
        const data = await result.json();

        setResult(data);
      } catch (error) {
        console.log(error);
        setError("Error al conectar con el servidor");
        setResult(undefined);
      } finally {
        setLoading(false);
      }
    }
    setTimeout(() => {
      llamadaServer();
    }, 3000);
  }, []);

  return {
    error,
    loading,
    data: result,
  };
}
