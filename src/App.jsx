/**
 * File App.jsx - Component gốc của ứng dụng
 * Đây là component chính, nơi bắt đầu của ứng dụng
 * Hiện tại chỉ render component Login
 */
import React from "react";
import Login from "./Login";
import "./reset.css";

export default function App() {
  return <Login />;
}
