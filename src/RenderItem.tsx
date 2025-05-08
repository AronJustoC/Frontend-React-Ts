import { memo } from "react";
import { IClient } from "./App";

const RenderItem = ({ client }: { client: IClient }) => {
  console.log("re renderizado");
  return <ul>{client.name}</ul>;
};

export default memo(RenderItem);
