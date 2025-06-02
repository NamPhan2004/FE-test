import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 40 }}>
      <h1 data-testid="main-title">React Counter Demo</h1>
      <p data-testid="count-value">Giá trị: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={() => setCount(count - 1)}>Giảm</button>
    </div>
  );
}
