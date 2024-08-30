import { getProduct } from "@/app/caching/lib/db";
import React from "react";

async function Page({ params }: { params: { id: string } }) {
  const data = await getProduct(params.id);
  const { name, price } = data;

  return (
    <div className="p-10">
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
}

export default Page;
