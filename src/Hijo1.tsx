import type { Props } from "./Padre";
import Nieto from "./Nieto";

const Hijo1 = () => {
  return (
    <div style={{ border: "3px solid green" }}>
      <h1>Hijo1</h1>
      <Nieto />
    </div>
  );
};

export default Hijo1;
