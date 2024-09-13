import { useState } from "preact/hooks";

export default function Section() {
  const [count, setCount] = useState(0);

  return (
    <div class="container h-screen flex items-center justify-center gap-4">
      <button
        class="btn btn-sm btn-circle btn-outline no-animation"
        onClick={() => setCount(count - 1)}
      >
        <span>-</span>
      </button>
      <span>{count}</span>
      <button
        class="btn btn-sm btn-circle btn-outline no-animation"
        onClick={() => setCount(count + 1)}
      >
        <span>+</span>
      </button>
    </div>
  );
}