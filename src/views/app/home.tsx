import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <h1 className="">Bienvenido</h1>
      <Link to={"/hello"}>Ir a hello</Link>
    </>
  );
}
