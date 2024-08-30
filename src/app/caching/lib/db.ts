import { unstable_cache } from "next/cache";

export const getProduct = unstable_cache(
  async (id: number | string) => {
    const res = await fetch("https://api.vercel.app/products/" + id);

    return res.json();
  },
  ["products"],
  { tags: ["products"], revalidate: 60 }
);
