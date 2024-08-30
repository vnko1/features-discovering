import { unstable_noStore } from "next/cache";
import React from "react";

async function PQ() {
  unstable_noStore();
  const res = await fetch("https://api.vercel.app/products/1", {
    // next: { revalidate: 1 },
  });
  const data = await res.json();

  return <p>{data.stock}</p>;
}

function Page() {
  return (
    <section>
      <h1>Product</h1>
      <PQ />
    </section>
  );
}

export default Page;
