// src/App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  test("hiển thị tiêu đề và giá trị ban đầu", () => {
    render(<App />);
    expect(screen.getByText("React Counter Demo")).toBeInTheDocument();
    expect(screen.getByTestId("count-value")).toHaveTextContent("Giá trị: 0");
  });

  test("tăng giá trị khi bấm nút Tăng", async () => {
    render(<App />);
    const count = screen.getByTestId("count-value");
    const tang = screen.getByText("Tăng");
    await userEvent.click(tang);
    expect(count).toHaveTextContent("Giá trị: 1");
  });

  test("giảm giá trị khi bấm nút Giảm", async () => {
    render(<App />);
    const count = screen.getByTestId("count-value");
    const giam = screen.getByText("Giảm");
    await userEvent.click(giam);
    expect(count).toHaveTextContent("Giá trị: -1");
  });
});
