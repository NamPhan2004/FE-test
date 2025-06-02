// src/GreetingForm.jsx
import React, { useState } from "react";

export default function GreetingForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleGreet = () => {
    if (!name.trim()) {
      setError("Vui lòng nhập tên!");
      setMessage("");
    } else {
      setMessage(`Chào ${name}!`);
      setError("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập tên của bạn"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-label="Tên"
      />
      <button onClick={handleGreet}>Chào</button>
      {error && (
        <p data-testid="error-msg" style={{ color: "red" }}>
          {error}
        </p>
      )}
      <p data-testid="greet-msg">{message}</p>
    </div>
  );
}
