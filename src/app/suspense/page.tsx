// import { cookies } from "next/headers";
import { unstable_noStore } from "next/cache";
import { Suspense } from "react";

async function Loader() {
  //   cookies();
  unstable_noStore();
  const res = await fetch("https://api.vercel.app/blog");
  const posts = await res.json();

  return (
    <ul>
      {posts.map((post: { id: string; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <section>
      <h1>SUSPENSE</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Loader />
      </Suspense>
    </section>
  );
}
// export const revalidate = 0;
