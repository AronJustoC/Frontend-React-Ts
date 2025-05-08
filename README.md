# Clases de react con Rodrigo

## Clase 01

### Instalar React [vite]

```bash
bun create vite
```

### Uso y comportamiento de Usememo

```tsx
import { useState, useMemo } from "react";

export interface IClient {
  name: string;
  products: number;
  price: number;
}

export default function Main() {
  const [client, setClient] = useState<IClient>({
    name: "Rodrigo",
    products: 5,
    price: 20,
  });
  const [contador, setContador] = useState(0);

  const sumaTotal = useMemo(() => {
    console.log("suma ejecutada");
    return client.products * client.price;
  }, [client]);

  const addElement = () => {
    const newData = { ...client };
    newData.products = newData.products + 1;
    setClient(newData);
  };

  return (
    <>
      Productos : {client.products}
      <br />
      Precio : {client.price}
      <br />
      Suma Total : {sumaTotal}
      <br />
      Contador: {contador}
      <br />
      <button onClick={addElement}> Agregar producto </button>
      <br />
      <button onClick={() => setContador((prev) => prev + 1)}>
        {" "}
        Incrementar{" "}
      </button>
    </>
  );
}
```

### Uso de global state para evitar el prop drilling

- Que es el prop drilling?
  - Es cuando un componente pasa un objeto a un componente hijo y el componente hijo
    modifica el objeto original.
  - Esto puede causar problemas de rendimiento y mantener el estado de la aplicación.
