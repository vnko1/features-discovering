import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="flex gap-10 mb-10">
        <Link href={"/slots"}>First</Link>
        <Link href={"/slots/sec"}>Second</Link>
        <Link href={"/slots/third"}>Third</Link>
      </nav>
      <div className="mb-10 text-center">{children}</div>
    </>
  );
}
