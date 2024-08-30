import React from "react";
import { getProduct } from "../../lib/db";

async function PQ() {
  const data = await getProduct(3);
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
