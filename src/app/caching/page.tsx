import { cookies } from "next/headers";
import React from "react";

function Page() {
  cookies(); // headers() noStore()
  return (
    <div className="p-10">
      <h1>App Router</h1>
      <p>{Date.now()}</p>
    </div>
  );
}

export default Page;
