import "./App.css";

import { useState } from "react";

export default function MyApp() {
  return (
    <div>
      <h1>Counter App</h1>
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div style={{ margin: "10px" }}>
      <button onClick={handleIncrement}>Add 1</button>
      <button onClick={handleDecrement}>Subtract 1</button>
      <p>Total {count} </p>
    </div>
  );
}
