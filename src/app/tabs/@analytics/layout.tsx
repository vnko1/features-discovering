import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="flex gap-10">
        <Link href="/tabs">Page Start</Link>
        <Link href="/tabs/views">Page Views</Link>
        <Link href="/tabs/visitors">Visitors</Link>
      </nav>
      <div>{children}</div>
    </>
  );
}
