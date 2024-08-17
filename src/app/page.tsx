import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/fetch"}>FETCH page</Link>
      <Link href={"/pay"}>PAY page</Link>
      <Link href={"/markdown"}>Markdown</Link>
      <Link href={"/animate"}>Animate</Link>
      <Link href={"/video"}>Video</Link>
      <Link href={"/customVideo"}>CVideo</Link>
      <Link href={"/reactPlayer"}>RPlayer</Link>
      {process.env.customKey}
      {process.env.url}
    </main>
  );
}
