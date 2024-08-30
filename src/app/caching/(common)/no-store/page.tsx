import { Suspense } from "react";

async function PQ() {
  const res = await fetch("https://api.vercel.app/products/1");
  const data = await res.json();

  return <p>{data.stock}</p>;
}

function Page() {
  return (
    <section>
      <h1>Product</h1>

      <Suspense fallback={null}>
        <PQ />
      </Suspense>
    </section>
  );
}

export default Page;
