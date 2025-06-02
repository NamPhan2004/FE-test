// main.jsx (Vite) hoặc index.js (CRA)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App /> {/* ← code “xấu” nằm bên trong StrictMode */}
  </React.StrictMode>
);
