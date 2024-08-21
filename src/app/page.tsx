import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-3">
        <Link href={"/fetch"}>FETCH page</Link>
        <Link href={"/pay"}>PAY page</Link>
        <Link href={"/markdown"}>Markdown</Link>
        <Link href={"/animate"}>Animate</Link>
        <Link href={"/video"}>Video</Link>
        <Link href={"/customVideo"}>CVideo</Link>
        <Link href={"/reactPlayer"}>RPlayer</Link>
        <Link href={"/nextVideo"}>NPlayer</Link>
        <Link href={"/slider"}>Slider</Link>
        <Link href={"/ratio"}>Ratio</Link>
        <Link href={"/text"}>Text</Link>
      </div>
      {process.env.customKey}
      {process.env.url}
    </main>
  );
}
