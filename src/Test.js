import { useState } from "react";

export default function Test() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase {count}</button>
    </div>
  );
}
