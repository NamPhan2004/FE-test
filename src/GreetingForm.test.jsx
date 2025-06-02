// src/GreetingForm.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GreetingForm from "./GreetingForm";

describe("GreetingForm", () => {
  test("render input, button, and empty message", () => {
    render(<GreetingForm />);
    expect(screen.getByPlaceholderText("Nhập tên của bạn")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Chào" })).toBeInTheDocument();
    expect(screen.getByTestId("greet-msg").textContent).toBe("");
  });

  test("hiển thị lời chào đúng khi nhập tên và click", async () => {
    render(<GreetingForm />);
    const input = screen.getByPlaceholderText("Nhập tên của bạn");
    const button = screen.getByRole("button", { name: "Chào" });

    // Giả lập nhập tên
    await userEvent.type(input, "ChatGPT");

    // Giả lập click
    await userEvent.click(button);

    // Kiểm tra hiển thị lời chào đúng
    expect(screen.getByTestId("greet-msg")).toHaveTextContent("Chào ChatGPT!");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });

  test("cảnh báo khi input rỗng", async () => {
    render(<GreetingForm />);
    const button = screen.getByRole("button", { name: "Chào" });

    await userEvent.click(button);

    expect(screen.getByTestId("error-msg")).toHaveTextContent(
      "Vui lòng nhập tên!"
    );
    expect(screen.getByTestId("greet-msg").textContent).toBe("");
  });
});
