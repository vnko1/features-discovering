import { revalidateTag } from "next/cache";

export async function POST() {
  await fetch("https://api.vercel.app/products/1", {
    method: "POST",
    body: JSON.stringify({ price: 10 }),
  });

  revalidateTag("products");

  return new Response("Success");
}
