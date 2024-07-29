"use client";
import { useState } from "react";

const Pay = () => {
  const [count, setCount] = useState(0);

  const onClick = async () => {
    setCount(count + 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={onClick}>PAY</button>
      <p>Count: {count}</p>
    </main>
  );
};

export default Pay;
