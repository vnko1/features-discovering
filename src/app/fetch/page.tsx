"use client";
import React from "react";

function Page() {
  const handleClick = async () => {
    const res = await fetch("/api");
    const data = await res.json();
    console.log("🚀 ~ handleClick ~ res:", data);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleClick}>FETCH</button>
    </main>
  );
}

export default Page;
