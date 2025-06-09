/**
 * File main.jsx - Điểm khởi đầu của ứng dụng React
 * File này khởi tạo ứng dụng React và render vào DOM
 * Sử dụng StrictMode để phát hiện các vấn đề tiềm ẩn trong quá trình phát triển
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App /> {/* ← code "xấu" nằm bên trong StrictMode */}
  </React.StrictMode>
);
