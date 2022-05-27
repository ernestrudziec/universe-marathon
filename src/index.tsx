import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./app/Root";

ReactDOM.createRoot(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
